import { useRef, useState } from 'react';
import { Camera } from 'lucide-react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { asset } from '../lib/asset';

// Para fotos permanentes: copia los archivos en public/team/ con estos nombres.
const founders = [
  { key: 'valeria', name: 'Valeria García', role: 'Founder & CEO' },
  { key: 'elias', name: 'Elias Chavez', role: 'Founder & CTO' },
  { key: 'nicole', name: 'Nicole Cáceres', role: 'Founder & CFO' },
];

function Avatar({ k, name }: { k: string; name: string }) {
  const input = useRef<HTMLInputElement>(null);
  const [src, setSrc] = useState<string | null>(() => {
    try { return localStorage.getItem(`bloomtex_team_${k}`); } catch { return null; }
  });
  const [missing, setMissing] = useState(false);
  const shown = src ?? (missing ? null : asset(`team/${k}.jpg`));

  const onFile = (f?: File) => {
    if (!f) return;
    const url = URL.createObjectURL(f);
    const img = new Image();
    img.onload = () => {
      const z = Math.min(1, 320 / Math.min(img.width, img.height));
      const c = document.createElement('canvas');
      c.width = img.width * z; c.height = img.height * z;
      c.getContext('2d')?.drawImage(img, 0, 0, c.width, c.height);
      const data = c.toDataURL('image/jpeg', 0.8);
      setSrc(data);
      try { localStorage.setItem(`bloomtex_team_${k}`, data); } catch { /* sin almacenamiento */ }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <>
      <button type="button" onClick={() => input.current?.click()} aria-label={`Agregar foto de ${name}`}
        className="mx-auto mb-3.5 grid h-[130px] w-[130px] place-items-center overflow-hidden rounded-full border-2 border-dashed border-bloom-purple bg-bloom-lpurple/20 text-xs font-semibold text-bloom-lpurple transition-transform hover:scale-105 hover:-rotate-3">
        {shown ? <img src={shown} alt={name} className="h-full w-full object-cover" onError={() => { setSrc(null); setMissing(true); }} />
          : <span className="grid place-items-center gap-1"><Camera size={22} />Agregar foto</span>}
      </button>
      <input ref={input} type="file" accept="image/*" hidden onChange={(e) => onFile(e.target.files?.[0])} />
    </>
  );
}

export default function Team() {
  return (
    <section id="equipo" className="section alt">
      <div className="wrap text-center">
        <SectionHead center eyebrow="Equipo" title="Equipo fundador" lead="Haz clic en cada círculo para cargar la foto del fundador." />
        <div className="grid3">
          {founders.map((f, i) => (
            <Reveal key={f.key} delay={i * 0.1}>
              <div className="card"><Avatar k={f.key} name={f.name} /><h3>{f.name}</h3><p>{f.role}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
