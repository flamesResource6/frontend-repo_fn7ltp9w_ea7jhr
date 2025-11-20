import { useEffect, useState } from 'react';

const SocialProof = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || '';
        const res = await fetch(`${base}/api/testimonials`);
        const data = await res.json();
        setTestimonials(data);
      } catch (e) {
        setTestimonials([]);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Prima & Dopo • Testimonianze</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 bg-white/70">
              <p className="text-slate-800">“{t.text}”</p>
              <div className="mt-3 text-sm text-slate-500">{t.name}</div>
            </div>
          ))}
          {testimonials.length === 0 && (
            <div className="col-span-full text-slate-600">Le recensioni verranno caricate qui.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;