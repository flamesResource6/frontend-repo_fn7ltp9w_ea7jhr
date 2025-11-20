const Method = () => {
  return (
    <section id="metodo" className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Il Metodo Scientifico</h2>
        <p className="mt-3 text-slate-700 max-w-2xl">
          "Zero Brufoli" e "Zero Rughe" nascono da un percorso preciso: si parte sempre da una diagnosi oggettiva con lampada di Wood e microcamera. In base ai dati, costruiamo un protocollo personalizzato, non invasivo.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[{
            title: 'Diagnosi Strumentale',
            text: 'Analisi con lampada di Wood e microcamera per individuare cause reali.'
          },{
            title: 'Protocollo Personalizzato',
            text: 'Trattamenti su misura e skincare domiciliare basata su evidenze.'
          },{
            title: 'Monitoraggio & Risultati',
            text: 'Controlli periodici e foto prima/dopo per documentare i progressi.'
          }].map((card, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 bg-white/70">
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-slate-700">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;