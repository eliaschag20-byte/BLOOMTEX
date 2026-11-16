import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { formatCurrency, formatNumber, type Currency } from '../lib/currency'

interface SimulatorProps {
  currency: Currency
}

type Role = 'marcas' | 'productores' | 'talleres'

export default function Simulator({ currency }: SimulatorProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [role, setRole] = useState<Role>('marcas')

  // Marcas
  const [prendas, setPrendas] = useState(45000)
  const [costoPrenda, setCostoPrenda] = useState(32)
  const [sobreprod, setSobreprod] = useState(24)

  // Productores
  const [metros, setMetros] = useState(65000)
  const [costoMetro, setCostoMetro] = useState(8.5)
  const [merma, setMerma] = useState(14)

  // Talleres
  const [operadores, setOperadores] = useState(28)
  const [capacidad, setCapacidad] = useState(14000)
  const [ociosa, setOciosa] = useState(30)

  const results = useMemo(() => {
    if (role === 'marcas') {
      const ahorroPct = 0.3
      const capital = prendas * (sobreprod / 100) * costoPrenda * ahorroPct
      const prendasSalvadas = Math.round(prendas * (sobreprod / 100) * ahorroPct)
      const co2 = prendasSalvadas * 0.015 // approx
      return {
        capital,
        secondary: prendasSalvadas,
        tertiary: co2,
        labels: ['Capital de Trabajo Recuperado', 'Prendas Salvadas', 'CO₂ Evitado'],
        units: ['', ' pzas', ' t'],
      }
    }
    if (role === 'productores') {
      const reduccion = 0.22
      const capital = metros * 12 * (merma / 100) * costoMetro * reduccion
      const metrosSalvados = Math.round(metros * 12 * (merma / 100) * reduccion)
      const agua = metrosSalvados * 25 // approx liters
      return {
        capital,
        secondary: metrosSalvados,
        tertiary: agua,
        labels: ['Capital Recuperado en Planta', 'Metros Salvados', 'Agua Preservada'],
        units: ['', ' m', ' L'],
      }
    }
    // talleres
    const ingresoExtra = capacidad * 12 * (ociosa / 100) * 0.28 * 8 // approx margin
    const prendasExtra = Math.round(capacidad * 12 * (ociosa / 100) * 0.28)
    return {
      capital: ingresoExtra,
      secondary: prendasExtra,
      tertiary: 98.4,
      labels: ['Ingreso Adicional Anual', 'Prendas Extra', 'Scorecard Proyectado'],
      units: ['', ' pzas', ' / 100'],
    }
  }, [role, prendas, costoPrenda, sobreprod, metros, costoMetro, merma, capacidad, ociosa])

  const roles = [
    { id: 'marcas' as Role, label: '🏷️ Marcas de Moda' },
    { id: 'productores' as Role, label: '🧵 Productores Textiles' },
    { id: 'talleres' as Role, label: '✂️ Talleres y Maquila' },
  ]

  return (
    <section id="simulador" className="py-20 md:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-bloom-purple font-semibold text-sm uppercase tracking-wider mb-3">
            Simulador Interactivo de Cadena Textil
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bloom-navy mb-4">
            Calcula el impacto y ahorro económico en tu operación
          </h2>
          <p className="text-gray-600 text-lg">
            Selecciona tu rol en la cadena textil para proyectar la reducción de mermas, el capital
            de trabajo recuperado y el impacto ambiental medible.
          </p>
        </motion.div>

        {/* Role tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => setRole(r.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                role === r.id
                  ? 'bg-bloom-purple text-white shadow-md shadow-bloom-purple/20'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-bloom-purple/30'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm"
          >
            {role === 'marcas' && (
              <div className="space-y-6">
                <div>
                  <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                    <span>Prendas producidas al año</span>
                    <span className="text-bloom-purple">{formatNumber(prendas)} pzas</span>
                  </label>
                  <input
                    type="range"
                    min={10000}
                    max={200000}
                    step={1000}
                    value={prendas}
                    onChange={(e) => setPrendas(Number(e.target.value))}
                    className="w-full accent-bloom-purple"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>10K</span>
                    <span>200K</span>
                  </div>
                </div>
                <div>
                  <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                    <span>Costo promedio por prenda</span>
                    <span className="text-bloom-purple">{formatCurrency(costoPrenda, currency)}</span>
                  </label>
                  <input
                    type="range"
                    min={8}
                    max={120}
                    step={1}
                    value={costoPrenda}
                    onChange={(e) => setCostoPrenda(Number(e.target.value))}
                    className="w-full accent-bloom-purple"
                  />
                </div>
                <div>
                  <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                    <span>Sobreproducción / remanente actual</span>
                    <span className="text-bloom-purple">{sobreprod}%</span>
                  </label>
                  <input
                    type="range"
                    min={10}
                    max={40}
                    step={1}
                    value={sobreprod}
                    onChange={(e) => setSobreprod(Number(e.target.value))}
                    className="w-full accent-bloom-purple"
                  />
                </div>
              </div>
            )}

            {role === 'productores' && (
              <div className="space-y-6">
                <div>
                  <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                    <span>Metros de tela producidos al mes</span>
                    <span className="text-bloom-purple">{formatNumber(metros)} m</span>
                  </label>
                  <input
                    type="range"
                    min={10000}
                    max={250000}
                    step={1000}
                    value={metros}
                    onChange={(e) => setMetros(Number(e.target.value))}
                    className="w-full accent-bloom-purple"
                  />
                </div>
                <div>
                  <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                    <span>Costo promedio por metro</span>
                    <span className="text-bloom-purple">{formatCurrency(costoMetro, currency)}</span>
                  </label>
                  <input
                    type="range"
                    min={2}
                    max={30}
                    step={0.5}
                    value={costoMetro}
                    onChange={(e) => setCostoMetro(Number(e.target.value))}
                    className="w-full accent-bloom-purple"
                  />
                </div>
                <div>
                  <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                    <span>Merma actual en tejeduría y rollos</span>
                    <span className="text-bloom-purple">{merma}%</span>
                  </label>
                  <input
                    type="range"
                    min={5}
                    max={25}
                    step={1}
                    value={merma}
                    onChange={(e) => setMerma(Number(e.target.value))}
                    className="w-full accent-bloom-purple"
                  />
                </div>
              </div>
            )}

            {role === 'talleres' && (
              <div className="space-y-6">
                <div>
                  <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                    <span>Operadores de costura activos</span>
                    <span className="text-bloom-purple">{operadores} costureros</span>
                  </label>
                  <input
                    type="range"
                    min={5}
                    max={150}
                    step={1}
                    value={operadores}
                    onChange={(e) => setOperadores(Number(e.target.value))}
                    className="w-full accent-bloom-purple"
                  />
                </div>
                <div>
                  <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                    <span>Capacidad mensual de confección</span>
                    <span className="text-bloom-purple">{formatNumber(capacidad)} pzas</span>
                  </label>
                  <input
                    type="range"
                    min={2000}
                    max={60000}
                    step={500}
                    value={capacidad}
                    onChange={(e) => setCapacidad(Number(e.target.value))}
                    className="w-full accent-bloom-purple"
                  />
                </div>
                <div>
                  <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                    <span>Capacidad ociosa en temporada baja</span>
                    <span className="text-bloom-purple">{ociosa}%</span>
                  </label>
                  <input
                    type="range"
                    min={10}
                    max={50}
                    step={1}
                    value={ociosa}
                    onChange={(e) => setOciosa(Number(e.target.value))}
                    className="w-full accent-bloom-purple"
                  />
                </div>
              </div>
            )}
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="bg-bloom-navy text-white rounded-2xl p-6 md:p-8 flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-300 mb-1">{results.labels[0]}</p>
                <p className="text-3xl md:text-4xl font-bold text-bloom-purple-light">
                  {formatCurrency(results.capital, currency)}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Ahorro / ingreso anual estimado con BLOOMTEX
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-300 mb-1">{results.labels[1]}</p>
                  <p className="text-2xl font-bold">
                    {formatNumber(results.secondary)}
                    {results.units[1]}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">{results.labels[2]}</p>
                  <p className="text-2xl font-bold">
                    {typeof results.tertiary === 'number' && results.tertiary < 100
                      ? results.tertiary.toFixed(1)
                      : formatNumber(Math.round(results.tertiary))}
                    {results.units[2]}
                  </p>
                </div>
              </div>
              <a
                href="#cta"
                className="inline-flex items-center justify-center w-full bg-bloom-purple text-white py-3.5 rounded-full font-semibold hover:bg-bloom-purple/90 transition-colors"
              >
                Quiero este ahorro en mi operación
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
