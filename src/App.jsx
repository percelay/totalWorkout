import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Schedule from './components/Schedule';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Schedule />
      <Team />
      <Pricing />
      <Footer />
    </div>
  );
}
