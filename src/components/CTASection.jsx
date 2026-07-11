export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-4 lg:px-20">
      <div className="rounded-[32px] bg-gradient-to-r from-brand to-sky-500 p-8 text-white shadow-2xl shadow-blue-100">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-100">Why people choose us</p>
            <p className="mt-2 text-3xl font-semibold">A financial experience the whole family can enjoy.</p>
          </div>
          <a href="#" className="rounded-2xl bg-white px-5 py-3 font-medium text-brand">Try Fintekk now</a>
        </div>
      </div>
    </section>
  );
}
