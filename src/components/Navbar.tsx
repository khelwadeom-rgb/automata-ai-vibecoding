import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Activity, Zap } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/5 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <Logo size={36} />
            <span className="font-heading font-bold text-xl text-white tracking-tight transition-all duration-300 group-hover:text-indigo-300">
              Automata<span className="text-indigo-400 font-extrabold group-hover:text-white transition-colors duration-300">AI</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#workflow" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Workflow Compiler
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              FAQ
            </a>
          </div>

          {/* Action CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#pricing" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
              Sign In
            </a>
            <a
              href="#pricing"
              className="px-4.5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-xs font-heading font-semibold tracking-wide shadow-lg shadow-indigo-500/20 active:scale-95 transition-all flex items-center gap-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle Menu */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white focus:outline-none transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-white/5 shadow-2xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[300px] py-6' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          <a
            href="#features"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-gray-300 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#workflow"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-gray-300 hover:text-white transition-colors"
          >
            Workflow Compiler
          </a>
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-gray-300 hover:text-white transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-gray-300 hover:text-white transition-colors"
          >
            FAQ
          </a>
          <div className="h-[1px] bg-white/5 my-2" />
          <div className="flex items-center justify-between">
            <a href="#pricing" onClick={() => setIsOpen(false)} className="text-sm font-bold text-gray-400">
              Sign In
            </a>
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-xs font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
