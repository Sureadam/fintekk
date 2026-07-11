export default function ServicesSection({ services }) {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Our Services</p>
          <p className="mt-3 text-4xl font-semibold text-deep">Built to make everyday money movement feel simple.</p>
          <p className="mt-4 max-w-md text-lg leading-8 text-muted">
            We help individuals become more flexible and responsible with their finances while handling payments smoothly and confidently.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img src={service.image} alt={service.title} className="mb-6 h-20 w-20" />
              <h3 className="text-xl font-semibold text-deep">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
              <a href="#" className="mt-5 inline-block text-brand">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
