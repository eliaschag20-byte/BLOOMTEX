import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Calendar } from 'lucide-react'

export default function CTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="cta" className="py-20 md:py-28 bg-bloom-navy text-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para dejar de producir a ciegas?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Agenda una demo personalizada con el equipo de BLOOMTEX y descubre cómo la IA puede
            reducir tu sobreproducción, recuperar capital de trabajo y conectar toda tu cadena textil
            en Paraguay.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hola@bloomtex.com.py?subject=Solicitud%20de%20demo%20BLOOMTEX"
              className="inline-flex items-center justify-center gap-2 bg-bloom-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-bloom-purple/90 transition-all shadow-lg shadow-bloom-purple/30"
            >
              <Calendar className="w-5 h-5" />
              Agenda una demo
            </a>
            <a
              href="#simulador"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-white/40 transition-colors"
            >
              Probar el simulador
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            Sin compromiso · Demo de 30 minutos · Soporte en español
          </p>
        </motion.div>
      </div>
    </section>
  )
}
