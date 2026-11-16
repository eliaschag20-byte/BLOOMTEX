import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  BrainCircuit,
  Workflow,
  Boxes,
  ScanLine,
  Bot,
  BadgeCheck,
  FileCheck2,
} from 'lucide-react'

const features = [
  {
    icon: BrainCircuit,
    title: 'Planeación inteligente con IA',
    subtitle: 'Demanda Predictiva',
    description:
      'Pronostica la demanda de telas e insumos anticipando necesidades de corte y evitando excedentes de almacén con datos históricos.',
  },
  {
    icon: Workflow,
    title: 'Operación centralizada',
    subtitle: 'Flujo Unificado',
    description:
      'Conecta órdenes de compra, ficha técnica, talleres externos y tiempos de entrega sin depender de cadenas eternas de correos.',
  },
  {
    icon: Boxes,
    title: 'Inventario en tiempo real',
    subtitle: 'Control de Existencias',
    description:
      'Monitorea rollos de tela, avíos, producto en maquila y existencias en tienda con alertas automáticas de rotación y quiebre de stock.',
  },
  {
    icon: ScanLine,
    title: 'Trazabilidad de producción',
    subtitle: 'Control en Taller',
    description:
      'Monitorea el avance lote por lote en talleres de confección, registrando consumos reales y detectando mermas de corte al instante.',
  },
  {
    icon: Bot,
    title: 'Automatización inteligente',
    subtitle: 'Agentes Autónomos',
    description:
      'Alertas preventivas de abastecimiento y generación automática de órdenes de reposición basadas en el ritmo de venta de cada canal.',
  },
  {
    icon: BadgeCheck,
    title: 'Supplier Scorecard',
    subtitle: 'Trazabilidad Regulatoria',
    description:
      'Evaluación de capacidad, puntualidad de entrega, calidad de confección y trazabilidad regulatoria de talleres de maquila en tiempo real.',
  },
  {
    icon: FileCheck2,
    title: 'Pasaporte Digital de Productos (DPP)',
    subtitle: 'Cumplimiento UFLPA & UE ESPR',
    description:
      'Diseñado para marcas de moda de Paraguay y Latinoamérica que exportan. Genera la documentación digital por prenda exigida por la ley UFLPA y la directiva europea ESPR/DPP.',
  },
]

export default function Platform() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="plataforma" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-bloom-purple font-semibold text-sm uppercase tracking-wider mb-3">
            La plataforma
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bloom-navy mb-4">
            Todo el ciclo de vida textil en un solo sistema operativo
          </h2>
          <p className="text-gray-600 text-lg">
            Diseñado para marcas de moda y productores que necesitan acelerar su operación, asegurar
            cumplimiento normativo y eliminar sobreproducción.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-bloom-purple/30 hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-bloom-purple/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-bloom-purple" />
              </div>
              <p className="text-xs font-semibold text-bloom-purple uppercase tracking-wider mb-1">
                {f.subtitle}
              </p>
              <h3 className="font-display text-lg font-semibold text-bloom-navy mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm mt-12 max-w-2xl mx-auto"
        >
          <strong className="text-bloom-navy">Integración nativa sin fricción:</strong> Conecta
          directamente con hojas de cálculo de Excel y los ERPs líderes del mercado (SAP, Odoo,
          Netsuite) sin interrumpir tus operaciones diarias.
        </motion.p>
      </div>
    </section>
  )
}
