export default function StatsSection({ stats }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-20">
      <div className="grid gap-4 rounded-[32px] border border-slate-200 bg-white/80 p-6 shadow-sm md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <p className="text-3xl font-semibold text-deep">{stat.value}</p>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
