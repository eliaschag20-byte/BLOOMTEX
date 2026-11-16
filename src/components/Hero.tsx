import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-white via-bloom-purple/5 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-bloom-purple/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-bloom-green/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bloom-purple/10 text-bloom-purple text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-bloom-purple animate-pulse" />
              Para marcas de moda, productores textiles y talleres de confección de Paraguay y LATAM
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-bloom-navy leading-tight tracking-tight mb-6">
              Produce lo que necesitas.{' '}
              <span className="text-bloom-purple">No lo que supones.</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              El Sistema Operativo de IA que ayuda a marcas de moda, productores y talleres a
              pronosticar la demanda, coordinar manufactura y eliminar la sobreproducción en
              Paraguay y Latinoamérica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 bg-bloom-purple text-white px-7 py-3.5 rounded-full font-semibold hover:bg-bloom-purple/90 transition-all shadow-lg shadow-bloom-purple/25 hover:shadow-xl hover:shadow-bloom-purple/30"
              >
                Agenda una demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#simulador"
                className="inline-flex items-center justify-center gap-2 border-2 border-bloom-navy/10 text-bloom-navy px-7 py-3.5 rounded-full font-semibold hover:border-bloom-purple hover:text-bloom-purple transition-colors"
              >
                Probar simulador
              </a>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Respaldados por el potencial de la industria textil paraguaya · +US$ 323M en exportaciones 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-bloom-purple/10 border border-gray-100 p-6 overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-gray-400 font-medium">BLOOMTEX OS · Panel de Control</span>
                <span className="ml-auto flex items-center gap-1 text-xs text-bloom-green font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-bloom-green animate-pulse" />
                  Sistema Activo
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-bloom-purple/5 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">Precisión de Pronóstico</p>
                  <p className="text-2xl font-bold text-bloom-navy">86.4%</p>
                  <p className="text-xs text-bloom-green font-medium">↑ +34% vs Excel legacy</p>
                </div>
                <div className="bg-bloom-green/5 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">Material Salvado</p>
                  <p className="text-2xl font-bold text-bloom-navy">2,840 m</p>
                  <p className="text-xs text-bloom-green font-medium">~₲ 138.750.000 ahorrados</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm font-medium text-bloom-navy mb-2">
                  Producción en Curso · Lote Lino Verano
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div className="bg-bloom-purple h-2.5 rounded-full" style={{ width: '88%' }} />
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>88% completado</span>
                  <span>Merma de corte: 4.1% (óptimo)</span>
                </div>
              </div>

              <p className="mt-4 text-xs text-center text-gray-400">
                Sincronización bidireccional activa: Shopify + Excel + Odoo ERP
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
