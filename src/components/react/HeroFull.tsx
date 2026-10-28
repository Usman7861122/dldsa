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
      {/* Photo: sits on the right and fades into the navy on the left, so the words stay clear */}
      <motion.div
        className="hero-photo absolute right-0 top-0 h-[66%] w-full lg:inset-y-0 lg:left-[17%] lg:h-full lg:w-[83%]"
        style={reduce ? undefined : { x: imgX, y: imgY }}
      >
        <motion.img
          src={image}
          alt={alt}
          width={2000}
          height={1287}
          loading="eager"
          className="h-full w-full object-cover object-[42%_30%] lg:object-[30%_40%]"
          initial={{ scale: reduce ? 1.04 : 1.14 }}
          animate={{ scale: 1.04 }}
          transition={reduce ? { duration: 0 } : { duration: 2.8, ease }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-abyss/70 via-transparent to-transparent" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-abyss/75 via-abyss/35 via-[38%] to-transparent to-[62%] lg:block" />

      {/* Text layer */}
      <motion.div
        className="wrap relative flex h-full flex-col justify-end pb-32 pt-28 lg:justify-center lg:pb-48"
        style={reduce ? undefined : { x: txtX, y: txtY }}
      >
        <motion.p
          className="hidden font-heading text-sm uppercase tracking-[.22em] text-gold lg:block"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.3)}
        >
          Gastroenterology · San Antonio, TX
        </motion.p>

        <div className="hero-follow relative mt-6 max-w-4xl" onPointerMove={onLitMove}>
          <h1 className="text-balance font-heading text-[clamp(2.6rem,4.4vw,4.2rem)] font-light leading-[1.02] text-ivory [text-shadow:0_2px_24px_rgba(5,15,30,.45)]">
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
          <div aria-hidden="true" className="hero-follow-lit pointer-events-none absolute inset-0 select-none font-heading tracking-[-0.02em] text-[clamp(2.6rem,4.4vw,4.2rem)] font-light leading-[1.02]">
            {lines.map((l) => (
              <span key={l} className="block pb-[.1em]">{l}</span>
            ))}
          </div>
        </div>

        <motion.p
          className="mt-8 hidden max-w-sm text-lg text-ivory/80 sm:block"
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
