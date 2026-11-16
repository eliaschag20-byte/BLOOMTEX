import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  {
    value: '15 a 30%',
    label: 'De material textil perdido directamente por sobreproducción. Equivale a pérdidas significativas anuales para PyMEs del sector en Paraguay.',
    source: 'Estimado de industria PyME textil, 2024-2025',
  },
  {
    value: 'US$ 140B+',
    label: 'Costo económico global anual ocasionado por la sobreproducción en la industria de la moda.',
    source: 'McKinsey Fashion Report, 2024',
  },
  {
    value: 'Alto',
    label: 'Volumen de residuos textiles en la cadena de valor paraguaya por falta de planeación en origen y desconexión entre eslabones.',
    source: 'Análisis sectorial AICP y fuentes locales, 2025',
  },
]

const causes = [
  {
    number: '01',
    title: 'Pronóstico inferido + hojas de cálculo',
    description:
      'La mayoría de las marcas y talleres operan con hojas de Excel o simple intuición comercial. Esto deriva en un error de pronóstico de demanda de 30% a 50%, inmovilizando capital de trabajo en bodega durante meses.',
  },
  {
    number: '02',
    title: 'Sin visibilidad del desperdicio productivo',
    description:
      'Pérdidas constantes en corte de tela, rechazos en control de calidad y sobrantes sin registrar. Cero trazabilidad en planta significa cero responsabilidad operativa sobre el material.',
  },
  {
    number: '03',
    title: 'Desconectado de los canales de venta',
    description:
      'Información desarticulada entre Odoo, pedidos en WhatsApp, tiendas online y hojas sueltas. Conciliar inventario con ventas toma de 6 a 10 horas semanales por productor.',
  },
]

export default function Problem() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="problema" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-bloom-purple font-semibold text-sm uppercase tracking-wider mb-3">
            El problema
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bloom-navy mb-4">
            La industria de la moda opera a ciegas en su producción
          </h2>
          <p className="text-gray-600 text-lg">
            La falta de datos estructurados entre marcas y su red de manufactura genera pérdidas
            multimillonarias y toneladas de desperdicio cada día, también en Paraguay y la región.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-bloom-purple/20 transition-colors"
            >
              <p className="text-3xl md:text-4xl font-bold text-bloom-purple mb-3">{stat.value}</p>
              <p className="text-gray-700 mb-3 leading-relaxed">{stat.label}</p>
              <p className="text-xs text-gray-400">Fuente: {stat.source}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {causes.map((cause, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <span className="text-bloom-purple/40 font-display text-4xl font-bold">{cause.number}</span>
              <h3 className="font-display text-xl font-semibold text-bloom-navy mt-2 mb-3">
                {cause.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{cause.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
