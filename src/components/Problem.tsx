import { Package, Clock, Ruler } from 'lucide-react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

const items = [
  { Icon: Package, t: 'Sobreproducción textil', d: 'Sin visibilidad del piso de manufactura ni pronóstico preciso, se produce más de lo que se vende.' },
  { Icon: Clock, t: 'Gestión de inventario manual', d: 'Conciliaciones, alertas y pedidos consumen tiempo que podría dedicarse a producir.' },
  { Icon: Ruler, t: 'Errores en la planeación de insumos', d: 'Sin histórico de ventas y mermas reales, la compra de materiales se calcula a ojo.' },
];

export default function Problem() {
  return (
    <section id="problema" className="section">
      <div className="wrap">
        <SectionHead eyebrow="El problema" title="Producir por suposición cuesta caro"
          lead="En la industria textil, planear sin datos en tiempo real se paga en excedentes, horas de gestión y materiales mal calculados." />
        <div className="grid3">
          {items.map(({ Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.12}>
              <div className="card h-full">
                <div className="bob-b mb-4 grid h-12 w-12 place-items-center rounded-xl bg-bloom-purple" style={{ animationDelay: `${-i}s` }}><Icon size={24} /></div>
                <h3>{t}</h3><p>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
