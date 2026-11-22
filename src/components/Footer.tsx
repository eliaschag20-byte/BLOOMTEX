import { asset } from '../lib/asset';

export default function Footer() {
  return (
    <footer className="bg-[#111827] py-9 text-[13px]">
      <div className="wrap flex flex-wrap items-center justify-between gap-5">
        <img src={asset('logo.png')} alt="BLOOMTEX" className="h-[30px] rounded-lg bg-white px-2 py-1" />
        <span>Asunción, Paraguay · Sistema Operativo de IA para la industria textil</span>
        <span>© {new Date().getFullYear()} BLOOMTEX</span>
      </div>
    </footer>
  );
}
