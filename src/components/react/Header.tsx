import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { menu, practice } from '../../data/content';

type Mega = (typeof menu)[number] & { key: string; items: { name: string; text: string; href: string; thumb: string | null }[] };
const isMega = (m: (typeof menu)[number]): m is Mega => 'key' in m;

const Arrow = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
);
const Chevron = ({ open }: { open: boolean }) => (
  <svg className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
);

export default function Header() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [group, setGroup] = useState<string | null>(null);
  const timer = useRef<number | undefined>(undefined);
  const headerRef = useRef<HTMLElement>(null);

  const cancel = () => window.clearTimeout(timer.current);
  const openNow = (k: string) => { cancel(); setOpenKey(k); };
  const closeSoon = () => { cancel(); timer.current = window.setTimeout(() => setOpenKey(null), 160); };
  const closeNow = () => { cancel(); setOpenKey(null); };
  const canHover = () => window.matchMedia('(hover: hover)').matches;

  useEffect(() => () => cancel(), []);

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      const k = openKey;
      closeNow();
      setMobile(false);
      if (k) headerRef.current?.querySelector<HTMLElement>(`[data-trigger="${k}"]`)?.focus();
    }
  };

  const triggerKey = (e: KeyboardEvent, k: string) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpenKey(k);
      window.setTimeout(() => headerRef.current?.querySelector<HTMLElement>(`#mega-${k} a`)?.focus(), 50);
    }
  };

  return (
    <>
      <div
        className={`fixed inset-x-0 bottom-0 top-[4.5rem] z-40 bg-abyss/55 backdrop-blur-[3px] transition-opacity duration-300 ${openKey ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onMouseEnter={closeNow}
        onClick={closeNow}
        aria-hidden="true"
      />
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-50 border-b border-gold/15 bg-abyss/95 backdrop-blur-xl"
        onMouseEnter={cancel}
        onMouseLeave={() => canHover() && closeSoon()}
        onKeyDown={onKey}
        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) closeNow(); }}
      >
        <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
          <a href="/" aria-label="Home" className="shrink-0">
            <img src="/images/Logo.png" alt={practice.name} width={450} height={107} className="h-11 w-auto" />
          </a>

          {/* Desktop menu */}
          <nav aria-label="Main" className="hidden items-center gap-0 whitespace-nowrap xl:flex 2xl:gap-1">
            {menu.map((m) =>
              isMega(m) ? (
                <button
                  key={m.key}
                  type="button"
                  data-trigger={m.key}
                  aria-expanded={openKey === m.key}
                  aria-controls={`mega-${m.key}`}
                  onMouseEnter={() => canHover() && openNow(m.key)}
                  onClick={() => (openKey === m.key ? closeNow() : openNow(m.key))}
                  onKeyDown={(e) => triggerKey(e, m.key)}
                  className={`ulink-btn flex items-center gap-1.5 rounded-full px-3 py-2 font-heading text-[.92rem] 2xl:px-4 2xl:text-[.95rem] transition-colors ${openKey === m.key ? 'text-gold-soft' : 'text-ivory/80 hover:text-gold-soft'}`}
                >
                  {m.label}
                  <Chevron open={openKey === m.key} />
                </button>
              ) : (
                <a
                  key={m.label}
                  href={m.href}
                  onMouseEnter={() => canHover() && closeNow()}
                  className="rounded-full px-3 py-2 font-heading text-[.92rem] 2xl:px-4 2xl:text-[.95rem] text-ivory/80 transition-colors hover:text-gold-soft"
                >
                  {m.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a href={practice.phoneHref} className="btn btn-line hidden whitespace-nowrap !py-2.5 sm:inline-flex xl:!px-5 xl:text-[.92rem]">{practice.phone}</a>
            <button
              type="button"
              aria-expanded={mobile}
              aria-controls="mobile-menu"
              aria-label={mobile ? 'Close menu' : 'Open menu'}
              onClick={() => { setMobile((v) => !v); closeNow(); }}
              className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 xl:hidden"
            >
              <span className="relative block h-3 w-5">
                <span className={`absolute left-0 top-0 h-px w-full bg-gold transition-transform duration-300 ${mobile ? 'translate-y-[6px] rotate-45' : ''}`} />
                <span className={`absolute bottom-0 left-0 h-px w-full bg-gold transition-transform duration-300 ${mobile ? '-translate-y-[5px] -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>

        {/* Mega panels (children of the header, so the pointer never leaves it) */}
        <div className="hidden xl:block">
          {menu.filter(isMega).map((m) => {
            const open = openKey === m.key;
            return (
              <div
                key={m.key}
                id={`mega-${m.key}`}
                role="region"
                aria-label={m.title}
                className={`absolute inset-x-0 top-full border-b border-gold/20 bg-abyss/95 shadow-[0_40px_80px_-30px_rgba(0,0,0,.7)] backdrop-blur-xl transition-[opacity,transform,visibility] duration-300 ease-out ${
                  open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
                }`}
              >
                <div className="wrap grid gap-10 py-10 xl:grid-cols-12">
                  <div className="xl:col-span-3">
                    <h3 className="font-heading text-3xl font-light text-ivory">{m.title}</h3>
                    <p className="mt-3 max-w-xs text-ivory/65">{m.intro}</p>
                    {m.all && (
                      <a href={m.all.href} onClick={closeNow} className="ulink mt-6 inline-flex items-center gap-2 font-heading text-gold-soft">
                        {m.all.label}
                        <Arrow className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <ul className={`grid content-start gap-x-4 gap-y-1 xl:col-span-6 ${m.items.length > 4 ? 'grid-cols-2' : 'grid-cols-2'}`}>
                    {m.items.map((it, i) => (
                      <li
                        key={it.name}
                        className={`transition-all duration-500 ease-out ${open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
                        style={{ transitionDelay: open ? `${90 + i * 45}ms` : '0ms' }}
                      >
                        <a href={it.href} onClick={closeNow} className="group flex items-center gap-4 rounded-2xl p-3 transition-colors duration-300 hover:bg-white/[.06] focus-visible:bg-white/[.06]">
                          {it.thumb ? (
                            <img src={it.thumb} alt="" width={56} height={56} loading="lazy" className="h-14 w-14 shrink-0 rounded-xl object-cover transition-transform duration-500 group-hover:scale-105" />
                          ) : (
                            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-abyss">
                              <Arrow className="h-5 w-5" />
                            </span>
                          )}
                          <span className="min-w-0">
                            <span className="block font-heading text-[1.05rem] text-ivory transition-colors duration-300 group-hover:text-gold-soft">{it.name}</span>
                            <span className="block truncate text-sm text-ivory/55">{it.text}</span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`rounded-3xl border border-gold/25 bg-white/[.03] p-7 transition-all duration-500 ease-out xl:col-span-3 ${open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
                    style={{ transitionDelay: open ? '200ms' : '0ms' }}
                  >
                    <img src="/images/Dr-Robert-M-Narvaez.webp" alt="" width={64} height={64} className="h-16 w-16 rounded-full object-cover object-top ring-1 ring-gold" />
                    <p className="mt-5 font-heading text-xl text-ivory">{m.aside.title}</p>
                    <p className="mt-2 text-sm text-ivory/65">{m.aside.text}</p>
                    <a href={practice.phoneHref} className="mt-5 block font-heading text-lg text-gold-soft">{practice.phone}</a>
                    <a href="/contact/" onClick={closeNow} className="btn-shiny mt-5 !px-5 !py-2.5 text-sm"><span>Book an appointment</span></a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className={`grid transition-[grid-template-rows] duration-500 xl:hidden ${mobile ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <nav aria-label="Mobile" className="overflow-hidden">
            <div className="wrap max-h-[calc(100vh-4.5rem)] overflow-y-auto pb-6 pt-2">
              {menu.map((m) =>
                isMega(m) ? (
                  <div key={m.key} className="border-b border-gold/10">
                    <button
                      type="button"
                      aria-expanded={group === m.key}
                      onClick={() => setGroup(group === m.key ? null : m.key)}
                      className="flex w-full items-center justify-between py-3 font-heading text-xl text-ivory/90"
                    >
                      {m.label}
                      <Chevron open={group === m.key} />
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-400 ${group === m.key ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <ul className="overflow-hidden">
                        {m.items.map((it) => (
                          <li key={it.name}>
                            <a href={it.href} onClick={() => setMobile(false)} className="block py-2.5 pl-4 text-ivory/70 transition-colors hover:text-gold-soft">{it.name}</a>
                          </li>
                        ))}
                        <li className="h-2" />
                      </ul>
                    </div>
                  </div>
                ) : (
                  <a key={m.label} href={m.href} onClick={() => setMobile(false)} className="block border-b border-gold/10 py-3 font-heading text-xl text-ivory/90">{m.label}</a>
                )
              )}
              <a href={practice.phoneHref} className="btn btn-gold mt-5 w-full justify-center">Call {practice.phone}</a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
