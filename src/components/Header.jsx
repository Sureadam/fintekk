export default function Header({ onLogin, onSignup, menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-20">
        <a href="#" className="text-2xl font-semibold text-brand">Fintekk</a>
        <nav className="hidden gap-6 text-lg text-slate-800 md:flex">
          <a href="#" className="transition hover:text-brand">Home</a>
          <a href="#about" className="transition hover:text-brand">About</a>
          <a href="#faq" className="transition hover:text-brand">FAQs</a>
          <a href="#contact" className="transition hover:text-brand">Contact Us</a>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <button onClick={onLogin} className="rounded-2xl border border-brand px-5 py-3 text-brand transition hover:bg-brand hover:text-white">Login</button>
          <button onClick={onSignup} className="rounded-2xl bg-brand px-5 py-3 text-white shadow-lg shadow-blue-100 transition hover:-translate-y-0.5">Sign Up for Free</button>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 bg-brand/5 md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle navigation">
          {menuOpen ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-6 rounded bg-brand"></span>
              <span className="h-0.5 w-6 rounded bg-brand"></span>
              <span className="h-0.5 w-6 rounded bg-brand"></span>
            </div>
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="mx-4 mb-4 rounded-2xl bg-brand p-6 text-white shadow-xl md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#faq">FAQs</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      )}
    </header>
  );
}
