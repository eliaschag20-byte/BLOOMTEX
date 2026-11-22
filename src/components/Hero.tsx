import { motion } from 'framer-motion';
import { asset } from '../lib/asset';
import { useCurrency } from '../context/Currency';

const words = ['Moda', 'Sostenibilidad', 'Producción textil', 'Maquila', 'Exportaciones textiles', 'Paraguay', 'LATAM'];
const fabrics = ['fabric-algodon', 'fabric-poliester', 'fabric-lino', 'fabric-botones'];

export default function Hero() {
  const { fmt } = useCurrency();
  const strip = [...words, ...words, ...words, ...words];
  return (
    <header id="inicio" className="relative overflow-hidden pb-16 pt-36 text-center"
      style={{ background: 'radial-gradient(ellipse at 50% 0, #8B5CF6, #4c2a96 40%, #1F2937 78%)' }}>
      <svg className="float-a absolute left-[4%] top-24 opacity-55" width="70" viewBox="0 0 60 60" aria-hidden>
        <path d="M8 52C8 20 30 6 54 6c0 28-14 46-40 46" fill="#68D391" /><path d="M8 52 38 22" stroke="#2F855A" strokeWidth="2" />
      </svg>
      <svg className="float-a absolute right-[6%] top-36 opacity-55" style={{ animationDelay: '-2s' }} width="54" viewBox="0 0 50 50" aria-hidden>
        <circle cx="25" cy="25" r="23" fill="#C4B5FD" /><circle cx="25" cy="25" r="16" fill="none" stroke="#8B5CF6" strokeWidth="2" />
        <g fill="#8B5CF6"><circle cx="20" cy="20" r="2.5" /><circle cx="30" cy="20" r="2.5" /><circle cx="20" cy="30" r="2.5" /><circle cx="30" cy="30" r="2.5" /></g>
      </svg>
      <div className="wrap">
        <motion.span className="eyebrow !text-bloom-lpurple" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Moda · Sostenibilidad · Producción</motion.span>
        <motion.h1 className="mx-auto mb-5 max-w-[900px] text-[clamp(34px,6vw,64px)] font-extrabold"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Produce lo que necesitas. No lo que supones.
        </motion.h1>
        <motion.p className="mx-auto mb-7 max-w-[720px] text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
          El Sistema Operativo de IA que ayuda a marcas de moda, productores y talleres a pronosticar la demanda, coordinar manufactura y eliminar la
          sobreproducción en Paraguay y Latinoamérica — ahorrando hasta <b>{fmt(145000000)}</b> por ciclo de producción.
        </motion.p>
        <a href="#demo" className="btn">Agenda una demo →</a>
        <p className="mt-5 text-sm font-semibold">Para marcas de moda, productores textiles y talleres de confección de Paraguay y LATAM</p>
        <div className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
          {fabrics.map((f, i) => (
            <img key={f} src={asset(`images/${f}.jpg`)} alt="" className={`bob-b h-[150px] w-full rounded-[18px] object-cover ${i % 2 ? 'mt-5' : ''}`}
              style={{ animationDelay: i % 2 ? '-3s' : '0s' }} />
          ))}
        </div>
        <div className="mt-14 overflow-hidden border-y border-bloom-lpurple/35 py-3.5" aria-hidden>
          <div className="marquee font-heading text-[15px] font-bold uppercase tracking-[.14em]">
            {strip.map((w, i) => <span key={i} className="mx-6">{w}<i className="ml-6 not-italic text-bloom-lgreen">✿</i></span>)}
          </div>
        </div>
      </div>
    </header>
  );
}
