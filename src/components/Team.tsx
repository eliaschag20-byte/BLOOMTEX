import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const team = [
  {
    name: 'Valeria García',
    role: 'Founder & CEO',
    bio: 'Lidera la visión estratégica de BLOOMTEX y las relaciones con la industria textil paraguaya y regional. Apasionada por la moda circular y la tecnología aplicada a PyMEs.',
  },
  {
    name: 'Elias Chavez',
    role: 'Founder & CTO',
    bio: 'Arquitecto de la plataforma de IA y los sistemas de predicción. Especialista en machine learning aplicado a cadenas de suministro y operaciones manufactureras.',
  },
  {
    name: 'Nicole Cáceres',
    role: 'Founder & CFO',
    bio: 'Responsable de la estructura financiera, modelos de pricing y relaciones con inversores. Enfocada en hacer accesible la tecnología a las PyMEs del sector.',
  },
]

export default function Team() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="equipo" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-bloom-purple font-semibold text-sm uppercase tracking-wider mb-3">
            El equipo
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bloom-navy mb-4">
            Fundadores de BLOOMTEX
          </h2>
          <p className="text-gray-600 text-lg">
            Un equipo paraguayo comprometido con transformar la industria textil de Paraguay y
            Latinoamérica mediante inteligencia artificial y operaciones conectadas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-bloom-purple/20 transition-colors"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-bloom-purple to-bloom-purple-light flex items-center justify-center text-white text-2xl font-bold font-display">
                {member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <h3 className="font-display text-xl font-semibold text-bloom-navy">{member.name}</h3>
              <p className="text-bloom-purple font-medium text-sm mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
