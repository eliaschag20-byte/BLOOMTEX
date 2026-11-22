import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { asset } from '../lib/asset';

const items = [
  ['app-capacidad', 'Capacidad de Producción', 'Controla y comercializa tus horas disponibles y líneas de producción.'],
  ['app-analitica', 'Analítica', 'Visualiza el rendimiento de tus ventas y tendencias detectadas por IA.'],
  ['app-oportunidades', 'Mercado de Oportunidades', 'Descubre marcas B2B, vende tus excedentes y maximiza tu capacidad instalada.'],
  ['app-insumos', 'Marketplace de Insumos', 'Descubre y compra materiales de proveedores certificados.'],
  ['app-pronostico', 'Pronóstico de demanda', 'Proyecta la demanda con IA para producir exactamente lo necesario.'],
  ['app-bloomie', 'Bloomie', 'Tu agente de IA responde sobre ventas, canales y reposición de stock.'],
];

export default function Platform() {
  return (
    <section id="plataforma" className="section alt">
      <div className="wrap">
        <SectionHead eyebrow="Plataforma" title="Todo tu ciclo de producción en un solo lugar" />
        <div className="grid3">
          {items.map(([img, t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 0.1}>
              <div className="card h-full">
                <img className="shot" src={asset(`images/${img}.jpg`)} alt={`Pantalla de ${t}`} loading="lazy" />
                <h3 className="mt-4">{t}</h3><p>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
