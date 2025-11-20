import Hero from './components/Hero';
import Problem from './components/Problem';
import Method from './components/Method';
import About from './components/About';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import Booking from './components/Booking';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-semibold tracking-tight">Meri Skin Perfect</div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#metodo" className="hover:text-teal-700">Metodo</a>
            <a href="#" className="hover:text-teal-700">Risultati</a>
            <a href="#booking" className="px-4 py-2 rounded-full bg-teal-700 text-white hover:bg-teal-800">Prenota</a>
          </nav>
        </div>
      </header>
      <main>
        <Hero />
        <Problem />
        <Method />
        <About />
        <SocialProof />
        <Services />
        <Booking />
      </main>
      <footer className="bg-[#0f172a] text-slate-200">
        <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-lg font-semibold">Meri Skin Perfect</div>
            <p className="mt-2 text-slate-400">Skin Clinic specializzata in Acne e Anti-age ad Asti.</p>
          </div>
          <div>
            <div className="font-medium">Contatti</div>
            <p className="mt-2 text-slate-400">Asti (AT), Italia</p>
            <p className="text-slate-400">Lun–Ven 10:00–19:00</p>
            <div className="mt-2 text-slate-400">Instagram • Facebook</div>
          </div>
          <div>
            <div className="font-medium">Mappa</div>
            <div className="mt-2 aspect-[4/3] rounded-xl overflow-hidden">
              <iframe title="Mappa Asti" loading="lazy" src="https://www.google.com/maps?q=Asti,Italia&output=embed" className="w-full h-full border-0"></iframe>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Meri Skin Perfect. Tutti i diritti riservati.</div>
      </footer>
    </div>
  );
}

export default App;