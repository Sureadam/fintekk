export default function AuthPage({ type, onBack, onSwitch }) {
  const isLogin = type === 'login';

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(46,92,255,0.08),_transparent_32%),linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)] px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center">
        <div className="max-w-xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-blue-100 sm:p-10">
          <button onClick={onBack} className="text-sm font-medium text-brand">← Back to home</button>
          <h1 className="mt-6 text-4xl font-semibold text-deep">
            {isLogin ? 'Welcome back' : 'Create your account'}
          </h1>
          <p className="mt-3 text-lg leading-8 text-muted">
            {isLogin
              ? 'Sign in to continue managing your finances with Fintekk.'
              : 'Open a Fintekk account and enjoy payments, savings, and investments in one place.'}
          </p>

          <form className="mt-8 space-y-4">
            {!isLogin && (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">Full name</label>
                <input type="text" placeholder="Jane Doe" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
              </div>
            )}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">Email address</label>
              <input type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">Password</label>
              <input type="password" placeholder="••••••••" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
            </div>
            <button type="button" className="w-full rounded-2xl bg-brand px-4 py-3 font-semibold text-white">
              {isLogin ? 'Log in' : 'Create account'}
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-500">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button onClick={onSwitch} className="font-semibold text-brand">
              {isLogin ? 'Create one' : 'Log in'}
            </button>
          </p>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-xl shadow-blue-100 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Why users love Fintekk</p>
          <ul className="mt-6 space-y-4 text-lg text-slate-700">
            <li>• Secure payments and instant transfers</li>
            <li>• Simple savings goals and smart insights</li>
            <li>• Everything from one beautifully designed dashboard</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
