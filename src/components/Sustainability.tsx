import { ReactNode } from 'react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { asset } from '../lib/asset';

const gallery = [
  ['fabric-algodon', 'Algodón Orgánico'], ['fabric-poliester', 'Poliéster Reciclado'],
  ['fabric-lino', 'Lino Premium Natural'], ['fabric-botones', 'Botones Madre Perla'],
];

function Visual({ img, delay, children }: { img: string; delay: string; children: ReactNode }) {
  return (
    <div className="relative h-[210px] overflow-hidden">
      <div className="kb absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${asset(`images/${img}.jpg`)})`, animationDelay: delay }} />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-bloom-navy/10 to-bloom-navy/75" />
      <svg viewBox="0 0 300 210" className="absolute inset-0 z-[2] h-full w-full" aria-hidden>{children}</svg>
    </div>
  );
}

export default function Sustainability() {
  const demand = 'M20 150C70 70 120 170 170 100S250 70 285 80';
  const prod = 'M20 60C70 50 120 110 170 104S250 84 285 80';
  return (
    <section id="sostenibilidad" className="section">
      <div className="wrap">
        <SectionHead eyebrow="Moda y sostenibilidad" title="Rentable para tu negocio. Sostenible para el planeta."
          lead="Producir lo que necesitas significa menos material textil desperdiciado y más margen operativo, desde el taller hasta la colección." />
        <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          {gallery.map(([f, n], i) => (
            <Reveal key={f} delay={i * 0.08}>
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-[20px]">
                <img src={asset(`images/${f}.jpg`)} alt={n} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bloom-navy/90 to-transparent px-3.5 pb-3 pt-9 text-sm font-semibold">{n}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="grid3">
          <Reveal>
            <div className="card h-full overflow-hidden !p-0">
              <Visual img="fabric-lino" delay="0s">
                <path d={demand} fill="none" stroke="#68D391" strokeWidth="4" strokeLinecap="round" />
                <path className="dash-anim" d={prod} fill="none" stroke="#C4B5FD" strokeWidth="4" strokeLinecap="round" />
                <circle r="7" fill="#fff"><animateMotion dur="4s" repeatCount="indefinite" path={demand} /></circle>
                <circle r="7" fill="#8B5CF6"><animateMotion dur="4s" repeatCount="indefinite" path={prod} /></circle>
                <text x="22" y="40" fill="#fff" fontSize="11" fontWeight="600">● Producción</text>
                <text x="120" y="40" fill="#68D391" fontSize="11" fontWeight="600">● Demanda</text>
              </Visual>
              <div className="px-6 pb-6 pt-5"><h3>🌿 Menos sobreproducción</h3><p>Pronóstico preciso con IA para fabricar solo lo que se vende.</p></div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card h-full overflow-hidden !p-0">
              <Visual img="fabric-poliester" delay="-4s">
                <g className="spin-slow">
                  <circle cx="150" cy="85" r="62" fill="none" stroke="#C4B5FD" strokeWidth="3" strokeDasharray="10 9" />
                  <path d="M150 17l9 6-9 6M150 153l-9 6 9 6" fill="none" stroke="#68D391" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="212" cy="85" r="6" fill="#68D391" /><circle cx="88" cy="85" r="6" fill="#8B5CF6" />
                </g>
                <circle cx="150" cy="85" r="44" fill="#fff" fillOpacity=".92" />
                <g className="pop"><circle cx="150" cy="85" r="26" fill="#2F855A" /><path d="M137 85l9 10 18-20" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" /></g>
                <rect x="92" y="164" width="116" height="26" rx="13" fill="#fff" />
                <text x="150" y="182" textAnchor="middle" fill="#2F855A" fontSize="13" fontWeight="700">Certificado</text>
              </Visual>
              <div className="px-6 pb-6 pt-5"><h3>♻️ Insumos certificados</h3><p>Marketplace de insumos con proveedores certificados.</p></div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="card h-full overflow-hidden !p-0">
              <Visual img="fabric-algodon" delay="-7s">
                <rect x="30" y="60" width="120" height="70" rx="6" fill="#C4B5FD" />
                <g className="piece"><rect x="150" y="60" width="120" height="70" rx="6" fill="#E9E0FF" /></g>
                <path className="dash-anim" d="M150 50v90" stroke="#fff" strokeWidth="3" />
                <g className="cut"><text x="150" y="48" textAnchor="middle" fontSize="28">✂️</text></g>
                <path d="M30 150h240M30 144v12M90 146v8M150 144v12M210 146v8M270 144v12" stroke="#fff" strokeWidth="2" />
                <rect x="30" y="172" width="240" height="10" rx="5" fill="#ffffff55" />
                <rect className="prog" x="30" y="172" width="240" height="10" rx="5" fill="#68D391" />
              </Visual>
              <div className="px-6 pb-6 pt-5"><h3>🧵 Mermas a la vista</h3><p>Planeación alimentada con el histórico de ventas y mermas reales.</p></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
