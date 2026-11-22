import Reveal from './Reveal';
import SectionHead from './SectionHead';
import Counter from './Counter';

const stats = [
  [30, 'Sobreproducción textil', 'Visibilidad en tiempo real del piso de manufactura y pronóstico preciso con IA.'],
  [70, 'Tiempo en gestión de inventario', 'Agentes autónomos de IA que automatizan conciliaciones, alertas y pedidos.'],
  [15, 'Error en planeación de insumos', 'Pronóstico predictivo alimentado con el histórico de ventas y mermas reales.'],
] as const;

export default function Impact() {
  return (
    <section id="impacto" className="section alt">
      <div className="wrap">
        <SectionHead eyebrow="Resultados comprobados" title="Impacto medible en tu operación textil"
          lead="Tecnología creada para transformar la cuenta de resultados y salvaguardar los márgenes operativos." />
        <div className="grid3">
          {stats.map(([n, t, d], i) => (
            <Reveal key={t} delay={i * 0.12}>
              <div className="card h-full text-center">
                <div className="font-heading text-6xl font-extrabold text-bloom-lpurple">-<Counter to={n} />%</div>
                <h3 className="mt-2">{t}</h3><p>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
