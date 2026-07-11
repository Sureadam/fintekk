export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-20">
      <div className="grid gap-6 lg:grid-cols-2">
        {testimonials.map((item) => (
          <div key={item.name} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
            <div className="mt-6">
              <p className="font-semibold text-deep">{item.name}</p>
              <p className="text-sm text-muted">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
