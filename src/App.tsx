import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoAccordion from './components/BentoAccordion';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  
  // Custom Intersection Observer Scroll Animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-12');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, observerOptions);

    const targetElements = document.querySelectorAll('.scroll-reveal');
    targetElements.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-12', 'transition-all', 'duration-1000', 'ease-out');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 relative selection:bg-indigo-500/30 selection:text-white">
      {/* Top sticky navbar */}
      <Navbar />

      <main>
        {/* Hero Section containing Headline, CTAs, Trust Partners, and Interactive Workflow Visualizer */}
        <section className="scroll-reveal">
          <Hero />
        </section>

        {/* Bento Grid Features Section on Desktop, converting to Accordion on Mobile (with Context Lock) */}
        <section id="features-section" className="scroll-reveal">
          <BentoAccordion />
        </section>

        {/* Pricing Matrix Section with billing toggle and currency switch (with 100% isolated DOM updates) */}
        <section id="pricing-section" className="scroll-reveal">
          <Pricing />
        </section>

        {/* Social Proof / Testimonials Section */}
        <section id="testimonials-section" className="scroll-reveal">
          <Testimonials />
        </section>

        {/* Frequently Asked Questions Section */}
        <section id="faq-section" className="scroll-reveal">
          <FAQ />
        </section>
      </main>

      {/* Footer Section with newsletter capture and detailed directory links */}
      <Footer />
    </div>
  );
}
