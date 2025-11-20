import Spline from '@splinetool/react-spline';

const Hero = () => {
  const handleScrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[85vh] w-full bg-[#fff9f5] overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve contrast, allow interactions with 3D */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-[#fff9f5]/70 to-[#fff9f5]/95" />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-12 flex flex-col items-start">
        <span className="inline-block text-xs tracking-[0.2em] uppercase text-teal-700/70 font-medium mb-4">Skin Clinic • Asti</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-slate-900 max-w-2xl">
          La soluzione definitiva per Acne e Invecchiamento ad Asti
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-xl">
          Metodo clinico esclusivo "Zero Brufoli" e "Zero Rughe". Diagnosi scientifica, risultati visibili, senza aghi.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button onClick={handleScrollToBooking} className="inline-flex items-center justify-center rounded-full bg-teal-700 text-white px-6 py-3 text-sm sm:text-base font-medium shadow-lg shadow-teal-700/20 hover:bg-teal-800 transition">Prenota la tua Diagnosi</button>
          <a href="#metodo" className="inline-flex items-center justify-center rounded-full border border-slate-300 text-slate-800 px-6 py-3 text-sm sm:text-base font-medium hover:bg-white/70 transition">Scopri il Metodo</a>
        </div>
        <div className="mt-6 text-xs text-slate-600">Igiene certificata • Tecnologie avanzate • Risultati documentati</div>
      </div>
    </section>
  );
};

export default Hero;