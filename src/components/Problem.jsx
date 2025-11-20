const Problem = () => {
  const bullets = [
    'Stanca di coprire brufoli e macchie ogni giorno?',
    'Prodotti e trattamenti generici non funzionano?',
    'Pelle che tira, pori dilatati, segni che peggiorano?'
  ];
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Il Problema</h2>
        <p className="mt-3 text-slate-700 max-w-2xl">Se stai leggendo questo, probabilmente hai provato di tutto. Creme costose, consigli online, trattamenti "standard". Il problema non sei tu: è la mancanza di una diagnosi corretta.</p>
        <ul className="mt-6 grid sm:grid-cols-3 gap-4">
          {bullets.map((b, i) => (
            <li key={i} className="bg-[#fff9f5] border border-[#f1e7df] rounded-xl p-4 text-slate-800">{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Problem;