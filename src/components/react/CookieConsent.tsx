import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const KEY = 'dldsa-cookie-consent';
type Choice = { necessary: true; analytics: boolean; marketing: boolean; savedAt: string };

function read(): Choice | null {
  try {
    const v = localStorage.getItem(KEY);
    return v ? (JSON.parse(v) as Choice) : null;
  } catch {
    return null;
  }
}
function write(c: Choice) {
  try {
    localStorage.setItem(KEY, JSON.stringify(c));
  } catch {
    /* storage can be blocked: the banner will just show again next visit */
  }
  window.dispatchEvent(new CustomEvent('cookie-consent', { detail: c }));
}

export default function CookieConsent() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const first = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const saved = read();
    if (saved) { setAnalytics(saved.analytics); setMarketing(saved.marketing); }
    else { const t = setTimeout(() => setOpen(true), 1200); return () => clearTimeout(t); }
  }, []);

  useEffect(() => {
    const reopen = () => {
      const saved = read();
      setAnalytics(saved?.analytics ?? false);
      setMarketing(saved?.marketing ?? false);
      setDetails(true);
      setOpen(true);
    };
    window.addEventListener('open-cookie-settings', reopen);
    return () => window.removeEventListener('open-cookie-settings', reopen);
  }, []);

  useEffect(() => {
    if (open) first.current?.focus({ preventScroll: true });
  }, [open, details]);

  const save = (a: boolean, m: boolean) => {
    write({ necessary: true, analytics: a, marketing: m, savedAt: new Date().toISOString() });
    setOpen(false);
    setDetails(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-text"
          onKeyDown={(e) => { if (e.key === 'Escape') save(analytics, marketing); }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
          className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] left-4 right-4 z-[90] lg:bottom-4 max-h-[calc(100vh-8rem)] lg:max-h-[calc(100vh-2rem)] overflow-y-auto rounded-3xl border border-gold/40 bg-abyss/95 p-6 text-ivory shadow-[0_30px_80px_-20px_rgba(0,0,0,.7)] backdrop-blur-xl sm:left-6 sm:right-auto sm:max-w-md sm:p-7"
        >
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-full border border-gold/60 text-gold">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a9 9 0 1 0 9 9 4 4 0 0 1-4-4 4 4 0 0 1-5-5Z" />
                <circle cx="9" cy="10" r="1" /><circle cx="14" cy="15" r="1" /><circle cx="8.5" cy="14.5" r=".6" />
              </svg>
            </span>
            <h2 id="cookie-title" className="font-heading text-xl">Your privacy choices</h2>
          </div>

          <p id="cookie-text" className="mt-4 text-[0.95rem] leading-relaxed text-ivory/75">
            We use cookies to make this site work. With your OK, we may also use them to see how the site is used. You are in control.{' '}
            <a href="/privacy-policy/" className="ulink text-gold-soft">Read our Privacy Policy</a>.
          </p>

          <AnimatePresence initial={false}>
            {details && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-5 space-y-3 overflow-hidden"
              >
                <Row title="Necessary" text="Keep the site working and remember this choice." checked disabled />
                <Row title="Analytics" text="Help us learn which pages are useful." checked={analytics} onChange={setAnalytics} />
                <Row title="Marketing" text="Used for ads and social media." checked={marketing} onChange={setMarketing} />
              </motion.ul>
            )}
          </AnimatePresence>

          <div className="mt-6 flex flex-wrap gap-3">
            {details ? (
              <button ref={first} type="button" onClick={() => save(analytics, marketing)} className="btn btn-gold !px-5 !py-2.5 text-sm">Save my choices</button>
            ) : (
              <button ref={first} type="button" onClick={() => save(true, true)} className="btn btn-gold !px-5 !py-2.5 text-sm">Accept all</button>
            )}
            <button type="button" onClick={() => save(false, false)} className="btn btn-line !px-5 !py-2.5 text-sm">Reject optional</button>
            {!details && (
              <button type="button" onClick={() => setDetails(true)} aria-expanded={details} className="ulink px-2 py-2.5 font-heading text-sm text-ivory/80 hover:text-ivory">Choose</button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Row({ title, text, checked, disabled, onChange }: { title: string; text: string; checked: boolean; disabled?: boolean; onChange?: (v: boolean) => void }) {
  const id = `cc-${title.toLowerCase()}`;
  return (
    <li className="flex items-start justify-between gap-4 rounded-2xl border border-gold/20 bg-white/[.03] p-4">
      <div>
        <label htmlFor={id} className="font-heading">{title}</label>
        <p className="mt-1 text-sm text-ivory/65">{text}</p>
      </div>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative mt-1 h-7 w-12 shrink-0 rounded-full border transition-colors duration-300 disabled:opacity-60 ${checked ? 'border-gold bg-gold' : 'border-ivory/30 bg-transparent'}`}
      >
        <span className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full transition-all duration-300 ${checked ? 'left-[1.45rem] bg-abyss' : 'left-1 bg-ivory/70'}`} />
        <span className="sr-only">{checked ? 'On' : 'Off'}</span>
      </button>
    </li>
  );
}
