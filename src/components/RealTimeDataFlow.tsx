import { useState, useEffect } from 'react';
import { Database, ArrowRight, BrainCircuit, ShieldCheck, Zap } from 'lucide-react';

export default function RealTimeDataFlow() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [throughput, setThroughput] = useState(1240);
  const [latency, setLatency] = useState(12);

  // Live fluctuating metric simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setThroughput((prev) => {
        const diff = Math.floor(Math.random() * 60) - 30;
        const next = prev + diff;
        return next > 1400 || next < 1000 ? prev : next;
      });
      setLatency((prev) => {
        const diff = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;
        const next = prev + diff;
        return next > 25 || next < 8 ? prev : next;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="realtime-data-flow" className="relative p-6 h-full flex flex-col justify-between overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute inset-0 bg-radial-gradient from-indigo-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
            Real-Time Engine
          </span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-emerald-400 font-medium">LIVE PIPELINE</span>
          </div>
        </div>
        <h3 className="font-heading text-lg font-medium text-white mb-1">Autonomous Flow Visualizer</h3>
        <p className="text-xs text-gray-400 leading-relaxed">
          Watch AI map, sanitize, and route raw source metrics to destination endpoints in under {latency}ms.
        </p>
      </div>

      {/* Interactive Visualizer Area */}
      <div className="my-6 relative flex items-center justify-between py-4 bg-slate-900/40 rounded-xl border border-white/5 p-4 min-h-[140px]">
        {/* Source Node */}
        <div 
          id="node-source"
          className={`flex flex-col items-center gap-1.5 cursor-pointer transition-all duration-300 z-10 ${activeNode === 'source' ? 'scale-105' : 'hover:scale-102'}`}
          onMouseEnter={() => setActiveNode('source')}
          onMouseLeave={() => setActiveNode(null)}
        >
          <div className={`p-3 rounded-xl border transition-all duration-300 ${activeNode === 'source' ? 'bg-indigo-500/20 border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)]' : 'bg-slate-950 border-white/10'}`}>
            <Database className="h-5 w-5 text-indigo-400" />
          </div>
          <span className="text-[10px] font-mono text-gray-400 font-medium">PostgreSQL Source</span>
        </div>

        {/* Central SVG Connections with Flowing Particles */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-8 px-14 pointer-events-none">
          <svg className="w-full h-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 160 32">
            {/* Base Path Layer */}
            <path d="M 0 16 L 160 16" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="2" />
            <path d="M 0 16 C 40 0, 40 0, 80 16" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="1.5" />
            <path d="M 80 16 C 120 32, 120 32, 160 16" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1.5" />

            {/* Glowing animated line segments */}
            <path d="M 0 16 L 80 16" className="animate-flow" stroke="url(#flow-gradient-1)" strokeWidth="2" />
            <path d="M 80 16 L 160 16" className="animate-flow" stroke="url(#flow-gradient-2)" strokeWidth="2" />

            {/* Gradients */}
            <defs>
              <linearGradient id="flow-gradient-1" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#818cf8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
              <linearGradient id="flow-gradient-2" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Central Brain AI Node */}
        <div 
          id="node-brain"
          className={`flex flex-col items-center gap-1.5 cursor-pointer transition-all duration-300 z-10 ${activeNode === 'ai' ? 'scale-105 animate-glow-pulse' : 'hover:scale-102'}`}
          onMouseEnter={() => setActiveNode('ai')}
          onMouseLeave={() => setActiveNode(null)}
        >
          <div className={`p-4 rounded-full border transition-all duration-300 ${activeNode === 'ai' ? 'bg-violet-500/30 border-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.5)]' : 'bg-slate-950 border-white/15'}`}>
            <BrainCircuit className="h-6 w-6 text-violet-400 animate-pulse" />
          </div>
          <span className="text-[10px] font-mono text-gray-300 font-semibold tracking-wider">Automata Engine</span>
        </div>

        {/* Destination Node */}
        <div 
          id="node-dest"
          className={`flex flex-col items-center gap-1.5 cursor-pointer transition-all duration-300 z-10 ${activeNode === 'destination' ? 'scale-105' : 'hover:scale-102'}`}
          onMouseEnter={() => setActiveNode('destination')}
          onMouseLeave={() => setActiveNode(null)}
        >
          <div className={`p-3 rounded-xl border transition-all duration-300 ${activeNode === 'destination' ? 'bg-emerald-500/20 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-slate-950 border-white/10'}`}>
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
          </div>
          <span className="text-[10px] font-mono text-gray-400 font-medium">Salesforce API</span>
        </div>
      </div>

      {/* Floating Interactive Tooltip/Telemetry */}
      <div className="h-14 flex items-center justify-between bg-slate-950/80 border border-white/5 rounded-lg px-4 font-mono text-[11px] text-gray-400">
        {activeNode === 'source' && (
          <div className="flex items-center justify-between w-full">
            <span className="text-indigo-400 font-medium">SOURCE MONITOR</span>
            <span className="text-gray-500">Schema: 42 Tables • SSL Active</span>
          </div>
        )}
        {activeNode === 'ai' && (
          <div className="flex items-center justify-between w-full">
            <span className="text-violet-400 font-medium animate-pulse">INTELLIGENT RE-MAPPING</span>
            <span className="text-gray-300">Accuracy: 99.98% • 15 Transforms</span>
          </div>
        )}
        {activeNode === 'destination' && (
          <div className="flex items-center justify-between w-full">
            <span className="text-emerald-400 font-medium">DESTINATION API</span>
            <span className="text-gray-500">201 Created • No Duplication</span>
          </div>
        )}
        {!activeNode && (
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-1.5">
              <Zap className="h-3 w-3 text-amber-400" />
              <span>Throughput: <strong className="text-white">{throughput} records/s</strong></span>
            </div>
            <span>Latency: <strong className="text-indigo-300">{latency} ms</strong></span>
          </div>
        )}
      </div>
    </div>
  );
}
