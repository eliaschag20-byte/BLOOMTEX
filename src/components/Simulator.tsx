import { useState } from 'react';
import SectionHead from './SectionHead';
import { useCurrency } from '../context/Currency';

interface Role { name: string; money: boolean; label: string; out: string; k: number; min: number; max: number; step: number; def: number; tag: string }

const roles: Role[] = [
  { name: 'Marcas', money: true, label: 'Valor del excedente producido por ciclo', out: 'Reducción estimada de sobreproducción', k: 0.3, min: 1e7, max: 5e8, step: 5e6, def: 1e8, tag: '-30% sobreproducción textil' },
  { name: 'Productores', money: false, label: 'Horas semanales en gestión de inventario', out: 'Horas semanales liberadas', k: 0.7, min: 5, max: 100, step: 1, def: 30, tag: '-70% tiempo en gestión de inventario' },
  { name: 'Talleres', money: true, label: 'Valor de insumos con error de planeación por ciclo', out: 'Reducción estimada del error en insumos', k: 0.15, min: 5e6, max: 3e8, step: 5e6, def: 6e7, tag: '-15% error en planeación de insumos' },
];

export default function Simulator() {
  const { fmt } = useCurrency();
  const [r, setR] = useState(0);
  const [vals, setVals] = useState(roles.map((x) => x.def));
  const s = roles[r];
  const v = vals[r];
  const hours = (n: number) => `${n.toFixed(1).replace('.', ',')} h`;
  return (
    <section id="simulador" className="section alt">
      <div className="wrap">
        <SectionHead eyebrow="Simulador interactivo" title="Calcula el impacto en tu operación"
          lead="Elige tu rol y mueve el control. Aplica los resultados de impacto de BLOOMTEX a tus propios números." />
        <div className="my-8 flex flex-wrap gap-2" role="tablist">
          {roles.map((x, i) => (
            <button key={x.name} role="tab" aria-selected={r === i} onClick={() => setR(i)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold ${r === i ? 'border-bloom-purple bg-bloom-purple' : 'border-bloom-lpurple/50'}`}>{x.name}</button>
          ))}
        </div>
        <div className="grid items-center gap-8 rounded-[22px] border border-bloom-lpurple/20 bg-white/5 p-8 md:grid-cols-2">
          <div>
            <label htmlFor="rng" className="font-semibold">{s.label}</label>
            <input id="rng" type="range" min={s.min} max={s.max} step={s.step} value={v} className="my-3.5 w-full accent-bloom-purple"
              onChange={(e) => setVals(vals.map((x, i) => (i === r ? Number(e.target.value) : x)))} />
            <div className="font-heading text-[22px] font-bold">{s.money ? fmt(v) : `${v} h`}</div>
          </div>
          <div>
            <div className="text-white/85">{s.out}</div>
            <div className="font-heading text-[clamp(30px,5vw,46px)] font-extrabold text-bloom-lgreen">{s.money ? fmt(v * s.k) : hours(v * s.k)}</div>
            <div className="font-semibold">{s.tag}</div>
          </div>
        </div>
        <p className="mt-2.5 text-xs text-white/70">Estimación ilustrativa que aplica los porcentajes de impacto de BLOOMTEX al dato que ingreses. Conversión USD con tasa aproximada 1 USD = 6.407 PYG.</p>
      </div>
    </section>
  );
}
