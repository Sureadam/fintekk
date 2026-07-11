export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white px-6 py-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 text-sm text-muted lg:flex-row lg:justify-between">
        <div className="max-w-sm">
          <p className="text-xl font-semibold text-brand">Fintekk</p>
          <p className="mt-3 leading-7">Fintekk is the bank that does it all. Manage everything directly and easy with fintekk.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-deep">Company</p>
            <a href="#" className="transition hover:text-brand">About</a>
            <a href="#" className="transition hover:text-brand">Careers</a>
            <a href="#" className="transition hover:text-brand">Contact</a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-deep">Support</p>
            <a href="#" className="transition hover:text-brand">Help Center</a>
            <a href="#" className="transition hover:text-brand">FAQs</a>
            <a href="#" className="transition hover:text-brand">Privacy</a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-deep">Follow</p>
            <a href="#" className="transition hover:text-brand">Instagram</a>
            <a href="#" className="transition hover:text-brand">Twitter</a>
            <a href="#" className="transition hover:text-brand">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Fintekk. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="transition hover:text-brand">Terms</a>
          <a href="#" className="transition hover:text-brand">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
