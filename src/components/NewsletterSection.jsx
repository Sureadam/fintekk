export default function NewsletterSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
      <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-br from-[#f5f7ff] via-white to-[#eef4ff] p-8 shadow-xl shadow-blue-100 sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Grow with us</p>
            <p className="mt-3 text-3xl font-semibold leading-tight text-deep sm:text-4xl">Start growing your wealth today</p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
              Join thousands of people building better financial habits with a bank designed for modern life.
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <label className="text-sm font-medium text-slate-600">Email address</label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input type="text" placeholder="Enter your email address" className="flex-1 rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
              <button className="rounded-2xl bg-brand px-6 py-3 font-medium text-white">Sign up</button>
            </div>
            <p className="mt-3 text-sm text-slate-500">No spam. Just useful updates and product news.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
