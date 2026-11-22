import { motion } from 'framer-motion';
import Bloomie from './Bloomie';
import SectionHead from './SectionHead';

const msgs = [
  { me: true, t: '¿Qué canal genera más ingresos?' },
  { me: false, t: 'Hola, soy Bloomie. Reviso tus ventas por canal y te muestro cuál lidera.' },
  { me: true, t: '¿Qué debería reponer?' },
  { me: false, t: '' },
];

export default function Agent() {
  return (
    <section id="bloomie" className="section">
      <div className="wrap grid items-center gap-11 md:grid-cols-2">
        <Bloomie />
        <div>
          <SectionHead eyebrow="Agente de IA" title="Bloomie, tu agente de inteligencia artificial"
            lead="Pregúntale sobre tus ventas, el rendimiento de canales o la reposición de stock." />
          <div className="mt-6 max-w-[520px] rounded-[20px] border border-bloom-lpurple/20 bg-white/5 p-5">
            {msgs.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 1.1, duration: 0.5 }}
                className={`my-2 max-w-[88%] rounded-2xl px-4 py-2.5 text-sm ${m.me ? 'ml-auto bg-bloom-purple' : 'bg-bloom-lpurple/25'}`}>
                {m.t || <span className="dots" aria-label="Bloomie está escribiendo"><span /><span /><span /></span>}
              </motion.div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {['¿Qué canal genera más ingresos?', '¿Qué debería reponer?', 'Proveedores sostenibles'].map((c) => <span key={c} className="chip">{c}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
