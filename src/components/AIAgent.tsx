import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, MessageSquare } from 'lucide-react'

export default function AIAgent() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-bloom-purple font-semibold text-sm uppercase tracking-wider mb-3">
              Agente de IA
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-bloom-navy mb-4">
              Bloom, nuestro agente de IA
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Un asistente chat-first conectado a todos los puntos neurálgicos de tu negocio. Haz
              preguntas cotidianas y obtén respuestas operativas con datos en tiempo real.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Respuestas instantáneas fundamentadas en tus propios números',
                'Detección de patrones de compra y velocidad de venta por SKU',
                'Preparación de órdenes de compra listas para enviar a taller',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-bloom-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-bloom-green" />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500">
              Olvídate de abrir múltiples pestañas. Pregúntale a Bloom "¿Qué canal genera más
              ingresos?" o "¿Qué debo reabastecer?" y procesará información de Shopify, stock actual
              y capacidad de tus talleres en Paraguay.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl border border-gray-100 p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-bloom-purple flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-bloom-navy">Bloom · Asistente de Operaciones</p>
                <p className="text-xs text-bloom-green flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-bloom-green animate-pulse" />
                  En línea · Integrado con Shopify & ERP
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-sm text-gray-700">
                  ¿Qué canal genera más ingresos esta semana y qué debo reabastecer antes de agotar
                  stock?
                </p>
              </div>

              <div className="bg-bloom-purple/5 rounded-xl p-4 border border-bloom-purple/10">
                <p className="text-sm text-gray-700 mb-3">
                  Analicé las ventas de los últimos 14 días en todos tus canales vinculados
                  (Shopify e Instagram Shopping):
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-3">
                  <li>
                    • <strong>Shopify</strong> representa el <strong>72% de los ingresos netos</strong>{' '}
                    esta semana.
                  </li>
                  <li>
                    • El producto con mayor aceleración es el <strong>Vestido Midi de Lino</strong>:
                    registra un <strong>+24% de velocidad de venta</strong>. Tu stock actual en
                    almacén es de solo 35 unidades.
                  </li>
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm">
                  <p className="font-medium text-amber-800">Recomendación predictiva</p>
                  <p className="text-amber-700">Riesgo de agotado en 8 días</p>
                  <p className="text-amber-700 mt-1">
                    Reabastecer <strong>200 unidades</strong> con tu taller asignado (Confecciones
                    Ciudad del Este) y pedir 420 metros de tela lino crudo.
                  </p>
                </div>
                <button className="mt-3 w-full bg-bloom-purple text-white text-sm font-medium py-2.5 rounded-lg hover:bg-bloom-purple/90 transition-colors">
                  Preparar orden de compra (200 unidades)
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
