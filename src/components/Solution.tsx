import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Package, Link2, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Pronóstico de demanda con IA',
    description:
      'Modelos predictivos que analizan ventas reales y compras de insumos para producir exactamente lo necesario en el contexto paraguayo y regional.',
  },
  {
    icon: Package,
    title: 'Control de insumos e inventario en tiempo real',
    description:
      'Visibilidad total sobre rollos de tela, avíos y prendas terminadas entre tus almacenes y talleres externos en Paraguay y LATAM.',
  },
  {
    icon: Link2,
    title: 'Integración sin fricción con tus herramientas',
    description:
      'Conexión directa con Excel, Shopify, Odoo, SAP y WhatsApp sin requerir migraciones traumáticas.',
  },
]

export default function Solution() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="solucion" className="py-20 md:py-28 bg-bloom-navy text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-bloom-purple-light font-semibold text-sm uppercase tracking-wider mb-3">
            La solución
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            No es otro software.
            <br />
            Es infraestructura de producción.
          </h2>
          <p className="text-gray-300 text-lg">
            BLOOMTEX conecta planeación de demanda, órdenes de manufactura, inventarios e insumos en
            una plataforma inteligente diseñada para la realidad productiva de Paraguay y
            Latinoamérica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-bloom-purple/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-bloom-purple/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-bloom-purple-light" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-2 bg-bloom-purple text-white px-7 py-3.5 rounded-full font-semibold hover:bg-bloom-purple/90 transition-colors"
          >
            Agenda una demo personalizada
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
