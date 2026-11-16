import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

const cases = [
  {
    tag: 'Marcas de Moda',
    subtitle: 'Marcas D2C y retail',
    title: 'Producción ágil en drops y exportación con Pasaporte Digital (DPP)',
    description:
      'Una marca puede pronosticar la demanda por SKU y talla para ajustar el volumen de cada colección, coordinar a sus talleres desde un solo lugar y generar el Pasaporte Digital de Producto que piden los mercados de exportación.',
    points: ['Pronóstico por SKU', 'Producción alineada a la demanda', 'DPP y trazabilidad', 'Listo para exportar'],
  },
  {
    tag: 'Productores Textiles',
    subtitle: 'Hilaturas y tejedurías',
    title: 'Control de mermas de tela y trazabilidad QR de rollos',
    description:
      'Una productora puede etiquetar cada rollo con QR, registrar mermas y causas de falla en el telar, y sincronizar su inventario con las proyecciones de sus clientes para comprar hilo justo a tiempo.',
    points: ['Etiquetas QR', 'Control de rollos y mermas', 'Inventario sincronizado', 'Compras justo a tiempo'],
  },
  {
    tag: 'Talleres de Maquila',
    subtitle: 'Talleres de confección y maquila',
    title: 'Supplier Scorecard verificado y visibilidad lote por lote',
    description:
      'Un taller puede dar seguimiento lote por lote, construir un Supplier Scorecard con su historial de entregas y publicar su capacidad disponible para recibir más órdenes de marcas formales.',
    points: ['Scorecard', 'Historial verificable', 'Capacidad abierta', 'Más órdenes de marcas'],
  },
]

export default function UseCases() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

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
            Casos de Uso
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bloom-navy mb-4">
            Cómo usan BLOOMTEX las marcas, hilaturas y talleres
          </h2>
          <p className="text-gray-600 text-lg">
            Escenarios de uso de la plataforma en cada eslabón de la cadena textil: así puede apoyar
            tu operación en Paraguay y Latinoamérica.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col"
            >
              <span className="inline-block text-xs font-semibold text-bloom-purple bg-bloom-purple/10 px-3 py-1 rounded-full mb-3 self-start">
                {c.tag}
              </span>
              <p className="text-sm text-gray-500 mb-2">{c.subtitle}</p>
              <h3 className="font-display text-lg font-semibold text-bloom-navy mb-3">{c.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{c.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {c.points.map((p, j) => (
                  <span
                    key={j}
                    className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <a
                href="#cta"
                className="inline-flex items-center gap-1 text-sm font-semibold text-bloom-purple hover:gap-2 transition-all"
              >
                Ver solución <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
