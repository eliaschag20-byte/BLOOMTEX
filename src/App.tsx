import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Agent from './components/Agent';
import Simulator from './components/Simulator';
import Sustainability from './components/Sustainability';
import Platform from './components/Platform';
import Comparison from './components/Comparison';
import Impact from './components/Impact';
import UseCases from './components/UseCases';
import Team from './components/Team';
import Demo from './components/Demo';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Agent />
        <Simulator />
        <Sustainability />
        <Platform />
        <Comparison />
        <Impact />
        <UseCases />
        <Team />
        <Demo />
      </main>
      <Footer />
    </>
  );
}
