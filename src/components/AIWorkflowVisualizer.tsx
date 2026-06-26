import { useState } from 'react';
import { Database, GitMerge, FileCheck2, CloudLightning, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface Stage {
  id: number;
  name: string;
  icon: any;
  title: string;
  desc: string;
  colorClass: string;
  borderClass: string;
  badgeClass: string;
  textClass: string;
  logs: string[];
}

export default function AIWorkflowVisualizer() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages: Stage[] = [
    {
      id: 0,
      name: "Connect",
      icon: Database,
      title: "Zero-Config Ingestion",
      desc: "Connect MySQL, Snowflake, HubSpot, or any custom API in one click. AutomataAI instantly parses your schemas and auto-detects column configurations.",
      colorClass: "bg-indigo-500/10",
      borderClass: "border-indigo-500/30",
      badgeClass: "text-indigo-400 bg-indigo-500/10",
      textClass: "text-indigo-400",
      logs: [
        "› Connection established: Snowflake Instance C-9",
        "› Instantly discovered 42 relational tables",
        "› Scanning index profiles and table sizes...",
        "› Ingestion initialized at 124,000 req/min"
      ]
    },
    {
      id: 1,
      name: "Map & Convert",
      icon: GitMerge,
      title: "AI Semantic Schema Mapping",
      desc: "No more brittle scripts. Our specialized data LLM automatically resolves fields like 'created_at' vs 'signup_date' and transforms nested arrays natively.",
      colorClass: "bg-violet-500/10",
      borderClass: "border-violet-500/30",
      badgeClass: "text-violet-400 bg-violet-500/10",
      textClass: "text-violet-400",
      logs: [
        "› Processing: schema structural alignment",
        "› Mapping 'cust_uid' ➔ 'customer_id' (Confidence 100%)",
        "› Parsing Unix timestamp to ISO 8601 UTC",
        "› Array normalization: flattening billing_records"
      ]
    },
    {
      id: 2,
      name: "Validate & Clean",
      icon: FileCheck2,
      title: "Real-time Edge Rules Validation",
      desc: "Run active outlier detection. Block toxic rows, normalize phone and postal formats, and automatically deduplicate overlapping contacts on-the-fly.",
      colorClass: "bg-emerald-500/10",
      borderClass: "border-emerald-500/30",
      badgeClass: "text-emerald-400 bg-emerald-500/10",
      textClass: "text-emerald-400",
      logs: [
        "› Applying validation policy: Global_Deduplication",
        "› Filtered 14 rows with missing phone structures",
        "› Flagged 2 outlier billing amounts (>4SD from mean)",
        "› Clean output generated: 9,842 rows ready"
      ]
    },
    {
      id: 3,
      name: "Sync & Fire",
      icon: CloudLightning,
      title: "Sub-second Transaction Sync",
      desc: "Push sanitized schemas directly to production webhooks, Postgres replicas, or enterprise CRMs with guaranteed, transaction-safe atomic delivery.",
      colorClass: "bg-amber-500/10",
      borderClass: "border-amber-500/30",
      badgeClass: "text-amber-400 bg-amber-500/10",
      textClass: "text-amber-400",
      logs: [
        "› Opening target pipeline channels...",
        "› Target received atomic batch sync (#92482)",
        "› 0 failed rows, 100% database write success",
        "› Slack webhook fired: #ops-stream notified"
      ]
    }
  ];

  const ActiveIcon = stages[activeStage].icon;

  return (
    <div id="ai-workflow-visualizer" className="w-full bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden glass-panel">
      {/* Upper Status Header */}
      <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-white/5 bg-slate-950/40 gap-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-indigo-400 animate-pulse" />
          <span className="font-heading font-medium text-sm text-white">Interactive Workflow Compiler</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-gray-500">Auto-Refining: ON</span>
          <div className="h-2 w-2 rounded-full bg-indigo-500 animate-ping" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Side: Step Selectors (4 Columns) */}
        <div className="lg:col-span-5 border-r border-white/5 flex flex-col justify-stretch p-4 gap-2 bg-slate-950/20">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = activeStage === idx;
            return (
              <button
                key={stage.id}
                id={`workflow-stage-btn-${stage.id}`}
                onClick={() => setActiveStage(idx)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-start gap-4 ${
                  isSelected 
                    ? 'bg-slate-900 border border-white/10 shadow-lg translate-x-1' 
                    : 'hover:bg-slate-900/50 border border-transparent'
                }`}
              >
                <div className={`p-2.5 rounded-lg transition-colors ${isSelected ? stage.colorClass : 'bg-slate-950 text-gray-400'}`}>
                  <Icon className={`h-5 w-5 ${isSelected ? stage.textClass : ''}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Phase 0{idx + 1}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-mono font-medium text-indigo-400 px-1.5 py-0.5 rounded bg-indigo-500/10">
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <h4 className={`font-heading font-semibold text-sm mt-0.5 ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                    {stage.name}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                    {stage.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Active Stage Detail & Visual Simulation (7 Columns) */}
        <div className="lg:col-span-7 p-6 flex flex-col justify-between bg-slate-900/20 min-h-[340px]">
          {/* Active Detail Header */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full border ${stages[activeStage].badgeClass}`}>
                STAGED COMPILE
              </span>
              <ArrowRight className="h-3 w-3 text-gray-600" />
              <span className="text-[10px] font-mono text-gray-500">Pipeline Alpha-3</span>
            </div>
            <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
              <ActiveIcon className={`h-6 w-6 ${stages[activeStage].textClass}`} />
              {stages[activeStage].title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {stages[activeStage].desc}
            </p>
          </div>

          {/* Interactive Logs Terminal Simulation */}
          <div className="mt-6 bg-slate-950/95 rounded-xl border border-white/5 p-4 font-mono text-xs overflow-hidden">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/5 text-[10px] text-gray-500">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/50" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <span className="w-2 h-2 rounded-full bg-green-500/50" />
                <span className="ml-2">automata_compiler.sh</span>
              </div>
              <span>UTF-8 • Sandbox v2.4</span>
            </div>
            
            <div className="space-y-1.5 text-gray-400 font-mono text-[11px]">
              {stages[activeStage].logs.map((log, i) => (
                <div 
                  key={i} 
                  className={`transition-all duration-300 flex items-start gap-2 ${
                    i === stages[activeStage].logs.length - 1 ? 'text-indigo-300 font-medium' : ''
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="text-gray-600 font-bold">▶</span>
                  <span>{log}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium mt-1 animate-pulse">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Compiler Status: Ready. Awaiting continuous trigger...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
