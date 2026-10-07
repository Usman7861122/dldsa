import { motion, useReducedMotion } from 'framer-motion';

type Props = { image: string };

const words = ['Digestive', 'and', 'liver', 'care,', 'with', 'time', 'for', 'you.'];
const ease = [0.2, 0.7, 0.2, 1] as const;

export default function HeroMotion({ image }: Props) {
  const reduce = useReducedMotion();
  const t = (d: number) => (reduce ? { duration: 0 } : { duration: 1.1, delay: d, ease });

  const Word = ({ w, i }: { w: string; i: number }) => (
    <span className="mr-[.28em] inline-block overflow-hidden pb-[.12em] align-bottom">
      <motion.span
        className="inline-block"
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={t(0.7 + i * 0.09)}
      >
        {w}
      </motion.span>
    </span>
  );

  return (
    <div className="grid items-center gap-14 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <h1 className="text-balance font-heading text-[clamp(2.8rem,6vw,5.4rem)] font-light text-ivory">
          {words.map((w, i) => <Word key={w} w={w} i={i} />)}
        </h1>

        <motion.p
          className="mt-8 max-w-xl text-lg text-ivory/75"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(1.5)}
        >
          Dr. Robert M. Narvaez treats stomach, colon and liver conditions in San Antonio.
          Patients tell us he listens and never rushes.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(1.7)}
        >
          <a href="/contact/" className="btn-shiny"><span>Book an appointment</span></a>
          <a href="/services/" className="btn btn-line">See our services</a>
        </motion.div>
      </div>

      <div className="lg:col-span-5">
        <div className="relative mx-auto aspect-square w-full max-w-[26rem] lg:max-w-none">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
            <motion.circle
              cx="50" cy="50" r="49" stroke="#d7ac83" strokeWidth="0.45" strokeLinecap="round"
              initial={{ pathLength: reduce ? 1 : 0, rotate: -90 }}
              animate={{ pathLength: 1, rotate: -90 }}
              transition={reduce ? { duration: 0 } : { duration: 2.6, ease: 'easeInOut' }}
              style={{ transformOrigin: '50% 50%' }}
            />
            <motion.circle
              cx="50" cy="50" r="45.5" stroke="#d7ac83" strokeWidth="0.15" strokeOpacity="0.55"
              initial={{ pathLength: reduce ? 1 : 0, rotate: 90 }}
              animate={{ pathLength: 1, rotate: 90 }}
              transition={reduce ? { duration: 0 } : { duration: 3.2, ease: 'easeInOut', delay: 0.3 }}
              style={{ transformOrigin: '50% 50%' }}
            />
          </svg>

          <motion.div
            className="absolute inset-[8%] overflow-hidden rounded-full"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={reduce ? { duration: 0 } : { duration: 1.8, delay: 0.5, ease }}
          >
            <img src={image} alt="Dr. Robert M. Narvaez" width={408} height={510} className="h-full w-full scale-[1.08] object-cover object-[50%_14%]" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/45 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
