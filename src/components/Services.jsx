const Services = () => {
  const services = [
    {
      title: 'Anti-Age Clinico',
      text: 'Rassodamento, luminosità e prevenzione delle rughe con protocolli non invasivi.',
    },
    {
      title: 'Zero Brufoli',
      text: 'Percorso mirato contro acne attiva e segni: risultati documentati con foto.',
    },
    {
      title: 'Detersione Profonda',
      text: 'Pulizia accurata e igienica per pelli impure o sensibili.',
    },
  ];

  return (
    <section className="bg-[#fffaf7]">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Trattamenti Principali</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl border border-[#ecd8cb] bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-700">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;