import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PricingCalculator from './components/PricingCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"></div>
      </div>

      <Navbar />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        <Services />
        <PricingCalculator />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
