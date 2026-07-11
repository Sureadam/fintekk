import { useState } from 'react';
import hero from '../img/hero.png';
import flt1 from '../img/flt1.png';
import flt2 from '../img/flt2.png';
import flt3 from '../img/flt3.png';
import easy from '../img/easy.png';
import invest from '../img/invest.png';
import fixed from '../img/fixed.png';
import phone from '../img/iPhone-13-Pro-Front.png';
import pana from '../img/pana.png';
import bloomberg from '../img/bloomberg logo.png';
import cnbc from '../img/CNBC logo.png';
import forbes from '../img/forbes.png';
import stripe from '../img/Stripe_Logo.png';
import quartz from '../img/Quartz logo.png';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import CTASection from './components/CTASection';
import HowItWorksSection from './components/HowItWorksSection';
import FaqSection from './components/FaqSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import AuthPage from './components/AuthPage';

const services = [
  {
    title: 'Easy Payments',
    description: 'Stress-free payment for all transactions that you do at any time.',
    image: easy,
  },
  {
    title: 'Investments',
    description: 'Grow your money by investing in pre-vetted investment opportunities.',
    image: invest,
  },
  {
    title: 'Fixed Savings',
    description: 'Build a dedicated savings faster on your terms automatically or manually.',
    image: fixed,
  },
];

const highlights = [
  'Instant transfers and bill payments',
  'Smart savings tools with goal tracking',
  'Secure onboarding and card setup in minutes',
];

const stats = [
  { value: '10k+', label: 'active users' },
  { value: '4.9/5', label: 'average rating' },
  { value: '24/7', label: 'support coverage' },
];

const steps = [
  ['01', 'Download the app'],
  ['02', 'Create a free account'],
  ['03', 'Add a payment method'],
];

const faqs = [
  {
    question: 'Is fintekk’s security guaranteed?',
    answer:
      'Yes. Fintekk uses bank-grade encryption, secure sign-in protection, and continuous monitoring to keep your account and transactions safe.',
  },
  {
    question: 'How do I activate my Fintekk account?',
    answer:
      'You can activate your account in minutes by downloading the app, creating your profile, and verifying your identity with your phone number and email.',
  },
  {
    question: 'What should I do if I forget my PIN?',
    answer:
      'If you forget your PIN, you can reset it securely from the login screen using your registered phone number or email address.',
  },
];

const testimonials = [
  {
    quote: 'The app feels modern, simple, and genuinely helpful for managing my money every day.',
    name: 'Maryam Adegoke',
    role: 'Product Designer',
  },
  {
    quote: 'I love how quickly I can pay, save, and invest without jumping between apps.',
    name: 'Daniel Brooks',
    role: 'Startup Founder',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [view, setView] = useState('home');

  if (view === 'login') {
    return <AuthPage type="login" onBack={() => setView('home')} onSwitch={() => setView('signup')} />;
  }

  if (view === 'signup') {
    return <AuthPage type="signup" onBack={() => setView('home')} onSwitch={() => setView('login')} />;
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(46,92,255,0.08),_transparent_32%),linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)] text-slate-900">
      <Header onLogin={() => setView('login')} onSignup={() => setView('signup')} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <HeroSection onSignup={() => setView('signup')} onLogin={() => setView('login')} highlights={highlights} hero={hero} flt1={flt1} flt2={flt2} flt3={flt3} />
        <StatsSection stats={stats} />

        <section className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-10 lg:px-20">
          <img src={bloomberg} alt="Bloomberg" className="h-8 opacity-70" />
          <img src={cnbc} alt="CNBC" className="h-8 opacity-70" />
          <img src={forbes} alt="Forbes" className="h-8 opacity-70" />
          <img src={stripe} alt="Stripe" className="h-8 opacity-70" />
          <img src={quartz} alt="Quartz" className="h-8 opacity-70" />
        </section>

        <ServicesSection services={services} />
        <CTASection />
        <HowItWorksSection steps={steps} phone={phone} />
        <FaqSection faqs={faqs} activeFaq={activeFaq} setActiveFaq={setActiveFaq} pana={pana} />
        <TestimonialsSection testimonials={testimonials} />
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
