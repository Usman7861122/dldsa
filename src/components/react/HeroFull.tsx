import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';

type Props = { image: string; alt: string };

const lines = ['Digestive and', 'liver care,', 'with time for you.'];
const ease = [0.2, 0.7, 0.2, 1] as const;

export default function HeroFull({ image, alt }: Props) {
  const reduce = useReducedMotion();
  const box = useRef<HTMLDivElement>(null);
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
      {/* One full photo, edge to edge. Nothing is added on the left. */}
      <motion.div className="absolute -inset-4" style={reduce ? undefined : { x: imgX, y: imgY }}>
        <motion.img
          src={image}
          alt={alt}
          width={2000}
          height={1287}
          loading="eager"
          className="h-full w-full object-cover object-[50%_40%]"
          initial={{ scale: reduce ? 1.02 : 1.1 }}
          animate={{ scale: 1.02 }}
          transition={reduce ? { duration: 0 } : { duration: 2.8, ease }}
        />
      </motion.div>

      {/* Text layer: a small frosted card low in the frame, so the photo stays clean */}
      <motion.div
        className="wrap relative flex h-full flex-col justify-end pb-40 pt-28 lg:pb-36"
        style={reduce ? undefined : { x: txtX, y: txtY }}
      >
        <motion.div
          className="max-w-xl rounded-3xl border border-white/10 bg-abyss/25 p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,.5)] backdrop-blur-[6px] sm:p-8 [text-shadow:0_1px_16px_rgba(0,0,0,.35)]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.3)}
        >
          <p className="hidden font-heading text-xs uppercase tracking-[.22em] text-ivory lg:block">Gastroenterology · San Antonio, TX</p>

          <div className="hero-follow relative lg:mt-4" onPointerMove={onLitMove}>
            <h1 className="text-balance font-heading text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.05] text-ivory">
              {lines.map((l, i) => (
                <span key={l} className="block overflow-hidden pb-[.1em]">
                  <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={t(0.5 + i * 0.14)}>
                    {l}
                  </motion.span>
                </span>
              ))}
            </h1>
            {/* Same words again, lit in aqua where the pointer is */}
            <div aria-hidden="true" className="hero-follow-lit pointer-events-none absolute inset-0 select-none font-heading tracking-[-0.02em] text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.05]">
              {lines.map((l) => (
                <span key={l} className="block pb-[.1em]">{l}</span>
              ))}
            </div>
          </div>

          <p className="mt-4 hidden text-base text-ivory/85 sm:block">
            Dr. Robert M. Narvaez treats stomach, colon and liver conditions. Patients tell us he listens and never rushes.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact/" className="btn-shiny"><span>Book an appointment</span></a>
            <a href="/services/" className="btn btn-line">See our services</a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
