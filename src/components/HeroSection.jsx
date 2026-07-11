export default function HeroSection({ onSignup, onLogin, highlights, hero, flt1, flt2, flt3 }) {
  return (
    <section className="relative overflow-hidden px-6 py-16 lg:px-20 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(46,92,255,0.16),_transparent_30%)]"></div>
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <div className="inline-flex rounded-full border border-brand/15 bg-brand/10 px-4 py-2 text-sm font-medium text-brand">
            Trusted by 10,000+ modern users
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-tight text-deep sm:text-6xl">
            Banking that feels effortless and built for your goals.
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted">
            Fintekk combines payments, savings, and investments in one beautiful experience so your money works smarter.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={onSignup} className="rounded-2xl bg-brand px-6 py-4 text-lg font-medium text-white shadow-lg shadow-blue-100 transition hover:-translate-y-0.5">Sign Up for Free</button>
            <button onClick={onLogin} className="rounded-2xl border border-slate-300 px-6 py-4 text-lg text-slate-700 transition hover:border-brand hover:text-brand">Get the app</button>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {highlights.map((item) => (
              <div key={item} className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-cyan-200/70 blur-3xl"></div>
          <div className="absolute -bottom-8 right-4 h-24 w-24 rounded-full bg-blue-200/70 blur-3xl"></div>
          <img src={hero} alt="Fintekk app preview" className="relative w-full rounded-[48px] border border-slate-100 bg-[#F4F6FF] shadow-2xl shadow-blue-100" />
          <div className="absolute left-4 top-24 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-soft">
            <img src={flt1} alt="payments" className="h-12 w-12" />
            <div>
              <p className="font-medium">Payments</p>
              <div className="mt-1 h-1.5 w-24 rounded-full bg-slate-200">
                <div className="h-1.5 w-20 rounded-full bg-cyan-400"></div>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-10 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-soft">
            <img src={flt2} alt="savings" className="h-12 w-12" />
            <div>
              <p className="font-medium">Savings</p>
              <div className="mt-1 h-1.5 w-24 rounded-full bg-slate-200">
                <div className="h-1.5 w-10 rounded-full bg-pink-400"></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-12 right-6 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-soft">
            <img src={flt3} alt="investments" className="h-12 w-12" />
            <div>
              <p className="font-medium">Investments</p>
              <div className="mt-1 h-1.5 w-24 rounded-full bg-slate-200">
                <div className="h-1.5 w-20 rounded-full bg-indigo-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
