import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { asset } from '../lib/asset';
import { useCurrency } from '../context/Currency';

const links = [
  ['Problema', '#problema'], ['Solución', '#solucion'], ['Bloomie', '#bloomie'], ['Simulador', '#simulador'],
  ['Sostenibilidad', '#sostenibilidad'], ['Plataforma', '#plataforma'], ['Casos de uso', '#casos'], ['Equipo', '#equipo'],
];

export default function Navbar() {
  const { cur, setCur } = useCurrency();
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-bloom-purple/20 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1180px] items-center gap-4 px-5 py-2.5">
        <a href="#inicio" aria-label="BLOOMTEX, inicio"><img src={asset('logo.png')} alt="BLOOMTEX" className="h-[34px] w-auto" /></a>
        <div className="ml-auto hidden gap-4 text-[13px] font-medium text-bloom-navy lg:flex">
          {links.map(([l, h]) => <a key={h} href={h} className="hover:text-bloom-purple">{l}</a>)}
        </div>
        <div className="ml-auto flex rounded-full border border-bloom-lpurple bg-white p-0.5 lg:ml-0" role="group" aria-label="Moneda">
          {(['PYG', 'USD'] as const).map((c) => (
            <button key={c} onClick={() => setCur(c)} aria-pressed={cur === c}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${cur === c ? 'bg-bloom-purple text-white' : 'text-bloom-navy'}`}>
              {c === 'PYG' ? '₲ PYG' : 'US$ USD'}
            </button>
          ))}
        </div>
        <a href="#demo" className="btn hidden sm:inline-block">Agenda una demo</a>
        <button className="text-bloom-navy lg:hidden" onClick={() => setOpen(!open)} aria-label="Menú">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="flex flex-col gap-3 border-t border-bloom-lpurple/30 bg-white px-5 py-4 text-sm font-medium text-bloom-navy lg:hidden">
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a href="#demo" onClick={() => setOpen(false)} className="btn text-center">Agenda una demo</a>
        </div>
      )}
    </nav>
  );
}
