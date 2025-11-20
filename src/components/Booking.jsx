import { useState } from 'react';

const Booking = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '', preferred_day: '', preferred_time: '', consent: true });
  const [status, setStatus] = useState(null);

  const base = import.meta.env.VITE_BACKEND_URL || '';

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${base}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email || undefined,
          message: form.message || undefined,
          preferred_day: form.preferred_day || undefined,
          preferred_time: form.preferred_time || undefined,
          consent: !!form.consent,
          source: 'website'
        })
      });
      if (!res.ok) throw new Error('Errore di invio');
      setStatus('success');
      setForm({ name: '', phone: '', email: '', message: '', preferred_day: '', preferred_time: '', consent: true });
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section id="booking" className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Prenota la tua Diagnosi della Pelle</h2>
          <p className="mt-3 text-slate-700">Compila il form e ti contatteremo per fissare la prima consulenza in studio ad Asti.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm text-slate-700 mb-1">Nome e Cognome</label>
            <input required name="name" value={form.name} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600" placeholder="Es. Maria Rossi" />
          </div>
          <div>
            <label className="block text-sm text-slate-700 mb-1">Telefono</label>
            <input required name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600" placeholder="Es. +39 333 1234567" />
          </div>
          <div>
            <label className="block text-sm text-slate-700 mb-1">Email (opzionale)</label>
            <input name="email" value={form.email} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600" placeholder="esempio@mail.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-slate-700 mb-1">Messaggio (opzionale)</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600" placeholder="Parlaci dei tuoi obiettivi"></textarea>
          </div>
          <div>
            <label className="block text-sm text-slate-700 mb-1">Giorno preferito</label>
            <input name="preferred_day" value={form.preferred_day} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600" placeholder="Es. Martedì" />
          </div>
          <div>
            <label className="block text-sm text-slate-700 mb-1">Orario preferito</label>
            <input name="preferred_time" value={form.preferred_time} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600" placeholder="Es. 15:30" />
          </div>
          <label className="sm:col-span-2 inline-flex items-center gap-2 text-sm text-slate-700">
            <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="accent-teal-700" />
            Acconsento al trattamento dei dati per essere ricontattata/o.
          </label>
          <div className="sm:col-span-2 flex items-center gap-4">
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-teal-700 text-white px-6 py-3 text-sm font-medium shadow-lg shadow-teal-700/20 hover:bg-teal-800 transition">Invia Richiesta</button>
            {status === 'loading' && <span className="text-slate-600 text-sm">Invio in corso…</span>}
            {status === 'success' && <span className="text-teal-700 text-sm">Richiesta inviata! Ti contatteremo presto.</span>}
            {status === 'error' && <span className="text-rose-700 text-sm">Si è verificato un errore. Riprova.</span>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;