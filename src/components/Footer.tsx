import { Zap, Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-slate-950 border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative glow background */}
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Top CTA Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight">
              Ready to automate your pipelines?
            </h3>
            <p className="text-sm text-gray-400 max-w-lg">
              Set up your first PostgreSQL trigger, CSV ingestion sheet, or REST webhook endpoint. Get full analytics in under 5 minutes.
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-3">
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your enterprise email..."
              className="flex-1 px-4.5 py-3 rounded-xl bg-slate-900 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button
              id="newsletter-submit"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 active:scale-[0.98] text-white rounded-xl text-xs font-heading font-semibold tracking-wide shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Sandbox Access</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Directory Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <a href="#" className="flex items-center gap-3 group focus:outline-none">
              <Logo size={32} />
              <span className="font-heading font-bold text-lg text-white tracking-tight">
                Automata<span className="text-indigo-400 font-extrabold group-hover:text-white transition-colors">AI</span>
              </span>
            </a>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Autonomous schema translation, edge ingestion tracking, and continuous synchronization. Build expensive and blazing-fast data structures.
            </p>
          </div>

          {/* Column 1 */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase text-gray-400 tracking-wider">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="text-gray-500 hover:text-white transition-colors">Features Grid</a></li>
              <li><a href="#workflow" className="text-gray-500 hover:text-white transition-colors">Workflow Compiler</a></li>
              <li><a href="#pricing" className="text-gray-500 hover:text-white transition-colors">Pricing Matrix</a></li>
              <li><a href="#faq" className="text-gray-500 hover:text-white transition-colors">Security Guard</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase text-gray-400 tracking-wider">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Developer Docs</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Uptime Monitor</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase text-gray-400 tracking-wider">Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">SSO & SAML Security</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Sub-Processors</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Social & Copyright Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xs text-gray-600 font-mono">
            &copy; {currentYear} AutomataAI Inc. All rights reserved. Made for enterprise reliability.
          </span>

          <div className="flex items-center gap-4">
            <a href="#" className="p-2 bg-slate-900 border border-white/5 rounded-lg text-gray-500 hover:text-white transition-all cursor-pointer">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" className="p-2 bg-slate-900 border border-white/5 rounded-lg text-gray-500 hover:text-white transition-all cursor-pointer">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="p-2 bg-slate-900 border border-white/5 rounded-lg text-gray-500 hover:text-white transition-all cursor-pointer">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
