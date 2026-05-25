export default function Home() {
  const features = [
    'AI-powered descriptions via OpenAI GPT-4',
    'Built-in keyword research & SEO scoring',
    'Competitor analysis & gap detection',
    'Conversion-focused copywriting formulas',
    'Bulk generation for product catalogs',
    'Export to CSV, Shopify, WooCommerce'
  ]

  const faqs = [
    {
      q: 'How does the AI generate SEO-optimized descriptions?',
      a: 'Our system combines OpenAI GPT-4 with real-time keyword research and competitor analysis. It identifies high-value search terms for your product, then crafts descriptions that naturally incorporate them while following proven conversion copywriting frameworks.'
    },
    {
      q: 'Can I use this for my Shopify or WooCommerce store?',
      a: 'Yes. You can export generated descriptions directly in formats compatible with Shopify, WooCommerce, and any platform that accepts CSV imports. Bulk generation lets you process your entire catalog at once.'
    },
    {
      q: 'Is there a limit on how many descriptions I can generate?',
      a: 'The $17/mo plan includes unlimited description generation. There are no per-description fees or hidden limits — generate as many as your store needs.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          E-commerce AI Tool
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Product Descriptions That{' '}
          <span className="text-[#58a6ff]">Rank & Convert</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Stop losing sales to bland copy. Generate SEO-optimized product descriptions powered by AI, keyword research, and competitor analysis — in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-xl transition-colors duration-200"
        >
          Start for $17/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No contracts. Cancel anytime.</p>

        {/* Feature pills */}
        <ul className="mt-14 flex flex-wrap justify-center gap-3">
          {features.map((f) => (
            <li
              key={f}
              className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-2 rounded-full"
            >
              {f}
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">All-Inclusive Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-extrabold text-white">$17</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to dominate product search</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited AI description generation',
              'SEO keyword research included',
              'Competitor gap analysis',
              'Bulk catalog processing',
              'Shopify & WooCommerce export',
              'Priority email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Get Instant Access
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-[#8b949e] text-sm mt-12">
          &copy; {new Date().getFullYear()} ProductCopy AI. All rights reserved.
        </p>
      </section>
    </main>
  )
}
