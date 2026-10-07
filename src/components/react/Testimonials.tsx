import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type T = { quote: string; name: string };

const MAX_CARD = 360; // max card width in px
const GAP = 28;

const initials = (n: string) => n.replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars" role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-5 w-5 text-gold" fill="currentColor" aria-hidden="true">
          <path d="m10 1.5 2.5 5.4 5.9.7-4.4 4 1.2 5.8L10 14.5 4.8 17.4 6 11.6l-4.4-4 5.9-.7L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ items }: { items: T[] }) {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(2);
  const [card, setCard] = useState(MAX_CARD);
  const box = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const measure = () => {
      const c = Math.min(MAX_CARD, el.clientWidth);
      setCard(c);
      setVisible(Math.max(1, Math.floor((el.clientWidth + GAP) / (c + GAP))));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const max = Math.max(0, items.length - visible);
  const index = Math.min(i, max);
  const go = (n: number) => setI(Math.min(max, Math.max(0, n)));

  return (
    <div className="grid items-center gap-12 lg:grid-cols-12">
      {/* left: title + arrows + progress */}
      <div className="min-w-0 lg:col-span-4">
        <svg viewBox="0 0 48 40" className="h-14 w-14 text-gold" fill="currentColor" aria-hidden="true">
          <path d="M0 40V22C0 9 7 2 20 0v8C13 10 11 14 11 18h9v22H0Zm28 0V22C28 9 35 2 48 0v8c-7 2-9 6-9 10h9v22H28Z" />
        </svg>
        <h3 className="mt-6 max-w-[14rem] font-heading text-3xl font-normal leading-tight text-ivory md:text-4xl">What our patients are saying</h3>

        <div className="mt-10 flex items-center gap-5">
          <button type="button" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous review"
            className="group grid h-12 w-12 place-items-center rounded-full border border-gold/50 transition-all duration-500 enabled:hover:bg-gold disabled:opacity-35">
            <svg className="h-5 w-5 text-gold transition-colors group-enabled:group-hover:text-abyss" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M20 12H4m6-6-6 6 6 6" /></svg>
          </button>
          <div className="h-px w-28 bg-ivory/20" aria-hidden="true">
            <motion.div className="h-px origin-left bg-gold" animate={{ width: `${((index + 1) / (max + 1)) * 100}%` }} transition={{ duration: reduce ? 0 : 0.6 }} />
          </div>
          <button type="button" onClick={() => go(index + 1)} disabled={index === max} aria-label="Next review"
            className="group grid h-12 w-12 place-items-center rounded-full border border-gold/50 transition-all duration-500 enabled:hover:bg-gold disabled:opacity-35">
            <svg className="h-5 w-5 text-gold transition-colors group-enabled:group-hover:text-abyss" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
          </button>
        </div>
      </div>

      {/* right: speech-bubble cards */}
      <div className="min-w-0 lg:col-span-8">
        <div ref={box} className="overflow-hidden py-4 [mask-image:linear-gradient(to_right,#000_94%,transparent)]" aria-live="polite">
          <motion.ul
            className="flex"
            style={{ gap: GAP }}
            animate={{ x: -index * (card + GAP) }}
            transition={{ duration: reduce ? 0 : 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {items.map((t) => (
              <li key={t.name} style={{ width: card }} className="group shrink-0">
                <div className="relative flex h-60 flex-col justify-between rounded-3xl bg-white p-7 text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,.6)] transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  <p className="text-lg leading-relaxed text-ink/85">{t.quote}</p>
                  <Stars />
                  <span className="absolute -bottom-3 left-8 h-4 w-6 bg-white [clip-path:polygon(0_0,100%_0,0_100%)]" aria-hidden="true" />
                </div>
                <div className="mt-6 flex items-center gap-3 pl-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gold font-heading text-sm font-medium text-abyss" aria-hidden="true">{initials(t.name)}</span>
                  <div>
                    <p className="font-heading text-base font-medium text-ivory">{t.name}</p>
                    <p className="text-sm text-ivory/55">Patient review</p>
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
