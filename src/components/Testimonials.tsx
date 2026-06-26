import { Star, MessageSquare } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      quote: "Before AutomataAI, mapping our Salesforce leads pipeline with custom script arrays took us almost three weeks per ingestion endpoint. Now, we configure the source connection, and the AI maps the structures correctly in under 12 seconds. Absolute game changer.",
      author: "Alex Rivera",
      role: "VP of Data Platforms",
      company: "SnykFlow Inc.",
      rating: 5
    },
    {
      quote: "The direct DOM performance of their metrics dashboards and real-time syncing triggers have eliminated all data ingestion delays. Our transactional reports generate 22% faster. This platform pays for itself ten times over.",
      author: "Sarah Jenkins",
      role: "Lead Systems Architect",
      company: "StripeX Systems",
      rating: 5
    },
    {
      quote: "Our compliance audits used to be a cryptographic mess. AutomataAI's immutable trace log features provide instant SHA-256 validation reports that passed our SOC2 Type II audit on the first check. Highly recommended.",
      author: "Marcus Chen",
      role: "Head of Security & Trust",
      company: "Neobank Global",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Visual background accents */}
      <div className="absolute right-10 bottom-10 w-[350px] h-[350px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/25">
            CLIENT VOUCHERS
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
            Loved by builders. <br />
            <span className="gradient-text">Approved by SecOps.</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            See how enterprise leaders and lead engineers are automating data ingestion with absolute structural confidence.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-white/5 bg-slate-900/15 backdrop-blur-sm relative flex flex-col justify-between hover:border-indigo-500/20 transition-all duration-300"
            >
              {/* Star Rating & Quote Accent */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(rev.rating)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-[10px] font-mono text-gray-500 ml-2">VERIFIED LICENSEE</span>
              </div>

              {/* Quote Body */}
              <p className="text-sm text-gray-300 leading-relaxed italic mb-8 relative">
                <span className="text-4xl text-indigo-500/20 absolute -top-5 -left-2 select-none">“</span>
                {rev.quote}
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">{rev.author}</h4>
                  <p className="text-[11px] text-gray-400 font-mono mt-0.5">{rev.role}</p>
                </div>
                <div className="px-2.5 py-1 bg-white/5 border border-white/10 rounded font-mono text-[10px] text-indigo-300 font-semibold uppercase tracking-wider">
                  {rev.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-slate-900/30 rounded-2xl border border-white/5 divide-y-0 divide-x-0 md:divide-x divide-white/10">
          <div className="text-center md:px-4">
            <h4 className="font-heading text-3xl md:text-4xl font-extrabold text-white">100M+</h4>
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-1">Daily Records Synthesized</p>
          </div>
          <div className="text-center pt-6 md:pt-0 md:px-4">
            <h4 className="font-heading text-3xl md:text-4xl font-extrabold text-white">99.98%</h4>
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-1">Uptime SLA Guaranteed</p>
          </div>
          <div className="text-center pt-6 md:pt-0 md:px-4">
            <h4 className="font-heading text-3xl md:text-4xl font-extrabold text-white">SOC2</h4>
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-1">Type II Audited Compliance</p>
          </div>
          <div className="text-center pt-6 md:pt-0 md:px-4">
            <h4 className="font-heading text-3xl md:text-4xl font-extrabold text-white">&lt; 15ms</h4>
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-1">Average Edge Ingestion Latency</p>
          </div>
        </div>

      </div>
    </section>
  );
}
