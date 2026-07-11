export default function FaqSection({ faqs, activeFaq, setActiveFaq, pana }) {
  return (
    <section id="faq" className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:px-20">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">FAQs</p>
        <p className="mt-3 text-4xl font-semibold text-deep">Questions we hear often</p>
        <div className="mt-8 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = activeFaq === index;

            return (
              <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left"
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                >
                  <p className="text-lg text-slate-800">{item.question}</p>
                  <span className={`text-xl text-brand transition ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                {isOpen && <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <img src={pana} alt="FAQ illustration" className="max-w-full" />
      </div>
    </section>
  );
}
