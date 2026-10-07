import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

type Item = { name: string; text: string; image: string };

type Props = {
  items: Item[];
  initial?: number;
  aspect?: string;
  moreLabel: string;
  lessLabel: string;
  linkPrefix: string;
  base?: string;
};

export default function ImageGrid({ items, initial = 6, aspect = 'aspect-[4/3]', moreLabel, lessLabel, linkPrefix, base }: Props) {
  const [all, setAll] = useState(false);
  const reduce = useReducedMotion();
  const visible = all ? items : items.slice(0, initial);
  const hasMore = items.length > initial;

  return (
    <div>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false}>
          {visible.map((it, i) => (
            <motion.li
              key={it.name}
              layout={!reduce}
              initial={i < initial ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: reduce ? 0 : 0.6, delay: reduce || i < initial ? 0 : (i - initial) * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <a
                href={base ? `${base}${it.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}/` : '/contact/'}
                aria-label={`${linkPrefix} ${it.name}`}
                className={`group relative block overflow-hidden rounded-3xl bg-midnight ring-1 ring-gold/0 transition-shadow duration-500 hover:ring-gold/70 focus-visible:ring-gold ${aspect}`}
              >
                <img
                  src={it.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss/95 via-abyss/55 to-abyss/10 transition-opacity duration-500 group-hover:from-abyss/95 group-hover:via-abyss/60" />

                <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-gold/60 bg-abyss/30 backdrop-blur transition-all duration-500 group-hover:bg-gold">
                  <svg className="h-4 w-4 -rotate-45 text-gold transition-all duration-500 group-hover:rotate-0 group-hover:text-abyss" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <h3 className="font-heading text-2xl font-normal text-ivory md:text-[1.7rem]">{it.name}</h3>
                  <p className="mt-2 max-w-xs text-[.97rem] text-ivory/80 transition-all duration-500 md:max-h-0 md:translate-y-2 md:opacity-0 md:group-hover:max-h-24 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:max-h-24 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
                    {it.text}
                  </p>
                </div>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button type="button" onClick={() => setAll((v) => !v)} aria-expanded={all} className="btn btn-line">
            {all ? lessLabel : moreLabel}
            <svg className={`h-4 w-4 transition-transform duration-500 ${all ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
          </button>
        </div>
      )}
    </div>
  );
}
