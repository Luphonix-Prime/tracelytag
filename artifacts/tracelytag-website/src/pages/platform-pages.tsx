import { Link } from 'wouter';
import { 
  Check, ShieldCheck, Boxes, Users, ScanLine, QrCode, ArrowRight, CircleCheck, 
  Sparkles, TrendingUp, Award, Zap, Database, Search, Building2, Globe2, 
  BarChart3, Layers, ShieldAlert, FileText, Smartphone, Network, PackageCheck,
  Shield, Key, Lock, Eye, AlertTriangle, RefreshCw, LineChart, Cpu, CheckCircle2,
  Share2, Award as AwardIcon, Gift, UserPlus, Coins, BarChart2, ShieldX, MapPin,
  Activity, CheckCircle
} from 'lucide-react';

const root = '/reference/img/';

// Common CTA Banner Component
function SectionCTA({ title, copy, primaryBtn = "Book a Demo", secondaryBtn = "Contact Sales" }: { title: string; copy: string; primaryBtn?: string; secondaryBtn?: string }) {
  return (
    <section className="mt-16 bg-[#064aa0] py-16 text-center text-white">
      <div className="container-tight">
        <h2 className="display text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-blue-100/90">{copy}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact-us" className="rounded-md bg-white px-6 py-3 text-xs font-bold text-[#064aa0] transition hover:bg-blue-50 shadow-sm">
            {primaryBtn}
          </Link>
          <Link href="/contact-us" className="rounded-md border border-white/40 px-6 py-3 text-xs font-bold text-white transition hover:bg-white/10">
            {secondaryBtn}
          </Link>
        </div>
      </div>
    </section>
  );
}

// 1. GS1 Standards Compliance Page
export function Gs1CompliancePage({ Shell }: { Shell: any }) {
  return (
    <Shell>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f5f8fc] to-white py-14">
        <div className="container-tight grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="inline-block rounded bg-[#e8f1fd] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#0753a4]">
              BUILT FOR GS1 STANDARDS
            </span>
            <h1 className="display mt-4 text-3xl font-extrabold text-[#15345e] md:text-4xl lg:text-[42px] leading-tight">
              Build GS1-Compliant Product Identification at Enterprise Scale
            </h1>
            <p className="mt-4 text-xs leading-relaxed text-[#586474] md:text-sm">
              Implement global GS1 standards for product identification, serialization, and aggregation across your supply chain with standard product data across your supply chain.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link href="/contact-us" className="rounded bg-[#064aa0] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#053b81]">
                Book a Demo
              </Link>
              <a href="#features" className="rounded border border-[#d2dce6] px-5 py-2.5 text-xs font-bold text-[#15345e] transition hover:bg-gray-50">
                View Features
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
            <img src={`${root}about-hero-diagram.png`} alt="GS1 Compliance Architecture Diagram" className="w-full h-auto rounded" />
          </div>
        </div>

        {/* 4 Hero Cards */}
        <div className="container-tight mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'GS1 Standards', desc: 'Fully compliant with GS1 GTIN, SSCC, and GLN standards.', icon: Award },
            { title: 'GTIN & SSCC', desc: 'Native support for standard formats and serialization.', icon: Network },
            { title: 'GS1 Digital Link', desc: 'Web-ready QR standard format for multi-purpose scanning.', icon: QrCode },
            { title: 'Global Compliance', desc: 'Ensure compliance across global markets and trade regions.', icon: ShieldCheck },
          ].map((c) => (
            <div key={c.title} className="rounded-lg border border-[#e2e8f0] bg-white p-5 shadow-xs transition hover:shadow-md">
              <span className="grid size-9 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4]">
                <c.icon size={18} strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-xs font-bold text-[#15345e]">{c.title}</h3>
              <p className="mt-1.5 text-[11px] leading-relaxed text-[#68717d]">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why GS1 Compliance Matters */}
      <section className="py-16 bg-white border-t border-[#edf2f7]">
        <div className="container-tight grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="display text-2xl font-bold text-[#15345e] mb-6">Why GS1 Compliance Matters</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { title: 'Global Interoperability', copy: 'Standardized identification enables seamless data exchange across international supply chains and trade partners.' },
                { title: 'Regulatory Compliance', copy: 'Meet federal and international serialization requirements with standard-based architectures.' },
                { title: 'Standardized Identification', copy: 'Uniquely identify products, cases, and pallets across your supply chain.' },
                { title: 'Supply Chain Visibility', copy: 'Track and trace products across partners, locations, and modes of transport with standard data formats.' },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-xs font-bold text-[#15345e]">{item.title}</h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-[#68717d]">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-[#064aa0] p-7 text-white shadow-md">
            <h3 className="text-sm font-bold tracking-wide uppercase text-blue-100">Enterprise GS1 Support</h3>
            <div className="mt-6 space-y-3.5">
              {[
                'GTIN Management',
                'SSCC Generation',
                'GS1 Digital Link Ready',
                'Aggregation Support',
                'Global Standards Compliant',
                'Regulatory Requirements',
              ].map((check) => (
                <div key={check} className="flex items-center gap-3 text-xs font-medium">
                  <span className="grid size-5 place-items-center rounded-full bg-blue-400/30 text-white shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {check}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Serialization Workflow */}
      <section className="py-14 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="container-tight text-center">
          <h2 className="display text-xl font-bold text-[#15345e]">The Serialization Workflow</h2>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            {[
              'Create Product', 'Assign GTIN', 'Generate Serial Number', 
              'Create GS1 Barcodes', 'Package & Aggregate', 'Verify', 'Track & Trace'
            ].map((step, idx) => (
              <div key={step} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <span className="grid size-9 place-items-center rounded-full bg-[#064aa0] text-xs font-bold text-white shadow-xs">
                    {idx + 1}
                  </span>
                  <span className="mt-2 text-[11px] font-bold text-[#15345e] max-w-[90px] leading-snug">{step}</span>
                </div>
                {idx < 6 && <div className="hidden md:block h-[2px] w-8 bg-[#cbd5e1] -mt-5" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Compliance Features */}
      <section id="features" className="py-16 bg-white">
        <div className="container-tight">
          <h2 className="display text-2xl font-bold text-[#15345e] mb-8">Advanced Compliance Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'GTIN Management', desc: 'Centralized repository for all product GTINs. Track master data, attributes, and unit of measure definitions.', icon: Database },
              { title: 'SSCC Support', desc: 'Systematic generation of Serial Shipping Container Codes for multi-level packaging aggregation.', icon: Boxes },
              { title: 'GS1 Digital Link', desc: 'Web-ready URL structure for primary and secondary packaging scanning.', icon: QrCode },
              { title: 'Serial Batches', desc: 'Mass serialization generation with custom length, prefix, and structure rules for high-volume execution.', icon: Layers },
              { title: 'Aggregation', desc: 'Parent-child hierarchy mapping for item-to-case-to-pallet aggregation.', icon: Network },
              { title: 'Compliance Analytics', desc: 'Real-time auditing of serialization data and regulatory compliance reporting.', icon: BarChart3 },
            ].map((feat) => (
              <div key={feat.title} className="rounded-lg border border-[#e2e8f0] bg-white p-6 shadow-xs">
                <span className="grid size-9 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4]">
                  <feat.icon size={18} strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-xs font-bold text-[#15345e]">{feat.title}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-[#68717d]">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GS1 Compliance Intelligence */}
      <section className="py-16 bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="display text-2xl font-bold text-[#15345e]">GS1 Compliance Intelligence</h2>
              <p className="text-xs text-[#68717d] mt-1">Monitoring and audit tools for global serialization compliance.</p>
            </div>
            <Link href="/contact-us" className="inline-flex items-center gap-2 rounded bg-[#064aa0] px-4 py-2 text-xs font-bold text-white">
              See Dashboard
            </Link>
          </div>

          <div className="rounded-xl border border-[#cbd5e1] bg-white p-4 shadow-sm mb-12">
            <img src={`${root}why-dashboard-monitor.png`} alt="GS1 Intelligence Dashboard" className="w-full h-auto rounded" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Global Compliance', desc: 'Adhere to international serialization standards, regulatory rules, and industry mandates.', icon: ShieldCheck },
              { title: 'Supply Chain Standardization', desc: 'Unified data standard enables seamless inter-system communication and interoperability with trading partners.', icon: Network },
              { title: 'Partner Integration', desc: 'Easy integration with partner systems via standard GS1 data exchanges and messaging formats.', icon: Share2 },
              { title: 'Regulatory Readiness', desc: 'Automated reporting for global regulatory requirements including DSCSA, EU FMD, and others.', icon: FileText },
              { title: 'Enterprise Scalability', desc: 'Engineered to generate and manage billions of product identities with high-speed performance.', icon: Cpu },
              { title: 'Improved Traceability', desc: 'End-to-end visibility from manufacturing floor to retail shelf, reducing counterfeiting and recall risks.', icon: Eye },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <span className="text-[#0753a4] shrink-0 mt-0.5"><item.icon size={16} strokeWidth={2} /></span>
                <div>
                  <h3 className="text-xs font-bold text-[#15345e]">{item.title}</h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#68717d]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA 
        title="Ready to Implement GS1 Standards?"
        copy="Join leading global manufacturers who trust TracelyTag for serialization and GS1 compliance."
      />
    </Shell>
  );
}

// 2. Digital Loyalty Programs Page
export function DigitalLoyaltyPage({ Shell }: { Shell: any }) {
  return (
    <Shell>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f5f8fc] to-white py-14">
        <div className="container-tight grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="inline-block rounded bg-[#e8f1fd] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#0753a4]">
              ENTERPRISE LOYALTY PLATFORM
            </span>
            <h1 className="display mt-4 text-3xl font-extrabold text-[#15345e] md:text-4xl lg:text-[42px] leading-tight">
              Build Customer Loyalty with Every Product Scan
            </h1>
            <p className="mt-4 text-xs leading-relaxed text-[#586474] md:text-sm">
              Turn product scans into genuine customer engagement. Reward repeat purchases, run targeted campaigns, and build direct-to-consumer relationships powered by product digital identity.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link href="/contact-us" className="rounded bg-[#064aa0] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#053b81]">
                Book a Demo
              </Link>
              <a href="#features" className="rounded border border-[#d2dce6] px-5 py-2.5 text-xs font-bold text-[#15345e] transition hover:bg-gray-50">
                Explore Platform
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
            <img src={`${root}industry-crops/apparel-fashion-dashboard.png`} alt="Customer Loyalty Control Center" className="w-full h-auto rounded" />
          </div>
        </div>

        {/* 4 Hero Cards */}
        <div className="container-tight mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Loyalty Rewards', desc: 'Instant reward issuing upon product scan.', icon: Gift },
            { title: 'Customer Retention', desc: 'Targeted engagement campaigns based on scan frequency and geography.', icon: TrendingUp },
            { title: 'Direct Touchpoint', desc: 'Personalized consumer engine tailored to individual customers.', icon: Sparkles },
            { title: 'Consumer Insights', desc: 'Real-time scan analytics and customer insights tied to exact purchase points.', icon: BarChart2 },
          ].map((c) => (
            <div key={c.title} className="rounded-lg border border-[#e2e8f0] bg-white p-5 shadow-xs transition hover:shadow-md">
              <span className="grid size-9 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4]">
                <c.icon size={18} strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-xs font-bold text-[#15345e]">{c.title}</h3>
              <p className="mt-1.5 text-[11px] leading-relaxed text-[#68717d]">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Brands Face Fragmented Loyalty Channels */}
      <section className="py-16 bg-white border-t border-[#edf2f7]">
        <div className="container-tight grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="display text-2xl font-bold text-[#15345e] mb-6">Modern Brands Face Fragmented Loyalty Channels</h2>
            <div className="space-y-5">
              {[
                { title: 'Low Repeat Purchase Rates', copy: "Customers browse standard product lines without returning to the brand's main platform." },
                { title: 'High Acquisition Costs', copy: 'Ad spending continues to rise, but CAC remains high without retention mechanisms.' },
                { title: 'Limited Consumer Insights', copy: 'Third-party retail sales hide customer data, leaving brands blind to user behavior.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="grid size-6 place-items-center rounded bg-red-50 text-red-500 shrink-0 mt-0.5">
                    <AlertTriangle size={14} />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-[#15345e]">{item.title}</h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-[#68717d]">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-[#064aa0] p-7 text-white shadow-md">
            <h3 className="text-sm font-bold tracking-wide uppercase text-blue-100 flex items-center gap-2">
              <ShieldCheck size={18} /> Integrated TracelyTag Solution
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-medium">
              {[
                'Earn & Redeem',
                'Instant Rewards',
                'Personalized Offers',
                'Tiered Levels',
                'Gamified Actions',
                'Direct Engagement',
              ].map((btn) => (
                <div key={btn} className="rounded bg-white/10 p-3 text-center text-xs font-semibold backdrop-blur-xs hover:bg-white/20 transition cursor-pointer">
                  {btn}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Seamless Loyalty Journey */}
      <section className="py-14 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="container-tight text-center">
          <h2 className="display text-xl font-bold text-[#15345e]">The Seamless Loyalty Journey</h2>
          <p className="text-xs text-[#68717d] mt-1 mb-10">Connecting physical products to digital rewards in 7 simple steps.</p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            {[
              { step: 'Consumer Scans', desc: 'Engage via QR code' },
              { step: 'Authentication', desc: 'Verify product origin' },
              { step: 'Enrollment', desc: 'Join loyalty program' },
              { step: 'Earn', desc: 'Accumulate points' },
              { step: 'Redeem', desc: 'Claim rewards' },
              { step: 'Personalization', desc: 'Targeted campaigns' },
              { step: 'Analytics', desc: 'Actionable data' },
            ].map((s, idx) => (
              <div key={s.step} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <span className="grid size-9 place-items-center rounded-full bg-[#064aa0] text-xs font-bold text-white shadow-xs">
                    {idx + 1}
                  </span>
                  <span className="mt-2 text-[11px] font-bold text-[#15345e] max-w-[90px] leading-snug">{s.step}</span>
                  <span className="text-[9px] text-[#718096] max-w-[90px]">{s.desc}</span>
                </div>
                {idx < 6 && <div className="hidden md:block h-[2px] w-6 bg-[#cbd5e1] -mt-8" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise-Grade Feature Set */}
      <section id="features" className="py-16 bg-white">
        <div className="container-tight">
          <h2 className="display text-2xl font-bold text-[#15345e] mb-8">Enterprise-Grade Feature Set</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'On-Pack Loyalty', desc: 'Scan-to-earn QR codes placed directly on product packaging enable instant scan and reward actions.', icon: QrCode },
              { title: 'Reward Engine', desc: 'Customizable reward rules, point mechanics, and multi-tier incentive engines.', icon: Coins },
              { title: 'Campaign Management', desc: 'Run targeted promotional campaigns with real-time response rate tracking.', icon: Sparkles },
              { title: 'Loyalty Program', desc: 'Omnichannel rewards program designed to turn product owners into brand advocates.', icon: Gift },
              { title: 'Tier Membership', desc: 'Segment users into VIP tiers with exclusive content, dynamic perks, and priority access.', icon: AwardIcon },
              { title: 'Loyalty Analytics', desc: 'Ultimate dashboard to monitor program health, scan rates, and redemption ROI for your brand.', icon: BarChart2 },
            ].map((feat) => (
              <div key={feat.title} className="rounded-lg border border-[#e2e8f0] bg-white p-6 shadow-xs">
                <span className="grid size-9 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4]">
                  <feat.icon size={18} strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-xs font-bold text-[#15345e]">{feat.title}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-[#68717d]">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantifiable ROI for Your Brand */}
      <section className="py-16 bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="container-tight">
          <h2 className="display text-2xl font-bold text-[#15345e] text-center mb-10">Quantifiable ROI for Your Brand</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Increase Repeat Purchases', desc: 'Drive repeat sales with real-time product engagement and incentive campaigns.', icon: TrendingUp },
              { title: 'Improve Retention', desc: 'Engage consumers with rewards and personalized content that build long-term relationships.', icon: UserPlus },
              { title: 'Strengthen Loyalty', desc: 'Transform transactional buyers into brand advocates that keep coming back.', icon: Award },
              { title: 'Deeper Insights', desc: 'Build a proprietary database of customer scan locations and preferences.', icon: Search },
              { title: 'Increase LTV', desc: 'Maximize the lifetime value of custom loyal customers through scan triggers.', icon: LineChart },
              { title: 'Marketing Performance', desc: 'Optimize marketing ROI with direct campaign targeting.', icon: Zap },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-[#e2e8f0] bg-white p-5 shadow-xs flex gap-4 items-start">
                <span className="grid size-8 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4] shrink-0">
                  <item.icon size={16} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-xs font-bold text-[#15345e]">{item.title}</h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#68717d]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA 
        title="Ready to Build Long-Term Customer Loyalty?"
        copy="Join leading global brands using TracelyTag to bridge the gap between their physical products and digital rewards."
      />
    </Shell>
  );
}

// 3. Product Digitalization / Secure Digital Identity Page (Image 2 design)
export function ProductDigitalizationPage({ Shell }: { Shell: any }) {
  return (
    <Shell>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f5f8fc] to-white py-14">
        <div className="container-tight grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="inline-block rounded bg-[#e8f1fd] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#0753a4]">
              DIGITAL PRODUCT PASSPORT
            </span>
            <h1 className="display mt-4 text-3xl font-extrabold text-[#15345e] md:text-4xl lg:text-[42px] leading-tight">
              Digitize Every Product with a Secure Digital Identity
            </h1>
            <p className="mt-4 text-xs leading-relaxed text-[#586474] md:text-sm">
              Turn every physical product into a connected digital touchpoint. Enable authentication, product information, compliance management, and full traceability. Build direct consumer trust by managing the complete product identity.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link href="/contact-us" className="rounded bg-[#064aa0] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#053b81]">
                Book a Demo
              </Link>
              <a href="#features" className="rounded border border-[#d2dce6] px-5 py-2.5 text-xs font-bold text-[#15345e] transition hover:bg-gray-50">
                Explore Platform
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
            <img src={`${root}industry-crops/fmcg-consumer-goods-dashboard.png`} alt="Product Digitalization Solution" className="w-full h-auto rounded" />
          </div>
        </div>

        {/* 4 Hero Cards */}
        <div className="container-tight mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Digital Product Identity', desc: 'Uniquely identify every item with secure digital link formats.', icon: QrCode },
            { title: 'Connected Products', desc: 'Turn physical products into dynamic consumer touchpoints.', icon: Sparkles },
            { title: 'Digital Product Passport', desc: 'Store complete product origin, materials, and sustainability metrics.', icon: FileText },
            { title: 'Lifecycle Intelligence', desc: 'Gain full trace data from raw materials to recycling.', icon: RefreshCw },
          ].map((c) => (
            <div key={c.title} className="rounded-lg border border-[#e2e8f0] bg-white p-5 shadow-xs transition hover:shadow-md">
              <span className="grid size-9 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4]">
                <c.icon size={18} strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-xs font-bold text-[#15345e]">{c.title}</h3>
              <p className="mt-1.5 text-[11px] leading-relaxed text-[#68717d]">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Product Digitalization? */}
      <section className="py-16 bg-white border-t border-[#edf2f7]">
        <div className="container-tight grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="display text-2xl font-bold text-[#15345e] mb-6">Why Product Digitalization?</h2>
            <div className="space-y-3.5">
              {[
                'Physical products lack a secure digital identity',
                'No direct consumer touchpoint',
                'Limited lifecycle visibility',
                'Manually entered data creates friction and error',
                'Weak supply chain transparency',
                'Regulatory compliance requirements are growing',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-xs font-medium text-[#15345e]">
                  <span className="grid size-5 place-items-center rounded-full bg-red-100 text-red-500 shrink-0">
                    <span className="text-[10px] font-bold">✕</span>
                  </span>
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-[#064aa0] p-7 text-white shadow-md">
            <h3 className="text-sm font-bold tracking-wide uppercase text-blue-100 flex items-center gap-2">
              <Zap size={18} /> Connected Digital Products
            </h3>
            <div className="mt-6 space-y-3 text-xs font-medium">
              {[
                'Create Digital Identity',
                'Product Passport',
                'Global Data Access',
                'Consumer Engagement',
                'Product Traceability',
                'Enterprise Integration',
              ].map((cap) => (
                <div key={cap} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-blue-300 shrink-0" />
                  {cap}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Digitalization Journey (7 Steps) */}
      <section className="py-14 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="container-tight text-center">
          <h2 className="display text-xl font-bold text-[#15345e]">The Digitalization Journey</h2>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            {[
              'Product Created', 'Digital Identity Generated', 'QR Applied', 
              'Consumer Scans', 'Connected Experience', 'Analytics', 'Continuous Product Lifecycle'
            ].map((step, idx) => (
              <div key={step} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <span className="grid size-9 place-items-center rounded-full bg-[#064aa0] text-xs font-bold text-white shadow-xs">
                    {idx + 1}
                  </span>
                  <span className="mt-2 text-[11px] font-bold text-[#15345e] max-w-[90px] leading-snug">{step}</span>
                </div>
                {idx < 6 && <div className="hidden md:block h-[2px] w-8 bg-[#cbd5e1] -mt-5" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section id="features" className="py-16 bg-white">
        <div className="container-tight">
          <h2 className="display text-2xl font-bold text-[#15345e] mb-8 text-center">Advanced Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Digital Product Identity', desc: 'Uniquely identify each physical item with standard digital link codes.', icon: QrCode },
              { title: 'Product Passport', desc: 'Centralized record of product composition, origin, and sustainability metrics.', icon: FileText },
              { title: 'Connected Experiences', desc: 'Deliver dynamic brand stories, user manuals, and post-purchase content.', icon: Sparkles },
              { title: 'Lifecycle Tracking', desc: 'Track product journey across manufacturing, distribution, retail, and recycling.', icon: RefreshCw },
              { title: 'Consumer Interactions', desc: 'Gather scan location data, engagement rates, and regional consumer preferences.', icon: Users },
              { title: 'Digital Product Analytics', desc: 'Measure campaign engagement, product usage, and return on investment.', icon: LineChart },
            ].map((feat) => (
              <div key={feat.title} className="rounded-lg border border-[#e2e8f0] bg-white p-6 shadow-xs">
                <span className="grid size-9 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4]">
                  <feat.icon size={18} strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-xs font-bold text-[#15345e]">{feat.title}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-[#68717d]">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-16 bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="container-tight">
          <h2 className="display text-2xl font-bold text-[#15345e] mb-8 text-center">Business Benefits</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Connected Products', desc: 'Connect physical inventory with direct digital engagement experiences.', icon: QrCode },
              { title: 'Increase Consumer Trust', desc: 'Build brand transparency by sharing authentic product origins.', icon: ShieldCheck },
              { title: 'Better Product Visibility', desc: 'Track product movement across global distribution networks in real-time.', icon: Eye },
              { title: 'Improved Customer Experience', desc: 'Deliver customized post-purchase support and interactive content.', icon: Sparkles },
              { title: 'Lifecycle Intelligence', desc: 'Gain continuous product insights from factory floor to end consumer.', icon: LineChart },
              { title: 'Future-Ready Products', desc: 'Prepare for emerging EU Digital Product Passport (DPP) regulations.', icon: Cpu },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-[#e2e8f0] bg-white p-5 shadow-xs flex gap-4 items-start">
                <span className="grid size-8 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4] shrink-0">
                  <item.icon size={16} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-xs font-bold text-[#15345e]">{item.title}</h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#68717d]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA 
        title="Ready to Digitize Every Product?"
        copy="Join leading global brands and manufacturers using TracelyTag to create secure digital identities."
      />
    </Shell>
  );
}

// 4. Case & Pallet Aggregation Page
export function AggregationPage({ Shell }: { Shell: any }) {
  return (
    <Shell>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f5f8fc] to-white py-14">
        <div className="container-tight grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="inline-block rounded bg-[#e8f1fd] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#0753a4]">
              INDUSTRIAL INTEGRITY
            </span>
            <h1 className="display mt-4 text-3xl font-extrabold text-[#15345e] md:text-4xl lg:text-[42px] leading-tight">
              Aggregate Every Product Across Every Packaging Level
            </h1>
            <p className="mt-4 text-xs leading-relaxed text-[#586474] md:text-sm">
              Automate parent-child hierarchy building across item, bundle, case, and pallet levels. Ensure complete supply chain visibility and rapid compliance with multi-level packaging aggregation.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link href="/contact-us" className="rounded bg-[#064aa0] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#053b81]">
                Book a Demo
              </Link>
              <a href="#features" className="rounded border border-[#d2dce6] px-5 py-2.5 text-xs font-bold text-[#15345e] transition hover:bg-gray-50">
                View Platform
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
            <img src={`${root}why-hero-diagram.png`} alt="Packaging Aggregation Diagram" className="w-full h-auto rounded" />
          </div>
        </div>

        {/* 4 Hero Cards */}
        <div className="container-tight mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Parent-Child Mapping', desc: 'Seamless aggregation hierarchy.', icon: Network },
            { title: 'Packaging Hierarchy', desc: 'Support for item, case, and pallet level packaging.', icon: Boxes },
            { title: 'Automated Aggregation', desc: 'High-speed line integration.', icon: Zap },
            { title: 'Traceable Supply Chain', desc: 'End-to-end visibility.', icon: Eye },
          ].map((c) => (
            <div key={c.title} className="rounded-lg border border-[#e2e8f0] bg-white p-5 shadow-xs transition hover:shadow-md">
              <span className="grid size-9 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4]">
                <c.icon size={18} strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-xs font-bold text-[#15345e]">{c.title}</h3>
              <p className="mt-1.5 text-[11px] leading-relaxed text-[#68717d]">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Aggregation Matters */}
      <section className="py-16 bg-white border-t border-[#edf2f7]">
        <div className="container-tight grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="display text-2xl font-bold text-[#15345e] mb-6">Why Aggregation Matters</h2>
            <div className="space-y-3.5">
              {[
                'Manual packaging mapping creates severe supply chain bottlenecks',
                'Lack of case-to-pallet parent-child data causes shipping errors',
                'Inability to process partial cases during repack operations',
                'Poor visibility into unit-level contents of aggregated cases',
                'Slow customs clearance due to missing packaging hierarchy data',
                'High cost of recall operations without precise aggregation records',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-xs font-medium text-[#15345e]">
                  <span className="grid size-5 place-items-center rounded-full bg-red-100 text-red-500 shrink-0">
                    <span className="text-[10px] font-bold">✕</span>
                  </span>
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-[#064aa0] p-7 text-white shadow-md">
            <h3 className="text-sm font-bold tracking-wide uppercase text-blue-100 flex items-center gap-2">
              <Boxes size={18} /> Smart Product Aggregation
            </h3>
            <div className="mt-6 space-y-3.5 text-xs font-medium">
              {[
                'Multi-Level Mapping',
                'Call-on-Scan Aggregation',
                'Partial Pack Support',
                'Real-Time Parent Child',
                'Warehouse Visibility',
                'Enterprise Scalability',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="grid size-5 place-items-center rounded-full bg-blue-400/30 text-white shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Aggregation Journey */}
      <section className="py-14 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="container-tight text-center">
          <h2 className="display text-xl font-bold text-[#15345e]">The Aggregation Journey</h2>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            {[
              'Individual Unit', 'Bundle', 'Case', 
              'Pallet', 'Container', 'Warehouse', 'Distribution'
            ].map((step, idx) => (
              <div key={step} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <span className="grid size-9 place-items-center rounded-full bg-[#064aa0] text-xs font-bold text-white shadow-xs">
                    {idx + 1}
                  </span>
                  <span className="mt-2 text-[11px] font-bold text-[#15345e] max-w-[90px] leading-snug">{step}</span>
                </div>
                {idx < 6 && <div className="hidden md:block h-[2px] w-8 bg-[#cbd5e1] -mt-5" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section id="features" className="py-16 bg-white">
        <div className="container-tight">
          <h2 className="display text-2xl font-bold text-[#15345e] mb-8">Advanced Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Parent-Child Mapping', desc: 'Define precise relationships between individual items, bundle boxes, outer cases, and shipping pallets.', icon: Network },
              { title: 'Automated Aggregation', desc: 'Trigger aggregation dynamically on high-speed production lines, conveyor belts, or packing stations.', icon: Zap },
              { title: 'Packaging Hierarchy', desc: 'Flexible structure supports multi-tier packaging rules specific to your supply chain requirements.', icon: Boxes },
              { title: 'Warehouse Integration', desc: 'Seamlessly integrate with WMS and ERP systems to manage aggregated inventory across warehouses.', icon: Building2 },
              { title: 'Repack Support', desc: 'Manage aggregation edits during repackaging, damaged item replacement, or partial case shipping.', icon: RefreshCw },
              { title: 'Shipping Verification', desc: 'Verify that complete cases and pallets are scanned and dispatched accurately during loading.', icon: ShieldCheck },
            ].map((feat) => (
              <div key={feat.title} className="rounded-lg border border-[#e2e8f0] bg-white p-6 shadow-xs">
                <span className="grid size-9 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4]">
                  <feat.icon size={18} strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-xs font-bold text-[#15345e]">{feat.title}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-[#68717d]">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-16 bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="container-tight">
          <h2 className="display text-2xl font-bold text-[#15345e] mb-8">Business Benefits</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Complete Product Hierarchy', desc: 'Maintain complete visibility of every unit packaged within cases and pallets.', icon: Layers },
              { title: 'Faster Product Recalls', desc: 'Pinpoint affected parent-child structures during recalls to avoid unnecessary inventory destruction.', icon: ShieldAlert },
              { title: 'Improved Warehouse Efficiency', desc: 'Scan single case or pallet codes to manage hundreds of individual product units instantly.', icon: Building2 },
              { title: 'Better Inventory Visibility', desc: 'Reduce shipping errors with automated hierarchy validation during fulfillment.', icon: Eye },
              { title: 'Regulatory Compliance', desc: 'Fulfill DSCSA, EU FMD, and global regulations requiring multi-tier packaging aggregation.', icon: FileText },
              { title: 'End-to-End Scalability', desc: 'Handle high-speed packaging lines with real-time database write capabilities.', icon: Cpu },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-[#e2e8f0] bg-white p-5 shadow-xs flex gap-4 items-start">
                <span className="grid size-8 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4] shrink-0">
                  <item.icon size={16} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-xs font-bold text-[#15345e]">{item.title}</h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#68717d]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA 
        title="Ready to Build Intelligent Product Hierarchies?"
        copy="Automate packaging aggregation and gain total visibility across every step of your supply chain."
      />
    </Shell>
  );
}

// 5. Mobile Verification Page
export function MobileVerificationPage({ Shell }: { Shell: any }) {
  return (
    <Shell>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f5f8fc] to-white py-14">
        <div className="container-tight grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="inline-block rounded bg-[#e8f1fd] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#0753a4]">
              MOBILE INTEGRITY SOLUTIONS
            </span>
            <h1 className="display mt-4 text-3xl font-extrabold text-[#15345e] md:text-4xl lg:text-[42px] leading-tight">
              Verify Every Product Instantly with Mobile Verification
            </h1>
            <p className="mt-4 text-xs leading-relaxed text-[#586474] md:text-sm">
              Empower field teams, inspectors, distributors, and consumers to verify product authenticity, scan barcodes, inspect serialization data, and access digital passports directly from any mobile device.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link href="/contact-us" className="rounded bg-[#064aa0] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#053b81]">
                Book a Demo
              </Link>
              <a href="#features" className="rounded border border-[#d2dce6] px-5 py-2.5 text-xs font-bold text-[#15345e] transition hover:bg-gray-50">
                View Features
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
            <img src={`${root}why-dashboard-monitor.png`} alt="Mobile Verification Interface" className="w-full h-auto rounded" />
          </div>
        </div>

        {/* 4 Hero Cards */}
        <div className="container-tight mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Instant Verification', desc: 'Sub-second verification results via mobile camera.', icon: Zap },
            { title: 'Mobile App Interface', desc: 'Native app and browser-based scanning for any device.', icon: Smartphone },
            { title: 'Consumer Trust', desc: 'Build confidence through instant product verification.', icon: ShieldCheck },
            { title: 'Connect Any Product', desc: 'Works across QR codes, NFC, barcodes, and digital link.', icon: QrCode },
          ].map((c) => (
            <div key={c.title} className="rounded-lg border border-[#e2e8f0] bg-white p-5 shadow-xs transition hover:shadow-md">
              <span className="grid size-9 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4]">
                <c.icon size={18} strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-xs font-bold text-[#15345e]">{c.title}</h3>
              <p className="mt-1.5 text-[11px] leading-relaxed text-[#68717d]">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Mobile Verification */}
      <section className="py-16 bg-white border-t border-[#edf2f7]">
        <div className="container-tight grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="display text-2xl font-bold text-[#15345e]">Enterprise Mobile Verification</h2>
            <p className="text-xs text-[#68717d] mt-1 mb-6">Empower field teams, inspectors, distributors, and consumers to verify product authenticity, inspect serialization, and view metadata.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Fast Scan Times',
                'Offline Mode Support',
                'Loyalty Integration',
                'Location-Based Verification',
                'Report Fake Alerts',
                'Vendor Verification API',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-xs font-medium text-[#15345e]">
                  <span className="grid size-5 place-items-center rounded-full bg-blue-100 text-[#0753a4] shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-[#064aa0] p-8 text-white shadow-md flex flex-col justify-center items-center text-center">
            <div className="grid size-16 place-items-center rounded-2xl bg-white/10 text-white mb-4 backdrop-blur-xs">
              <QrCode size={36} strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-bold">Mobile Verification Active</h3>
            <p className="text-xs text-blue-100 mt-2 max-w-xs">Scan any TracelyTag QR code or GS1 Digital Link barcode for instant authentic status.</p>
          </div>
        </div>
      </section>

      {/* The Verification Workflow */}
      <section className="py-14 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="container-tight text-center">
          <h2 className="display text-xl font-bold text-[#15345e]">The Verification Workflow</h2>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            {[
              { step: 'Scan Product', desc: 'Scan QR code or barcode using mobile device.' },
              { step: 'Verify GS1', desc: 'Platform validates product code format.' },
              { step: 'Authenticate Token', desc: 'Cryptography checks unique serial token.' },
              { step: 'Display Product Information', desc: 'Show authenticity status, origin data, and compliance details.' },
              { step: 'Consumer Engagement', desc: 'Action buttons offer loyalty points or feedback.' },
              { step: 'Location Recording', desc: 'Geolocate scan to log verification activity.' },
              { step: 'Business Intelligence', desc: 'Aggregate scan logs for counterfeit reporting.' },
            ].map((s, idx) => (
              <div key={s.step} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <span className="grid size-9 place-items-center rounded-full bg-[#064aa0] text-xs font-bold text-white shadow-xs">
                    {idx + 1}
                  </span>
                  <span className="mt-2 text-[11px] font-bold text-[#15345e] max-w-[90px] leading-snug">{s.step}</span>
                  <span className="text-[9px] text-[#718096] max-w-[90px]">{s.desc}</span>
                </div>
                {idx < 6 && <div className="hidden md:block h-[2px] w-6 bg-[#cbd5e1] -mt-8" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section id="features" className="py-16 bg-white">
        <div className="container-tight">
          <h2 className="display text-2xl font-bold text-[#15345e] mb-8">Advanced Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'QR Scanning', desc: 'High-performance barcode scanning engine works instantly across low-light, damaged, or curved labels.', icon: QrCode },
              { title: 'Authentication', desc: 'Cryptographic validation ensures codes are genuine and haven\'t been copied or reused.', icon: ShieldCheck },
              { title: 'Product Information', desc: 'Display rich metadata, compliance passports, and origin details directly to field agents or consumers.', icon: FileText },
              { title: 'Digital Identity', desc: 'Verify individual item status, serial history, and packaging hierarchy on-the-go.', icon: Smartphone },
              { title: 'Consumer Engagement', desc: 'Direct users to tailored post-scan experiences based on user role, location, or purchase history.', icon: Users },
              { title: 'Verification Analytics', desc: 'Track scan volume, geographic distribution, and suspected counterfeit activity in real-time.', icon: BarChart3 },
            ].map((feat) => (
              <div key={feat.title} className="rounded-lg border border-[#e2e8f0] bg-white p-6 shadow-xs">
                <span className="grid size-9 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4]">
                  <feat.icon size={18} strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-xs font-bold text-[#15345e]">{feat.title}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-[#68717d]">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Business Benefits */}
      <section className="py-16 bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="container-tight">
          <h2 className="display text-2xl font-bold text-[#15345e] mb-8">Enterprise Business Benefits</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Increase Consumer Trust', desc: 'Validation transparency guarantees product authenticity to end-users.', icon: ShieldCheck },
              { title: 'Instant Verification', desc: 'Empower field agents and auditors with instant mobile authentication.', icon: Zap },
              { title: 'Protect Brand Value', desc: 'Detect counterfeits and unauthorized distribution before products reach market.', icon: ShieldAlert },
              { title: 'Improve Operational Efficiency', desc: 'Mobile inspection speeds up auditing in logistics and retail channels.', icon: TrendingUp },
              { title: 'Real-Time Insights', desc: 'Gain real-time visibility into scan activity across global geographic markets.', icon: Eye },
              { title: 'Enterprise Scalability', desc: 'Scale verification across millions of users and devices without speed degradation.', icon: Cpu },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-[#e2e8f0] bg-white p-5 shadow-xs flex gap-4 items-start">
                <span className="grid size-8 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4] shrink-0">
                  <item.icon size={16} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-xs font-bold text-[#15345e]">{item.title}</h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#68717d]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA 
        title="Ready to Enable Instant Product Verification?"
        copy="Empower consumers and field teams to verify product authenticity and access digital passports anywhere."
      />
    </Shell>
  );
}

// 6. Product Authentication Page (New image 1)
export function ProductAuthenticationPage({ Shell }: { Shell: any }) {
  return (
    <Shell>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f5f8fc] to-white py-14">
        <div className="container-tight grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="inline-block rounded bg-[#e8f1fd] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#0753a4]">
              HIGH-PERFORMANCE SECURITY
            </span>
            <h1 className="display mt-4 text-3xl font-extrabold text-[#15345e] md:text-4xl lg:text-[42px] leading-tight">
              Product Authentication
            </h1>
            <p className="mt-4 text-xs leading-relaxed text-[#586474] md:text-sm">
              Protect brand integrity with instant mobile and cloud verification. Detect counterfeits, prevent gray market diversion, and build consumer trust with cryptographic product identity.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link href="/contact-us" className="rounded bg-[#064aa0] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#053b81]">
                Book a Demo
              </Link>
              <Link href="/contact-us" className="rounded border border-[#d2dce6] px-5 py-2.5 text-xs font-bold text-[#15345e] transition hover:bg-gray-50">
                Talk to an Expert
              </Link>
            </div>
          </div>
          <div className="rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
            <img src={`${root}why-dashboard-monitor.png`} alt="Product Authentication Engine" className="w-full h-auto rounded" />
          </div>
        </div>

        {/* 4 Hero Cards */}
        <div className="container-tight mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Secure Digital Identity', desc: 'Unique cryptographic identity for every item.', icon: ShieldCheck },
            { title: 'Instant Verification', desc: 'Sub-second verification results via mobile camera.', icon: Zap },
            { title: 'Counterfeit Protection', desc: 'Prevent counterfeit products from reaching consumers.', icon: ShieldX },
            { title: 'Global Traceability', desc: 'Real-time visibility across global distribution networks.', icon: Eye },
          ].map((c) => (
            <div key={c.title} className="rounded-lg border border-[#e2e8f0] bg-white p-5 shadow-xs transition hover:shadow-md">
              <span className="grid size-9 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4]">
                <c.icon size={18} strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-xs font-bold text-[#15345e]">{c.title}</h3>
              <p className="mt-1.5 text-[11px] leading-relaxed text-[#68717d]">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Authentication Matters */}
      <section className="py-16 bg-white border-t border-[#edf2f7]">
        <div className="container-tight grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="display text-2xl font-bold text-[#15345e]">Why Authentication Matters</h2>
            <p className="text-xs text-[#68717d] mt-1 mb-6">Counterfeiting and grey market diversion cost brands billions annually. Traditional security measures are no longer enough to protect modern supply chains.</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { title: 'Revenue Loss', copy: 'Unauthentic products erode brand sales and market share across global channels.', icon: TrendingUp },
                { title: 'Brand Trust Erosion', copy: 'Counterfeit products damage brand reputation and customer loyalty.', icon: ShieldAlert },
                { title: 'Safety & Compliance Risks', copy: 'Substandard fake products create safety hazards and compliance liabilities.', icon: AlertTriangle },
                { title: 'Gray Market Diversion', copy: 'Unauthorized distribution channels undercut pricing and breach territory agreements.', icon: Globe2 },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="grid size-6 place-items-center rounded bg-red-50 text-red-500 shrink-0 mt-0.5">
                    <item.icon size={14} />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-[#15345e]">{item.title}</h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-[#68717d]">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5">
            <img src={`${root}why-hero-diagram.png`} alt="Anti-Authentication Flow Diagram" className="w-full h-auto rounded" />
          </div>
        </div>
      </section>

      {/* Authentication Engine Workflow */}
      <section className="py-14 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="container-tight text-center">
          <h2 className="display text-xl font-bold text-[#15345e]">Authentication Engine Workflow</h2>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            {[
              'Code Scan', 'Token Check', 'Cloud Verification', 
              'Authentication Decision', 'Result Delivery', 'Analytics Log'
            ].map((step, idx) => (
              <div key={step} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <span className="grid size-9 place-items-center rounded-full bg-[#064aa0] text-xs font-bold text-white shadow-xs">
                    {idx + 1}
                  </span>
                  <span className="mt-2 text-[11px] font-bold text-[#15345e] max-w-[90px] leading-snug">{step}</span>
                </div>
                {idx < 5 && <div className="hidden md:block h-[2px] w-10 bg-[#cbd5e1] -mt-5" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section id="features" className="py-16 bg-white">
        <div className="container-tight">
          <h2 className="display text-2xl font-bold text-[#15345e] mb-8">Advanced Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Cryptographic Identity', desc: 'Micro-print, encrypted QR codes, and secure tokens generated for unit-level items.', icon: Key },
              { title: 'Mobile & Web Verification', desc: 'Native mobile apps and instant web browser scanner requiring no app installation.', icon: Smartphone },
              { title: 'Verification Engine', desc: 'Sub-second response engine capable of handling millions of global validation requests.', icon: Cpu },
              { title: 'Anti-Counterfeiting Engine', desc: 'Real-time anomaly detection flags duplicate scans, clone attempts, and invalid serial tokens.', icon: ShieldAlert },
              { title: 'Real-Time Market Analytics', desc: 'Real-time mapping of authentication activity, scan heatmaps, and suspicious scan spikes.', icon: BarChart3 },
              { title: 'GS1 Standards Compliant', desc: 'Full compatibility with GS1 Digital Link, GTIN, and global serialization formats.', icon: CheckCircle2 },
            ].map((feat) => (
              <div key={feat.title} className="rounded-lg border border-[#e2e8f0] bg-white p-6 shadow-xs">
                <span className="grid size-9 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4]">
                  <feat.icon size={18} strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-xs font-bold text-[#15345e]">{feat.title}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-[#68717d]">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-16 bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="container-tight">
          <h2 className="display text-2xl font-bold text-[#15345e] mb-8">Business Benefits</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Protect Brand Revenue', desc: 'Prevent revenue leakage caused by fake products and unauthorized marketplace listings.', icon: ShieldCheck },
              { title: 'Build Consumer Trust', desc: 'Provide direct verification transparency so customers buy with total confidence.', icon: Users },
              { title: 'Halt Gray Market', desc: 'Track product allocation to detect illegal rerouting and unauthorized channel sales.', icon: Globe2 },
              { title: 'Actionable Intelligence', desc: 'Gain real-time visibility into geographic scan patterns and field inspection reports.', icon: Eye },
              { title: 'Automated Auditing', desc: 'Streamline field audit workflows with instant mobile inspection for auditors.', icon: FileText },
              { title: 'Regulatory Safety', desc: 'Meet strict anti-counterfeiting mandates across pharmaceuticals, FMCG, and luxury goods.', icon: Shield },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-[#e2e8f0] bg-white p-5 shadow-xs flex gap-4 items-start">
                <span className="grid size-8 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4] shrink-0">
                  <item.icon size={16} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-xs font-bold text-[#15345e]">{item.title}</h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#68717d]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA 
        title="Ready to Protect Every Product?"
        copy="Join leading global brands using TracelyTag to prevent counterfeits, protect supply chains, and build consumer trust."
        secondaryBtn="Talk to an Expert"
      />
    </Shell>
  );
}

// 7. Supply Chain Integrity & Brand Protection Page (New image 3)
export function SupplyChainIntegrityPage({ Shell }: { Shell: any }) {
  return (
    <Shell>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f5f8fc] to-white py-14">
        <div className="container-tight grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="inline-block rounded bg-[#e8f1fd] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#0753a4]">
              ENTERPRISE SECURITY
            </span>
            <h1 className="display mt-4 text-3xl font-extrabold text-[#15345e] md:text-4xl lg:text-[42px] leading-tight">
              Secure the Future of Your Supply Chain
            </h1>
            <p className="mt-4 text-xs leading-relaxed text-[#586474] md:text-sm">
              Protect brand integrity with TracelyTag's advanced traceability platform. Gain complete physical-to-digital oversight, stop counterfeits, and enforce compliance at global scale.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link href="/contact-us" className="rounded bg-[#064aa0] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#053b81]">
                Book a Demo
              </Link>
              <Link href="/contact-us" className="rounded border border-[#d2dce6] px-5 py-2.5 text-xs font-bold text-[#15345e] transition hover:bg-gray-50">
                Explore Platform
              </Link>
            </div>
          </div>
          <div className="rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
            <img src={`${root}industry-crops/pharmaceuticals-dashboard.png`} alt="Supply Chain Integrity Dashboard" className="w-full h-auto rounded" />
          </div>
        </div>

        {/* 4 Hero Cards */}
        <div className="container-tight mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Product Authentication', desc: 'Instant verification across global networks.', icon: ShieldCheck },
            { title: 'Supply Chain Oversight', desc: 'Track product movement from factory to shelf.', icon: Eye },
            { title: 'Real-Time Alerts', desc: 'Detect clone scans, diversion, and illegal rerouting.', icon: AlertTriangle },
            { title: 'Scale Security', desc: 'Protect millions of products seamlessly.', icon: Cpu },
          ].map((c) => (
            <div key={c.title} className="rounded-lg border border-[#e2e8f0] bg-white p-5 shadow-xs transition hover:shadow-md">
              <span className="grid size-9 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4]">
                <c.icon size={18} strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-xs font-bold text-[#15345e]">{c.title}</h3>
              <p className="mt-1.5 text-[11px] leading-relaxed text-[#68717d]">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industrial Integrity Section */}
      <section className="py-16 bg-white border-t border-[#edf2f7]">
        <div className="container-tight text-center">
          <span className="eyebrow">INDUSTRIAL INTEGRITY</span>
          <h2 className="display text-2xl font-bold text-[#15345e] mt-2 mb-10 max-w-2xl mx-auto">
            Deploy intelligence across every node of your global distribution network with medical-grade precision.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Authenticate', desc: 'Instant verification guarantees product authenticity at every point of scan.', icon: ShieldCheck },
              { title: 'Prevent', desc: 'Stop counterfeiting, illicit trade, and unauthorized grey market diversion.', icon: ShieldAlert },
              { title: 'Trace', desc: 'Complete visibility into product distribution from factory floor to retail shelf.', icon: Eye },
              { title: 'Engage', desc: 'Turn physical products into dynamic touchpoints for modern consumer engagement.', icon: Users },
            ].map((col) => (
              <div key={col.title} className="rounded-lg border border-[#e2e8f0] bg-white p-6 text-left shadow-xs">
                <span className="grid size-9 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4] mb-4">
                  <col.icon size={18} strokeWidth={1.8} />
                </span>
                <h3 className="text-xs font-bold text-[#15345e]">{col.title}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-[#68717d]">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Intelligence */}
      <section className="py-16 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="eyebrow">COMMAND CENTER</span>
              <h2 className="display text-2xl font-bold text-[#15345e] mt-1">Dashboard Intelligence</h2>
              <p className="text-xs text-[#68717d] mt-1 max-w-xl">
                Command an enterprise view of scan locations, serialization rules, and authentication results in real-time to stop counterfeiters before products reach retail.
              </p>
            </div>
            <div className="flex gap-2">
              <Link href="/contact-us" className="rounded border border-[#cbd5e1] bg-white px-4 py-2 text-xs font-bold text-[#15345e]">Export Report</Link>
              <Link href="/contact-us" className="rounded bg-[#064aa0] px-4 py-2 text-xs font-bold text-white">See Live Demo</Link>
            </div>
          </div>

          <div className="rounded-xl border border-[#cbd5e1] bg-white p-4 shadow-sm mb-12">
            <img src={`${root}industry-crops/pharmaceuticals-dashboard.png`} alt="Dashboard Intelligence Control Center" className="w-full h-auto rounded" />
          </div>

          {/* Sectors We Empower */}
          <div className="mt-12 text-center">
            <h3 className="text-sm font-bold text-[#15345e]">Sectors We Empower</h3>
            <p className="text-xs text-[#68717d] mt-1 mb-6">Trusted by enterprise brands operating in high-risk global markets.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['Pharma', 'Electronics', 'AgTech', 'Cosmetics', 'FMCG', 'Food & Beverage', 'Apparel & Fashion'].map((sector) => (
                <span key={sector} className="rounded-full bg-white border border-[#e2e8f0] px-4 py-2 text-xs font-semibold text-[#15345e] shadow-2xs">
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why the Industry Trusts TracelyTag */}
      <section className="py-16 bg-white">
        <div className="container-tight grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="display text-2xl font-bold text-[#15345e] mb-4">Why the Industry Trusts TracelyTag</h2>
            <p className="text-xs text-[#68717d] mb-6 leading-relaxed">
              We combine enterprise-grade scale with cryptographic security to protect products, revenues, and consumers worldwide.
            </p>
            <div className="space-y-3 mb-8 text-xs font-medium text-[#15345e]">
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="text-[#0753a4]" /> 99.99% Uptime Guarantee for Enterprise APIs
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="text-[#0753a4]" /> 500M+ Items Authenticated Globally
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="text-[#0753a4]" /> Automated DSCSA & EU FMD Compliance
              </div>
            </div>
            <Link href="/contact-us" className="inline-flex items-center gap-2 text-xs font-bold text-[#0753a4] hover:underline">
              Talk with a Compliance Officer <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Secure Generation', desc: 'Cryptographic code generation prevents duplication and guessing.', icon: Key },
              { title: 'Serialization', desc: 'Scalable unit-level serialization for high-volume manufacturing lines.', icon: Layers },
              { title: 'Aggregation', desc: 'Parent-child hierarchy mapping from unit to case to pallet.', icon: Boxes },
              { title: 'Verification Engine', desc: 'Sub-second response engine for millions of authentication calls globally.', icon: Cpu },
            ].map((card) => (
              <div key={card.title} className="rounded-lg border border-[#e2e8f0] bg-white p-5 shadow-xs">
                <span className="grid size-8 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4] mb-3">
                  <card.icon size={16} strokeWidth={1.8} />
                </span>
                <h3 className="text-xs font-bold text-[#15345e]">{card.title}</h3>
                <p className="mt-1.5 text-[11px] leading-relaxed text-[#68717d]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA 
        title="Ready to Secure Your Brand Integrity?"
        copy="Join hundreds of global enterprises leveraging TracelyTag to eliminate counterfeiting and master supply chain transparency."
        primaryBtn="Schedule a Live Demo"
        secondaryBtn="Talk to an Expert"
      />
    </Shell>
  );
}
