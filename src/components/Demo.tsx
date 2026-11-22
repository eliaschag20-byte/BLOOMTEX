import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const SLOTS = ['09:00', '10:30', '11:30', '14:00', '15:30', '16:30'];
const field = 'my-1.5 w-full rounded-[10px] border border-bloom-lpurple bg-white px-3.5 py-3 text-sm text-bloom-navy';

export default function Demo() {
  const today = useMemo(() => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; }, []);
  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });
  const [sel, setSel] = useState<Date | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Marca de moda');
  const [msg, setMsg] = useState<{ ok: boolean; t: string } | null>(null);

  const first = (new Date(view.y, view.m, 1).getDay() + 6) % 7;
  const days = new Date(view.y, view.m + 1, 0).getDate();
  const move = (n: number) => { const d = new Date(view.y, view.m + n, 1); setView({ y: d.getFullYear(), m: d.getMonth() }); };
  const fmtDay = (d: Date, long = false) => d.toLocaleDateString('es', long ? { weekday: 'long', day: 'numeric', month: 'long' } : { day: 'numeric', month: 'long' });

  const confirm = () => {
    if (!sel || !slot || !name.trim() || !/\S+@\S+\.\S+/.test(email)) { setMsg({ ok: false, t: 'Elige día, horario y completa nombre y correo.' }); return; }
    // TODO: conectar con tu agenda real (por ejemplo, un enlace de Google Calendar o un backend).
    setMsg({ ok: true, t: `¡Listo, ${name}! Solicitud para el ${fmtDay(sel)} a las ${slot} (vista previa, rol: ${role}).` });
  };

  return (
    <section id="demo" className="section text-center" style={{ background: 'linear-gradient(135deg,#8B5CF6,#4c2a96)' }}>
      <div className="wrap">
        <span className="eyebrow">Agenda una demo</span>
        <h2 className="h2 mx-auto">Produce lo que necesitas. No lo que supones.</h2>
        <p className="lead mx-auto">Elige un día y un horario para conocer BLOOMTEX.</p>
        <div className="mt-8 grid gap-7 rounded-3xl bg-white p-7 text-left text-bloom-navy md:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <button onClick={() => move(-1)} aria-label="Mes anterior"><ChevronLeft /></button>
              <b className="font-heading text-[17px] capitalize">{MONTHS[view.m]} {view.y}</b>
              <button onClick={() => move(1)} aria-label="Mes siguiente"><ChevronRight /></button>
            </div>
            <div className="grid grid-cols-7 gap-1.5 text-center text-sm">
              {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => <b key={i} className="text-[11px] opacity-60">{d}</b>)}
              {Array.from({ length: first }, (_, i) => <span key={`e${i}`} />)}
              {Array.from({ length: days }, (_, i) => {
                const d = new Date(view.y, view.m, i + 1);
                const off = d <= today || d.getDay() === 0 || d.getDay() === 6;
                const on = sel?.getTime() === d.getTime();
                return (
                  <button key={i} disabled={off} onClick={() => setSel(d)} aria-pressed={on}
                    className={`aspect-square rounded-xl ${on ? 'bg-bloom-purple text-white' : 'bg-bloom-lpurple/25'} disabled:cursor-not-allowed disabled:opacity-25`}>{i + 1}</button>
                );
              })}
            </div>
          </div>
          <div>
            <b className="font-heading text-[15px] capitalize">{sel ? fmtDay(sel, true) : 'Selecciona un día'}</b>
            <div className="my-2.5 grid grid-cols-3 gap-2">
              {SLOTS.map((s) => (
                <button key={s} onClick={() => setSlot(s)} aria-pressed={slot === s}
                  className={`rounded-[10px] border border-bloom-lpurple p-2 text-[13px] ${slot === s ? 'bg-bloom-purple text-white' : ''}`}>{s}</button>
              ))}
            </div>
            <input className={field} placeholder="Nombre" aria-label="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
            <input className={field} type="email" placeholder="Correo electrónico" aria-label="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
            <select className={field} aria-label="Rol" value={role} onChange={(e) => setRole(e.target.value)}>
              <option>Marca de moda</option><option>Productor textil</option><option>Taller de confección</option>
            </select>
            <button className="btn mt-2 w-full" onClick={confirm}>Confirmar solicitud</button>
            <p role="status" className={`mt-2 min-h-[34px] text-xs font-semibold ${msg?.ok ? 'text-bloom-green' : 'text-amber-700'}`}>{msg?.t}</p>
            <p className="text-xs opacity-70">Horarios de ejemplo para la vista previa.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
