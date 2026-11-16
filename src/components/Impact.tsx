import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const impacts = [
  {
    value: '−30%',
    label: 'Sobreproducción textil',
    description: 'Visibilidad en tiempo real del piso de manufactura y pronóstico preciso con IA.',
  },
  {
    value: '−70%',
    label: 'Tiempo en gestión de inventario',
    description: 'Agentes autónomos de IA que automatizan conciliaciones, alertas y pedidos.',
  },
  {
    value: '−15%',
    label: 'Error en planeación de insumos',
    description: 'Pronóstico predictivo alimentado con el histórico de ventas y mermas reales.',
  },
]

export default function Impact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="impacto" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-bloom-purple font-semibold text-sm uppercase tracking-wider mb-3">
            Resultados comprobados
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bloom-navy mb-4">
            Impacto medible en tu operación textil
          </h2>
          <p className="text-gray-600 text-lg">
            Tecnología creada para transformar la cuenta de resultados y salvaguardar los márgenes
            operativos en Paraguay y la región.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-b from-bloom-purple/5 to-transparent border border-bloom-purple/10"
            >
              <p className="text-5xl md:text-6xl font-bold text-bloom-purple mb-3">{item.value}</p>
              <h3 className="font-display text-xl font-semibold text-bloom-navy mb-2">{item.label}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
