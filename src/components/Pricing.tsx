import { useEffect, useRef } from 'react';
import { Check, Sparkles, HelpCircle, ChevronDown } from 'lucide-react';

const PRICING_MATRIX = {
  Starter: {
    base: { USD: 0, EUR: 0, INR: 0 },
    features: [
      "5 Active Automations",
      "100,000 tasks per month",
      "Standard Webhooks & APIs",
      "Email support (24hr response)",
      "Basic data transformation templates"
    ],
    popular: false,
    ctaText: "Start Free Trial"
  },
  Pro: {
    base: { USD: 149, EUR: 139, INR: 11999 },
    features: [
      "Unlimited Active Automations",
      "1,000,000 tasks per month",
      "Advanced AI Data Mapping",
      "Real-time webhooks & sub-second latency",
      "Priority Support (under 1 hr response)",
      "Custom JS/TS scripting nodes"
    ],
    popular: true,
    ctaText: "Go Pro"
  },
  Enterprise: {
    base: { USD: 499, EUR: 459, INR: 39999 },
    features: [
      "Everything in Pro",
      "Unlimited tasks & auto-scaling",
      "Custom fine-tuned LLM nodes",
      "Dedicated account manager & SLA",
      "Custom SSO, SAML & Enterprise security",
      "On-premise deployment options"
    ],
    popular: false,
    ctaText: "Contact Enterprise"
  }
};

const CURRENCY_SYMBOLS = {
  USD: '$',
  EUR: '€',
  INR: '₹'
};

export default function Pricing() {
  // Use Refs for state to avoid React virtual DOM triggers
  const billingCycleRef = useRef<'monthly' | 'annual'>('annual'); // Default to annual (gets 20% discount)
  const currencyRef = useRef<'USD' | 'EUR' | 'INR'>('USD');

  // Trigger DOM updates on mount to sync with our default ref values
  useEffect(() => {
    updatePricingDOM();
  }, []);

  const updatePricingDOM = () => {
    const billing = billingCycleRef.current;
    const currency = currencyRef.current;
    const isAnnual = billing === 'annual';
    const symbol = CURRENCY_SYMBOLS[currency];

    // 1. Update prices in cards
    Object.entries(PRICING_MATRIX).forEach(([tierName, tierData]) => {
      const baseVal = tierData.base[currency];
      const finalVal = isAnnual ? Math.floor(baseVal * 0.8) : baseVal;

      // Update active price text nodes
      const valNode = document.getElementById(`price-val-${tierName}`);
      if (valNode) {
        valNode.textContent = `${symbol}${finalVal.toLocaleString()}`;
      }

      // Update original strikethrough price for annual
      const originalNode = document.getElementById(`original-price-${tierName}`);
      const originalWrapper = document.getElementById(`original-wrapper-${tierName}`);
      if (originalNode && originalWrapper) {
        if (isAnnual) {
          originalNode.textContent = `${symbol}${baseVal.toLocaleString()}`;
          originalWrapper.classList.remove('hidden');
          originalWrapper.classList.add('flex');
        } else {
          originalWrapper.classList.add('hidden');
          originalWrapper.classList.remove('flex');
        }
      }

      // Update billing interval helper label
      const billingHelperNode = document.getElementById(`billing-helper-${tierName}`);
      if (billingHelperNode) {
        billingHelperNode.textContent = isAnnual ? '/mo, billed annually' : '/mo';
      }
    });

    // 2. Update toggle button visuals
    const toggleSlider = document.getElementById('billing-slider');
    const labelMonthly = document.getElementById('label-monthly');
    const labelAnnual = document.getElementById('label-annual');
    if (toggleSlider && labelMonthly && labelAnnual) {
      if (isAnnual) {
        toggleSlider.classList.add('translate-x-full');
        labelAnnual.classList.add('text-white');
        labelAnnual.classList.remove('text-gray-400');
        labelMonthly.classList.remove('text-white');
        labelMonthly.classList.add('text-gray-400');
      } else {
        toggleSlider.classList.remove('translate-x-full');
        labelMonthly.classList.add('text-white');
        labelMonthly.classList.remove('text-gray-400');
        labelAnnual.classList.remove('text-white');
        labelAnnual.classList.add('text-gray-400');
      }
    }

    // 3. Update Currency select button text
    const currencyBtnText = document.getElementById('currency-btn-text');
    if (currencyBtnText) {
      currencyBtnText.textContent = `${symbol} ${currency}`;
    }

    // 4. Update dropdown menu option highlight
    ['USD', 'EUR', 'INR'].forEach((cur) => {
      const optionNode = document.getElementById(`currency-opt-${cur}`);
      if (optionNode) {
        if (cur === currency) {
          optionNode.classList.add('text-indigo-400', 'bg-white/5');
          optionNode.classList.remove('text-gray-400');
        } else {
          optionNode.classList.remove('text-indigo-400', 'bg-white/5');
          optionNode.classList.add('text-gray-400');
        }
      }
    });
  };

  const handleBillingToggle = () => {
    billingCycleRef.current = billingCycleRef.current === 'monthly' ? 'annual' : 'monthly';
    updatePricingDOM();
  };

  const handleCurrencyChange = (currency: 'USD' | 'EUR' | 'INR') => {
    currencyRef.current = currency;
    updatePricingDOM();
    // Close dropdown
    const dropdownMenu = document.getElementById('currency-dropdown-menu');
    if (dropdownMenu) {
      dropdownMenu.classList.add('hidden');
    }
  };

  const toggleDropdownMenu = () => {
    const dropdownMenu = document.getElementById('currency-dropdown-menu');
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('hidden');
    }
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-b border-white/5">
      {/* Background glow meshes */}
      <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[600px] h-[300px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl space-y-4">
            <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/25">
              Transparent Pricing
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Scale automation. <br />
              <span className="gradient-text">Pay for what you build.</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Start parsing, mapping, and routing data instantly. No credit card required to start free trials. Cancel anytime.
            </p>
          </div>

          {/* Pricing Controls: Isolated Switchers */}
          <div className="flex flex-wrap items-center gap-4 bg-slate-900/60 p-2 rounded-xl border border-white/5 self-start">
            {/* Monthly / Annual Toggle */}
            <div className="flex items-center gap-3 px-2">
              <span id="label-monthly" className="text-xs font-semibold text-gray-400 transition-colors duration-200">
                Monthly
              </span>
              <button
                id="billing-cycle-toggle"
                onClick={handleBillingToggle}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-950 border border-white/10 transition-colors focus:outline-none"
              >
                <span
                  id="billing-slider"
                  className="inline-block h-4 w-4 transform rounded-full bg-indigo-500 transition-transform duration-300 ease-out translate-x-1"
                />
              </button>
              <div className="flex items-center gap-1.5">
                <span id="label-annual" className="text-xs font-semibold text-white transition-colors duration-200">
                  Annual
                </span>
                <span className="text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded uppercase font-bold">
                  -20%
                </span>
              </div>
            </div>

            <div className="h-5 w-[1px] bg-white/10" />

            {/* Custom Direct Dropdown for Currency */}
            <div className="relative">
              <button
                id="currency-dropdown-btn"
                onClick={toggleDropdownMenu}
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-950 border border-white/10 hover:border-white/20 rounded-lg text-xs font-mono font-medium text-white transition-all active:scale-95 cursor-pointer"
              >
                <span id="currency-btn-text">$ USD</span>
                <ChevronDown className="h-3 w-3 text-gray-500" />
              </button>

              {/* Currency Dropdown Panel */}
              <div
                id="currency-dropdown-menu"
                className="absolute right-0 mt-2 w-28 bg-slate-950 border border-white/10 rounded-lg shadow-xl hidden overflow-hidden z-30"
              >
                <button
                  id="currency-opt-USD"
                  onClick={() => handleCurrencyChange('USD')}
                  className="w-full text-left px-3 py-2 text-xs font-mono hover:bg-white/5 transition-colors cursor-pointer"
                >
                  $ USD
                </button>
                <button
                  id="currency-opt-EUR"
                  onClick={() => handleCurrencyChange('EUR')}
                  className="w-full text-left px-3 py-2 text-xs font-mono hover:bg-white/5 transition-colors cursor-pointer"
                >
                  € EUR
                </button>
                <button
                  id="currency-opt-INR"
                  onClick={() => handleCurrencyChange('INR')}
                  className="w-full text-left px-3 py-2 text-xs font-mono hover:bg-white/5 transition-colors cursor-pointer"
                >
                  ₹ INR
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(PRICING_MATRIX).map(([tierName, tierData]) => {
            const isPopular = tierData.popular;
            return (
              <div
                key={tierName}
                id={`pricing-card-${tierName}`}
                className={`relative rounded-2xl border flex flex-col justify-between p-8 overflow-hidden transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-indigo-500/10 via-slate-900/40 to-slate-950 border-indigo-500/40 shadow-2xl shadow-indigo-500/5 md:-translate-y-2'
                    : 'bg-slate-900/20 border-white/5 hover:border-white/15'
                }`}
              >
                {isPopular && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-[10px] font-semibold text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
                    <Sparkles className="h-3 w-3 animate-pulse" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">{tierName}</h3>
                  <p className="text-xs text-gray-400 mb-6">
                    {tierName === 'Starter' && "Ideal for builders testing triggers & APIs."}
                    {tierName === 'Pro' && "The ultimate suite for scale-ready data workflows."}
                    {tierName === 'Enterprise' && "Uncompromising security and dedicated processing nodes."}
                  </p>

                  {/* Dynamic Pricing Text Area (Updated Directly via DOM) */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span
                      id={`price-val-${tierName}`}
                      className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight transition-all duration-150"
                    >
                      $0
                    </span>
                    <span
                      id={`billing-helper-${tierName}`}
                      className="text-xs text-gray-400 font-mono transition-all duration-150"
                    >
                      /mo
                    </span>
                  </div>

                  {/* Strikethrough pricing for annual discount */}
                  <div
                    id={`original-wrapper-${tierName}`}
                    className="items-center gap-1.5 mb-6 text-xs text-gray-500 hidden font-mono"
                  >
                    <span>Instead of</span>
                    <span id={`original-price-${tierName}`} className="line-through">
                      $0
                    </span>
                  </div>

                  <div className="h-[1px] bg-white/5 my-6" />

                  {/* Feature Checklist */}
                  <ul className="space-y-3.5">
                    {tierData.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <div className={`p-0.5 rounded-full mt-0.5 flex-shrink-0 ${isPopular ? 'bg-indigo-500/10 text-indigo-400' : 'bg-white/5 text-gray-400'}`}>
                          <Check className="h-3 w-3" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button CTA */}
                <div className="mt-8">
                  <button
                    id={`cta-${tierName}`}
                    className={`w-full py-3 px-4 rounded-xl font-heading font-medium text-xs tracking-wide transition-all duration-200 cursor-pointer active:scale-[0.97] ${
                      isPopular
                        ? 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                    }`}
                  >
                    {tierData.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secure Transaction Promise Footer */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between p-6 bg-slate-950 rounded-2xl border border-white/5 gap-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-gray-400">SOC2 Type II • ISO 27001 Certified Infrastructure</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <HelpCircle className="h-4 w-4" />
            <span>Need enterprise SLAs or custom nodes? <a href="#footer" className="text-indigo-400 hover:underline">Speak with a Solutions Architect</a></span>
          </div>
        </div>

      </div>
    </section>
  );
}
