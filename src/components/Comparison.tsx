import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, Check } from 'lucide-react'
import { formatCurrency, type Currency } from '../lib/currency'

interface ComparisonProps {
  currency: Currency
}

export default function Comparison({ currency }: ComparisonProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const traditional = [
    'Costosa y sumamente compleja de implementar. Licencias que superan las seis cifras anuales.',
    'Diseñada exclusivamente para grandes corporativos globales con procesos rígidos.',
    'Soporte limitado, tardío y sin entendimiento de las dinámicas de manufactura en Paraguay y LATAM.',
    'Sin integración nativa con hojas de cálculo ni los ERPs accesibles que usan los talleres.',
    'Requiere consultores externos permanentes y proyectos de 6 a 18 meses para comenzar.',
  ]

  const bloomtex = [
    `Accesible desde ${formatCurrency(49, currency)}/mes con retorno de inversión palpable desde el primer trimestre.`,
    'Diseñada para marcas de ropa de Paraguay y LATAM y adaptada a la dinámica real de los talleres de confección.',
    'Integración nativa con Excel y ERPs sin fricción, respetando los formatos que ya usas hoy.',
    'Implementación ágil en días y no meses para ver resultados operativos inmediatos.',
    'Soporte en español incluido y acompañamiento cercano de especialistas de la industria.',
  ]

  return (
    <section className="py-20 md:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-bloom-purple font-semibold text-sm uppercase tracking-wider mb-3">
            Comparativo directo
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bloom-navy mb-4">
            Competencia tradicional vs BLOOMTEX OS
          </h2>
          <p className="text-gray-600 text-lg">
            Descubre por qué las soluciones tradicionales fallan en marcas de moda medianas y por qué
            BLOOMTEX es la alternativa eficiente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200"
          >
            <h3 className="font-display text-xl font-semibold text-gray-500 mb-2">
              Competencia Tradicional
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Sistemas legados corporativos y ERPs genéricos de alto costo
            </p>
            <ul className="space-y-4">
              {traditional.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="bg-bloom-purple/5 rounded-2xl p-6 md:p-8 border-2 border-bloom-purple/30 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-bloom-purple text-white text-xs font-bold px-3 py-1 rounded-full">
              Especializado
            </div>
            <h3 className="font-display text-xl font-semibold text-bloom-navy mb-2">BLOOMTEX OS</h3>
            <p className="text-sm text-bloom-purple mb-6">
              El sistema operativo moderno de sostenibilidad para la industria textil
            </p>
            <ul className="space-y-4">
              {bloomtex.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-bloom-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-bloom-green" />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
