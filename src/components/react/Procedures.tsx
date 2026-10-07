import { useState } from 'react';

type Item = { name: string; text: string; image: string };

export default function Procedures({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(0);
  const canHover = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

  return (
    <ul className="flex flex-col gap-3 lg:h-[34rem] lg:flex-row lg:gap-4">
      {items.map((p, i) => {
        const active = open === i;
        return (
          <li
            key={p.name}
            onMouseEnter={() => canHover() && setOpen(i)}
            className={`relative overflow-hidden rounded-3xl transition-[flex-grow,height] duration-[800ms] ease-[cubic-bezier(.2,.7,.2,1)] lg:h-auto lg:basis-0 ${
              active ? 'h-80 lg:grow-[6]' : 'h-24 lg:grow-[1]'
            }`}
          >
            <button
              type="button"
              aria-expanded={active}
              onClick={() => setOpen(i)}
              onFocus={() => setOpen(i)}
              className="absolute inset-0 block h-full w-full text-left"
            >
              <img
                src={p.image}
                alt=""
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out ${active ? 'scale-100' : 'scale-125'}`}
              />
              <span className={`absolute inset-0 transition-colors duration-700 ${active ? 'bg-gradient-to-t from-abyss/95 via-abyss/35 to-abyss/10' : 'bg-abyss/70'}`} />

              {/* collapsed label (desktop: vertical text) */}
              <span
                className={`absolute left-6 top-1/2 -translate-y-1/2 font-heading text-xl font-light text-ivory transition-opacity duration-500 lg:bottom-8 lg:left-1/2 lg:top-auto lg:-translate-x-1/2 lg:translate-y-0 lg:text-2xl lg:[writing-mode:vertical-rl] lg:rotate-180 ${
                  active ? 'pointer-events-none opacity-0' : 'opacity-100'
                }`}
              >
                {p.name}
              </span>

              {/* open content */}
              <span
                className={`absolute inset-x-0 bottom-0 block p-6 transition-all duration-700 md:p-9 ${
                  active ? 'translate-y-0 opacity-100 delay-200' : 'pointer-events-none translate-y-6 opacity-0'
                }`}
              >
                <span className="block font-heading text-2xl font-normal text-ivory md:text-4xl">{p.name}</span>
                <span className="mt-3 block max-w-md text-ivory/80 md:text-lg">{p.text}</span>
              </span>

              <span
                className={`absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-gold/60 transition-all duration-500 ${
                  active ? 'bg-gold text-abyss' : 'text-gold lg:opacity-0'
                }`}
                aria-hidden="true"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d={active ? 'M5 12h14' : 'M12 5v14M5 12h14'} /></svg>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
