import { useState } from 'react';
import { Database, BrainCircuit, ShieldAlert, Clock, ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';
import RealTimeDataFlow from './RealTimeDataFlow';

interface BentoCard {
  id: number;
  title: string;
  badge: string;
  icon: any;
  desc: string;
  colorClass: string;
  borderClass: string;
}

export default function BentoAccordion() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const bentoCards: BentoCard[] = [
    {
      id: 0,
      title: "Real-Time Pipeline Engine",
      badge: "Performance",
      icon: Database,
      desc: "An intelligent ingestion highway routing your telemetry, transactional, and server metrics natively in less than 15 milliseconds.",
      colorClass: "from-indigo-500/10 via-slate-900/40 to-slate-950",
      borderClass: "border-indigo-500/20",
    },
    {
      id: 1,
      title: "AI Semantic Translators",
      badge: "Artificial Intelligence",
      icon: BrainCircuit,
      desc: "Transform unstructured schemas automatically. Map fields instantly with zero custom code or hand-written scripts.",
      colorClass: "from-violet-500/10 via-slate-900/40 to-slate-950",
      borderClass: "border-violet-500/20",
    },
    {
      id: 2,
      title: "Active Threat Sanitizer",
      badge: "Security",
      icon: ShieldAlert,
      desc: "Continuously scan streaming data to prevent SQL injections, toxic keys, and PII leaks before writing to target replicas.",
      colorClass: "from-emerald-500/10 via-slate-900/40 to-slate-950",
      borderClass: "border-emerald-500/20",
    },
    {
      id: 3,
      title: "Cron & Multi-Trigger Scheduler",
      badge: "Automation",
      icon: Clock,
      desc: "Set sub-minute triggers, webhook listeners, or Event-bridge routers to sync data on precise user actions.",
      colorClass: "from-amber-500/10 via-slate-900/40 to-slate-950",
      borderClass: "border-amber-500/20",
    },
    {
      id: 4,
      title: "SOC2 Cryptographic Ledger",
      badge: "Compliance",
      icon: ShieldCheck,
      desc: "Generate comprehensive end-to-end trace logs for audit readiness. High-security, tamper-proof audit trails for all data points.",
      colorClass: "from-cyan-500/10 via-slate-900/40 to-slate-950",
      borderClass: "border-cyan-500/20",
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Decorative ambient background blur */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute left-10 bottom-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-xs text-indigo-300 font-mono tracking-wide">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
            Designed for Speed. <br />
            <span className="gradient-text">Engineered for absolute accuracy.</span>
          </h2>
          <p className="text-base text-gray-400">
            A unified suite of automation services managing billions of tasks with sub-millisecond precision. Hover to explore deep capabilities.
          </p>
        </div>

        {/* ----------------- DESKTOP: BENTO GRID (1024px & up) ----------------- */}
        <div className="hidden lg:grid grid-cols-12 gap-6 auto-rows-[240px]">
          {/* Card 0 (Large Row Span): Contains the real-time visualizer */}
          <div 
            id="bento-card-0"
            className={`col-span-8 row-span-2 rounded-2xl border bg-gradient-to-br ${bentoCards[0].colorClass} ${bentoCards[0].borderClass} overflow-hidden transition-all duration-300 ${activeIndex === 0 ? 'ring-2 ring-indigo-500/50 shadow-2xl scale-[1.01]' : 'hover:border-white/20'}`}
            onMouseEnter={() => setActiveIndex(0)}
          >
            <RealTimeDataFlow />
          </div>

          {/* Card 1: AI Translators (Interactive Code Preview) */}
          <div 
            id="bento-card-1"
            className={`col-span-4 row-span-1 rounded-2xl border bg-gradient-to-br ${bentoCards[1].colorClass} ${bentoCards[1].borderClass} p-6 overflow-hidden flex flex-col justify-between transition-all duration-300 ${activeIndex === 1 ? 'ring-2 ring-violet-500/50 shadow-2xl scale-[1.01]' : 'hover:border-white/20'}`}
            onMouseEnter={() => setActiveIndex(1)}
          >
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20">
                <BrainCircuit className="h-5 w-5 text-violet-400" />
              </div>
              <span className="text-[10px] font-mono font-medium text-violet-400 px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20">
                {bentoCards[1].badge}
              </span>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white mt-4 mb-1">{bentoCards[1].title}</h3>
              <p className="text-xs text-gray-400 line-clamp-2">{bentoCards[1].desc}</p>
            </div>
            {/* Embedded Tiny interactive conversion widget */}
            <div className="mt-3 bg-slate-950 rounded p-2.5 font-mono text-[10px] text-gray-400 border border-white/5">
              <span className="text-indigo-400">AI: </span>
              <span className="text-gray-300">"user_bday" ➔ "dateOfBirth" (ISO)</span>
            </div>
          </div>

          {/* Card 2: Security & Threat Prevention */}
          <div 
            id="bento-card-2"
            className={`col-span-4 row-span-1 rounded-2xl border bg-gradient-to-br ${bentoCards[2].colorClass} ${bentoCards[2].borderClass} p-6 overflow-hidden flex flex-col justify-between transition-all duration-300 ${activeIndex === 2 ? 'ring-2 ring-emerald-500/50 shadow-2xl scale-[1.01]' : 'hover:border-white/20'}`}
            onMouseEnter={() => setActiveIndex(2)}
          >
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <ShieldAlert className="h-5 w-5 text-emerald-400" />
              </div>
              <span className="text-[10px] font-mono font-medium text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                {bentoCards[2].badge}
              </span>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white mt-4 mb-1">{bentoCards[2].title}</h3>
              <p className="text-xs text-gray-400 line-clamp-2">{bentoCards[2].desc}</p>
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-[10px] font-mono text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>PII Masking & TLS 1.3 Strict</span>
            </div>
          </div>

          {/* Card 3: Cron & Automation Scheduling */}
          <div 
            id="bento-card-3"
            className={`col-span-6 row-span-1 rounded-2xl border bg-gradient-to-br ${bentoCards[3].colorClass} ${bentoCards[3].borderClass} p-6 overflow-hidden flex flex-col justify-between transition-all duration-300 ${activeIndex === 3 ? 'ring-2 ring-amber-500/50 shadow-2xl scale-[1.01]' : 'hover:border-white/20'}`}
            onMouseEnter={() => setActiveIndex(3)}
          >
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <Clock className="h-5 w-5 text-amber-400" />
              </div>
              <span className="text-[10px] font-mono font-medium text-amber-400 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                {bentoCards[3].badge}
              </span>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white mt-4 mb-1">{bentoCards[3].title}</h3>
              <p className="text-xs text-gray-400 line-clamp-2">{bentoCards[3].desc}</p>
            </div>
            <div className="flex items-center justify-between mt-3 text-[10px] font-mono text-gray-500 bg-slate-950 p-2 rounded border border-white/5">
              <span>cron expression:</span>
              <span className="text-amber-400">*/15 * * * *</span>
            </div>
          </div>

          {/* Card 4: Audit Ledger SOC2 */}
          <div 
            id="bento-card-4"
            className={`col-span-6 row-span-1 rounded-2xl border bg-gradient-to-br ${bentoCards[4].colorClass} ${bentoCards[4].borderClass} p-6 overflow-hidden flex flex-col justify-between transition-all duration-300 ${activeIndex === 4 ? 'ring-2 ring-cyan-500/50 shadow-2xl scale-[1.01]' : 'hover:border-white/20'}`}
            onMouseEnter={() => setActiveIndex(4)}
          >
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <ShieldCheck className="h-5 w-5 text-cyan-400" />
              </div>
              <span className="text-[10px] font-mono font-medium text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                {bentoCards[4].badge}
              </span>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white mt-4 mb-1">{bentoCards[4].title}</h3>
              <p className="text-xs text-gray-400 line-clamp-2">{bentoCards[4].desc}</p>
            </div>
            <div className="flex items-center justify-between mt-3 text-[10px] font-mono text-gray-500">
              <span className="text-cyan-400 font-medium">SOC2 Compliant Ledger</span>
              <span>SHA-256 Verified</span>
            </div>
          </div>
        </div>

        {/* ----------------- MOBILE: CONTEXT-LOCKED ACCORDION (<1024px) ----------------- */}
        <div className="block lg:hidden space-y-4">
          {bentoCards.map((card, idx) => {
            const Icon = card.icon;
            const isOpen = activeIndex === idx;

            return (
              <div 
                key={card.id}
                id={`accordion-item-${card.id}`}
                className={`rounded-xl border bg-gradient-to-br ${card.colorClass} ${card.borderClass} overflow-hidden transition-all duration-300 ${isOpen ? 'ring-1 ring-indigo-500/30 shadow-lg' : ''}`}
              >
                {/* Header Toggle */}
                <button
                  id={`accordion-trigger-${card.id}`}
                  onClick={() => setActiveIndex(idx)}
                  className="w-full text-left p-5 flex items-center justify-between focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      <Icon className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono tracking-wider text-gray-400 uppercase bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                        {card.badge}
                      </span>
                      <h3 className="font-heading text-sm font-semibold text-white mt-1">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`} />
                </button>

                {/* Animated Content Drawer */}
                <div 
                  className={`transition-all duration-500 ease-out overflow-hidden ${
                    isOpen ? 'max-h-[380px] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 space-y-4 bg-slate-950/40">
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {card.desc}
                    </p>

                    {/* Show relevant interactive demo component for Card 0 (Real-Time Ingestion) */}
                    {idx === 0 && (
                      <div className="rounded-xl border border-white/5 bg-slate-950 p-2">
                        <RealTimeDataFlow />
                      </div>
                    )}

                    {idx === 1 && (
                      <div className="bg-slate-950 rounded p-3 font-mono text-[11px] text-gray-400 border border-white/5">
                        <span className="text-indigo-400">AI Translator: </span>
                        <span>"user_bday" ➔ "dateOfBirth" (ISO)</span>
                      </div>
                    )}

                    {idx === 2 && (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>PII Masking & Encryption (AES-256)</span>
                      </div>
                    )}

                    {idx === 3 && (
                      <div className="flex items-center justify-between text-xs font-mono text-gray-400 bg-slate-950 p-3 rounded border border-white/5">
                        <span>Schedule:</span>
                        <span className="text-amber-400">*/15 * * * *</span>
                      </div>
                    )}

                    {idx === 4 && (
                      <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                        <span className="text-cyan-400 font-medium">SOC2 Compliant Ledger</span>
                        <span>SHA-256 Signature Approved</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
