import { motion } from 'framer-motion';
import { asset } from '../lib/asset';

// Bloomie en capas (cuerpo + alas) sin fondo: las alas aletean y el cuerpo flota.
const flap = { duration: 0.32, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' } as const;
const petals = [{ l: '6%', t: '70%', d: 0 }, { l: '88%', t: '60%', d: -2 }, { l: '50%', t: '92%', d: -3.5 }];

export default function Bloomie() {
  return (
    <div className="relative mx-auto max-w-[400px]" role="img" aria-label="Bloomie, agente de IA de BLOOMTEX">
      {petals.map((p, i) => (
        <motion.span key={i} className="absolute z-[3] text-lg text-bloom-lpurple" style={{ left: p.l, top: p.t }}
          animate={{ y: [0, -70], rotate: [0, 160], opacity: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: p.d < 0 ? 5 + p.d : 0, ease: 'easeInOut' }}>✿</motion.span>
      ))}
      <motion.div className="relative" animate={{ y: [0, -16, 0], x: [0, 6, 0], rotate: [-1.5, 2, -1.5] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}>
        <motion.img src={asset('images/bloomie-wing-l.webp')} alt="" className="absolute inset-0 z-[1] w-full"
          style={{ transformOrigin: '38.6% 46.8%' }} animate={{ rotate: [-9, 11] }} transition={flap} />
        <motion.img src={asset('images/bloomie-wing-r.webp')} alt="" className="absolute inset-0 z-[1] w-full"
          style={{ transformOrigin: '70.3% 45.4%' }} animate={{ rotate: [9, -11] }} transition={flap} />
        <img src={asset('images/bloomie-body.webp')} alt="" className="relative z-[2] block w-full" />
      </motion.div>
    </div>
  );
}
