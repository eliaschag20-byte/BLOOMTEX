import { TrendingUp, Boxes, Plug } from 'lucide-react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { asset } from '../lib/asset';

const feats = [
  { Icon: TrendingUp, t: 'Pronóstico de demanda con IA', d: 'Modelos predictivos que analizan ventas reales y compras de insumos para producir exactamente lo necesario.' },
  { Icon: Boxes, t: 'Control de insumos e inventario en tiempo real', d: 'Visibilidad total sobre rollos de tela, avíos y prendas terminadas entre tus almacenes y talleres externos.' },
  { Icon: Plug, t: 'Integración sin fricción con tus herramientas', d: 'Conexión directa con Excel, Shopify, Odoo, SAP y WhatsApp sin requerir migraciones traumáticas.' },
];

export default function Solution() {
  return (
    <section id="solucion" className="section alt">
      <div className="wrap grid items-center gap-11 md:grid-cols-2">
        <div>
          <SectionHead eyebrow="La solución" title="No es otro software. Es infraestructura de producción."
            lead="BLOOMTEX conecta planeación de demanda, órdenes de manufactura, inventarios e insumos en una plataforma inteligente diseñada para la realidad productiva de Paraguay y Latinoamérica." />
          <div className="mt-8 grid gap-3">
            {feats.map(({ Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 0.1}>
                <div className="card flex gap-4 !p-[18px]">
                  <Icon className="mt-1 shrink-0 text-bloom-lpurple" />
                  <div><h3>{t}</h3><p>{d}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal><img className="shot" src={asset('images/app-pronostico.jpg')} alt="Pronóstico de demanda en BLOOMTEX" /></Reveal>
      </div>
    </section>
  );
}
