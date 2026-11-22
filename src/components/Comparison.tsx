import SectionHead from './SectionHead';
import Reveal from './Reveal';

const rows = [
  ['Planeación', 'Producir por suposición', 'Pronóstico de demanda con IA'],
  ['Piso de manufactura', 'Sin visibilidad en tiempo real', 'Visibilidad en tiempo real'],
  ['Inventario', 'Conciliaciones, alertas y pedidos manuales', 'Agentes autónomos de IA que los automatizan'],
  ['Insumos', 'Compra sin histórico de mermas', 'Pronóstico con ventas y mermas reales'],
  ['Herramientas', 'Migraciones traumáticas', 'Integración con Excel, Shopify, Odoo, SAP y WhatsApp'],
];

export default function Comparison() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead eyebrow="Comparativo" title="Tradicional vs BLOOMTEX OS" />
        <Reveal className="mt-8 overflow-x-auto">
          <table className="w-full overflow-hidden rounded-2xl border border-bloom-lpurple/20 bg-white/5 text-[15px]">
            <thead><tr className="bg-bloom-purple/35 text-left">
              <th className="p-4"><span className="sr-only">Aspecto</span></th><th className="p-4">Tradicional</th><th className="p-4">BLOOMTEX OS</th>
            </tr></thead>
            <tbody>
              {rows.map(([a, b, c]) => (
                <tr key={a} className="border-t border-bloom-lpurple/15 align-top">
                  <td className="p-4 font-bold">{a}</td><td className="p-4">{b}</td><td className="p-4 font-semibold text-bloom-lgreen">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
