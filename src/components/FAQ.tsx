import { useState } from 'react';
import { HelpCircle, ChevronDown, Plus, Minus } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // Default open first question

  const faqs: FAQItem[] = [
    {
      q: "How does the AI map data schemas without traditional mapping scripts?",
      a: "AutomataAI utilizes our fine-tuned, proprietary semantic schema LLM. This model acts as an analytical compiler. It evaluates source types, field key labels, column relationships, and mock payload layouts. It then synthesizes highly accurate TypeScript schemas and Javascript mapping nodes, resolving syntax transformations under 50ms with a documented 99.98% mapping accuracy rate."
    },
    {
      q: "Does our transactional data flow through your central servers?",
      a: "No. Security is central to AutomataAI. All ingestion pipelines and active transformations execute directly inside decentralized edge sandboxes or on your isolated enterprise Cloud Run containers. Your confidential databases, customer telemetry, and raw JSON payloads never touch our databases, satisfying strict GDPR, HIPAA, and SecOps compliance audits."
    },
    {
      q: "How are currency conversions and billing periods processed?",
      a: "Our plans are extremely transparent. You can choose to settle transactions in US Dollars ($), Euros (€), or Indian Rupees (₹). Opting for our Annual Billing Cycle automatically triggers an immediate, permanent 20% flat discount on all base tiers. Upgrades, downgrades, and billing adjustments take effect immediately with pro-rated ledger offsets."
    },
    {
      q: "What destinations and databases does AutomataAI support?",
      a: "Out-of-the-box, AutomataAI supports Snowflake, PostgreSQL, MySQL, ClickHouse, BigQuery, AWS S3, Salesforce, HubSpot, and Slack integrations. You can also deploy custom JSON/REST Webhooks to connect any internal APIs. Dedicated Enterprise accounts can request our engineering team to build custom connectors for on-prem mainframe architectures."
    },
    {
      q: "How does edge latency compare to traditional ELT/ETL architectures?",
      a: "Traditional tools like Fivetran run on batch schedules (typically 5 to 15 minutes). AutomataAI runs an event-driven, streaming edge compiler. As soon as a record lands in a web hook or Postgres WAL stream, it is processed and written to destinations in under 15 milliseconds, which is 60,000x faster than legacy batching platforms."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-slate-950 border-t border-white/5">
      {/* Visual glowing grid background */}
      <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs text-indigo-300 font-mono">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>EXPERT SOLUTIONS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
            Frequently Asked <span className="gradient-text">Inquiries</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Everything you need to know about AutomataAI's real-time compiler, safety rules, and scalable billing tiers.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen 
                    ? 'bg-slate-900/40 border-indigo-500/30 shadow-[0_4px_20px_rgba(99,102,241,0.05)]' 
                    : 'bg-slate-900/10 border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
                >
                  <span className="font-heading font-semibold text-sm md:text-base text-white pr-4">
                    {faq.q}
                  </span>
                  <div className="p-1 rounded bg-white/5 border border-white/5 flex-shrink-0 text-gray-400 group-hover:text-white">
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </div>
                </button>

                {/* Answer panel (with native high-performing CSS height transition) */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 text-xs md:text-sm text-gray-400 leading-relaxed bg-slate-950/20">
                    {faq.a}
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
