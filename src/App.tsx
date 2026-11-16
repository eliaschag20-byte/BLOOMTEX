import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import AIAgent from './components/AIAgent'
import Simulator from './components/Simulator'
import Platform from './components/Platform'
import Comparison from './components/Comparison'
import Impact from './components/Impact'
import UseCases from './components/UseCases'
import Team from './components/Team'
import CTA from './components/CTA'
import Footer from './components/Footer'
import type { Currency } from './lib/currency'

function App() {
  const [currency, setCurrency] = useState<Currency>('PYG')

  return (
    <div className="min-h-screen">
      <Navbar currency={currency} setCurrency={setCurrency} />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <AIAgent />
        <Simulator currency={currency} />
        <Platform />
        <Comparison currency={currency} />
        <Impact />
        <UseCases />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
