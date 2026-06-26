import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, CheckCircle, Database, Zap, Cpu, Server } from 'lucide-react';
import AIWorkflowVisualizer from './AIWorkflowVisualizer';

export default function Hero() {
  // Live Active Automations Counter
  const [activeAutomations, setActiveAutomations] = useState(482939218);

  // Smooth counting/ticking simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAutomations((prev) => prev + Math.floor(Math.random() * 4) + 1);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-950">
      
      {/* Decorative futuristic background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-75 animate-grid-move pointer-events-none" />

      {/* Radiant ambient mesh glow spheres */}
      <div className="absolute left-1/4 -top-20 w-[600px] h-[400px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none animate-pulse-slow" />
      <div className="absolute right-1/4 -top-20 w-[600px] h-[400px] rounded-full bg-violet-500/10 blur-[130px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column (5/12) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight md:leading-[1.1]">
                Autonomous Data Ingestion. <br />
                <span className="gradient-text">Zero custom code.</span>
              </h1>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                AutomataAI is the enterprise-grade ingestion and synchronization network. Instantly parse unstructured formats, map complex schemas with AI, and sync to hundreds of target systems.
              </p>
            </div>

            {/* Dual CTA buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="px-6 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-xs font-heading font-semibold tracking-wide shadow-xl shadow-indigo-500/25 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Deploy Free Instance</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#features"
                className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-xs font-heading font-medium tracking-wide transition-all cursor-pointer active:scale-95"
              >
                Explore Features
              </a>
            </div>

            {/* Checkmark Trust signals */}
            <div className="grid grid-cols-2 gap-y-3.5 gap-x-6 text-xs text-gray-400 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>Sub-second Latency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>99.99% Schema Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>SOC2 Compliant Logs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>No Credit Card Req.</span>
              </div>
            </div>

          </div>

          {/* Right Column: AI Workflow Visualizer (7/12) */}
          <div className="lg:col-span-7 w-full animate-float">
            <AIWorkflowVisualizer />
          </div>

        </div>

        {/* Brand/Trust Partners bar */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase font-semibold">
            TRUSTED BY ELITE PLATFORM ENGINEERS AT:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40 hover:opacity-75 transition-opacity duration-300">
            {/* Partner 1: Snowflake Placeholder */}
            <div className="flex items-center gap-1.5 font-heading font-bold text-sm text-white">
              <Database className="h-4 w-4 text-indigo-400" />
              <span>SNOWFLAKE</span>
            </div>
            {/* Partner 2: Stripe Placeholder */}
            <div className="flex items-center gap-1.5 font-heading font-bold text-sm text-white">
              <Zap className="h-4 w-4 text-indigo-400" />
              <span>STRIPE</span>
            </div>
            {/* Partner 3: Salesforce Placeholder */}
            <div className="flex items-center gap-1.5 font-heading font-bold text-sm text-white">
              <Server className="h-4 w-4 text-indigo-400" />
              <span>SALESFORCE</span>
            </div>
            {/* Partner 4: Slack Placeholder */}
            <div className="flex items-center gap-1.5 font-heading font-bold text-sm text-white">
              <Cpu className="h-4 w-4 text-indigo-400" />
              <span>SLACK ENGINE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
