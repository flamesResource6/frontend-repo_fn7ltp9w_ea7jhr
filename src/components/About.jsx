const About = () => {
  return (
    <section className="bg-[#fffaf7]">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Meri • Skin Specialist</h2>
          <p className="mt-3 text-slate-700">Ho sofferto di acne per anni: so cosa significa evitare gli specchi e i selfie. Oggi aiuto donne come te a ritrovare una pelle sana e luminosa con un approccio clinico ma accogliente.</p>
          <ul className="mt-6 space-y-2 text-slate-800">
            <li>• Specializzazione in analisi cutanea</li>
            <li>• Procedure igieniche certificate</li>
            <li>• Oltre 1.000 casi seguiti tra acne e anti-age</li>
          </ul>
        </div>
        <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#f7e9df] to-[#fff] border border-[#ecd8cb]" />
      </div>
    </section>
  );
};

export default About;