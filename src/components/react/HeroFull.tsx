import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';

type Props = { image: string; alt: string };

const lines = ['Digestive and', 'liver care,', 'with time for you.'];
const ease = [0.2, 0.7, 0.2, 1] as const;

export default function HeroFull({ image, alt }: Props) {
  const reduce = useReducedMotion();
  const box = useRef<HTMLDivElement>(null);
  const [wide, setWide] = useState(true);
  useEffect(() => {
    const q = matchMedia('(min-width: 1024px)');
    const f = () => setWide(q.matches);
    f(); q.addEventListener('change', f);
    return () => q.removeEventListener('change', f);
  }, []);
  const zoom = wide ? 1.4 : 1.1;
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 20 });
  const sy = useSpring(my, { stiffness: 70, damping: 20 });
  // the photo drifts a little one way, the text layer drifts the other way
  const imgX = useTransform(sx, (v) => v * -14);
  const imgY = useTransform(sy, (v) => v * -10);
  const txtX = useTransform(sx, (v) => v * 10);
  const txtY = useTransform(sy, (v) => v * 7);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || reduce) return;
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLitMove = (e: React.PointerEvent<HTMLHeadingElement>) => {
    if (e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--fx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--fy', `${e.clientY - r.top}px`);
  };

  const t = (d: number) => (reduce ? { duration: 0 } : { duration: 1.1, delay: d, ease });

  return (
    <div ref={box} onPointerMove={onMove} className="absolute inset-0">
      {/* Photo: mirrored so the family sits on the right, away from the words */}
      <motion.div className="absolute -inset-6" style={reduce ? undefined : { x: imgX, y: imgY }}>
        <div className="h-full w-full -scale-x-100">
          <motion.img
            src={image}
            alt={alt}
            width={1600}
            height={1067}
            loading="eager"
            className="h-full w-full object-cover object-[64%_70%] lg:object-[50%_70%]"
            style={{ transformOrigin: '50% 100%' }}
            initial={{ scale: reduce ? zoom : zoom + 0.15 }}
            animate={{ scale: zoom }}
            transition={reduce ? { duration: 0 } : { duration: 2.8, ease }}
          />
        </div>
      </motion.div>

      {/* Soft navy tint so the words stay easy to read */}
      <div className="absolute inset-0 bg-gradient-to-r from-abyss/85 via-abyss/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-abyss/90 via-transparent to-abyss/30" />

      {/* Text layer */}
      <motion.div
        className="wrap relative flex h-full flex-col justify-start pb-52 pt-28 lg:justify-center lg:pb-48"
        style={reduce ? undefined : { x: txtX, y: txtY }}
      >
        <motion.p
          className="font-heading text-sm uppercase tracking-[.22em] text-gold"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.3)}
        >
          Gastroenterology · San Antonio, TX
        </motion.p>

        <div className="hero-follow relative mt-6 max-w-4xl" onPointerMove={onLitMove}>
          <h1 className="text-balance font-heading text-[clamp(2.7rem,6.4vw,5.8rem)] font-light leading-[1.02] text-ivory">
            {lines.map((l, i) => (
              <span key={l} className="block overflow-hidden pb-[.1em]">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={t(0.5 + i * 0.14)}
                >
                  {l}
                </motion.span>
              </span>
            ))}
          </h1>
          {/* Same words again, lit in aqua where the pointer is */}
          <div aria-hidden="true" className="hero-follow-lit pointer-events-none absolute inset-0 select-none font-heading tracking-[-0.02em] text-[clamp(2.7rem,6.4vw,5.8rem)] font-light leading-[1.02]">
            {lines.map((l) => (
              <span key={l} className="block pb-[.1em]">{l}</span>
            ))}
          </div>
        </div>

        <motion.p
          className="mt-8 hidden max-w-lg text-lg text-ivory/80 sm:block"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(1.1)}
        >
          Dr. Robert M. Narvaez treats stomach, colon and liver conditions. Patients tell us he listens and never rushes.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(1.3)}
        >
          <a href="/contact/" className="btn-shiny"><span>Book an appointment</span></a>
          <a href="/services/" className="btn btn-line">See our services</a>
        </motion.div>
      </motion.div>
    </div>
  );
}
