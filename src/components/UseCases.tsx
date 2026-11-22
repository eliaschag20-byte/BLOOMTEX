import { ReactNode } from 'react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { asset } from '../lib/asset';

interface Case { title: string; img: string; text: string; chips: string[]; scene: ReactNode }

const cases: Case[] = [
  {
    title: 'Marcas de moda', img: 'fabric-lino',
    text: 'Pronostican la demanda, consultan a Bloomie sobre ventas y reposición, y compran insumos en el Marketplace.',
    chips: ['Pronóstico con IA', 'Marketplace de insumos'],
    scene: (<>
      <path d="M60 40l-24 14 8 20 10-4v54h52V70l10 4 8-20-24-14c-4 10-12 14-20 14s-16-4-20-14z" fill="#C4B5FD" stroke="#8B5CF6" strokeWidth="3" />
      <g fill="#68D391">
        <rect className="bar" x="140" y="90" width="14" height="60" rx="3" />
        <rect className="bar" x="160" y="60" width="14" height="90" rx="3" style={{ animationDelay: '-1s' }} />
        <rect className="bar" x="180" y="40" width="14" height="110" rx="3" style={{ animationDelay: '-2s' }} />
      </g>
    </>),
  },
  {
    title: 'Productores textiles', img: 'fabric-poliester',
    text: 'Controlan capacidad, inventario e insumos en tiempo real y analizan su rendimiento con IA.',
    chips: ['Capacidad de producción', 'Analítica'],
    scene: (<>
      <ellipse cx="60" cy="85" rx="22" ry="50" fill="#8B5CF6" />
      <rect x="60" y="35" width="90" height="100" fill="#C4B5FD" />
      <ellipse cx="150" cy="85" rx="22" ry="50" fill="#E9E0FF" stroke="#8B5CF6" strokeWidth="3" />
      <path className="dash-anim" d="M72 60h70M72 85h70M72 110h70" stroke="#8B5CF6" strokeWidth="3" />
      <rect x="176" y="120" width="30" height="30" rx="4" fill="#68D391" />
    </>),
  },
  {
    title: 'Talleres de confección', img: 'fabric-botones',
    text: 'Ofrecen su capacidad disponible y encuentran marcas en el Mercado de Oportunidades.',
    chips: ['Capacidad abierta', 'Mercado de Oportunidades'],
    scene: (<>
      <rect x="30" y="110" width="160" height="14" rx="4" fill="#8B5CF6" />
      <path d="M50 110V60h90q16 0 16 16v34" fill="none" stroke="#8B5CF6" strokeWidth="10" strokeLinecap="round" />
      <g className="swing" style={{ transformOrigin: '140px 70px' }}><rect x="132" y="74" width="6" height="30" fill="#C4B5FD" /></g>
      <path className="dash-anim" d="M135 104c-20 20 10 30-10 44" fill="none" stroke="#68D391" strokeWidth="3" />
      <rect x="30" y="146" width="160" height="10" rx="5" fill="#E9E0FF" />
      <rect className="prog" x="30" y="146" width="160" height="10" rx="5" fill="#68D391" />
    </>),
  },
];

export default function UseCases() {
  return (
    <section id="casos" className="section">
      <div className="wrap">
        <SectionHead eyebrow="Casos de uso" title="Una plataforma, tres eslabones de la cadena" />
        <div className="grid3">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.12}>
              <article className="card h-full overflow-hidden !p-0">
                <div className="relative h-[150px] bg-cover bg-center" style={{ backgroundImage: `url(${asset(`images/${c.img}.jpg`)})` }}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bloom-navy/90" />
                  <h3 className="absolute bottom-3 left-5 !mb-0 text-xl font-bold">{c.title}</h3>
                </div>
                <div className="px-[22px] pb-6 pt-1.5">
                  <svg viewBox="0 0 220 170" className="my-1.5 h-[170px] w-full rounded-2xl bg-bloom-lpurple/15" aria-hidden>{c.scene}</svg>
                  <p>{c.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{c.chips.map((x) => <span key={x} className="chip">{x}</span>)}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
