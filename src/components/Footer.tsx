export default function Footer() {
  return (
    <footer className="bg-bloom-navy text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="BLOOMTEX" className="h-9 w-9 object-contain" />
              <span className="font-display font-bold text-xl">BLOOMTEX</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              El Sistema Operativo de IA para la industria textil de Paraguay y Latinoamérica.
              Produce lo que necesitas. No lo que supones.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">
              Producto
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#solucion" className="hover:text-white transition-colors">
                  Solución
                </a>
              </li>
              <li>
                <a href="#plataforma" className="hover:text-white transition-colors">
                  Plataforma
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">
                  Simulador
                </a>
              </li>
              <li>
                <a href="#impacto" className="hover:text-white transition-colors">
                  Impacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">
              Empresa
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#equipo" className="hover:text-white transition-colors">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#cta" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="mailto:hola@bloomtex.com.py" className="hover:text-white transition-colors">
                  hola@bloomtex.com.py
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} BLOOMTEX. Todos los derechos reservados. Asunción, Paraguay.
          </p>
          <p className="text-xs text-gray-600">
            Hecho con 💜 para la industria textil paraguaya
          </p>
        </div>
      </div>
    </footer>
  )
}
