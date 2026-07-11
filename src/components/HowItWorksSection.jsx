export default function HowItWorksSection({ steps, phone }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-20">
      <div className="flex justify-center">
        <img src={phone} alt="Mobile app preview" className="max-w-full" />
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">How it works</p>
        <p className="mt-3 text-4xl font-semibold leading-tight text-deep">
          Start the journey to reach your financial goals today.
        </p>
        <div className="mt-8 space-y-4">
          {steps.map(([number, title]) => (
            <div key={number} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                  {number}
                </div>
                <p className="text-lg font-medium text-deep">{title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#" className="rounded-2xl bg-brand px-6 py-3 text-white transition hover:-translate-y-0.5">Download</a>
          <a href="#" className="rounded-2xl border border-brand px-6 py-3 text-brand transition hover:bg-brand hover:text-white">Try Fintekk Now</a>
        </div>
      </div>
    </section>
  );
}
