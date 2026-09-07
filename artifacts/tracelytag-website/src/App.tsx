import { useEffect, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Link, Redirect, useLocation, useParams, Router as WouterRouter } from 'wouter';
import { Archive, ArrowRight, ArrowRightLeft, Asterisk, Award, BadgeCheck, Ban, Banknote, BarChart3, Barcode, BellRing, Book, BookOpen, Bot, BotMessageSquare, Box, Boxes, Brackets, BrainCog, BriefcaseMedical, Building2, Calculator, ChartColumn, ChartColumnBig, ChartLine, ChartNoAxesCombined, ChartPie, ChartScatter, Check, CheckCheck, ChevronDown, ChevronRight, CircleAlert, CircleCheck, CirclePlus, CircleQuestionMark, CircleStar, CircleUserRound, CircleX, ClipboardCheck, ClipboardList, ClipboardPaste, Cloud, CloudDownload, CloudUpload, Code, CodeXml, Cog, Command, Container, Cpu, Crosshair, Database, Download, DropletOff, Eye, EyeOff, Factory, FileCheck, FileClock, FileText, Fingerprint, Forklift, Frown, Gauge, Gavel, Gem, Gift, Globe, Globe2, Grid2x2, Grid2x2Plus, Grip, HandHeart, Handshake, Hash, Headset, Heart, History, Icon, IdCard, Info, Layers, LayoutPanelTop, LayoutTemplate, Leaf, List, ListOrdered, Locate, LockKeyhole, LockKeyholeOpen, Map, MapPin, Maximize, Megaphone, Menu, MessageSquarePlus, MessageSquareText, MessagesSquare, Microscope, Monitor, MonitorSmartphone, MousePointerClick, Network, OctagonAlert, Package, PackageCheck, PanelsTopLeft, PanelTop, PencilLine, PiggyBank, Pill, Pointer, Printer, Puzzle, QrCode, Radar, RefreshCw, Repeat, Rocket, Route as RouteIcon, Scale, Scan, ScanBarcode, ScanEye, ScanLine, ScanQrCode, ScanSearch, Search, SearchCheck, Server, Shapes, Share2, Shield, ShieldAlert, ShieldCheck, ShieldEllipsis, ShieldPlus, ShieldUser, Shirt, ShoppingBasket, ShoppingCart, Shuffle, SlidersVertical, Smartphone, SmartphoneCharging, Smile, Sparkles, SquareActivity, SquareCheckBig, SquarePen, SquareTerminal, Star, Store, TabletSmartphone, Tag, ThumbsUp, Ticket, Tractor, TrendingDown, TrendingUp, TriangleAlert, Truck, Undo2, Unlink, User, UserCheck, UserRoundCheck, UserRoundCog, UserRoundPlus, UserRoundX, Users, UserSearch, UsersRound, Utensils, View, WandSparkles, Warehouse, Waypoints, Workflow, X, Zap, type LucideIcon } from 'lucide-react';
import NotFound from '@/pages/not-found';
import { 
  Gs1CompliancePage, 
  DigitalLoyaltyPage, 
  ProductDigitalizationPage, 
  AggregationPage, 
  MobileVerificationPage,
  ProductAuthenticationPage,
  SupplyChainIntegrityPage
} from '@/pages/platform-pages';

const queryClient = new QueryClient();
const root = '/reference/img/';

const platformItems = [
  ['Product Digitalization', '/platform/product-digitalization', QrCode],
  ['Product Authentication', '/platform/product-authentication', ShieldCheck],
  ['Refined Product Authentication', '/platform/Refined-Product-Authentication', BadgeCheck],
  ['Case & Pallet Aggregation', '/platform/case-pallet-aggregation', Boxes],
  ['GS1 Standards Compliance', '/platform/gs1-standards-compliance', Check],
  ['Loyalty Programs', '/platform/loyalty-programs', Users],
  ['Mobile Verification', '/platform/mobile-verification', ScanLine],
] as const;
const solutionItems = [
  ['Analytics & Business Intelligence', 'analytics-business-intelligence'],
  ['Anti-Counterfeiting Solution', 'anti-counterfeiting'],
  ['Apparel & Clothing Industry', 'apparel-clothing'],
  ['Connected Packaging Solution', 'connected-packaging'],
  ['Customer Data Platform', 'customer-data-platform'],
  ['Digital Warranty Solution', 'digital-warranty'],
  ['Premium Product Authentication', 'premium-product-authentication'],
  ['Product Authentication Solution', 'product-authentication'],
  ['QR Code Generation & Serialization', 'qr-code-generation-serialization'],
  ['Marketing Automation', 'marketing-automation'],
  ['Supply Chain Visibility Solution', 'supply-chain-visibility'],
  ['Track & Trace Solution', 'track-and-trace'],
  ['Verification Engine', 'verification-engine'],
] as const;
const industryItems = [
  ['Agriculture & AgTech', 'agriculture-agtech', Factory],
  ['Apparel & Fashion', 'apparel-fashion', Sparkles],
  ['Cosmetics & Beauty', 'cosmetics-beauty', Sparkles],
  ['Electronics & High-Tech', 'electronics-high-tech', Monitor],
  ['FMCG & Consumer Goods', 'fmcg-consumer-goods', PackageCheck],
  ['Food & Beverage', 'food-beverage', PackageCheck],
  ['Pharmaceuticals', 'pharmaceuticals', LockKeyhole],
] as const;

function Brand() {
  return <Link href="/" data-testid="link-brand" className="flex items-center gap-2.5 shrink-0"><span className="brand-mark"><span /></span><span className="display text-[18px] font-extrabold tracking-[-.06em] text-[#123a78]">TracelyTag</span></Link>;
}

function Dropdown({ label, children, active }: { label: string; children: ReactNode; active?: boolean }) {
  const [open, setOpen] = useState(false);
  return <div className="nav-group relative flex items-center">
    <button onClick={() => setOpen(!open)} data-testid={`button-open-${label.toLowerCase()}`} className={`nav-link flex items-center gap-1.5 py-5 text-[12px] font-semibold ${active ? 'active' : ''}`}>{label}<ChevronDown size={13} strokeWidth={1.8} /></button>
    <div className={`mega-menu ${open ? 'open' : ''}`}>{children}</div>
  </div>;
}

function Header() {
  const [mobile, setMobile] = useState(false);
  const [location] = useLocation();
  return <header className="site-header">
    <div className="container-tight flex h-[70px] items-center justify-between gap-5">
      <Brand />
      <nav className="hidden lg:flex items-center gap-6">
        <Link href="/about-us" data-testid="link-about-us" className={`nav-link text-[12px] font-semibold py-5 ${location === '/about-us' ? 'active' : ''}`}>About Us</Link>
        <Link href="/why-tracelytag" data-testid="link-why-tracelytag" className={`nav-link text-[12px] font-semibold py-5 ${location === '/why-tracelytag' ? 'active' : ''}`}>Why TracelyTag</Link>
        <Dropdown label="Platform" active={location.startsWith('/platform')}><div className="grid w-[470px] grid-cols-2 gap-1 p-3">{platformItems.map(([name, href, Icon]) => <Link key={href} href={href} data-testid={`link-platform-${href.split('/').pop()}`} className="menu-item flex items-center gap-3 rounded-lg px-3 py-3"><span className="grid size-8 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4]"><Icon size={16} strokeWidth={1.7} /></span><span className="text-[12px] font-semibold text-[#15345e]">{name}</span></Link>)}</div></Dropdown>
        <Dropdown label="Solutions" active={location.startsWith('/solutions')}><div className="grid w-[530px] grid-cols-2 gap-1 p-3">{solutionItems.map(([name, slug]) => <Link key={slug} href={`/solutions/${slug}`} data-testid={`link-solution-${slug}`} className="menu-item rounded-lg px-3 py-3 text-[12px] font-semibold text-[#15345e]">{name}</Link>)}</div></Dropdown>
        <Link href="/hardware-integration" data-testid="link-hardware-integration" className={`nav-link text-[12px] font-semibold py-5 ${location === '/hardware-integration' ? 'active' : ''}`}>Hardware Integration</Link>
        <Dropdown label="Industries" active={location.startsWith('/industries')}><div className="w-[310px] p-3">{industryItems.map(([name, slug, Icon]) => <Link key={slug} href={`/industries/${slug}`} data-testid={`link-industry-${slug}`} className="menu-item flex items-center gap-3 rounded-lg px-3 py-2.5"><span className="text-[#0753a4]"><Icon size={16} strokeWidth={1.7} /></span><span className="text-[12px] font-semibold text-[#15345e]">{name}</span></Link>)}</div></Dropdown>
        <Link href="/contact-us" data-testid="link-contact-us" className="rounded-[4px] bg-[#064aa0] px-4 py-2.5 text-[12px] font-bold text-white transition hover:bg-[#053b81]">Contact Us</Link>
        <Link href="/login" data-testid="link-login" className="nav-link text-[12px] font-semibold">Login</Link>
      </nav>
      <button data-testid="button-toggle-mobile-nav" className="lg:hidden rounded border border-[#d8e2ee] p-2 text-[#064aa0]" onClick={() => setMobile(!mobile)} aria-label="Toggle navigation">{mobile ? <X size={20} /> : <Menu size={20} />}</button>
    </div>
    {mobile && <div className="lg:hidden border-t border-[#e2e8f0] bg-white px-4 pb-5">
      <div className="mx-auto flex max-w-[640px] flex-col gap-1 pt-3">
        {[
          ['/about-us', 'About Us'], ['/why-tracelytag', 'Why TracelyTag'], ['/platform', 'Platform'], ['/solutions', 'Solutions'], ['/hardware-integration', 'Hardware Integration'], ['/industries', 'Industries'], ['/contact-us', 'Contact Us'], ['/login', 'Login'],
        ].map(([href, label]) => <Link onClick={() => setMobile(false)} key={href} href={href} data-testid={`mobile-link-${label.toLowerCase().replaceAll(' ', '-')}`} className="rounded px-3 py-3 text-sm font-semibold text-[#15345e] hover:bg-[#f1f6fb]">{label}</Link>)}
      </div>
    </div>}
  </header>;
}

function Footer() {
  return <footer className="mt-20 border-t border-[#dfe5eb] bg-[#f0f1f4]">
    <div className="container-tight grid gap-10 py-10 md:grid-cols-[1.35fr_1fr_1fr_1fr]">
      <div><Brand /><p className="mt-4 max-w-[260px] text-[11px] leading-5 text-[#606c79]">Building the secure infrastructure for the next generation of digital manufacturing and product authenticity.</p><p className="mt-7 text-[10px] text-[#7a8490]">© 2024 Industrial Integrity Systems. All rights reserved.</p></div>
      <div><p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#15345e]">Resources</p><div className="space-y-3 text-[11px] text-[#68717d]"><Link href="/about-us" data-testid="footer-link-about">About Us</Link><Link href="/platform" data-testid="footer-link-platform">Platform</Link><Link href="/contact-us" data-testid="footer-link-contact">Contact Us</Link></div></div>
      <div><p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#15345e]">Industries</p><div className="space-y-3 text-[11px] text-[#68717d]"><Link href="/industries" data-testid="footer-link-industries">Industries</Link><Link href="/solutions" data-testid="footer-link-solutions">Solutions</Link><Link href="/hardware-integration" data-testid="footer-link-hardware">Hardware Integration</Link></div></div>
      <div><p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#15345e]">Legal</p><div className="space-y-3 text-[11px] text-[#68717d]"><span>Legal Compliance</span><span>Privacy Policy</span><span>Terms Status</span></div></div>
    </div>
  </footer>;
}

function Shell({ children }: { children: ReactNode }) { return <><Header /><main>{children}</main><Footer /></>; }

function Button({ children, href = '/contact-us', secondary = false }: { children: ReactNode; href?: string; secondary?: boolean }) {
  return <Link href={href} data-testid={`button-${String(children).toLowerCase().replaceAll(' ', '-')}`} className={`inline-flex items-center justify-center gap-2 rounded-[3px] px-5 py-3 text-[11px] font-bold transition ${secondary ? 'border border-[#cfd9e5] bg-white text-[#17365f] hover:border-[#0a51a5]' : 'bg-[#064aa0] text-white hover:bg-[#053b81]'}`}>{children}<ArrowRight size={13} /></Link>;
}

function Hero({ eyebrow = 'THE INTELLIGENCE LAYER', title, copy, image, cta = 'Book a Demo', alt }: { eyebrow?: string; title: string; copy: string; image: string; cta?: string; alt: string }) {
  return <section className="hero-grid overflow-hidden border-b border-[#e0e7ef]"><div className="container-tight grid items-center gap-12 py-16 md:grid-cols-[.92fr_1.08fr] md:py-24"><div className="fade-up"><p className="eyebrow mb-5">{eyebrow}</p><h1 className="display max-w-[520px] text-[40px] font-extrabold leading-[.98] text-[#182536] md:text-[58px]">{title}</h1><p className="mt-6 max-w-[490px] text-[13px] leading-6 text-[#596575]">{copy}</p><div className="mt-8 flex flex-wrap gap-3"><Button>{cta}</Button><Button secondary href="/contact-us">Talk to Sales</Button></div></div><div className="soft-panel fade-up delay-1 overflow-hidden rounded-[5px] p-3 md:p-5"><img src={`${root}${image}`} alt={alt} className="hero-image h-auto w-full object-cover" /></div></div></section>;
}

function FeatureCards({ items }: { items: [string, string, typeof Factory][] }) {
  return <section className="container-tight grid gap-4 py-10 md:grid-cols-4">{items.map(([title, text, Icon], i) => <div key={title} className={`card-line fade-up delay-${Math.min(i + 1, 3)} rounded-[4px] border bg-white p-5`}><Icon size={18} className="mb-5 text-[#0753a4]" strokeWidth={1.6} /><h3 className="text-[12px] font-bold text-[#20324b]">{title}</h3><p className="mt-2 text-[10px] leading-4 text-[#6a7480]">{text}</p></div>)}</section>;
}

function BlueBand({ title, items }: { title: string; items: string[] }) {
  return <section className="bg-[#06479d] text-white"><div className="container-tight grid gap-7 py-8 md:grid-cols-[.8fr_1.2fr] md:items-center"><h2 className="display text-[22px] font-bold">{title}</h2><div className="grid gap-3 sm:grid-cols-2">{items.map(item => <div key={item} className="flex items-center gap-2 border-b border-white/20 pb-2 text-[11px]"><Check size={14} className="text-[#80d8f4]" />{item}</div>)}</div></div></section>;
}

const homeProofStrip: [string, LucideIcon][] = [
  ['Product Authentication', ShieldCheck],
  ['Anti-Counterfeiting', Shield],
  ['Track & Trace', RouteIcon],
  ['GS1 Ready', ScanQrCode],
];
const homeIntegrityCards: [string, string, LucideIcon][] = [
  ['Authenticate', 'Instant mobile verification for field agents using proprietary encrypted identifiers.', ScanQrCode],
  ['Prevent', 'Real-time alerts for duplicate scans and unauthorized location access globally.', History],
  ['Trace', 'Granular visibility from the production line to the final retail shelf.', Waypoints],
  ['Engage', 'Turn every scan into a marketing touchpoint with dynamic loyalty integration.', Users],
];
const homeDashTabs = ['Supply Chain Map', 'Production Logs', 'Risk Analysis'];
const homeDashRows: [string, string, string, 'transit' | 'produced', string][] = [
  ['#TRX-88219-A', 'Shanghai, CN', 'In Transit', 'transit', '100.0%'],
  ['#TRX-88220-B', 'Stuttgart, DE', 'Produced', 'produced', '99.85%'],
];
const homeSectors: [string, LucideIcon][] = [
  ['FMCG', ShoppingBasket],
  ['Pharma', Pill],
  ['Agri', Tractor],
  ['Apparel', Shirt],
  ['F&B', Utensils],
  ['Cosmetics', Sparkles],
  ['Electronics', Cpu],
];
const homeTrustPoints = ['SOC 2 Type II Certified Infrastructure', '99.99% Global API Uptime SLA', 'Seamless ERP & SAP Integration'];
const homeTrustCards: [string, string, LucideIcon][] = [
  ['Secure Generation', 'Proprietary entropy-based ID generation making counterfeiting statistically impossible.', QrCode],
  ['Serialization', 'Unique unit-level identification allowing for surgical recalls and precise stock management.', Brackets],
  ['Aggregation', 'Hierarchical parent-child relationship tracking from individual item to case to pallet.', Archive],
  ['Verification Engine', 'Cloud-native processing handling 50,000+ verification requests per second globally.', SlidersVertical],
];

function Home() {
  const [dashTab, setDashTab] = useState(0);
  return <Shell>
    <section className="hm-hero" aria-labelledby="hm-hero-title">
      <div className="container-tight hm-hero-inner">
        <div className="fade-up">
          <p className="hm-pill"><span className="hm-pill-dot" />Enterprise Ready</p>
          <h1 id="hm-hero-title" className="hm-h1">Secure the Future of Your Supply Chain</h1>
          <p className="hm-hero-copy">Protect brand integrity with TracelyTag's advanced serialization platform. Bridging physical manufacturing and digital cloud verification at global scale.</p>
          <div className="hm-hero-actions">
            <Link href="/contact-us" data-testid="button-home-get-started" className="hm-btn hm-btn-primary">Get Started</Link>
            <Link href="/platform" data-testid="button-home-explore-platform" className="hm-btn hm-btn-ghost">Explore Platform</Link>
          </div>
        </div>
        <div className="hm-hero-art fade-up delay-1">
          <img src={`${root}about-hero-diagram.png`} alt="TracelyTag connected ecosystem: smart manufacturing plant, secure QR code generation, product authentication checkpoints, centralized enterprise analytics dashboard, global track and trace, and consumer engagement via mobile scans" />
        </div>
      </div>
    </section>

    <section className="hm-proof" aria-label="Platform credentials">
      <div className="container-tight hm-proof-grid">
        {homeProofStrip.map(([label, Icon]) => <p key={label} className="hm-proof-item">
          <span className="hm-proof-icon"><Icon size={18} strokeWidth={1.9} /></span>{label}
        </p>)}
      </div>
    </section>

    <section className="hm-integrity" aria-labelledby="hm-integrity-title">
      <div className="container-tight hm-integrity-inner">
        <p className="hm-eyebrow">Industrial Integrity</p>
        <h2 id="hm-integrity-title">Deploy intelligence across every node of your global distribution network with medical-grade precision.</h2>
        <div className="hm-integrity-grid">
          {homeIntegrityCards.map(([title, copy, Icon]) => <article key={title} className="card-line hm-integrity-card">
            <span className="hm-integrity-icon"><Icon size={20} strokeWidth={1.9} /></span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="hm-command" aria-labelledby="hm-command-title">
      <div className="container-tight hm-command-inner">
        <div className="hm-command-head">
          <div>
            <p className="hm-eyebrow">Command Center</p>
            <h2 id="hm-command-title">Dashboard Intelligence</h2>
            <p>Command global operations from a single unified interface. Gain actionable insights into supply chain health and brand security threats.</p>
          </div>
          <div className="hm-command-actions">
            <Link href="/contact-us" data-testid="button-home-export-report" className="hm-mini-btn hm-mini-ghost"><Download size={14} />Export Report</Link>
            <Link href="/contact-us" data-testid="button-home-live-metrics" className="hm-mini-btn hm-mini-primary"><ChartNoAxesCombined size={14} />Live Metrics</Link>
          </div>
        </div>

        <div className="hm-dash">
          <div className="hm-dash-bar">
            <span className="hm-dash-dots">
              <span style={{ background: '#ef8079' }} /><span style={{ background: '#e8a13f' }} /><span style={{ background: '#4fc07a' }} />
            </span>
            <div className="hm-dash-tabs" role="tablist" aria-label="Dashboard views">
              {homeDashTabs.map((tab, index) => <button
                key={tab}
                role="tab"
                type="button"
                aria-selected={dashTab === index}
                data-testid={`tab-home-${tab.toLowerCase().replaceAll(' ', '-')}`}
                onClick={() => setDashTab(index)}
                className={`hm-dash-tab ${dashTab === index ? 'active' : ''}`}
              >{tab}</button>)}
            </div>
            <span className="hm-dash-avatars">
              <span className="hm-dash-avatar">JD</span><span className="hm-dash-avatar">AS</span>
            </span>
          </div>
          <div className="hm-dash-body">
            <div className="hm-dash-side">
              <div className="hm-stat">
                <p className="hm-stat-label">Global Scans</p>
                <p className="hm-stat-row"><span className="hm-stat-value">1,284,092</span><span className="hm-stat-delta">+12%</span></p>
              </div>
              <div className="hm-stat">
                <p className="hm-stat-label">Active Alerts</p>
                <p className="hm-stat-row"><span className="hm-stat-value is-alert">14</span><span className="hm-stat-chip">CRITICAL</span></p>
              </div>
              <div className="hm-stat">
                <p className="hm-stat-label">System Load</p>
                <p className="hm-stat-bar"><span /></p>
                <p className="hm-stat-note">45k Requests/sec</p>
              </div>
            </div>
            <div className="hm-dash-main">
              <div className="hm-dash-map">
                <span className="hm-dash-map-label">Global Nodes Visualization</span>
                <span className="hm-map-node n1" /><span className="hm-map-node n2" /><span className="hm-map-node n3" />
                <div className="hm-dash-legend">
                  <p className="hm-legend-item"><span className="hm-legend-dot" style={{ background: '#12358c' }} />Warehouse Hub</p>
                  <p className="hm-legend-item"><span className="hm-legend-dot" style={{ background: '#16a34a' }} />Factory Origin</p>
                </div>
              </div>
              <table className="hm-dash-table">
                <thead><tr><th>Batch ID</th><th>Origin</th><th>Status</th><th>Integrity</th></tr></thead>
                <tbody>
                  {homeDashRows.map(([batch, origin, status, tone, integrity]) => <tr key={batch}>
                    <td className="hm-batch">{batch}</td>
                    <td>{origin}</td>
                    <td><span className={`hm-tag hm-tag-${tone}`}>{status.toUpperCase()}</span></td>
                    <td><span className="hm-integrity-value">{integrity}</span></td>
                  </tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="hm-sectors" aria-labelledby="hm-sectors-title">
      <div className="container-tight hm-sectors-inner">
        <div className="hm-sectors-head">
          <div>
            <h2 id="hm-sectors-title">Sectors We Empower</h2>
            <p>Enterprise-grade traceability for high-compliance global markets.</p>
          </div>
          <Link href="/solutions" data-testid="link-home-view-all-solutions" className="hm-sectors-link">View All Solutions <ArrowRight size={14} /></Link>
        </div>
        <div className="hm-sector-grid">
          {homeSectors.map(([label, Icon]) => <div key={label} className="card-line hm-sector-card">
            <Icon size={22} strokeWidth={1.8} />
            <span>{label}</span>
          </div>)}
        </div>
      </div>
    </section>

    <section className="hm-trust" aria-labelledby="hm-trust-title">
      <div className="container-tight hm-trust-inner">
        <div>
          <h2 id="hm-trust-title">Why the Industry Trusts TracelyTag</h2>
          <p className="hm-trust-copy">Built for the complexity of global manufacturing with security protocols that exceed industrial standards.</p>
          <div className="hm-trust-list">
            {homeTrustPoints.map(point => <p key={point} className="hm-trust-item"><CircleCheck size={18} strokeWidth={1.9} />{point}</p>)}
          </div>
          <Link href="/platform" data-testid="link-home-technical-documentation" className="hm-trust-link">Technical Documentation <ArrowRight size={14} /></Link>
        </div>
        <div className="hm-trust-grid">
          {homeTrustCards.map(([title, copy, Icon]) => <article key={title} className="card-line hm-trust-card">
            <Icon size={24} className="text-[#0f56c2]" strokeWidth={1.9} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="hm-cta" aria-labelledby="hm-cta-title">
      <div className="container-tight hm-cta-inner">
        <div className="hm-cta-card">
          <h2 id="hm-cta-title">Ready to Secure Your Brand Integrity?</h2>
          <p>Join hundreds of global enterprises leveraging TracelyTag to eliminate counterfeiting and master supply chain transparency.</p>
          <div className="hm-cta-actions">
            <Link href="/contact-us" data-testid="button-home-technical-demo" className="hm-cta-primary">Book a Technical Demo</Link>
            <Link href="/contact-us" data-testid="button-home-contact-sales" className="hm-cta-secondary">Contact Sales</Link>
          </div>
        </div>
      </div>
    </section>
  </Shell>;
}

function MonitorSection({ image, title }: { image: string; title: string }) {
  return <section className="container-tight grid items-center gap-10 py-16 md:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow mb-4">THE INTELLIGENCE LAYER</p><h2 className="display text-[32px] font-bold text-[#172536]">{title}</h2><p className="mt-4 text-[12px] leading-6 text-[#687382]">The centralized platform that turns connected product data into real-time business insight.</p><div className="mt-5 space-y-2 text-[11px] text-[#526174]"><p><Check size={13} className="mr-2 inline text-[#0753a4]" />Real-Time Monitoring</p><p><Check size={13} className="mr-2 inline text-[#0753a4]" />Supply Chain Visibility</p><p><Check size={13} className="mr-2 inline text-[#0753a4]" />Actionable Insights</p></div></div><div className="soft-panel p-3"><img src={`${root}${image}`} alt="TracelyTag platform dashboard" className="w-full" /></div></section>;
}

function CTA({ title, copy }: { title: string; copy: string }) { return <section className="container-tight"><div className="rounded-[4px] bg-[#064aa0] px-7 py-10 text-center text-white shadow-[0_12px_30px_rgba(6,74,160,.18)]"><h2 className="display text-[25px] font-bold">{title}</h2><p className="mx-auto mt-3 max-w-[520px] text-[11px] leading-5 text-white/75">{copy}</p><div className="mt-6 flex justify-center gap-3"><Button href="/contact-us">Book a Demo</Button><Button href="/contact-us" secondary>Contact Sales</Button></div></div></section>; }

const aboutFeatures: [string,string,typeof Factory][] = [['Product Authentication','Secure, transparent product verification from source to shelf.',ShieldCheck],['Anti-Counterfeiting','Protect your brand and your customers with a trusted digital identity.',LockKeyhole],['Track & Trace','End-to-end visibility across every movement in your supply chain.',Truck],['Connected Products','Bring every product interaction into one intelligent platform.',Network]];

const aboutHighlights: [string, string, LucideIcon][] = [
  ['Enterprise Platform', 'Centralized management for millions of unique product identities across global facilities.', Building2],
  ['Trusted Technology', 'Proprietary authentication protocols that make counterfeiting virtually impossible.', Shield],
  ['Global Standards', 'Full compliance with international traceability and GS1 identification standards.', Globe],
  ['Scalable Solutions', 'Modular architecture designed to grow with your production volume and complexity.', SlidersVertical],
];
const aboutStats = ['12.5M+ Daily Authenticated Items', '99.9% Platform Uptime Guarantee', 'Global Enterprise Infrastructure'];
const aboutMission: [string, string, LucideIcon][] = [
  ['Protect Brands', 'Warding off global counterfeiting threats with unbreakable digital seals.', Shield],
  ['Build Consumer Trust', 'Empowering buyers with instant transparency through mobile scans.', Users],
  ['Digitize Products', 'Turning physical inventory into actionable digital assets.', QrCode],
  ['Global Traceability', 'Ensuring full lineage from raw materials to final retail delivery.', RouteIcon],
  ['Supply Chain Visibility', 'Real-time mapping of global movement and warehouse flow.', Eye],
  ['Business Intelligence', 'Deriving data-driven insights to\nimprove operational efficiency.', ChartNoAxesCombined],
];
const aboutDeliver: [string, string, LucideIcon][] = [
  ['Product Authentication', 'Instant, tamper-proof verification of product authenticity at any point in the lifecycle.', ClipboardCheck],
  ['Anti-Counterfeiting', 'Multi-layered digital security features that actively detect and flag fraudulent activities.', SmartphoneCharging],
  ['Track & Trace', 'End-to-end visibility of movement, from factory floor to global distribution centers.', Crosshair],
  ['Connected Products', 'Bridging the gap between physical items and digital twins for real-time status updates.', Network],
  ['Consumer Engagement', 'Personalized post-purchase experiences and loyalty programs via simple mobile interaction.', UserCheck],
  ['Enterprise Analytics', 'Deep-dive reporting on scan rates, geographic distribution, and supply chain health.', ChartColumn],
];
const aboutWhy: [string, string, LucideIcon][] = [
  ['Enterprise Platform', 'Built for high-volume serialization and complex multi-site deployments.', Waypoints],
  ['Scalable Architecture', 'Cloud-native infrastructure that processes billions of events with millisecond latency.', Network],
  ['Secure Digital Identity', 'Each product is assigned an immutable, non-replicable digital fingerprint.', Fingerprint],
  ['Global Standards', 'Compliant with FDA, EMA, and GS1 regulatory and industry requirements.', Gavel],
  ['Operational Visibility', 'Identify bottlenecks and gray market diversions before they impact your bottom line.', ChartNoAxesCombined],
  ['Future-Ready Technology', 'Continuously evolving to support NFC, RFID, and advanced AI-driven verification.', Rocket],
];
const aboutLayerItems = ['Business Intelligence Tracking', 'Live Pulse Scan Monitoring', 'Global Shipment Alerts'];

function About() {
  return <Shell>
    <section className="abt-hero" aria-labelledby="abt-hero-title">
      <div className="container-tight abt-hero-inner">
        <div className="fade-up">
          <p className="abt-pill"><BadgeCheck size={13} strokeWidth={2.1} />About TracelyTag</p>
          <h1 id="abt-hero-title" className="abt-h1">Building Trust Through Connected Products</h1>
          <p className="abt-hero-copy">TracelyTag is the leading enterprise platform for manufacturers, bridging the gap between physical products and digital intelligence to ensure global supply chain integrity and consumer transparency.</p>
          <div className="abt-hero-actions">
            <Link href="/contact-us" data-testid="button-about-book-demo" className="abt-btn abt-btn-primary">Book a Demo <ArrowRight size={15} /></Link>
            <Link href="/contact-us" data-testid="button-about-contact-us" className="abt-btn abt-btn-ghost">Contact Us</Link>
          </div>
        </div>
        <div className="abt-hero-art fade-up delay-1">
          <img src={`${root}about-hero-diagram.png`} alt="TracelyTag connected ecosystem: smart manufacturing plant, secure QR code generation, product authentication checkpoints, centralized enterprise analytics dashboard, global track and trace, and consumer engagement via mobile scans" />
        </div>
      </div>
    </section>

    <section className="abt-features" aria-label="TracelyTag platform highlights">
      <div className="container-tight abt-feature-grid">
        {aboutHighlights.map(([title, copy, Icon]) => <article key={title} className="card-line abt-feature-card">
          <Icon size={22} className="text-[#0a3d8f]" strokeWidth={2} />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="abt-who" aria-labelledby="abt-who-title">
      <div className="container-tight abt-who-inner">
        <div>
          <h2 id="abt-who-title">Who We Are</h2>
          <p>At TracelyTag, we believe that every physical product tells a story. Since our inception, we have been dedicated to giving products a digital voice. We transform standard manufacturing outputs into "Connected Digital Products" through secure, unique identifiers.</p>
          <p>Our platform serves as the single source of truth for manufacturers, retailers, and consumers alike. By integrating advanced serialization with cloud-based analytics, we provide the visibility needed to optimize operations and the security needed to protect brand equity.</p>
          <div className="abt-stats">
            {aboutStats.map(stat => <p key={stat} className="abt-stat"><CircleCheck size={20} strokeWidth={2} />{stat}</p>)}
          </div>
        </div>
        <div className="abt-mission">
          <h2>Our Mission</h2>
          <div className="abt-mission-grid">
            {aboutMission.map(([title, copy, Icon]) => <div key={title} className="abt-mission-item">
              <Icon size={22} strokeWidth={1.9} />
              <h3>{title}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{copy}</p>
            </div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="abt-deliver" aria-labelledby="abt-deliver-title">
      <div className="container-tight abt-deliver-inner">
        <h2 id="abt-deliver-title">What We Deliver</h2>
        <p className="abt-deliver-sub">Comprehensive solutions tailored to the rigorous demands of industrial-scale manufacturing.</p>
        <div className="abt-deliver-grid">
          {aboutDeliver.map(([title, copy, Icon]) => <article key={title} className="card-line abt-deliver-card">
            <span className="abt-deliver-icon"><Icon size={21} strokeWidth={1.9} /></span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="abt-why" aria-labelledby="abt-why-title">
      <div className="container-tight abt-why-inner">
        <h2 id="abt-why-title">Why Manufacturers Choose TracelyTag</h2>
        <div className="abt-why-grid">
          {aboutWhy.map(([title, copy, Icon]) => <article key={title} className="abt-why-item">
            <Icon size={24} strokeWidth={1.9} />
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="abt-layer" aria-labelledby="abt-layer-title">
      <div className="container-tight abt-layer-inner">
        <div>
          <h2 id="abt-layer-title">The Intelligence Layer</h2>
          <p>Our centralized Enterprise Analytics Dashboard provides a real-time pulse of your entire global operations. From monitoring Connected Products and Authentication Activity to tracking Supply Chain Visibility and Platform Health, every metric is at your fingertips.</p>
          <div className="abt-layer-list">
            {aboutLayerItems.map(item => <p key={item} className="abt-layer-item"><span className="abt-layer-bullet" />{item}</p>)}
          </div>
        </div>
        <div className="abt-layer-art">
          <img src={`${root}about-dashboard-monitor.png`} alt="TracelyTag Enterprise Analytics Dashboard showing connected products at 12.5M total global count, authentication activity with live pulse, supply chain visibility, consumer engagement, business intelligence and platform health" />
        </div>
      </div>
    </section>

    <section className="abt-cta" aria-labelledby="abt-cta-title">
      <div className="container-tight abt-cta-inner">
        <div className="abt-cta-card">
          <h2 id="abt-cta-title">Ready to Build Connected Products?</h2>
          <p>Join the global leaders securing their supply chain with TracelyTag's industrial intelligence platform.</p>
          <div className="abt-cta-actions">
            <Link href="/contact-us" data-testid="button-about-cta-demo" className="abt-cta-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-about-cta-sales" className="abt-cta-secondary">Contact Sales</Link>
          </div>
        </div>
      </div>
    </section>
  </Shell>;
}

const whyFeatures: [string, string, LucideIcon][] = [
  ['Enterprise Platform', 'Centralized command for your entire product lifecycle.', Waypoints],
  ['Modular Architecture', 'Flexible components tailored to industrial requirements.', Puzzle],
  ['Secure Digital Identity', 'Unforgeable cryptographic authentication for every unit.', Fingerprint],
  ['Scalable Infrastructure', 'Built to handle billions of scans with zero latency.', Network],
];
const whyDifference: [string, string][] = [
  ['Unified Platform', 'Eliminate data silos by integrating authentication, tracking, and engagement into a single source of truth across all manufacturing facilities.'],
  ['End-to-End Visibility', "Gain granular visibility from the factory floor to the consumer's hand, enabling real-time responses to supply chain disruptions."],
  ['Industrial Scalability', 'Our infrastructure is designed for high-speed production environments where millisecond precision and massive throughput are non-negotiable.'],
];
const whyBuiltItems = ['Enterprise Architecture', 'Flexible Deployment', 'Legacy ERP Integration', 'Global Compliance Ready'];
const whyPillars: [string, string, LucideIcon][] = [
  ['Unified Platform', 'A singular API-first environment that bridges the gap between physical labels and digital cloud ledgers.', CloudUpload],
  ['Authentication', 'Instant, foolproof verification of product authenticity via mobile or industrial scanners.', ShieldCheck],
  ['Track & Trace', 'Real-time GPS and milestone tracking throughout the entire logistics journey.', MapPin],
  ['Connected Products', 'Turn every item into a direct communication channel with your end consumers.', QrCode],
  ['Advanced Analytics', 'Predictive modeling and scan-heatmaps to optimize distribution and inventory.', ChartNoAxesCombined],
  ['Enterprise Integrations', 'Seamless connectivity with SAP, Oracle, and proprietary manufacturing execution systems.', SlidersVertical],
];
const whyRtoiItems = ['ROI Monitoring', 'Node Network Mapping', 'Predictive Latency Alerts'];
const whyValue: [string, string][] = [
  ['Lower Operational Costs', 'Reduce product loss and streamline recall processes with precision tracking.'],
  ['Better Brand Protection', 'Eliminate counterfeits and gray-market diversions with uncopyable tags.'],
  ['Improved Supply Chain Visibility', 'Track inventory at the unit level, minimizing stock-outs and excess production.'],
  ['Higher Consumer Trust', 'Empower customers to verify authenticity, building long-term brand loyalty.'],
  ['Business Intelligence', 'Convert scan data into actionable insights for marketing and logistics teams.'],
  ['Future-Ready Platform', 'Modular design ensures compatibility with upcoming IoT and AI industrial standards.'],
];

function Why() {
  return <Shell>
    <section className="why2-hero" aria-labelledby="why2-hero-title">
      <div className="container-tight why2-hero-inner">
        <div className="fade-up">
          <h1 id="why2-hero-title" className="why2-h1">Why Leading Manufacturers Choose TracelyTag</h1>
          <p className="why2-hero-copy">Our enterprise platform orchestrates secure digital identities and real-time intelligence across the global supply chain, transforming products into intelligent data assets.</p>
          <div className="why2-hero-actions">
            <Link href="/contact-us" data-testid="button-why-book-demo-hero" className="why2-btn why2-btn-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-why-talk-expert" className="why2-btn why2-btn-ghost">Talk to an Expert</Link>
          </div>
        </div>
        <div className="why2-hero-art fade-up delay-1">
          <img src={`${root}why-hero-full.png`} alt="Why TracelyTag: smart manufacturing facility, secure product authentication checkpoints, global track and trace logistics, consumer engagement via mobile scans, and unified modular infrastructure around a centralized enterprise platform" />
        </div>
      </div>
    </section>

    <section className="why2-features" aria-label="TracelyTag platform strengths">
      <div className="container-tight why2-feature-grid">
        {whyFeatures.map(([title, copy, Icon]) => <article key={title} className="card-line why2-feature-card">
          <Icon size={24} className="text-[#0a3d8f]" strokeWidth={1.9} />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="why2-difference" aria-labelledby="why2-difference-title">
      <div className="container-tight why2-difference-inner">
        <h2 id="why2-difference-title">The TracelyTag Difference</h2>
        <span className="why2-rule" />
        <div className="why2-difference-grid">
          {whyDifference.map(([title, copy]) => <article key={title} className="why2-difference-item">
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="why2-built-wrap" aria-labelledby="why2-built-title">
      <div className="container-tight why2-built-inner">
        <div className="why2-built">
          <div>
            <h2 id="why2-built-title">Built for Modern Manufacturers</h2>
            <p>Deploying sophisticated tracking doesn't have to be complex. TracelyTag provides the infrastructure while you focus on production excellence.</p>
          </div>
          <div className="why2-built-grid">
            {whyBuiltItems.map(item => <p key={item} className="why2-built-item"><CircleCheck size={20} strokeWidth={1.8} />{item}</p>)}
          </div>
        </div>
      </div>
    </section>

    <section className="why2-pillars" aria-labelledby="why2-pillars-title">
      <div className="container-tight why2-pillars-inner">
        <h2 id="why2-pillars-title">Six Pillars of Enterprise Authentication</h2>
        <div className="why2-pillar-grid">
          {whyPillars.map(([title, copy, Icon]) => <article key={title} className="card-line why2-pillar-card">
            <Icon size={26} className="text-[#0a3d8f]" strokeWidth={1.9} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="why2-rtoi" aria-labelledby="why2-rtoi-title">
      <div className="container-tight why2-rtoi-inner">
        <div>
          <h2 id="why2-rtoi-title">Real-Time Operational Intelligence</h2>
          <p className="why2-rtoi-copy">Monitor global shipment health, authentication success rates, and consumer engagement trends through our high-fidelity dashboard.</p>
          <div className="why2-rtoi-list">
            {whyRtoiItems.map(item => <p key={item} className="why2-rtoi-item"><span className="why2-rtoi-bullet" />{item}</p>)}
          </div>
        </div>
        <div className="why2-rtoi-art">
          <img src={`${root}why-dashboard-full.png`} alt="Why TracelyTag Platform Overview dashboard: 15,891 connected nodes, operational system status, 204 active gateways, 45,218 shipments in transit at 98.1% on-time, 8.9/10 ROI score, 22.4% efficiency gains, 99.82% scan success, 1.42M global scans, 854k authentications, 212k loyalty enrolled, 99.998% uptime and 18ms API response time" />
        </div>
      </div>
    </section>

    <section className="why2-value" aria-labelledby="why2-value-title">
      <div className="container-tight why2-value-inner">
        <h2 id="why2-value-title">Strategic Business Value</h2>
        <p className="why2-value-sub">Driving efficiency and trust through technological precision.</p>
        <div className="why2-value-grid">
          {whyValue.map(([title, copy]) => <article key={title} className="card-line why2-value-card">
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="why2-cta" aria-labelledby="why2-cta-title">
      <div className="container-tight why2-cta-inner">
        <div className="why2-cta-card">
          <h2 id="why2-cta-title">Ready to Transform Your Product Ecosystem?</h2>
          <p>Join the world's most advanced manufacturers in securing their supply chains with TracelyTag's industrial-grade intelligence platform.</p>
          <div className="why2-cta-actions">
            <Link href="/contact-us" data-testid="button-why-book-demo" className="why2-btn why2-btn-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-why-contact-sales" className="why2-btn why2-btn-ghost">Contact Sales</Link>
          </div>
        </div>
      </div>
    </section>
  </Shell>;
}

function Hardware() { return <Shell><Hero eyebrow="CONNECTED PRODUCTION" title="Connect Your Production Line with Intelligent Hardware Integration" copy="Seamlessly integrate printers, scanners, cameras, PLCs, and sensors into one connected production ecosystem. Achieve real-time visibility, operational precision, and complete product traceability." image="hardware-hero-diagram.png" alt="Connected production line hardware integration" cta="Get Started" /><FeatureCards items={[['Industrial Automation','Connect your hardware to your digital product platform.',Factory],['Production Line Integration','Bring every line into one connected view.',Network],['Real-Time Verification','Verify product identity at the point of production.',ScanLine],['Enterprise Hardware','Scale production insight across your operations.',Boxes]]} /><BlueBand title="Production Line Integration Suite" items={['Connect Equipment','Manage Production Lines','Real-Time Monitoring','Capture Data']} /><section className="container-tight py-16"><div className="text-center"><p className="eyebrow mb-3">END-TO-END VISIBILITY</p><h2 className="display text-[32px] font-bold">Hardware Workflow</h2><p className="mt-3 text-[11px] text-[#687382]">From the first product movement through final verification.</p></div><div className="mt-10 grid gap-3 md:grid-cols-6">{['Production Start','Raw Material','Production','Quality Control','Pack & Label','Aggregation'].map((x,i) => <div key={x} className="relative text-center"><div className="mx-auto grid size-9 place-items-center rounded-full bg-[#e6f1ff] text-[#0753a4]"><span className="text-[11px] font-bold">{i+1}</span></div><p className="mt-3 text-[10px] font-semibold text-[#334761]">{x}</p></div>)}</div></section><MonitorSection image="hardware-dashboard-monitor.png" title="Control at Your Fingertips" /><CTA title="Ready to Connect Your Production Line?" copy="Connect your production line to a complete product intelligence platform." /></Shell>; }

function Contact() { const [sent, setSent] = useState(false); return <Shell><section className="hero-grid"><div className="container-tight grid items-center gap-10 py-16 md:grid-cols-2 md:py-24"><div><p className="eyebrow mb-4">LET'S TALK</p><h1 className="display text-[42px] font-extrabold leading-[1.02] text-[#123a78] md:text-[56px]">Let's Build Smarter, Connected Products Together</h1><p className="mt-6 text-[13px] leading-6 text-[#596575]">Whether you're looking to protect your products, improve supply chain visibility or create connected consumer experiences, our team is ready to help.</p></div><img src={`${root}contact-overview-banner.png`} alt="Enterprise solutions" className="hidden w-full md:block" /></div></section><section className="container-tight grid gap-5 py-10 md:grid-cols-4">{[['Book a Demo','See how connected products work for you.'],['Talk to Sales','Discuss enterprise pricing and integration.'],['Technical Support','Get help with your existing platform.'],['Business Consultation','Strategic advice for large-scale initiatives.']].map(([t,c]) => <div key={t} className="card-line border bg-white p-5"><Network size={17} className="mb-4 text-[#0753a4]" /><h3 className="text-[12px] font-bold text-[#253750]">{t}</h3><p className="my-2 text-[10px] leading-4 text-[#697586]">{c}</p><button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} data-testid={`button-contact-${t.toLowerCase().replaceAll(' ','-')}`} className="text-[9px] font-bold text-[#0753a4]">GET STARTED</button></div>)}</section><section className="bg-[#f1f3f6] py-14"><div className="container-tight grid gap-10 md:grid-cols-2"><div className="rounded bg-[#064aa0] p-7 text-white"><h2 className="display text-[24px] font-bold">How We Can Help</h2><div className="mt-7 space-y-3 text-[11px] text-white/80">{['Product Demonstrations','Solution Consultation','Enterprise Deployments','Technical Discussions','Partnership Opportunities','Customer Success'].map(x => <p key={x}><ArrowRight size={13} className="mr-2 inline" />{x}</p>)}</div></div><form id="contact-form" onSubmit={e => {e.preventDefault();setSent(true)}} className="rounded border bg-white p-7"><p className="eyebrow">CONTACT US</p><h2 className="display mt-2 text-[28px] font-bold">Start a conversation.</h2>{sent ? <div className="mt-8 rounded bg-[#eff8f3] p-5 text-sm text-[#205f42]">Thank you. Your message has been sent.</div> : <><div className="mt-6 grid gap-4 sm:grid-cols-2">{['First Name','Last Name','Business Email','Company'].map(label => <label key={label} className="text-[10px] font-bold text-[#4f5f72]">{label}<input required data-testid={`input-${label.toLowerCase().replaceAll(' ','-')}`} className="mt-2 block w-full rounded border border-[#d5dfe9] px-3 py-3 text-xs font-normal outline-none focus:border-[#0753a4]" /></label>)}</div><label className="mt-4 block text-[10px] font-bold text-[#4f5f72]">How can we help?<textarea required data-testid="input-message" className="mt-2 block min-h-28 w-full rounded border border-[#d5dfe9] px-3 py-3 text-xs font-normal outline-none focus:border-[#0753a4]" /></label><button data-testid="button-submit-contact" className="mt-5 rounded bg-[#064aa0] px-5 py-3 text-[11px] font-bold text-white">Submit Request</button></>}</form></div></section><CTA title="Ready to Start Your Digital Product Journey?" copy="Our team is ready to help you take the next step." /></Shell>; }

function Login() { return <Shell><section className="hero-grid flex min-h-[650px] items-center justify-center px-5 py-16"><div className="w-full max-w-[420px] rounded border bg-white p-8 shadow-[0_14px_35px_rgba(22,68,129,.08)]"><Brand /><p className="eyebrow mt-12">WELCOME BACK</p><h1 className="display mt-3 text-[34px] font-bold">Login</h1><p className="mt-2 text-[12px] text-[#697586]">Access your TracelyTag platform.</p><form className="mt-8 space-y-4" onSubmit={e => e.preventDefault()}><label className="block text-[10px] font-bold text-[#4f5f72]">Email<input type="email" required data-testid="input-login-email" className="mt-2 block w-full rounded border px-3 py-3 text-sm font-normal" /></label><label className="block text-[10px] font-bold text-[#4f5f72]">Password<input type="password" required data-testid="input-login-password" className="mt-2 block w-full rounded border px-3 py-3 text-sm font-normal" /></label><button data-testid="button-login" className="w-full rounded bg-[#064aa0] py-3 text-[11px] font-bold text-white">Login</button></form></div></section></Shell>; }

const genericMap: Record<string, {title:string; image:string; eyebrow:string}> = {
  'product-digitalization': { title:'Product Digitalization', image:'about-hero-diagram.png', eyebrow:'PLATFORM' },
  'product-authentication': { title:'Product Authentication', image:'why-hero-diagram.png', eyebrow:'PLATFORM' },
  'case-pallet-aggregation': { title:'Case & Pallet Aggregation', image:'hardware-hero-diagram.png', eyebrow:'PLATFORM' },
  'gs1-standards-compliance': { title:'GS1 Standards Compliance', image:'about-dashboard-monitor.png', eyebrow:'PLATFORM' },
  'loyalty-programs': { title:'Loyalty Programs', image:'why-dashboard-monitor.png', eyebrow:'PLATFORM' },
  'mobile-verification': { title:'Mobile Verification', image:'why-hero-diagram.png', eyebrow:'PLATFORM' },
  'analytics-business-intelligence': { title:'Analytics & Business Intelligence', image:'why-dashboard-monitor.png', eyebrow:'SOLUTIONS' },
  'anti-counterfeiting': { title:'Anti-Counterfeiting Solution', image:'why-hero-diagram.png', eyebrow:'SOLUTIONS' },
  'connected-packaging': { title:'Connected Packaging Solution', image:'about-hero-diagram.png', eyebrow:'SOLUTIONS' },
  'digital-warranty': { title:'Digital Warranty Solution', image:'why-dashboard-monitor.png', eyebrow:'SOLUTIONS' },
  'product-authentication-solution': { title:'Product Authentication Solution', image:'why-hero-diagram.png', eyebrow:'SOLUTIONS' },
  'supply-chain-visibility': { title:'Supply Chain Visibility Solution', image:'hardware-hero-diagram.png', eyebrow:'SOLUTIONS' },
  'track-and-trace': { title:'Track & Trace Solution', image:'about-hero-diagram.png', eyebrow:'SOLUTIONS' },
};

type SolutionFeature = [string, string, LucideIcon];
type SolutionData = {
  eyebrow: string;
  title: string;
  copy: string;
  heroImage: string;
  heroAlt: string;
  highlights: SolutionFeature[];
  challengeEyebrow: string;
  challengeTitle: string;
  challengeCopy: string;
  challengeItems: string[];
  panelTitle: string;
  panelItems: string[];
  journeyTitle: string;
  journeySteps: string[];
  capabilityTitle: string;
  capabilityCopy: string;
  capabilities: SolutionFeature[];
  dashboardTitle: string;
  dashboardCopy: string;
  dashboardImage: string;
  dashboardBullets: string[];
  benefits: [string, string][];
  ctaTitle: string;
  ctaCopy: string;
};

const solutionBase: Pick<SolutionData, 'heroImage' | 'heroAlt' | 'highlights' | 'challengeItems' | 'panelItems' | 'journeySteps' | 'capabilities' | 'dashboardImage' | 'dashboardBullets'> = {
  heroImage: 'about-hero-diagram.png',
  heroAlt: 'Connected product intelligence platform',
  highlights: [
    ['Secure Digital Identity', 'Give every product a verifiable identity from the moment it is created.', ShieldCheck],
    ['Real-Time Visibility', 'Turn every scan and movement into a clear operational signal.', Network],
    ['Actionable Intelligence', 'Connect product events to decisions your teams can act on.', BarChart3],
    ['Enterprise Ready', 'Scale trusted product experiences across markets, channels, and teams.', Globe2],
  ] as SolutionFeature[],
  challengeItems: ['Disconnected product data', 'Limited operational visibility', 'Counterfeit and trust risks', 'Slow, manual workflows'],
  panelItems: ['Product Authentication', 'Supply Chain Visibility', 'Connected Experiences', 'Business Intelligence', 'Secure Serialization', 'Enterprise Integrations'],
  journeySteps: ['Create', 'Identify', 'Move', 'Verify', 'Engage', 'Measure'],
  capabilities: [
    ['Digital Product Identity', 'Create a secure, persistent identity that travels with every product.', QrCode],
    ['Workflow Automation', 'Replace manual checkpoints with connected, repeatable workflows.', Sparkles],
    ['Supply Chain Intelligence', 'See the full product journey across locations and partners.', Truck],
    ['Consumer Trust', 'Give customers useful, transparent product experiences.', Users],
    ['Secure Data Capture', 'Capture verified events from production through the final scan.', ScanLine],
    ['Enterprise Reporting', 'Turn product activity into insight for every business team.', BarChart3],
  ] as SolutionFeature[],
  dashboardImage: 'about-dashboard-monitor.png',
  dashboardBullets: ['Live product activity across every market', 'Verification and exception monitoring', 'Operational trends your team can act on'],
};

const solutionPageData: Record<string, SolutionData> = {
  'analytics-business-intelligence': {
    ...solutionBase,
    eyebrow: 'ANALYTICS & BUSINESS INTELLIGENCE',
    title: 'Turn Product Data into Actionable Business Intelligence',
    copy: 'Transform every product scan, authentication, and supply chain event into meaningful business insights. Monitor product performance, customer engagement, supply chain visibility, and operational KPIs from one intelligent analytics platform.',
    challengeEyebrow: 'WHY MODERN ANALYTICS MATTERS',
    challengeTitle: 'Move from product signals to confident decisions.',
    challengeCopy: 'TracelyTag brings identity, movement, and engagement data together so leaders can understand what is happening across the product journey.',
    panelTitle: 'Enterprise Analytics Platform',
    journeyTitle: 'The Intelligence Pipeline',
    capabilityTitle: 'Advanced Platform Features',
    capabilityCopy: 'A connected analytics foundation that makes every product event useful.',
    dashboardTitle: 'The TracelyTag Executive Dashboard',
    dashboardCopy: 'Give every team a shared, real-time view of product performance and business health.',
    benefits: [['Better Decision Making', 'Replace assumptions with verified product intelligence.'], ['Operational Visibility', 'See issues early and respond before they become costly.'], ['Higher Efficiency', 'Focus teams on the actions that move the business forward.'], ['Improved Forecasting', 'Use real product signals to plan with confidence.'], ['Business Growth', 'Find opportunities hidden inside your product ecosystem.'], ['Actionable Insights', 'Make intelligence useful for every role.']],
    ctaTitle: 'Ready to Turn Product Data into Business Intelligence?',
    ctaCopy: 'Build a clearer view of your products, operations, and customers with TracelyTag.',
  },
  'anti-counterfeiting': {
    ...solutionBase,
    eyebrow: 'ANTI-COUNTERFEITING SOLUTION',
    title: 'Anti-Counterfeiting',
    copy: 'Protect your products with secure product identities, QR-based verification, serialization, and end-to-end traceability. Enable consumers and supply chain partners to instantly verify product authenticity.',
    heroImage: 'why-hero-diagram.png',
    challengeEyebrow: 'THE COUNTERFEIT CHALLENGE',
    challengeTitle: 'Make authenticity easy to prove.',
    challengeCopy: 'Counterfeit products damage revenue, reputation, and customer confidence. TracelyTag gives every participant a simple way to verify what is real.',
    panelTitle: 'Why Brands Choose TracelyTag',
    journeyTitle: 'The Verification Lifecycle',
    capabilityTitle: 'Integrated Brand Protection',
    capabilityCopy: 'Layer identity, verification, and intelligence across every channel where products move.',
    dashboardTitle: 'Monitor Authenticity at Scale',
    dashboardCopy: 'See verification activity, investigate unusual patterns, and protect your brand with a live view of the network.',
    benefits: [['Protect Brand Equity', 'Give customers a reliable reason to trust your products.'], ['Detect Counterfeits', 'Identify suspicious verification activity and emerging risk.'], ['Improve Customer Trust', 'Make authenticity proof fast and accessible.'], ['Strengthen Channels', 'Extend protection across distribution and retail.'], ['Support Investigations', 'Use verified product data to act with confidence.'], ['Measure Protection', 'Understand where and how your products are verified.']],
    ctaTitle: 'Ready to Protect Your Products?',
    ctaCopy: 'Make every product verifiable and every customer interaction more trustworthy.',
  },
  'apparel-clothing': {
    ...solutionBase,
    eyebrow: 'APPAREL & CLOTHING',
    title: 'Protect Every Garment with Digital Product Identity',
    copy: 'Help apparel brands authenticate products, share product stories, improve supply chain visibility, and create connected customer experiences.',
    heroImage: 'about-hero-diagram.png',
    challengeEyebrow: 'APPAREL INDUSTRY CHALLENGES',
    challengeTitle: 'Make every garment part of a trusted journey.',
    challengeCopy: 'From materials to resale, TracelyTag connects the information customers and brands need to understand a garment’s journey.',
    panelTitle: 'Why Apparel Brands Choose TracelyTag',
    journeyTitle: 'The End-to-End Garment Journey',
    capabilityTitle: 'Intelligence Across the Product Lifecycle',
    capabilityCopy: 'Create a durable digital thread from material sourcing to the customer’s closet.',
    dashboardTitle: 'See Every Garment in Context',
    dashboardCopy: 'Connect production, distribution, authentication, and engagement data in one product view.',
    benefits: [['Protect Brand Reputation', 'Make every item easy to authenticate.'], ['Support Transparency', 'Share trusted product history and sustainability information.'], ['Improve Visibility', 'Track garments from source to sale.'], ['Build Loyalty', 'Create useful post-purchase experiences.'], ['Enable Circularity', 'Keep product information available through resale and reuse.'], ['Generate Intelligence', 'Learn from how products move and engage.']],
    ctaTitle: 'Ready to Digitize Every Garment?',
    ctaCopy: 'Build trusted, connected apparel experiences with TracelyTag.',
  },
  'connected-packaging': {
    ...solutionBase,
    eyebrow: 'CONNECTED PACKAGING',
    title: 'Turn Packaging into a Connected Product Experience',
    copy: 'Transform every package into a trusted digital touchpoint for authentication, product information, engagement, and measurable business insight.',
    heroImage: 'about-hero-diagram.png',
    challengeEyebrow: 'THE CONNECTED PACKAGING OPPORTUNITY',
    challengeTitle: 'Packaging can do more than protect a product.',
    challengeCopy: 'Give every pack a secure identity and create a direct, useful relationship between your product and the people who choose it.',
    panelTitle: 'A Connected Package, End to End',
    journeyTitle: 'From Pack to Product Experience',
    capabilityTitle: 'Connected Packaging Capabilities',
    capabilityCopy: 'Build a flexible digital layer around packaging without disrupting the physical product.',
    dashboardTitle: 'Measure Every Product Interaction',
    dashboardCopy: 'Understand where packages are verified, what information is used, and how customers engage.',
    benefits: [['Strengthen Authenticity', 'Give customers confidence at the point of purchase.'], ['Share Product Information', 'Make important product details easy to access.'], ['Improve Engagement', 'Create direct, relevant experiences after purchase.'], ['Support Operations', 'Connect package-level events to supply chain workflows.'], ['Learn from Scans', 'Turn interactions into useful product intelligence.'], ['Extend Brand Value', 'Keep the relationship going beyond the shelf.']],
    ctaTitle: 'Ready to Connect Your Packaging?',
    ctaCopy: 'Create more trusted and measurable product experiences with TracelyTag.',
  },
  'customer-data-platform': {
    ...solutionBase,
    eyebrow: 'CUSTOMER DATA PLATFORM',
    title: 'Connect Product Data to Customer Intelligence',
    copy: 'Unify verified product interactions and customer signals to build a clearer, more useful understanding of the people who use your products.',
    heroImage: 'about-dashboard-monitor.png',
    challengeEyebrow: 'A BETTER CUSTOMER DATA FOUNDATION',
    challengeTitle: 'Bring the product relationship into focus.',
    challengeCopy: 'TracelyTag connects product identity with customer engagement so teams can build intelligence on trusted first-party signals.',
    panelTitle: 'Customer Intelligence, Connected',
    journeyTitle: 'The Customer Data Journey',
    capabilityTitle: 'A Smarter Customer Data Layer',
    capabilityCopy: 'Create a more complete customer view without losing the context of the product relationship.',
    dashboardTitle: 'See Customers Through the Product Lens',
    dashboardCopy: 'Combine product events and engagement signals into a clearer view of customer behavior and value.',
    benefits: [['Trusted First-Party Data', 'Build intelligence from verified product interactions.'], ['Clearer Customer Views', 'Connect people, products, and experiences.'], ['Better Personalization', 'Make engagement more relevant and useful.'], ['Improved Retention', 'Use product moments to deepen customer relationships.'], ['Cross-Team Alignment', 'Make customer intelligence useful beyond marketing.'], ['Measurable Growth', 'Understand the outcomes of connected engagement.']],
    ctaTitle: 'Ready to Connect Product and Customer Data?',
    ctaCopy: 'Build customer intelligence on a foundation of trusted product interactions.',
  },
  'digital-warranty': {
    ...solutionBase,
    eyebrow: 'DIGITAL WARRANTY',
    title: 'Make Every Warranty Simple, Secure, and Connected',
    copy: 'Replace paper processes with a digital warranty experience that protects products, supports customers, and gives service teams better intelligence.',
    heroImage: 'why-dashboard-monitor.png',
    challengeEyebrow: 'THE WARRANTY EXPERIENCE',
    challengeTitle: 'A better product relationship after purchase.',
    challengeCopy: 'Connect warranty coverage to a verified product identity so customers and service teams can move faster with less friction.',
    panelTitle: 'A Warranty Platform Built for Trust',
    journeyTitle: 'The Digital Warranty Journey',
    capabilityTitle: 'Warranty Intelligence for Every Team',
    capabilityCopy: 'Make registration, coverage, service, and insight part of one connected experience.',
    dashboardTitle: 'See Product Coverage and Service Activity',
    dashboardCopy: 'Give teams a live view of registrations, claims, coverage, and product lifecycle signals.',
    benefits: [['Simplify Registration', 'Make activation quick and easy for customers.'], ['Reduce Service Friction', 'Give support teams verified product context.'], ['Protect Coverage', 'Tie warranty rights to a trusted product identity.'], ['Improve Retention', 'Turn service moments into stronger relationships.'], ['Reduce Administration', 'Replace manual records with connected workflows.'], ['Learn from Service', 'Use warranty data to improve products and operations.']],
    ctaTitle: 'Ready to Modernize Your Warranty Experience?',
    ctaCopy: 'Connect products, customers, and service teams with a digital warranty workflow.',
  },
  'premium-product-authentication': {
    ...solutionBase,
    eyebrow: 'PREMIUM PRODUCT AUTHENTICATION',
    title: 'Premium Product Authentication',
    copy: 'Protect high-value products with secure digital identity and a verification experience designed to preserve trust at every touchpoint.',
    heroImage: 'why-hero-diagram.png',
    challengeEyebrow: 'AUTHENTICITY FOR PREMIUM PRODUCTS',
    challengeTitle: 'Make every valuable product provably real.',
    challengeCopy: 'Premium products deserve an authentication experience as considered as the product itself—from production to collector, customer, and resale.',
    panelTitle: 'Confidence at Every Touchpoint',
    journeyTitle: 'The Premium Product Journey',
    capabilityTitle: 'Authentication Built for Premium Brands',
    capabilityCopy: 'Combine product identity, verification, and intelligence to protect value across the lifecycle.',
    dashboardTitle: 'A Clear View of Product Authenticity',
    dashboardCopy: 'Monitor where products are verified and investigate patterns that may put brand value at risk.',
    benefits: [['Protect Exclusivity', 'Preserve the trust and scarcity that premium products command.'], ['Reduce Counterfeits', 'Make authentication accessible without compromising the experience.'], ['Support Resale', 'Carry trusted product identity into secondary markets.'], ['Strengthen Loyalty', 'Create a premium relationship beyond the transaction.'], ['Protect Brand Value', 'Use intelligence to understand authenticity risk.'], ['Deliver Confidence', 'Give every customer a simple answer: it is real.']],
    ctaTitle: 'Ready to Protect Every Premium Product?',
    ctaCopy: 'Build an authentication experience worthy of your brand.',
  },
  'product-authentication': {
    ...solutionBase,
    eyebrow: 'PRODUCT AUTHENTICATION',
    title: 'Give Every Product a Trusted Digital Identity',
    copy: 'Authenticate products instantly with a secure, scalable verification layer that protects brands and helps customers buy with confidence.',
    heroImage: 'why-hero-diagram.png',
    challengeEyebrow: 'THE AUTHENTICATION LAYER',
    challengeTitle: 'Turn product identity into customer confidence.',
    challengeCopy: 'TracelyTag makes it simple to create, manage, and verify a secure digital identity for every product you make.',
    panelTitle: 'Authentication Across the Lifecycle',
    journeyTitle: 'The Product Authentication Journey',
    capabilityTitle: 'A Complete Authentication Platform',
    capabilityCopy: 'Protect products from creation through customer verification with one connected identity layer.',
    dashboardTitle: 'Product Authentication Intelligence',
    dashboardCopy: 'Monitor verification activity and product identity health across your full network.',
    benefits: [['Prove Authenticity', 'Give customers a fast, reliable verification experience.'], ['Protect Brand Trust', 'Reduce the risk and cost of counterfeit products.'], ['Improve Visibility', 'Understand when and where products are verified.'], ['Support Partners', 'Give every channel a trusted way to verify.'], ['Scale Securely', 'Authenticate products across markets and product lines.'], ['Act on Signals', 'Use verification data to improve protection.']],
    ctaTitle: 'Ready to Authenticate Every Product?',
    ctaCopy: 'Build a trusted product identity layer with TracelyTag.',
  },
  'qr-code-generation-serialization': {
    ...solutionBase,
    eyebrow: 'QR CODE GENERATION & SERIALIZATION',
    title: 'Generate Secure Product Identities at Scale',
    copy: 'Create unique, secure QR-powered identities for every product and connect serialization to the workflows that keep your operation moving.',
    heroImage: 'hardware-hero-diagram.png',
    challengeEyebrow: 'SERIALIZATION WITHOUT COMPLEXITY',
    challengeTitle: 'Every product starts with a secure identity.',
    challengeCopy: 'Generate identifiers at the speed of production, manage them across product lines, and connect every code to the intelligence layer.',
    panelTitle: 'Secure Generation for Every Workflow',
    journeyTitle: 'The Serialization Lifecycle',
    capabilityTitle: 'Enterprise QR and Serialization',
    capabilityCopy: 'A flexible foundation for generating, assigning, managing, and verifying product identities.',
    dashboardTitle: 'Monitor Serialization in Real Time',
    dashboardCopy: 'See code generation, assignment, production activity, and verification signals in one view.',
    benefits: [['Generate at Scale', 'Create unique product identities for every production run.'], ['Reduce Errors', 'Connect codes to controlled, repeatable workflows.'], ['Improve Traceability', 'Carry identity from production through verification.'], ['Secure Products', 'Use a digital identity layer built for trust.'], ['Support GS1 Readiness', 'Build a strong foundation for product data standards.'], ['Measure Production', 'See how identity flows through the operation.']],
    ctaTitle: 'Ready to Build Secure Product Identities?',
    ctaCopy: 'Connect serialization and product intelligence from the first code.',
  },
  'marketing-automation': {
    ...solutionBase,
    eyebrow: 'MARKETING AUTOMATION',
    title: 'Turn Product Interactions into Marketing Momentum',
    copy: 'Use trusted product interactions to create timely, relevant customer journeys that keep your brand connected beyond the point of purchase.',
    heroImage: 'about-dashboard-monitor.png',
    challengeEyebrow: 'MARKETING BEYOND THE SHELF',
    challengeTitle: 'Make the product your most useful channel.',
    challengeCopy: 'A product interaction is a high-intent moment. TracelyTag helps you respond with experiences that are relevant, measurable, and trusted.',
    panelTitle: 'Automation Built on Product Context',
    journeyTitle: 'The Connected Marketing Journey',
    capabilityTitle: 'Product-Led Marketing Automation',
    capabilityCopy: 'Connect verified product moments to campaigns, journeys, and the customer data your teams already use.',
    dashboardTitle: 'Measure Product-Led Engagement',
    dashboardCopy: 'See which products, messages, and experiences are creating meaningful customer action.',
    benefits: [['Reach Customers Directly', 'Build a trusted, first-party relationship after purchase.'], ['Improve Relevance', 'Use product context to make every message more useful.'], ['Automate Journeys', 'Create repeatable experiences without manual follow-up.'], ['Grow Loyalty', 'Turn product interactions into lasting brand relationships.'], ['Protect the Channel', 'Keep customers inside a trusted product experience.'], ['Measure Outcomes', 'Connect engagement to real product and business signals.']],
    ctaTitle: 'Ready to Put Product Interactions to Work?',
    ctaCopy: 'Create marketing experiences customers want to come back to.',
  },
  'supply-chain-visibility': {
    ...solutionBase,
    eyebrow: 'SUPPLY CHAIN VISIBILITY',
    title: 'See Every Product Movement with Confidence',
    copy: 'Connect production, distribution, and partner events to create real-time visibility across the complete product journey.',
    heroImage: 'hardware-hero-diagram.png',
    challengeEyebrow: 'THE VISIBILITY GAP',
    challengeTitle: 'Know where products are—and what happened next.',
    challengeCopy: 'TracelyTag turns disconnected supply chain events into a shared, trusted view that helps teams respond faster and operate with confidence.',
    panelTitle: 'Visibility Across Every Node',
    journeyTitle: 'The Connected Supply Chain',
    capabilityTitle: 'Supply Chain Intelligence',
    capabilityCopy: 'Connect the physical movement of products to the operational decisions that keep business moving.',
    dashboardTitle: 'Real-Time Supply Chain Monitoring',
    dashboardCopy: 'See product movement, exceptions, and partner activity across the network from one intelligent view.',
    benefits: [['Improve Visibility', 'Know what is moving through every stage of the network.'], ['Find Exceptions', 'Identify delays and unusual activity earlier.'], ['Reduce Risk', 'Use trusted events to respond before issues spread.'], ['Align Partners', 'Share a common view across the ecosystem.'], ['Improve Operations', 'Replace manual reconciliation with connected data.'], ['Build Resilience', 'Make better decisions when conditions change.']],
    ctaTitle: 'Ready to See Your Supply Chain Clearly?',
    ctaCopy: 'Connect every product movement to a more resilient operation.',
  },
  'track-and-trace': {
    ...solutionBase,
    eyebrow: 'TRACK & TRACE',
    title: 'Follow Every Product from Source to Consumer',
    copy: 'Create a complete, verifiable product journey that helps teams improve operations, protect customers, and build trust across every channel.',
    heroImage: 'about-hero-diagram.png',
    challengeEyebrow: 'END-TO-END TRACEABILITY',
    challengeTitle: 'Every movement should tell you something.',
    challengeCopy: 'Connect events across production, logistics, retail, and customer interaction to understand the journey of every product.',
    panelTitle: 'The Complete Product Journey',
    journeyTitle: 'From Source to Consumer',
    capabilityTitle: 'Traceability That Creates Value',
    capabilityCopy: 'Make traceability useful for operations, compliance, brand protection, and customer trust.',
    dashboardTitle: 'The Product Journey in One View',
    dashboardCopy: 'Investigate product history, monitor movement, and share trusted traceability data across the enterprise.',
    benefits: [['Complete Product History', 'Build a durable record of every important event.'], ['Faster Investigations', 'Find the context you need when an issue occurs.'], ['Stronger Compliance', 'Support transparent, accountable product workflows.'], ['Better Operations', 'Use movement data to improve the network.'], ['Customer Confidence', 'Make product history easier to trust.'], ['Actionable Intelligence', 'Turn traceability into business value.']],
    ctaTitle: 'Ready to Trace Every Product?',
    ctaCopy: 'Build a complete product journey with TracelyTag.',
  },
  'verification-engine': {
    ...solutionBase,
    eyebrow: 'VERIFICATION ENGINE',
    title: 'Make Product Verification Instant and Intelligent',
    copy: 'Give every stakeholder a fast, secure way to verify products while turning verification events into intelligence for your business.',
    heroImage: 'why-dashboard-monitor.png',
    challengeEyebrow: 'VERIFICATION AT THE MOMENT OF TRUTH',
    challengeTitle: 'A verification answer your teams can trust.',
    challengeCopy: 'The TracelyTag verification engine checks product identity, captures context, and helps your teams act on what each event means.',
    panelTitle: 'One Engine. Every Verification.',
    journeyTitle: 'The Verification Flow',
    capabilityTitle: 'Verification Engine Capabilities',
    capabilityCopy: 'Combine secure identity, flexible workflows, and real-time intelligence in every verification.',
    dashboardTitle: 'See Verification Activity as It Happens',
    dashboardCopy: 'Monitor verification patterns, investigate exceptions, and understand product trust across the network.',
    benefits: [['Instant Answers', 'Verify products quickly at any point in the journey.'], ['Secure Decisions', 'Use trusted identity data to reduce uncertainty.'], ['Flexible Workflows', 'Support teams, partners, and customers with one engine.'], ['Risk Detection', 'Find unusual patterns that need attention.'], ['Better Experiences', 'Make verification simple for the person holding the product.'], ['Live Intelligence', 'Turn each verification into a useful signal.']],
    ctaTitle: 'Ready to Make Verification Smarter?',
    ctaCopy: 'Build trusted product verification into every customer and operational journey.',
  },
};

function SolutionJourney({ steps }: { steps: string[] }) {
  const [activeStep, setActiveStep] = useState(0);
  return <div className="solution-journey">
    <div className="solution-stepper" role="tablist" aria-label="Product journey stages">
      {steps.map((step, index) => <button key={step} type="button" role="tab" aria-selected={activeStep === index} aria-controls={`journey-panel-${index}`} className={`solution-step ${activeStep === index ? 'active' : ''}`} onClick={() => setActiveStep(index)}>
        <span className="solution-step-number">{String(index + 1).padStart(2, '0')}</span>
        <span>{step}</span>
      </button>)}
    </div>
    <div className="solution-journey-panel" id={`journey-panel-${activeStep}`} role="tabpanel">
      <p className="eyebrow">STAGE {String(activeStep + 1).padStart(2, '0')}</p>
      <h3 className="display mt-2 text-[22px] font-bold text-[#172536]">{steps[activeStep]}</h3>
      <p className="mt-2 max-w-[440px] text-[11px] leading-5 text-[#667487]">Capture a verified event at the {steps[activeStep].toLowerCase()} stage and connect it to the next decision in your product journey.</p>
    </div>
  </div>;
}

function BenefitsExplorer({ benefits }: { benefits: [string, string][] }) {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeTitle, activeCopy] = benefits[activeBenefit];
  return <div className="solution-benefits">
    <div className="solution-benefit-list" role="tablist" aria-label="Business benefits">
      {benefits.map(([title], index) => <button key={title} type="button" role="tab" aria-selected={activeBenefit === index} className={`solution-benefit-tab ${activeBenefit === index ? 'active' : ''}`} onClick={() => setActiveBenefit(index)}>
        <span>{String(index + 1).padStart(2, '0')}</span>{title}
      </button>)}
    </div>
    <div className="solution-benefit-detail" role="tabpanel">
      <p className="eyebrow">SELECTED OUTCOME</p>
      <h3 className="display mt-3 text-[26px] font-bold text-[#172536]">{activeTitle}</h3>
      <p className="mt-3 text-[12px] leading-6 text-[#687382]">{activeCopy}</p>
      <a href="#contact-form" className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#0753a4]">Discuss this outcome <ArrowRight size={13} /></a>
    </div>
  </div>;
}

function SolutionPage() {
  const { slug = 'analytics-business-intelligence' } = useParams<{ slug: string }>();
  const data = solutionPageData[slug] || solutionPageData['analytics-business-intelligence'];
  const heroImage = `solution-crops/${slug}-hero.png`;
  useEffect(() => {
    document.title = `${data.title} | TracelyTag`;
    return () => { document.title = 'TracelyTag'; };
  }, [data.title]);
  return <Shell>
    <section className="solution-hero" aria-labelledby="solution-title">
      <div className="container-tight solution-hero-inner">
        <div className="solution-hero-copy fade-up">
          <p className="eyebrow mb-5">{data.eyebrow}</p>
          <h1 id="solution-title" className="display max-w-[560px] text-[40px] font-extrabold leading-[1.02] text-[#172536] md:text-[48px]">{data.title}</h1>
          <p className="mt-6 max-w-[510px] text-[13px] leading-6 text-[#596575]">{data.copy}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact-us">Book a Demo</Button>
            <a href="#solution-capabilities" className="inline-flex items-center justify-center gap-2 rounded-[3px] border border-[#cfd9e5] bg-white px-5 py-3 text-[11px] font-bold text-[#17365f] transition hover:border-[#0a51a5]">Explore Solution <ArrowRight size={13} /></a>
          </div>
        </div>
        <div className="solution-hero-art fade-up delay-1">
          <div className="solution-art-grid" aria-hidden="true" />
          <img src={`${root}${heroImage}`} alt={data.heroAlt} />
          <span className="solution-art-label solution-art-label-one">SECURE IDENTITY</span>
          <span className="solution-art-label solution-art-label-two">LIVE INTELLIGENCE</span>
        </div>
      </div>
    </section>

    <section className="container-tight solution-highlights" aria-label="Solution highlights">
      {data.highlights.map(([title, text, Icon], index) => <article key={title} className={`card-line solution-highlight-card fade-up delay-${Math.min(index + 1, 3)}`}>
        <span className="solution-icon"><Icon size={17} strokeWidth={1.7} /></span>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>)}
    </section>

    <section className="solution-challenge">
      <div className="container-tight grid items-start gap-10 py-16 md:grid-cols-[.95fr_1.05fr] md:py-20">
        <div>
          <p className="eyebrow mb-4">{data.challengeEyebrow}</p>
          <h2 className="display max-w-[520px] text-[31px] font-bold text-[#172536] md:text-[37px]">{data.challengeTitle}</h2>
          <p className="mt-4 max-w-[500px] text-[12px] leading-6 text-[#657180]">{data.challengeCopy}</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {data.challengeItems.map(item => <p key={item} className="text-[11px] text-[#526174]"><Check size={13} className="mr-2 inline text-[#0753a4]" />{item}</p>)}
          </div>
        </div>
        <div className="solution-panel">
          <p className="eyebrow !text-[#8fddf3]">TRACELYTAG PLATFORM</p>
          <h2 className="display mt-3 text-[27px] font-bold">{data.panelTitle}</h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">{data.panelItems.map(item => <p key={item} className="border-b border-white/20 pb-2 text-[10px] text-white/85"><Check size={12} className="mr-2 inline text-[#8fddf3]" />{item}</p>)}</div>
          <Link href="/contact-us" className="mt-7 inline-flex items-center gap-2 rounded bg-white px-4 py-2.5 text-[10px] font-bold text-[#064aa0]">See How It Works <ArrowRight size={13} /></Link>
        </div>
      </div>
    </section>

    <section className="container-tight py-16 md:py-20" aria-labelledby="journey-title">
      <div className="text-center">
        <p className="eyebrow mb-3">END-TO-END VISIBILITY</p>
        <h2 id="journey-title" className="display text-[28px] font-bold text-[#172536] md:text-[34px]">{data.journeyTitle}</h2>
        <p className="mx-auto mt-3 max-w-[500px] text-[11px] leading-5 text-[#687382]">A connected view of the moments that shape every product journey.</p>
      </div>
      <div className="mt-10"><SolutionJourney steps={data.journeySteps} /></div>
    </section>

    <section id="solution-capabilities" className="solution-capabilities" aria-labelledby="capability-title">
      <div className="container-tight py-16 md:py-20">
        <div className="mx-auto max-w-[560px] text-center">
          <p className="eyebrow mb-3">CONNECTED PRODUCT INTELLIGENCE</p>
          <h2 id="capability-title" className="display text-[29px] font-bold text-[#172536] md:text-[35px]">{data.capabilityTitle}</h2>
          <p className="mt-3 text-[11px] leading-5 text-[#687382]">{data.capabilityCopy}</p>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {data.capabilities.map(([title, text, Icon], index) => <article key={title} className="card-line rounded border bg-white p-5">
            <span className="grid size-8 place-items-center rounded-md bg-[#edf5ff] text-[#0753a4]"><Icon size={16} strokeWidth={1.7} /></span>
            <p className="mt-5 text-[9px] font-bold uppercase tracking-[.12em] text-[#7b8794]">0{index + 1}</p>
            <h3 className="mt-2 text-[12px] font-bold text-[#20324b]">{title}</h3>
            <p className="mt-2 text-[10px] leading-4 text-[#6a7480]">{text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="container-tight solution-dashboard" aria-labelledby="dashboard-title">
      <div className="solution-dashboard-copy">
        <p className="eyebrow mb-4">REAL-TIME INTELLIGENCE</p>
        <h2 id="dashboard-title" className="display text-[30px] font-bold text-[#172536] md:text-[37px]">{data.dashboardTitle}</h2>
        <p className="mt-4 text-[12px] leading-6 text-[#687382]">{data.dashboardCopy}</p>
        <div className="mt-6 space-y-3">{data.dashboardBullets.map(item => <p key={item} className="text-[11px] text-[#526174]"><Check size={13} className="mr-2 inline text-[#0753a4]" />{item}</p>)}</div>
        <Link href="/contact-us" className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#0753a4]">Talk to our team <ArrowRight size={13} /></Link>
      </div>
      <div className="solution-dashboard-image soft-panel"><img src={`${root}${data.dashboardImage}`} alt={`${data.dashboardTitle} showing product intelligence`} /></div>
    </section>

    <section className="container-tight py-16 md:py-20" aria-labelledby="benefits-title">
      <div className="text-center">
        <p className="eyebrow mb-3">TANGIBLE BUSINESS BENEFITS</p>
        <h2 id="benefits-title" className="display text-[28px] font-bold text-[#172536] md:text-[34px]">Measurable outcomes across the enterprise.</h2>
      </div>
      <div className="mt-9 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.benefits.map(([title, copy], index) => <article key={title} className="card-line rounded border bg-white p-5">
          <span className="grid size-8 place-items-center rounded-md bg-[#edf5ff] text-[10px] font-bold text-[#0753a4]">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="mt-5 text-[12px] font-bold text-[#20324b]">{title}</h3>
          <p className="mt-2 text-[10px] leading-4 text-[#6a7480]">{copy}</p>
        </article>)}
      </div>
    </section>

    <CTA title={data.ctaTitle} copy={data.ctaCopy} />
  </Shell>;
}

type IndustryData = {
  eyebrow: string;
  title: string;
  copy: string;
  heroImage: string;
  featureItems: [string, string, LucideIcon][];
  challengeTitle: string;
  challengeItems: string[];
  challengePanel: string;
  journeyTitle: string;
  journeySteps: string[];
  solutionTitle: string;
  solutionCards: [string, string][];
  benefits: string[];
  ctaTitle: string;
};

const industryData: Record<string, IndustryData> = {
  'agriculture-agtech': {
    eyebrow: 'AGRICULTURE INDUSTRY',
    title: 'Protect Agricultural Products with Complete Farm-to-Field Traceability',
    copy: 'Help agricultural manufacturers and agrochemical brands secure products, prevent counterfeiting, enable farm-to-field traceability and provide farmers with trusted product verification through secure QR-powered digital identities.',
    heroImage: 'industry-heroimgs/agriculture.jpeg',
    featureItems: [['Product Authentication', 'Global security for your brand equity and reputation.', ShieldCheck], ['Anti-Counterfeiting', 'Instant verification for retailers and consumers.', LockKeyhole], ['Farm-to-Field Traceability', 'Real-time tracking from factory gate to store shelf.', Network], ['Farmer Verification', 'Build direct relationships via smart product packaging.', Users]],
    challengeTitle: 'Agriculture Industry Challenges',
    challengeItems: ['Counterfeit agricultural products', 'Supply chain visibility', 'Quality and safety risks', 'Regulatory compliance'],
    challengePanel: 'Why Agriculture Companies Choose TracelyTag',
    journeyTitle: 'End-to-End Agricultural Product Lifecycle',
    journeySteps: ['Manufacturing', 'Packaging', 'Distribution', 'Retail', 'Farmer Gate', 'Product Verification', 'Analytics'],
    solutionTitle: 'Enterprise Solutions for Agriculture',
    solutionCards: [['Product Authentication', 'Secure products from source to field.'], ['Anti-Counterfeiting', 'Protect brand equity and reputation.'], ['Track & Trace', 'Follow products across every movement.'], ['Farmer Engagement', 'Create trusted farmer relationships.'], ['Supply Chain Visibility', 'Monitor the complete agricultural journey.'], ['Analytics & Intelligence', 'Turn product data into action.']],
    benefits: ['Product Assurance', 'Prevent Counterfeit Products', 'Protect Product Trust', 'Improve Supply Chain Visibility', 'Strengthen Brand Reputation', 'Actionable Business Insights'],
    ctaTitle: 'Ready to Modernize Agricultural Product Traceability?',
  },
  'apparel-fashion': {
    eyebrow: 'ENTERPRISE APPAREL SOLUTION',
    title: 'Protect Every Garment with Digital Product Identity',
    copy: 'Help apparel brands authenticate products, eliminate counterfeit garments, enable digital product passports, improve supply chain visibility and create connected customer experiences through secure QR-powered digital identities.',
    heroImage: 'industry-heroimgs/cloth.jpeg',
    featureItems: [['Garment Authentication', 'Instant verification at any point in the supply chain or retail floor.', ShieldCheck], ['Digital Product Passport', 'Comprehensive lifecycle data and sustainability proof for every item.', QrCode], ['Supply Chain Visibility', 'Real-time tracking from textile manufacturing to final delivery.', Network], ['Connected Experience', 'Direct post-purchase engagement and personalized brand loyalty.', Users]],
    challengeTitle: 'Apparel Industry Challenges',
    challengeItems: ['Counterfeit products', 'Limited supply chain visibility', 'Sustainability expectations', 'Customer trust'],
    challengePanel: 'Why Apparel Brands Choose TracelyTag',
    journeyTitle: 'End-to-End Garment Journey',
    journeySteps: ['Manufacturing', 'Fabric & Processing', 'Garment Production', 'Wholesale', 'Retail Store', 'Customer Scan', 'Digital Product'],
    solutionTitle: 'Extending Intelligence Across the Product Lifecycle',
    solutionCards: [['Product Authentication', 'Secure every garment with a digital identity.'], ['Digital Product Passport', 'Make product history and sustainability accessible.'], ['Supply Chain Visibility', 'Track every movement from source to sale.'], ['Connected Experiences', 'Build stronger customer relationships.'], ['Product Storytelling', 'Share the story behind every garment.'], ['Brand Protection', 'Protect your brand from counterfeiting.']],
    benefits: ['Protect Brand Reputation', 'Eliminate Counterfeit Products', 'Improve Consumer Trust', 'Improve Supply Chain Visibility', 'Deliver Connected Experiences', 'Generate Product Intelligence'],
    ctaTitle: 'Ready to Digitize Every Garment?',
  },
  'cosmetics-beauty': {
    eyebrow: 'COSMETICS & PERSONAL CARE',
    title: 'Protect Every Beauty Product with Secure Digital Product Identity',
    copy: 'Help cosmetics and personal care brands protect product integrity, prevent counterfeiting, create transparent product journeys and build stronger consumer relationships with trusted digital identities.',
    heroImage: 'industry-heroimgs/cosmetic.jpeg',
    featureItems: [['Product Authentication', 'Secure verification for every beauty product.', ShieldCheck], ['Brand Protection', 'Protect your brand from counterfeit products.', LockKeyhole], ['Consumer Engagement', 'Build meaningful post-purchase experiences.', Users], ['Product Transparency', 'Make product information easy to trust.', Globe2]],
    challengeTitle: 'Cosmetics & Personal Care Industry Challenges',
    challengeItems: ['Counterfeit beauty products', 'Consumer safety concerns', 'Limited product transparency', 'Product authenticity'],
    challengePanel: 'Why Cosmetics Brands Choose TracelyTag',
    journeyTitle: 'End-to-End Cosmetic Product Lifecycle',
    journeySteps: ['Sourcing', 'Production', 'Packaging', 'Distribution', 'Retail', 'Consumer Scan', 'Analytics'],
    solutionTitle: 'Real-Time Authentication Analytics',
    solutionCards: [['Product Authentication', 'Verify products instantly and securely.'], ['Brand Protection', 'Strengthen trust across every channel.'], ['Consumer Engagement', 'Connect with consumers after purchase.'], ['Product Transparency', 'Share trusted product information.'], ['Supply Chain Visibility', 'Track products through the full lifecycle.'], ['Actionable Insights', 'Turn verification data into action.']],
    benefits: ['Protect Brand Reputation', 'Increase Consumer Trust', 'Prevent Counterfeiting', 'Improve Transparency', 'Strengthen Engagement', 'Actionable Insights'],
    ctaTitle: 'Ready to Protect Every Beauty Product?',
  },
  'electronics-high-tech': {
    eyebrow: 'ELECTRONICS INDUSTRY',
    title: 'Protect Every Electronic Device with Secure Digital Product Identity',
    copy: 'Help electronics and high-tech brands authenticate devices, manage warranties, secure supply chains and create trusted connected customer experiences through digital product identity.',
    heroImage: 'industry-heroimgs/electronics.jpeg',
    featureItems: [['Product Authentication', 'Instant verification for every device.', ShieldCheck], ['Digital Warranty', 'Connect warranty coverage to every product.', QrCode], ['Supply Chain Visibility', 'Track devices from source to sale.', Network], ['Customer Experience', 'Create connected experiences after purchase.', Users]],
    challengeTitle: 'Electronics Industry Challenges',
    challengeItems: ['Counterfeit electronic devices', 'Warranty and service complexity', 'Limited supply chain visibility', 'Customer trust'],
    challengePanel: 'Why Electronics Brands Choose TracelyTag',
    journeyTitle: 'The Secure Product Journey',
    journeySteps: ['Manufacturing', 'Components', 'Assembly', 'Distribution', 'Retail', 'Customer Scan', 'Warranty'],
    solutionTitle: 'Maximize Business Benefits',
    solutionCards: [['Product Authentication', 'Prove the identity of every device.'], ['Digital Warranty', 'Simplify warranty and service journeys.'], ['Supply Chain Visibility', 'See every device across the network.'], ['Connected Experiences', 'Create stronger customer relationships.'], ['Product Intelligence', 'Turn product data into decisions.'], ['Brand Protection', 'Protect product and customer trust.']],
    benefits: ['Prevent Counterfeit Products', 'Deliver Authenticity Proof', 'Increase Customer Trust', 'Improve Supply Chain Visibility', 'Strengthen Brand Reputation', 'Generate Product Intelligence'],
    ctaTitle: 'Ready to Protect Every Electronic Device?',
  },
  'fmcg-consumer-goods': {
    eyebrow: 'FMCG INDUSTRY',
    title: 'Secure Every FMCG Product from Factory to Consumer',
    copy: 'Help FMCG brands secure products, prevent counterfeiting, improve supply chain visibility and create connected consumer experiences through secure QR-powered digital identities.',
    heroImage: 'industry-heroimgs/fmcg.jpeg',
    featureItems: [['Product Authentication', 'Secure every product from factory to consumer.', ShieldCheck], ['Anti-Counterfeiting', 'Protect brand reputation and consumer trust.', LockKeyhole], ['Supply Chain Visibility', 'Track products across the full supply chain.', Network], ['Consumer Engagement', 'Create meaningful connected experiences.', Users]],
    challengeTitle: 'Why FMCG Brands Need TracelyTag',
    challengeItems: ['Counterfeit products', 'Lack of supply chain visibility', 'Product recalls and safety risks', 'Difficult consumer engagement'],
    challengePanel: 'Enterprise FMCG Platform',
    journeyTitle: 'From Factory to Consumer',
    journeySteps: ['Manufacturing', 'Packaging', 'Warehouse', 'Distribution', 'Retail', 'Consumer Scan', 'Business Intelligence'],
    solutionTitle: 'Comprehensive Solutions',
    solutionCards: [['Product Authentication', 'Verify every product with confidence.'], ['Anti-Counterfeiting', 'Protect brand equity and reputation.'], ['Supply Chain Visibility', 'Monitor products across every channel.'], ['Consumer Engagement', 'Connect directly with consumers.'], ['Analytics', 'Understand your product ecosystem.'], ['Supply Chain Visibility', 'Improve operational intelligence.']],
    benefits: ['Protect Brand Reputation', 'Reduce Counterfeiting', 'Improve Visibility', 'Increase Consumer Trust', 'Deliver Product Intelligence', 'Strengthen Brand Management'],
    ctaTitle: 'Ready to Protect Your FMCG Products?',
  },
  'food-beverage': {
    eyebrow: 'INDUSTRY SOLUTIONS: FOOD & BEVERAGE',
    title: 'Deliver Safe, Traceable Food from Production to Consumer',
    copy: 'Help food and beverage manufacturers protect brands, ensure food safety, enable end-to-end traceability, simplify product recalls and build consumer trust through secure QR-powered digital identities.',
    heroImage: 'industry-heroimgs/food.jpeg',
    featureItems: [['Food Safety', 'Build confidence through product-level verification.', ShieldCheck], ['Product Traceability', 'Follow food from production to consumer.', Network], ['Authentication', 'Verify product identity at every stage.', LockKeyhole], ['Consumer Trust', 'Create transparent product experiences.', Users]],
    challengeTitle: 'Overcoming Critical Industry Challenges',
    challengeItems: ['Food safety and compliance', 'Complex supply chain operations', 'Product recalls', 'Consumer trust'],
    challengePanel: 'Why Food & Beverage Companies Choose TracelyTag',
    journeyTitle: 'End-to-End Food Product Journey',
    journeySteps: ['Production', 'Processing', 'Packaging', 'Distribution', 'Retail', 'Consumer Scan', 'Analytics'],
    solutionTitle: 'Comprehensive Food & Beverage Solutions',
    solutionCards: [['Food Safety', 'Protect the integrity of every product.'], ['Product Traceability', 'Trace every product from source to shelf.'], ['Authentication', 'Verify products instantly.'], ['Consumer Engagement', 'Build trust through transparency.'], ['Product Recalls', 'Respond quickly with clear product data.'], ['Supply Chain Visibility', 'See the entire food journey.']],
    benefits: ['Protect Brand Reputation', 'Ensure Product Authenticity', 'Improve Visibility', 'Increase Consumer Trust', 'Simplify Recall Management', 'Strengthen Food Safety'],
    ctaTitle: 'Ready to Build a Safer, More Traceable Food Supply Chain?',
  },
  'pharmaceuticals': {
    eyebrow: 'PHARMACEUTICALS INDUSTRY',
    title: 'Secure Every Medicine with Trusted Product Identity',
    copy: 'Help pharmaceutical manufacturers secure medicines, prevent counterfeiting, improve supply chain visibility and deliver trusted product verification across every market.',
    heroImage: 'industry-heroimgs/pharma.jpeg',
    featureItems: [['Product Authentication', 'Verify medicine identity and integrity.', ShieldCheck], ['Anti-Counterfeiting', 'Protect patients and pharmaceutical brands.', LockKeyhole], ['Supply Chain Visibility', 'Track medicines across every movement.', Network], ['Patient Engagement', 'Create trusted, connected experiences.', Users]],
    challengeTitle: 'Pharmaceutical Industry Challenges',
    challengeItems: ['Counterfeit medicines', 'Regulatory requirements', 'Complex supply chains', 'Patient safety'],
    challengePanel: 'Why Pharmaceutical Companies Choose TracelyTag',
    journeyTitle: 'End-to-End Pharmaceutical Product Journey',
    journeySteps: ['Manufacturing', 'Packaging', 'Aggregation', 'Distribution', 'Pharmacy', 'Patient Scan', 'Analytics'],
    solutionTitle: 'Pharmaceutical Product Intelligence',
    solutionCards: [['Product Authentication', 'Verify every medicine before use.'], ['Anti-Counterfeiting', 'Protect patients from counterfeit products.'], ['Supply Chain Visibility', 'Track medicines from plant to patient.'], ['Patient Engagement', 'Build trust with connected information.'], ['Regulatory Compliance', 'Support serialization and compliance needs.'], ['Analytics', 'Turn product signals into insight.']],
    benefits: ['Protect Patient Safety', 'Prevent Counterfeit Medicines', 'Improve Compliance', 'Increase Supply Chain Visibility', 'Strengthen Brand Trust', 'Actionable Product Intelligence'],
    ctaTitle: 'Ready to Secure Your Pharmaceutical Products?',
  },
};

function IndustryPage() {
  const { slug = 'agriculture-agtech' } = useParams<{ slug: string }>();
  const data = industryData[slug] || industryData['agriculture-agtech'];
  return <Shell><Hero eyebrow={data.eyebrow} title={data.title} copy={data.copy} image={data.heroImage} alt={`${data.title} traceability diagram`} cta="Book a Demo" /><FeatureCards items={data.featureItems} /><section className="bg-[#f1f3f6] py-16"><div className="container-tight grid items-start gap-10 md:grid-cols-2"><div><p className="eyebrow mb-4">{data.challengeTitle}</p><h2 className="display text-[32px] font-bold text-[#172536]">Build trust across every stage of the product journey.</h2><div className="mt-6 space-y-3 text-[11px] text-[#526174]">{data.challengeItems.map(item => <p key={item}><Check size={13} className="mr-2 inline text-[#0753a4]" />{item}</p>)}</div></div><div className="rounded-[4px] bg-[#064aa0] p-7 text-white shadow-[0_12px_30px_rgba(6,74,160,.18)]"><h2 className="display text-[24px] font-bold">{data.challengePanel}</h2><div className="mt-6 grid gap-3 sm:grid-cols-2">{['Product Authentication','Anti-Counterfeiting','Supply Chain Visibility','Consumer Engagement','Track & Trace','Product Intelligence'].map(item => <p key={item} className="border-b border-white/20 pb-2 text-[10px]"><Check size={12} className="mr-2 inline text-[#80d8f4]" />{item}</p>)}</div><Link href="/contact-us" className="mt-6 inline-flex rounded bg-white px-4 py-2 text-[10px] font-bold text-[#064aa0]">See How TracelyTag Helps</Link></div></div></section><section className="container-tight py-16"><div className="text-center"><p className="eyebrow mb-3">END-TO-END VISIBILITY</p><h2 className="display text-[28px] font-bold text-[#172536]">{data.journeyTitle}</h2><p className="mt-3 text-[11px] text-[#687382]">From the first movement through customer verification and analytics.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-3 md:grid-cols-7">{data.journeySteps.map((step, index) => <div key={step} className="text-center"><div className={`mx-auto grid size-9 place-items-center rounded-full ${index === data.journeySteps.length - 1 ? 'bg-[#064aa0] text-white' : 'bg-[#e6f1ff] text-[#0753a4]'}`}><span className="text-[10px] font-bold">{index + 1}</span></div><p className="mt-3 text-[10px] font-semibold text-[#334761]">{step}</p></div>)}</div></section><section className="bg-[#f1f3f6] py-16"><div className="container-tight"><div className="text-center"><p className="eyebrow mb-3">CONNECTED PRODUCT INTELLIGENCE</p><h2 className="display text-[28px] font-bold text-[#172536]">{data.solutionTitle}</h2><p className="mt-3 text-[11px] text-[#687382]">Connected capabilities for the complete product lifecycle.</p></div><div className="mt-9 grid gap-4 md:grid-cols-3">{data.solutionCards.map(([title, text], index) => <div key={title} className="card-line rounded border bg-white p-5"><span className="grid size-7 place-items-center rounded-md bg-[#edf5ff] text-[10px] font-bold text-[#0753a4]">0{index + 1}</span><h3 className="mt-5 text-[12px] font-bold text-[#20324b]">{title}</h3><p className="mt-2 text-[10px] leading-4 text-[#6a7480]">{text}</p></div>)}</div></div></section><MonitorSection image="about-dashboard-monitor.png" title="Product Intelligence Dashboard" /><section className="container-tight py-14"><div className="text-center"><p className="eyebrow mb-3">TANGIBLE BUSINESS BENEFITS</p><h2 className="display text-[28px] font-bold text-[#172536]">Measurable outcomes across the enterprise.</h2></div><div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">{data.benefits.map((benefit, index) => <div key={benefit} className="flex gap-3 rounded border bg-white p-5"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#edf5ff] text-[10px] font-bold text-[#0753a4]">0{(index % 6) + 1}</span><p className="text-[11px] font-semibold text-[#334761]">{benefit}</p></div>)}</div></section><CTA title={data.ctaTitle} copy="Build trusted, connected products with TracelyTag." /></Shell>;
}

const electronicsFeatures: [string, string, LucideIcon][] = [
  ['Product Authentication', 'Instant verification for every unit from chip to shelf.', ShieldCheck],
  ['Digital Warranty', 'Seamless activation and claim tracking for consumers.', ClipboardList],
  ['Supply Chain Visibility', 'Real-time tracking of high-value components.', Archive],
  ['Customer Experience', 'Direct digital engagement channel post-purchase.', Smartphone],
];
const electronicsChallenges: [string, string][] = [
  ['Counterfeit electronic devices', 'Global trade of fake components is rising at an alarming rate.'],
  ['Warranty fraud', 'Unauthorized claims cost brands billions in annual losses.'],
  ['Limited supply chain visibility', 'Opaque distribution leads to stockouts and gray market leaks.'],
];
const electronicsPanelItems = ['Product Authentication', 'Digital Warranty', 'Track & Trace', 'Consumer Engagement', 'Supply Chain Visibility', 'Business Intelligence'];
const electronicsJourney = ['Manufacturing', 'QR Code Printing', 'Packaging', 'Warehouse', 'Distribution', 'Retail', 'Consumer Scan', 'Digital Services'];
const electronicsBenefits: [string, string, LucideIcon][] = [
  ['Prevent Counterfeit Products', 'Stop fraudulent replicas from entering your market with tamper-proof digital authentication.', Shield],
  ['Reduce Warranty Fraud', 'Automate validation for every claim, ensuring only genuine products are serviced under warranty.', Gavel],
  ['Increase Consumer Trust', 'Give buyers the confidence to verify high-value electronics instantly using their smartphones.', Handshake],
  ['Improve Supply Chain Visibility', 'Eliminate blind spots in your distribution network with end-to-end tracking of every component.', Eye],
  ['Strengthen Brand Reputation', 'Position your brand as a technology leader committed to security and customer protection.', Award],
  ['Gain Business Insights', 'Harness real-time data from every scan to optimize production, marketing, and logistics.', ChartNoAxesCombined],
];
const electronicsIntelTabs = ['Global Scan Activity', 'Production Analytics', 'Supply Chain Logs'];

function ElectronicsHighTech() {
  const [intelTab, setIntelTab] = useState(0);
  return <Shell>
    <section className="elec-hero" aria-labelledby="elec-hero-title">
      <div className="container-tight elec-hero-inner">
        <div className="fade-up">
          <p className="elec-pill">Electronics Industry</p>
          <h1 id="elec-hero-title" className="elec-h1">Protect Every Electronic Device with Secure Digital Product Identity</h1>
          <p className="elec-hero-copy">Help electronics manufacturers authenticate products, prevent counterfeiting, simplify warranty management, improve supply chain visibility and deliver connected customer experiences through secure QR-powered digital identities.</p>
          <div className="elec-hero-actions">
            <Link href="/contact-us" data-testid="button-electronics-get-started" className="elec-btn elec-btn-primary">Get Started</Link>
            <Link href="/platform" data-testid="button-electronics-learn-more" className="elec-btn elec-btn-ghost">Learn More</Link>
          </div>
        </div>
        <div className="elec-hero-art fade-up delay-1">
          <img src={`${root}industry-heroimgs/electronics.jpeg`} alt="Connected electronics manufacturing, warehouse and retail traceability network powered by TracelyTag" />
        </div>
      </div>
    </section>

    <section className="elec-band" aria-label="Electronics platform capabilities">
      <div className="container-tight elec-feature-grid">
        {electronicsFeatures.map(([title, copy, Icon]) => <article key={title} className="card-line elec-feature-card">
          <Icon size={22} className="text-[#0a3d8f]" strokeWidth={2} />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="elec-challenges" aria-labelledby="elec-challenges-title">
      <div className="container-tight elec-challenges-inner">
        <div>
          <h2 id="elec-challenges-title">Electronics Industry Challenges</h2>
          <div className="elec-challenge-list">
            {electronicsChallenges.map(([title, copy]) => <div key={title} className="elec-challenge">
              <span className="elec-challenge-icon"><OctagonAlert size={18} strokeWidth={2} /></span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>)}
          </div>
        </div>
        <div className="elec-panel">
          <h2>Why Electronics Brands Choose TracelyTag</h2>
          <div className="elec-panel-grid">
            {electronicsPanelItems.map(item => <p key={item} className="elec-panel-item"><CircleCheck size={17} strokeWidth={1.8} className="shrink-0" />{item}</p>)}
          </div>
          <Link href="/contact-us" data-testid="button-electronics-download-report" className="elec-panel-btn">Download Industry Report</Link>
        </div>
      </div>
    </section>

    <section className="elec-journey" aria-labelledby="elec-journey-title">
      <div className="container-tight elec-journey-inner">
        <h2 id="elec-journey-title" className="elec-section-title">The Secure Product Journey</h2>
        <div className="elec-journey-track">
          {electronicsJourney.map((step, index) => <div key={step} className="elec-journey-step">
            <span className="elec-journey-dot">{index + 1}</span>
            <p>{step}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="elec-benefits" aria-labelledby="elec-benefits-title">
      <div className="container-tight elec-benefits-inner">
        <h2 id="elec-benefits-title" className="elec-section-title">Measurable Business Benefits</h2>
        <div className="elec-benefit-grid">
          {electronicsBenefits.map(([title, copy, Icon]) => <article key={title} className="card-line elec-benefit-card">
            <Icon size={24} className="text-[#0a4aa0]" strokeWidth={1.9} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="elec-intel" aria-labelledby="elec-intel-title">
      <div className="container-tight elec-intel-inner">
        <div>
          <h2 id="elec-intel-title">Real-Time Intelligence</h2>
          <p className="elec-intel-copy">Our centralized command center provides granular visibility into your entire electronics supply chain. Monitor production status, track authentications, and analyze consumer behavior in one powerful interface.</p>
          <div className="elec-intel-tabs" role="tablist" aria-label="Dashboard views">
            {electronicsIntelTabs.map((tab, index) => <button
              key={tab}
              role="tab"
              type="button"
              id={`elec-intel-tab-${index}`}
              aria-selected={intelTab === index}
              aria-controls="elec-intel-panel"
              data-testid={`tab-electronics-${tab.toLowerCase().replaceAll(' ', '-')}`}
              onClick={() => setIntelTab(index)}
              className={`elec-intel-tab ${intelTab === index ? 'active' : ''}`}
            >{tab}</button>)}
          </div>
        </div>
        <div className="elec-intel-art" id="elec-intel-panel" role="tabpanel" aria-labelledby={`elec-intel-tab-${intelTab}`}>
          <img src={`${root}industry-crops/electronics-dashboard-monitor.png`} alt={`TracelyTag electronics dashboard showing ${electronicsIntelTabs[intelTab].toLowerCase()}, production status, warranty registrations and supply chain visibility`} />
        </div>
      </div>
    </section>

    <section className="elec-cta" aria-labelledby="elec-cta-title">
      <div className="container-tight elec-cta-inner">
        <h2 id="elec-cta-title">Ready to Protect Every Electronic Product?</h2>
        <p>Join the world's leading electronics brands in securing their supply chain and building deeper customer relationships with TracelyTag.</p>
        <div className="elec-cta-actions">
          <Link href="/contact-us" data-testid="button-electronics-book-demo" className="elec-btn elec-btn-primary">Book a Demo</Link>
          <Link href="/contact-us" data-testid="button-electronics-contact-sales" className="elec-btn elec-btn-ghost">Contact Sales</Link>
        </div>
      </div>
    </section>
  </Shell>;
}

const agricultureFeatures: [string, string, LucideIcon][] = [
  ['Product Authentication', 'Global security for your brand equity and reputation.', ShieldCheck],
  ['Anti-Counterfeiting', 'Instant verification for retailers and end consumers.', Shield],
  ['Farm-to-Field Traceability', 'Real-time tracking from factory gate to store shelf.', Eye],
  ['Farmer Verification', 'Build direct relationships via smart product packaging.', UserSearch],
];
const agricultureChallenges: [string, LucideIcon][] = [
  ['Counterfeit pesticides', TriangleAlert],
  ['Fake fertilizers', DropletOff],
  ['Unverified seed products', History],
  ['Supply chain visibility', EyeOff],
  ['Regulatory compliance', Gavel],
  ['Farmer trust', UserRoundX],
];
const agriculturePanelItems = ['Product Authentication', 'Track & Trace', 'Farmer Verification', 'Digital Product Information', 'Supply Chain Visibility', 'Business Intelligence'];
const agricultureJourney = ['Manufacturing', 'Packaging', 'Distribution', 'Retailer', 'Farmer Scan', 'Product Verification', 'Analytics'];
const agricultureSolutions: [string, string, LucideIcon][] = [
  ['Product Authentication', 'Enable instant, mobile-first verification for field agents and farmers globally.', ShieldCheck],
  ['Anti-Counterfeiting', 'Sophisticated encrypted identity layers that are impossible to duplicate or clone.', Shield],
  ['Track & Trace', 'Complete serialization allowing every unit to be monitored through the entire supply chain.', RouteIcon],
  ['Farmer Engagement', 'Turn every product into a digital channel with contextual rewards and information.', Megaphone],
  ['Supply Chain Visibility', 'Granular data on inventory velocity and potential bottlenecks in distribution.', Waypoints],
  ['Analytics & Intelligence', 'Deep insights into product flow, consumption patterns, and geographic scanning trends.', ChartColumn],
];
const agricultureDashboardItems: [string, string][] = [
  ['Production Status', 'Monitor real-time serialization batch progress across multiple factories.'],
  ['Authentication Requests', 'View global heatmaps of product verification scans and suspicious alerts.'],
  ['Supply Chain Overview', 'End-to-end flow tracking from manufacturing nodes to end distribution points.'],
  ['Retail Verification', 'Track regional scan volumes at retail partner locations for audit compliance.'],
  ['Farmer Engagement', 'Analyze interaction rates, loyalty sign-ups, and user demographic data.'],
  ['Business Analytics', 'Calculate ROI, operational efficiency, and market penetration insights.'],
];
const agricultureBenefits: [string, string, LucideIcon][] = [
  ['Protect Farmers', 'Ensure consumers always receive genuine, high-quality products.', BadgeCheck],
  ['Prevent Counterfeit Products', 'Directly cut revenue leakage to illegal shadow markets.', ShieldCheck],
  ['Increase Product Trust', 'Total transparency into grey market diversion and stock movement.', ScanSearch],
  ['Improve Supply Chain Visibility', 'Transparent sourcing and authenticity builds long-term loyalty.', Handshake],
  ['Strengthen Brand Reputation', 'Precision targeting for batch recalls to minimize waste and panic.', ClipboardPaste],
  ['Actionable Business Insights', 'Data-driven decisions based on actual market consumption data.', ChartNoAxesCombined],
];

function AgricultureAgTech() {
  return <Shell>
    <section className="agri-hero" aria-labelledby="agri-hero-title">
      <div className="container-tight agri-hero-inner">
        <div className="fade-up">
          <p className="agri-pill">Agriculture Industry</p>
          <h1 id="agri-hero-title" className="agri-h1">Protect Agricultural Products with Complete Farm-to-Field Traceability</h1>
          <p className="agri-hero-copy">Help agricultural manufacturers and agrochemical brands secure products, prevent counterfeiting, enable farm-to-field traceability and provide farmers with trusted product verification through secure QR-powered digital identities.</p>
          <div className="agri-hero-actions">
            <Link href="/contact-us" data-testid="button-agriculture-book-demo-hero" className="agri-btn agri-btn-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-agriculture-talk-expert" className="agri-btn agri-btn-ghost">Talk to an Expert</Link>
          </div>
        </div>
        <div className="agri-hero-art fade-up delay-1">
          <img src={`${root}industry-heroimgs/agriculture.jpeg`} alt="Agrochemical manufacturing plant, digital warehouse, distribution trucks, agriculture retailer and farmer-in-field traceability network powered by TracelyTag" />
        </div>
      </div>
    </section>

    <section className="agri-features" aria-label="Agriculture platform capabilities">
      <div className="container-tight agri-feature-grid">
        {agricultureFeatures.map(([title, copy, Icon]) => <article key={title} className="card-line agri-feature-card">
          <Icon size={22} className="text-[#0a3d8f]" strokeWidth={2} />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="agri-challenges" aria-labelledby="agri-challenges-title">
      <div className="container-tight agri-challenges-inner">
        <div>
          <h2 id="agri-challenges-title" className="agri-challenges-title">Agriculture Industry Challenges</h2>
          <div className="agri-challenge-list">
            {agricultureChallenges.map(([label, Icon]) => <p key={label} className="agri-challenge">
              <Icon size={20} strokeWidth={2} />{label}
            </p>)}
          </div>
        </div>
        <div className="agri-panel">
          <h2>Why Agriculture Companies Choose TracelyTag</h2>
          <div className="agri-panel-grid">
            {agriculturePanelItems.map(item => <p key={item} className="agri-panel-item"><CircleCheck size={18} strokeWidth={1.8} className="shrink-0" />{item}</p>)}
          </div>
        </div>
      </div>
    </section>

    <section className="agri-journey" aria-label="Agricultural product journey">
      <div className="container-tight agri-journey-inner">
        <div className="agri-journey-track">
          {agricultureJourney.map((step, index) => <div key={step} className="agri-journey-step">
            <span className="agri-journey-dot">{index + 1}</span>
            <p>{step}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="agri-solutions" aria-labelledby="agri-solutions-title">
      <div className="container-tight agri-solutions-inner">
        <h2 id="agri-solutions-title">Enterprise Solutions for Agriculture</h2>
        <p className="agri-solutions-sub">Enterprise-grade capabilities designed for the unique challenges of the agricultural supply chain.</p>
        <div className="agri-solution-grid">
          {agricultureSolutions.map(([title, copy, Icon]) => <article key={title} className="card-line agri-solution-card">
            <Icon size={24} className="text-[#0a4aa0]" strokeWidth={1.9} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="agri-dashboard" aria-label="Enterprise agriculture dashboard">
      <div className="container-tight agri-dashboard-inner">
        <div className="agri-dashboard-art">
          <img src={`${root}industry-crops/agriculture-agtech-dashboard.png`} alt="Enterprise Agriculture Dashboard showing global operations: production status, distribution tracking, authentication requests, supply chain analytics, farmer verifications and business intelligence" />
        </div>
        <div className="agri-dashboard-grid">
          {agricultureDashboardItems.map(([title, copy]) => <div key={title} className="agri-dashboard-item">
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="agri-benefits" aria-labelledby="agri-benefits-title">
      <div className="container-tight agri-benefits-inner">
        <h2 id="agri-benefits-title">Tangible Business Benefits</h2>
        <div className="agri-benefit-grid">
          {agricultureBenefits.map(([title, copy, Icon]) => <article key={title} className="agri-benefit">
            <span className="agri-benefit-icon"><Icon size={22} strokeWidth={1.9} /></span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="agri-cta" aria-labelledby="agri-cta-title">
      <div className="container-tight agri-cta-inner">
        <h2 id="agri-cta-title">Ready to Modernize Agricultural Product Traceability?</h2>
        <p>Join leading global agriculture brands in building the next generation of secure, connected product supply chains.</p>
        <div className="agri-cta-actions">
          <Link href="/contact-us" data-testid="button-agriculture-book-demo" className="agri-btn agri-btn-primary">Book a Demo</Link>
          <Link href="/contact-us" data-testid="button-agriculture-contact-sales" className="agri-btn agri-btn-ghost">Contact Sales</Link>
        </div>
      </div>
    </section>
  </Shell>;
}

const apparelFeatures: [string, string, LucideIcon][] = [
  ['Garment Authentication', 'Instant verification at any point in the supply chain or retail floor.', ShieldCheck],
  ['Digital Product Passport', 'Comprehensive lifecycle data and sustainability proof for every item.', IdCard],
  ['Supply Chain Visibility', 'Real-time tracking from textile manufacturing to final delivery.', Eye],
  ['Connected Experience', 'Direct post-purchase engagement and personalized brand loyalty.', Users],
];
const apparelChallenges: [string, string, LucideIcon][] = [
  ['Counterfeit fashion products', 'Billions lost annually to high-quality clones damaging brand equity.', TriangleAlert],
  ['Limited supply chain visibility', 'Fragmented data across global manufacturing partners and logistics providers.', EyeOff],
  ['Sustainability expectations', 'Growing regulatory and consumer demand for circularity and traceability.', Leaf],
];
const apparelPanelItems: [string, LucideIcon][] = [
  ['Garment Authentication', BadgeCheck],
  ['Connected Packaging', QrCode],
  ['Digital Passport', SquareCheckBig],
  ['Consumer Engagement', ChartNoAxesCombined],
  ['Supply Chain Visibility', RouteIcon],
  ['Business Intelligence', ChartColumn],
];
const apparelJourney = ['Manufacturing', 'Fabric Label Printing', 'Garment Production', 'Warehouse', 'Retail Store', 'Customer Scan', 'Digital Product Experience'];
const apparelPlatformTabs: [string, string][] = [
  ['Production Status', '#1550c8'],
  ['Authentication Requests', '#c02026'],
  ['Garment Tracking', '#7a2a12'],
  ['Retail Verification', '#5f6b7a'],
  ['Consumer Engagement', '#1f6feb'],
];
const apparelBenefits: [string, string, LucideIcon][] = [
  ['Protect Brand Reputation', "Defend your brand's integrity and value by ensuring only genuine products reach your customers.", BadgeCheck],
  ['Eliminate Counterfeit Products', 'Implement uncopiable digital identities that make counterfeiting garments economically impossible.', Ban],
  ['Increase Consumer Trust', 'Provide absolute transparency and proof of authenticity to build deep, lasting customer relationships.', Handshake],
  ['Improve Supply Chain Visibility', 'Gain granular insights into product movement, stock levels, and potential bottlenecks globally.', ScanSearch],
  ['Deliver Connected Experiences', 'Turn every physical garment into a digital portal for storytelling, circularity, and loyalty programs.', MonitorSmartphone],
  ['Generate Product Intelligence', 'Access real-time data on how, where, and when your products are being interacted with by consumers.', ChartNoAxesCombined],
];

function ApparelFashion() {
  const [platformTab, setPlatformTab] = useState(0);
  return <Shell>
    <section className="appa-hero" aria-labelledby="appa-hero-title">
      <div className="container-tight appa-hero-inner">
        <div className="fade-up">
          <p className="appa-pill"><ShieldCheck size={13} strokeWidth={2.1} />Enterprise Apparel Solution</p>
          <h1 id="appa-hero-title" className="appa-h1">Protect Every Garment with <em>Digital Product Identity</em></h1>
          <p className="appa-hero-copy">Help apparel brands authenticate products, eliminate counterfeit garments, enable digital product passports, improve supply chain visibility and create connected customer experiences through secure QR-powered digital identities.</p>
          <div className="appa-hero-actions">
            <Link href="/contact-us" data-testid="button-apparel-book-demo-hero" className="appa-btn appa-btn-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-apparel-talk-expert" className="appa-btn appa-btn-ghost">Talk to an Expert</Link>
          </div>
        </div>
        <div className="appa-hero-art fade-up delay-1">
          <img src={`${root}industry-heroimgs/cloth.jpeg`} alt="Garment manufacturing, fabric label printing, warehouse, distribution and retail store traceability network powered by TracelyTag" />
        </div>
      </div>
    </section>

    <section className="appa-features" aria-label="Apparel platform capabilities">
      <div className="container-tight appa-feature-grid">
        {apparelFeatures.map(([title, copy, Icon]) => <article key={title} className="card-line appa-feature-card">
          <Icon size={22} className="text-[#0a3d8f]" strokeWidth={2} />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="appa-challenges" aria-labelledby="appa-challenges-title">
      <div className="container-tight appa-challenges-inner">
        <div>
          <h2 id="appa-challenges-title" className="appa-challenges-title">Apparel Industry Challenges</h2>
          <div className="appa-challenge-list">
            {apparelChallenges.map(([title, copy, Icon]) => <div key={title} className="appa-challenge">
              <span className="appa-challenge-icon"><Icon size={20} strokeWidth={2} /></span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>)}
          </div>
        </div>
        <div className="appa-panel">
          <h2>Why Apparel Brands Choose TracelyTag</h2>
          <div className="appa-panel-grid">
            {apparelPanelItems.map(([item, Icon]) => <p key={item} className="appa-panel-item"><Icon size={18} strokeWidth={1.8} className="shrink-0" />{item}</p>)}
          </div>
          <hr className="appa-panel-rule" />
          <p className="appa-panel-quote">"TracelyTag has redefined our approach to brand protection, turning every label into a secure communication channel."</p>
        </div>
      </div>
    </section>

    <section className="appa-journey" aria-labelledby="appa-journey-title">
      <div className="container-tight appa-journey-inner">
        <h2 id="appa-journey-title">End-to-End Garment Journey</h2>
        <p className="appa-journey-sub">Trace every fiber from creation to closet</p>
        <div className="appa-journey-track">
          {apparelJourney.map((step, index) => <div key={step} className={`appa-journey-step ${index === apparelJourney.length - 1 ? 'is-last' : ''}`}>
            <span className="appa-journey-dot">{index + 1}</span>
            <p>{step}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="appa-platform" aria-labelledby="appa-platform-title">
      <div className="container-tight appa-platform-inner">
        <div className="appa-platform-card">
          <div>
            <h2 id="appa-platform-title">Enterprise Intelligence Platform</h2>
            <div className="appa-platform-tabs" role="tablist" aria-label="Dashboard views">
              {apparelPlatformTabs.map(([label, color], index) => <button
                key={label}
                role="tab"
                type="button"
                id={`appa-platform-tab-${index}`}
                aria-selected={platformTab === index}
                aria-controls="appa-platform-panel"
                data-testid={`tab-apparel-${label.toLowerCase().replaceAll(' ', '-')}`}
                onClick={() => setPlatformTab(index)}
                className={`appa-platform-tab ${platformTab === index ? 'active' : ''}`}
              ><span className="appa-platform-dot" style={{ background: color }} />{label}</button>)}
            </div>
          </div>
          <div className="appa-platform-art" id="appa-platform-panel" role="tabpanel" aria-labelledby={`appa-platform-tab-${platformTab}`}>
            <img src={`${root}industry-crops/apparel-fashion-dashboard.png`} alt={`Apparel Enterprise Solutions premium dashboard showing ${apparelPlatformTabs[platformTab][0].toLowerCase()}, authentication requests, garment tracking and business analytics`} />
          </div>
        </div>
      </div>
    </section>

    <section className="appa-benefits" aria-labelledby="appa-benefits-title">
      <div className="container-tight appa-benefits-inner">
        <h2 id="appa-benefits-title">Business Benefits</h2>
        <p className="appa-benefits-sub">Quantifiable impact for global fashion enterprises</p>
        <div className="appa-benefit-grid">
          {apparelBenefits.map(([title, copy, Icon]) => <article key={title} className="card-line appa-benefit-card">
            <span className="appa-benefit-icon"><Icon size={21} strokeWidth={1.9} /></span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="appa-cta" aria-labelledby="appa-cta-title">
      <div className="container-tight appa-cta-inner">
        <div className="appa-cta-card">
          <h2 id="appa-cta-title">Ready to Digitize Every Garment?</h2>
          <p>Join the world's leading apparel brands in creating a more secure, transparent, and connected fashion future.</p>
          <div className="appa-cta-actions">
            <Link href="/contact-us" data-testid="button-apparel-book-demo" className="appa-cta-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-apparel-contact-sales" className="appa-cta-secondary">Contact Sales</Link>
          </div>
        </div>
      </div>
    </section>
  </Shell>;
}

const cosmeticsFeatures: [string, LucideIcon][] = [
  ['Product Authentication', BadgeCheck],
  ['Brand Protection', Shield],
  ['Consumer Engagement', HandHeart],
  ['Product Transparency', Info],
];
const cosmeticsChallenges: [string, string, LucideIcon][] = [
  ['Counterfeit beauty products', 'Infiltration of unauthorized replicas harming brand value.', TriangleAlert],
  ['Consumer safety concerns', 'Risks from unregulated ingredients in fake products.', ShieldPlus],
  ['Limited product transparency', 'Opaque ingredient sourcing and sustainability data.', EyeOff],
  ['Weak post-purchase engagement', 'Lost connection with customers after the initial sale.', Unlink],
];
const cosmeticsPanelItems: [string, LucideIcon][] = [
  ['Product Authentication', ScanQrCode],
  ['Anti-Counterfeiting', ShieldAlert],
  ['Consumer Engagement', HandHeart],
  ['Digital Product Info', FileText],
  ['Supply Chain Visibility', Archive],
  ['Business Intelligence', ChartNoAxesCombined],
];
const cosmeticsLifecycle: [string, LucideIcon][] = [
  ['Manufacturing', Factory],
  ['Packaging', Package],
  ['QR Printing', Printer],
  ['Warehouse', Warehouse],
  ['Distribution', Truck],
  ['Retail', Store],
  ['Consumer Scan', ScanQrCode],
  ['Intelligence', ChartNoAxesCombined],
];
const cosmeticsBenefits: [string, string, LucideIcon][] = [
  ['Protect Brand Reputation', 'Ensure only genuine products reach your customers, maintaining premium brand integrity.', CircleStar],
  ['Increase Consumer Trust', 'Provide instant verification that builds confidence in product safety and authenticity.', Handshake],
  ['Prevent Counterfeits', 'Advanced digital signatures make your products virtually impossible to replicate.', SmartphoneCharging],
  ['Improve Transparency', 'Share detailed ingredient sourcing and ethical manufacturing stories directly on the pack.', Search],
  ['Strengthen Engagement', 'Turn every physical product into a digital gateway for loyalty programs and personalized content.', MessagesSquare],
  ['Actionable Insights', 'Understand where and how consumers interact with your products across the global market.', ChartNoAxesCombined],
];

function CosmeticsBeauty() {
  return <Shell>
    <section className="cosm-hero" aria-labelledby="cosm-hero-title">
      <div className="container-tight cosm-hero-inner">
        <div className="fade-up">
          <p className="cosm-pill">Cosmetics &amp; Personal Care</p>
          <h1 id="cosm-hero-title" className="cosm-h1">Protect Every Beauty Product with Secure Digital Product Identity</h1>
          <p className="cosm-hero-copy">Help cosmetics and personal care brands authenticate products, prevent counterfeiting, improve product transparency, engage consumers and build lasting brand trust through secure QR-powered digital identities.</p>
          <div className="cosm-hero-actions">
            <Link href="/contact-us" data-testid="button-cosmetics-book-demo-hero" className="cosm-btn cosm-btn-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-cosmetics-talk-expert" className="cosm-btn cosm-btn-ghost">Talk to an Expert</Link>
          </div>
        </div>
        <div className="cosm-hero-art fade-up delay-1">
          <img src={`${root}industry-heroimgs/cosmetic.jpeg`} alt="Cosmetics manufacturing line, warehouse, distribution and beauty retail store traceability network powered by TracelyTag" />
        </div>
      </div>
    </section>

    <section className="cosm-features" aria-label="Cosmetics platform capabilities">
      <div className="container-tight cosm-feature-grid">
        {cosmeticsFeatures.map(([title, Icon]) => <article key={title} className="card-line cosm-feature-card">
          <Icon size={24} className="text-[#0a3d8f]" strokeWidth={2} />
          <h3>{title}</h3>
        </article>)}
      </div>
    </section>

    <section className="cosm-challenges" aria-labelledby="cosm-challenges-title">
      <div className="container-tight cosm-challenges-inner">
        <div>
          <h2 id="cosm-challenges-title" className="cosm-challenges-title">Cosmetics &amp; Personal Care Industry Challenges</h2>
          <span className="cosm-rule" />
          <div className="cosm-challenge-list">
            {cosmeticsChallenges.map(([title, copy, Icon]) => <div key={title} className="cosm-challenge">
              <Icon size={20} strokeWidth={2} />
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>)}
          </div>
        </div>
        <div className="cosm-panel">
          <h2>Why Cosmetics Brands Choose TracelyTag</h2>
          <div className="cosm-panel-grid">
            {cosmeticsPanelItems.map(([item, Icon]) => <p key={item} className="cosm-panel-item">
              <span className="cosm-panel-icon"><Icon size={18} strokeWidth={1.9} /></span>{item}
            </p>)}
          </div>
          <hr className="cosm-panel-rule" />
          <Link href="/platform" data-testid="button-cosmetics-see-platform" className="cosm-panel-btn">See the Platform in Action</Link>
        </div>
      </div>
    </section>

    <section className="cosm-lifecycle" aria-labelledby="cosm-lifecycle-title">
      <div className="container-tight cosm-lifecycle-inner">
        <h2 id="cosm-lifecycle-title">End-to-End Cosmetic Product Lifecycle</h2>
        <div className="cosm-lifecycle-track">
          {cosmeticsLifecycle.map(([step, Icon]) => <div key={step} className="cosm-lifecycle-step">
            <span className="cosm-lifecycle-dot"><Icon size={21} strokeWidth={1.9} /></span>
            <p>{step}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="cosm-analytics" aria-labelledby="cosm-analytics-title">
      <div className="container-tight cosm-analytics-inner">
        <h2 id="cosm-analytics-title">Real-Time Authentication Analytics</h2>
        <p className="cosm-analytics-sub">Monitor global scan data, detect counterfeit clusters, and measure consumer engagement in real-time through our enterprise-grade dashboard.</p>
        <div className="cosm-analytics-art">
          <img src={`${root}industry-crops/cosmetics-beauty-dashboard.png`} alt="Beauty Insights cosmetics and personal care enterprise platform dashboard showing production status, supply chain visibility, authentication requests, consumer engagement, product performance and business analytics" />
        </div>
      </div>
    </section>

    <section className="cosm-benefits" aria-labelledby="cosm-benefits-title">
      <div className="container-tight cosm-benefits-inner">
        <h2 id="cosm-benefits-title">Business Benefits</h2>
        <span className="cosm-rule" />
        <div className="cosm-benefit-grid">
          {cosmeticsBenefits.map(([title, copy, Icon]) => <article key={title} className="card-line cosm-benefit-card">
            <span className="cosm-benefit-icon"><Icon size={21} strokeWidth={1.9} /></span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="cosm-cta" aria-labelledby="cosm-cta-title">
      <div className="container-tight cosm-cta-inner">
        <h2 id="cosm-cta-title">Ready to Protect Every Beauty Product?</h2>
        <div className="cosm-cta-actions">
          <Link href="/contact-us" data-testid="button-cosmetics-book-demo" className="cosm-btn cosm-btn-primary">Book a Demo</Link>
          <Link href="/contact-us" data-testid="button-cosmetics-contact-sales" className="cosm-btn cosm-btn-ghost">Contact Sales</Link>
        </div>
      </div>
    </section>
  </Shell>;
}

const fmcgFeatures: [string, string, LucideIcon][] = [
  ['Brand Protection', 'Global security for your brand equity and reputation.', ShieldCheck],
  ['Product Authentication', 'Instant verification for retailers and end consumers.', ScanQrCode],
  ['Supply Chain Visibility', 'Real-time tracking from factory gate to store shelf.', Eye],
  ['Consumer Engagement', 'Build direct relationships via smart product packaging.', Tag],
];
const fmcgWhyItems: [string, LucideIcon][] = [
  ['Rampant counterfeit FMCG products leading to brand erosion.', TriangleAlert],
  ['Severe lack of supply chain visibility beyond the first tier.', DropletOff],
  ['Inefficient product recalls causing safety risks and legal costs.', History],
  ['Limited post-purchase engagement with anonymous buyers.', UserRoundX],
];
const fmcgPanelItems = ['Secure QR Identity', 'Product Authentication', 'Track & Trace', 'Digital Warranty', 'Consumer Engagement', 'Business Intelligence'];
const fmcgJourney = ['Manufacturing', 'Packaging', 'Warehouse', 'Distribution', 'Retail', 'Consumer Scan', 'Business Intelligence'];
const fmcgSolutions: [string, string, LucideIcon][] = [
  ['Product Authentication', 'Enable instant, mobile-first verification for field agents and consumers globally.', ShieldCheck],
  ['Anti-Counterfeiting', 'Sophisticated encrypted identity layers that are\nimpossible to duplicate or clone.', Shield],
  ['Track & Trace', 'Complete serialization allowing every unit to be monitored through the entire supply chain.', RouteIcon],
  ['Consumer Engagement', 'Turn every product into a digital marketing channel with contextual rewards and info.', Megaphone],
  ['Analytics', 'Deep insights into product flow, consumption patterns, and geographic scanning trends.', ChartColumn],
  ['Supply Chain Visibility', 'Granular data on inventory velocity and potential bottlenecks in distribution.', Waypoints],
];
const fmcgDashboardItems: [string, string][] = [
  ['Production Status', 'Monitor real-time serialization batch progress across multiple factories.'],
  ['Authentication Requests', 'View global heatmaps of product verification scans and suspicious alerts.'],
  ['Supply Chain Overview', 'End-to-end flow tracking from manufacturing nodes to end distribution points.'],
  ['Retail Verification', 'Track regional scan volumes at retail partner locations for audit compliance.'],
  ['Consumer Engagement', 'Analyze interaction rates, loyalty sign-ups, and user demographic data.'],
  ['Business Analytics', 'Calculate ROI, operational efficiency, and market penetration insights.'],
];
const fmcgBenefits: [string, string, LucideIcon][] = [
  ['Protect Brand Reputation', 'Ensure consumers always receive genuine, high-quality products.', BadgeCheck],
  ['Reduce Counterfeiting', 'Directly cut revenue leakage to illegal shadow markets.', ShieldCheck],
  ['Improve Visibility', 'Total transparency into grey market diversion and stock movement.', ScanSearch],
  ['Increase Consumer Trust', 'Transparent sourcing and authenticity builds long-term loyalty.', Handshake],
  ['Better Recall Management', 'Precision targeting for batch recalls to minimize waste and panic.', ClipboardPaste],
  ['Actionable Insights', 'Data-driven decisions based on actual market consumption data.', ChartNoAxesCombined],
];

function FmcgConsumerGoods() {
  return <Shell>
    <section className="fmcg-hero" aria-labelledby="fmcg-hero-title">
      <div className="container-tight fmcg-hero-inner">
        <div className="fade-up">
          <p className="fmcg-pill">FMCG Intelligence</p>
          <h1 id="fmcg-hero-title" className="fmcg-h1">Secure Every FMCG Product from Factory to Consumer</h1>
          <p className="fmcg-hero-copy">Help FMCG manufacturers protect brands, eliminate counterfeit products, enable end-to-end traceability and create connected consumer experiences using secure QR-based product identities.</p>
          <div className="fmcg-hero-actions">
            <Link href="/contact-us" data-testid="button-fmcg-book-demo-hero" className="fmcg-btn fmcg-btn-primary">Book a Demo</Link>
            <Link href="/solutions" data-testid="button-fmcg-explore-solutions" className="fmcg-btn fmcg-btn-ghost">Explore FMCG Solutions</Link>
          </div>
        </div>
        <div className="fmcg-hero-art fade-up delay-1">
          <img src={`${root}industry-heroimgs/fmcg.jpeg`} alt="FMCG manufacturing line with TIJ and TTO printers, automated warehouse, distribution fleet and retail shelf scanning powered by TracelyTag" />
        </div>
      </div>
    </section>

    <section className="fmcg-features" aria-label="FMCG platform capabilities">
      <div className="container-tight fmcg-feature-grid">
        {fmcgFeatures.map(([title, copy, Icon]) => <article key={title} className="card-line fmcg-feature-card">
          <Icon size={22} className="text-[#0a3d8f]" strokeWidth={2} />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="fmcg-why" aria-labelledby="fmcg-why-title">
      <div className="container-tight fmcg-why-inner">
        <div>
          <h2 id="fmcg-why-title">Why FMCG Brands Need TracelyTag</h2>
          <div className="fmcg-why-list">
            {fmcgWhyItems.map(([label, Icon]) => <p key={label} className="fmcg-why-item">
              <Icon size={19} strokeWidth={2} />{label}
            </p>)}
          </div>
        </div>
        <div className="fmcg-panel">
          <h2>Enterprise FMCG Platform</h2>
          <div className="fmcg-panel-grid">
            {fmcgPanelItems.map(item => <p key={item} className="fmcg-panel-item"><CircleCheck size={18} strokeWidth={1.8} className="shrink-0" />{item}</p>)}
          </div>
        </div>
      </div>
    </section>

    <section className="fmcg-journey" aria-label="FMCG product journey">
      <div className="container-tight fmcg-journey-inner">
        <div className="fmcg-journey-track">
          {fmcgJourney.map((step, index) => <div key={step} className="fmcg-journey-step">
            <span className="fmcg-journey-dot">{index + 1}</span>
            <p>{step}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="fmcg-solutions" aria-labelledby="fmcg-solutions-title">
      <div className="container-tight fmcg-solutions-inner">
        <h2 id="fmcg-solutions-title">Comprehensive Solutions</h2>
        <p className="fmcg-solutions-sub">Enterprise-grade capabilities designed for the unique challenges of fast-moving consumer goods.</p>
        <div className="fmcg-solution-grid">
          {fmcgSolutions.map(([title, copy, Icon]) => <article key={title} className="card-line fmcg-solution-card">
            <Icon size={24} className="text-[#0a4aa0]" strokeWidth={1.9} />
            <h3>{title}</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="fmcg-dashboard" aria-label="FMCG One global operations platform">
      <div className="container-tight fmcg-dashboard-inner">
        <div className="fmcg-dashboard-art">
          <img src={`${root}industry-crops/fmcg-consumer-goods-dashboard.png`} alt="FMCG One Global Operations Platform dashboard showing production status, authentication requests, supply chain overview, retail verification, consumer engagement and business analytics" />
        </div>
        <div className="fmcg-dashboard-grid">
          {fmcgDashboardItems.map(([title, copy]) => <div key={title} className="fmcg-dashboard-item">
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="fmcg-benefits" aria-labelledby="fmcg-benefits-title">
      <div className="container-tight fmcg-benefits-inner">
        <h2 id="fmcg-benefits-title">Tangible Business Benefits</h2>
        <div className="fmcg-benefit-grid">
          {fmcgBenefits.map(([title, copy, Icon]) => <article key={title} className="fmcg-benefit">
            <Icon size={22} strokeWidth={1.9} />
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="fmcg-cta" aria-labelledby="fmcg-cta-title">
      <div className="container-tight fmcg-cta-inner">
        <h2 id="fmcg-cta-title">Ready to Protect Your FMCG Products?</h2>
        <p>Join leading global FMCG brands in building the next generation of secure, connected product supply chains.</p>
        <div className="fmcg-cta-actions">
          <Link href="/contact-us" data-testid="button-fmcg-book-demo" className="fmcg-btn fmcg-btn-primary">Book a Demo</Link>
          <Link href="/contact-us" data-testid="button-fmcg-contact-sales" className="fmcg-btn fmcg-btn-ghost">Contact Sales</Link>
        </div>
      </div>
    </section>
  </Shell>;
}

const foodBeverageHeroImage: string | null = 'industry-heroimgs/food.jpeg';
const foodBeverageDashboardImage: string | null = 'industry-crops/fmcg-consumer-goods-dashboard.png';

const foodBeverageFeatures: [string, LucideIcon][] = [
  ['Food Safety', ShieldPlus],
  ['Product Traceability', ChartColumn],
  ['Authentication', ShieldCheck],
  ['Consumer Trust', Handshake],
];
const foodBeverageChallenges: [string, string, LucideIcon, string][] = [
  ['Food safety risks', 'Preventing contamination and ensuring compliance with stringent health standards across the supply chain.', TriangleAlert, '#c62828'],
  ['Product recalls', 'Streamlining the identification and removal of compromised batches to minimize brand damage and public risk.', History, '#c62828'],
  ['Counterfeit food products', 'Combatting the global rise in fraudulent ingredients and finished goods that threaten consumer health.', ShieldAlert, '#c62828'],
  ['Batch traceability', 'Managing granular data for millions of items to ensure complete lineage from farm to fork.', LayoutPanelTop, '#0f56c2'],
  ['Regulatory compliance', 'Automating the reporting requirements for global trade and local food safety authorities.', ClipboardCheck, '#0f56c2'],
  ['Consumer transparency', 'Meeting the demand for radical honesty regarding sourcing, sustainability, and ingredients.', Eye, '#0f56c2'],
];
const foodBeveragePanelItems = ['Food Traceability', 'Product Authentication', 'Batch Tracking', 'Consumer Transparency', 'Recall Management', 'Business Intelligence'];
const foodBeverageLifecycle: [string, LucideIcon][] = [
  ['1. Production', Factory],
  ['2. Packaging', Archive],
  ['3. Batch Coding', ScanQrCode],
  ['4. Warehouse', Warehouse],
  ['5. Distribution', Truck],
  ['6. Retail', Store],
  ['7. Consumer Scan', Smartphone],
  ['8. BI', ChartNoAxesCombined],
];
const foodBeverageSolutions: [string, string, LucideIcon][] = [
  ['Food Authentication', 'Preventing food fraud with secure digital signatures for every product unit.', Shield],
  ['Batch Traceability', 'Cloud-native ledger of batch movements from sourcing to end-consumer.', Radar],
  ['Recall Management', 'Precision target recalls with automated notification systems across the network.', Undo2],
  ['Consumer Engagement', 'Direct-to-consumer communication channel through standard mobile scanning.', Users],
  ['Supply Chain Visibility', 'Real-time monitoring of distribution routes and warehouse conditions.', ScanEye],
  ['Analytics & BI', 'Transform scan data into market insights and operational efficiency reports.', TrendingUp],
];
const foodBeverageBenefits: [string, string][] = [
  ['Improve Food Safety', 'Strict monitoring of safety metrics across the entire production line.'],
  ['Accelerate Product Recalls', 'Reduce recall response times from days to minutes with granular data.'],
  ['Increase Consumer Trust', 'Differentiate your brand through verifiable transparency and authenticity.'],
  ['Strengthen Brand Reputation', 'Protect market share by effectively combatting counterfeit operations.'],
  ['Enhance Supply Chain Visibility', 'Gain total clarity on product location and status at any global node.'],
  ['Gain Actionable Insights', 'Leverage predictive analytics to optimize inventory and logistics.'],
];

function FoodBeverage() {
  return <Shell>
    <section className="fbev-hero" aria-labelledby="fbev-hero-title">
      <div className="container-tight fbev-hero-inner">
        <div className="fade-up">
          <p className="fbev-pill">Industry Solutions: Food &amp; Beverage</p>
          <h1 id="fbev-hero-title" className="fbev-h1">Deliver Safe, Traceable Food from Production to Consumer</h1>
          <p className="fbev-hero-copy">Help food and beverage manufacturers protect brands, ensure food safety, enable end-to-end traceability, simplify product recalls and build consumer trust through secure QR-powered digital identities.</p>
          <div className="fbev-hero-actions">
            <Link href="/contact-us" data-testid="button-food-book-demo-hero" className="fbev-btn fbev-btn-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-food-talk-expert" className="fbev-btn fbev-btn-ghost">Talk to an Expert</Link>
          </div>
        </div>
        {foodBeverageHeroImage
          ? <div className="fbev-hero-art fade-up delay-1"><img src={`${root}${foodBeverageHeroImage}`} alt="TracelyTag consumer-goods traceability network: production line, automated warehouse, distribution fleet and retail shelf scanning" /></div>
          : <div className="fbev-art-empty fade-up delay-1" aria-hidden="true" />}
      </div>
    </section>

    <section className="fbev-features" aria-label="Food and beverage platform capabilities">
      <div className="container-tight fbev-feature-grid">
        {foodBeverageFeatures.map(([title, Icon]) => <article key={title} className="card-line fbev-feature-card">
          <span className="fbev-feature-icon"><Icon size={20} strokeWidth={2} /></span>
          <h3>{title}</h3>
        </article>)}
      </div>
    </section>

    <section className="fbev-challenges" aria-labelledby="fbev-challenges-title">
      <div className="container-tight fbev-challenges-inner">
        <h2 id="fbev-challenges-title">Overcoming Critical Industry Challenges</h2>
        <p className="fbev-challenges-sub">Modernizing food supply chains to mitigate risk and increase operational efficiency.</p>
        <div className="fbev-challenge-grid">
          {foodBeverageChallenges.map(([title, copy, Icon, color]) => <article key={title} className="card-line fbev-challenge-card">
            <Icon size={22} strokeWidth={2} style={{ color }} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="fbev-panel-wrap" aria-labelledby="fbev-panel-title">
      <div className="container-tight fbev-panel-inner">
        <div className="fbev-panel">
          <div>
            <h2 id="fbev-panel-title">Why Food &amp; Beverage Brands Choose TracelyTag</h2>
            <p>We provide the industrial-grade infrastructure needed to secure complex supply chains and transform physical products into digital assets.</p>
            <Link href="/contact-us" data-testid="button-food-download-whitepaper" className="fbev-panel-btn">Download Whitepaper</Link>
          </div>
          <div className="fbev-panel-grid">
            {foodBeveragePanelItems.map(item => <p key={item} className="fbev-panel-item"><CircleCheck size={18} strokeWidth={1.8} className="shrink-0" />{item}</p>)}
          </div>
        </div>
      </div>
    </section>

    <section className="fbev-lifecycle" aria-labelledby="fbev-lifecycle-title">
      <div className="container-tight fbev-lifecycle-inner">
        <h2 id="fbev-lifecycle-title">End-to-End Operational Lifecycle</h2>
        <div className="fbev-lifecycle-track">
          {foodBeverageLifecycle.map(([step, Icon]) => <div key={step} className="fbev-lifecycle-step">
            <span className="fbev-lifecycle-dot"><Icon size={22} strokeWidth={1.9} /></span>
            <p>{step}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="fbev-solutions" aria-labelledby="fbev-solutions-title">
      <div className="container-tight fbev-solutions-inner">
        <h2 id="fbev-solutions-title">Comprehensive Enterprise Solutions</h2>
        <div className="fbev-solution-grid">
          {foodBeverageSolutions.map(([title, copy, Icon]) => <article key={title} className="card-line fbev-solution-card">
            <span className="fbev-solution-icon"><Icon size={21} strokeWidth={1.9} /></span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="fbev-benefits" aria-labelledby="fbev-benefits-title">
      <div className="container-tight fbev-benefits-inner">
        <h2 id="fbev-benefits-title">Actionable Business Benefits</h2>
        <div className="fbev-benefit-grid">
          {foodBeverageBenefits.map(([title, copy]) => <article key={title} className="fbev-benefit">
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="fbev-command" aria-labelledby="fbev-command-title">
      <div className="container-tight fbev-command-inner">
        <h2 id="fbev-command-title">Command Your Global Supply Chain</h2>
        <p className="fbev-command-sub">The TracelyTag Enterprise Dashboard provides a unified view of your food production and distribution network.</p>
        {foodBeverageDashboardImage
          ? <div className="fbev-command-art"><img src={`${root}${foodBeverageDashboardImage}`} alt="TracelyTag Enterprise Dashboard showing production status, authentication requests, supply chain overview, retail verification, consumer engagement and business analytics" /></div>
          : <div className="fbev-command-empty" aria-hidden="true" />}
      </div>
    </section>

    <section className="fbev-cta" aria-labelledby="fbev-cta-title">
      <div className="container-tight fbev-cta-inner">
        <div className="fbev-cta-card">
          <h2 id="fbev-cta-title">Ready to Build a Smarter Food Supply Chain?</h2>
          <p>Join leading food and beverage manufacturers using TracelyTag to secure their global footprint and win consumer hearts.</p>
          <div className="fbev-cta-actions">
            <Link href="/contact-us" data-testid="button-food-book-demo" className="fbev-btn fbev-btn-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-food-contact-sales" className="fbev-btn fbev-btn-outline">Contact Sales</Link>
          </div>
        </div>
      </div>
    </section>
  </Shell>;
}

const pharmaFeatures: [string, string, LucideIcon][] = [
  ['Drug Authentication', 'Real-time validation of pharmaceutical products at every touchpoint.', ShieldCheck],
  ['Serialization', 'Unique identifier management for unit-level tracking and compliance.', ScanQrCode],
  ['Regulatory Compliance', 'Automated reporting for DSCSA, EU FMD, and global mandates.', Gavel],
  ['Supply Chain Visibility', "Full transparency from manufacturing to the patient's hand.", Eye],
];
const pharmaChallenges: [string, string][] = [
  ['Counterfeit medicines', 'Combating the global rise of substandard and falsified drugs entering markets.'],
  ['Regulatory compliance', 'Meeting stringent global standards (DSCSA, FMD) with zero margin for error.'],
  ['Product recalls', 'Managing complex recall logistics efficiently to maintain patient safety.'],
  ['Serialization requirements', 'Implementing high-speed unit-level marking without impacting production uptime.'],
];
const pharmaPanelItems = ['Drug Authentication', 'Serialization', 'Aggregation', 'GS1 Compliance', 'Track & Trace', 'Business Intelligence'];
const pharmaJourney = ['Medicine Manufacturing', 'Serialization', 'Packaging', 'Aggregation', 'Warehouse', 'Distribution', 'Pharmacy', 'Patient Verification'];
const pharmaSolutions: [string, string, LucideIcon][] = [
  ['Drug Authentication', 'Instant, foolproof verification of medicine authenticity through encrypted digital signatures.', BriefcaseMedical],
  ['Serialization', 'High-volume serial number management system capable of processing billions of unique identifiers.', Hash],
  ['Aggregation', 'Parent-child relationship tracking from individual doses to cases and shipping pallets.', Layers],
  ['Track & Trace', 'Complete lineage tracking across every node in the pharmaceutical distribution network.', RouteIcon],
  ['GS1 Compliance', 'Seamless integration with EPCIS standards ensuring full interoperability with global regulators.', ClipboardCheck],
  ['Analytics', 'Real-time business intelligence dashboard for production monitoring and risk mitigation.', ChartNoAxesCombined],
];
const pharmaOutcomes: [string, string, LucideIcon][] = [
  ['Improve Patient Safety', 'Ensure patients receive genuine, high-quality medication.', Heart],
  ['Meet Regulatory Requirements', 'Stay compliant with global health authority mandates.', ShieldUser],
  ['Prevent Counterfeit Medicines', 'Lock out gray market and falsified products effectively.', Ban],
  ['Accelerate Product Recalls', 'Execute targeted recalls in minutes instead of weeks.', BotMessageSquare],
  ['Increase Visibility', 'Identify bottlenecks and leakage in the supply chain.', Crosshair],
  ['Strengthen Brand Trust', 'Build consumer confidence through transparency.', Handshake],
];

function Pharmaceuticals() {
  return <Shell>
    <section className="phar-hero" aria-labelledby="phar-hero-title">
      <div className="container-tight phar-hero-inner">
        <div className="fade-up">
          <p className="phar-pill"><BadgeCheck size={13} strokeWidth={2.1} />Enterprise Pharma Solutions</p>
          <h1 id="phar-hero-title" className="phar-h1">Protect Every Medicine with End-to-End Pharmaceutical Traceability</h1>
          <p className="phar-hero-copy">Help pharmaceutical manufacturers secure medicines, prevent counterfeit drugs, enable serialization, comply with global regulations and achieve complete supply chain visibility using TracelyTag's enterprise platform.</p>
          <div className="phar-hero-actions">
            <Link href="/contact-us" data-testid="button-pharma-book-demo-hero" className="phar-btn phar-btn-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-pharma-talk-expert" className="phar-btn phar-btn-ghost">Talk to an Expert</Link>
          </div>
        </div>
        <div className="phar-hero-art fade-up delay-1">
          <img src={`${root}industry-heroimgs/pharma.jpeg`} alt="Pharmaceutical manufacturing, coding and serialization, inspection, aggregation, digital warehouse, distribution, pharmacy and patient verification network powered by TracelyTag" />
        </div>
      </div>
    </section>

    <section className="phar-features" aria-label="Pharmaceutical platform capabilities">
      <div className="container-tight phar-feature-grid">
        {pharmaFeatures.map(([title, copy, Icon]) => <article key={title} className="card-line phar-feature-card">
          <Icon size={22} className="text-[#0f56c2]" strokeWidth={2} />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="phar-challenges" aria-labelledby="phar-challenges-title">
      <div className="container-tight phar-challenges-inner">
        <div>
          <h2 id="phar-challenges-title">Pharmaceutical Industry Challenges</h2>
          <div className="phar-challenge-list">
            {pharmaChallenges.map(([title, copy]) => <div key={title} className="phar-challenge">
              <span className="phar-challenge-dot" />
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>)}
          </div>
        </div>
        <div className="phar-panel">
          <h2>Why Pharmaceutical Companies Choose TracelyTag</h2>
          <div className="phar-panel-grid">
            {pharmaPanelItems.map(item => <p key={item} className="phar-panel-item"><CircleCheck size={18} strokeWidth={1.8} className="shrink-0" />{item}</p>)}
          </div>
        </div>
      </div>
    </section>

    <section className="phar-journey" aria-label="Pharmaceutical product journey">
      <div className="container-tight phar-journey-inner">
        <div className="phar-journey-track">
          {pharmaJourney.map((step, index) => <div key={step} className="phar-journey-step">
            <span className="phar-journey-dot">{index + 1}</span>
            <p>{step}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="phar-solutions" aria-labelledby="phar-solutions-title">
      <div className="container-tight phar-solutions-inner">
        <h2 id="phar-solutions-title">Enterprise Solutions for Pharmaceuticals</h2>
        <p className="phar-solutions-sub">Scalable technology designed specifically for the unique demands of global medicine manufacturing and distribution.</p>
        <div className="phar-solution-grid">
          {pharmaSolutions.map(([title, copy, Icon]) => <article key={title} className="card-line phar-solution-card">
            <Icon size={26} className="text-[#0f56c2]" strokeWidth={1.9} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="phar-excellence" aria-labelledby="phar-excellence-title">
      <div className="container-tight phar-excellence-inner">
        <div className="phar-outcome-grid">
          {pharmaOutcomes.map(([title, copy, Icon]) => <article key={title} className="card-line phar-outcome-card">
            <Icon size={22} className="text-[#0f56c2]" strokeWidth={1.9} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
        <div>
          <h2 id="phar-excellence-title">Drive Industrial Excellence in Pharma</h2>
          <p className="phar-excellence-copy">Our platform isn't just about compliance; it's about digital transformation. By integrating serialization into your core manufacturing process, you unlock data that drives operational efficiency and patient outcomes.</p>
          <Link href="/contact-us" data-testid="button-pharma-download-brief" className="phar-btn phar-btn-primary mt-8">Download Solutions Brief</Link>
        </div>
      </div>
    </section>

    <section className="phar-dashboard" aria-labelledby="phar-dashboard-title">
      <div className="container-tight phar-dashboard-inner">
        <h2 id="phar-dashboard-title">Enterprise Visibility Dashboard</h2>
        <p className="phar-dashboard-sub">Real-time control over global pharmaceutical serialization and authentication events.</p>
        <div className="phar-dashboard-art">
          <img src={`${root}industry-crops/pharmaceuticals-dashboard.png`} alt="PharmaSecure Dashboard global operations: serialization status 99.98% active with 1,245,892 total serials today, auth requests 1.2M global at 98.2% success, production batches 42 current, aggregation status verified, distribution tracking 840 shipments, and compliance analytics healthy" />
        </div>
      </div>
    </section>

    <section className="phar-cta" aria-labelledby="phar-cta-title">
      <div className="container-tight phar-cta-inner">
        <h2 id="phar-cta-title">Ready to Modernize Pharmaceutical Traceability?</h2>
        <div className="phar-cta-actions">
          <Link href="/contact-us" data-testid="button-pharma-book-demo" className="phar-btn phar-btn-primary">Book a Demo</Link>
          <Link href="/contact-us" data-testid="button-pharma-contact-sales" className="phar-btn phar-btn-ghost">Contact Sales</Link>
        </div>
      </div>
    </section>
  </Shell>;
}

function GenericPage({ type }: { type: 'platform'|'solution'|'industry' }) {
  const params = useParams<{slug:string}>(); const slug = params.slug || (type === 'platform' ? 'product-digitalization' : type === 'industry' ? 'agriculture-agtech' : 'analytics-business-intelligence');
  const industry = industryItems.find(x => x[1] === slug);
  const data = industry ? {title: industry[0], image:'about-hero-diagram.png', eyebrow:'INDUSTRIES'} : genericMap[slug] || {title: type === 'industry' ? 'Industries' : type === 'solution' ? 'Solutions' : 'Platform', image:'about-hero-diagram.png', eyebrow:type.toUpperCase()};
  return <Shell><Hero eyebrow={data.eyebrow} title={data.title} copy="The unified product intelligence platform that helps manufacturers and brands create secure, transparent, and intelligent products." image={data.image} alt={data.title} /><FeatureCards items={aboutFeatures} /><MonitorSection image={data.image.includes('dashboard') ? data.image : 'about-dashboard-monitor.png'} title="The Intelligence Layer" /><BlueBand title="Connected Product Intelligence" items={['Product Authentication','Track & Trace','Supply Chain Visibility','Consumer Engagement']} /><CTA title="Ready to Build Connected Products?" copy="Join the global leaders creating trusted, intelligent products with TracelyTag." /></Shell>;
}

function Platform() { return <Shell><Hero eyebrow="THE TRACELYTAG PLATFORM" title="One Platform. Complete Product Intelligence." copy="Build, authenticate, track, and connect every product across its entire lifecycle." image="about-hero-diagram.png" alt="TracelyTag product intelligence platform" /><FeatureCards items={aboutFeatures} /><BlueBand title="The Intelligence Layer" items={['Product Digitalization','Product Authentication','Case & Pallet Aggregation','Mobile Verification']} /><CTA title="Ready to Build Connected Products?" copy="Join the global leaders creating trusted, intelligent products with TracelyTag." /></Shell>; }
const abiFeatures: [string, string, LucideIcon][] = [
  ['Business Intelligence', 'Centralized data engine for all your enterprise reporting needs.', ChartNoAxesCombined],
  ['Real-Time Analytics', 'Live streaming of authentication and scan data as it happens globally.', Gauge],
  ['Performance Insights', 'Deep dive into product lifecycles and supply chain health metrics.', ScanSearch],
  ['Decision Intelligence', 'Automated pattern recognition for predictive executive decisions.', Grip],
];
const abiChallenges: [string, string][] = [
  ['Data scattered across systems', 'Eliminate siloes by unifying all product event data into a single source of truth.'],
  ['Limited business visibility', 'Gain a 360-degree view of your product journey from manufacture to consumer.'],
  ['Slow reporting', 'Replace week-long manual report generation with instant, real-time dashboards.'],
  ['Difficult decision making', 'Stop relying on gut feeling and start making data-driven strategic choices.'],
  ['Manual reporting', 'Automate high-stake industrial compliance and performance reports.'],
  ['Missed growth opportunities', 'Identify market trends and consumer demand shifts before they pass.'],
];
const abiPlatformItems = ['Executive dashboards', 'Live KPI monitoring', 'Product intelligence', 'Consumer insights', 'Supply chain analytics', 'Business reporting'];
const abiPipeline: [string, string][] = [
  ['Product Event', 'Scans, authentications, or movements.'],
  ['Data Collection', 'Instant ingestion from global nodes.'],
  ['Data Processing', 'Cleaning and normalizing datasets.'],
  ['Analytics Engine', 'Applying industrial logic and AI.'],
  ['Business Insights', 'Visualizing trends and patterns.'],
  ['Decision Making', 'Actioning derived intelligence.'],
  ['Business Growth', 'Scalable enterprise expansion.'],
];
const abiAdvanced: [string, string, LucideIcon][] = [
  ['Executive Dashboards', 'Tailored views for C-level leadership focused on high-level ROI and global health.', Grid2x2Plus],
  ['Custom Reports', 'Builder tool for specific operational reports and regulatory compliance filings.', FileText],
  ['Product Analytics', 'Monitor performance by SKU, batch, or individual unit across the entire lifespan.', Archive],
  ['Consumer Analytics', 'Understand engagement patterns, geographic trends, and retention metrics.', Users],
  ['Supply Chain Analytics', 'Optimize logistics with data on transit times, dwell durations, and routing.', Network],
  ['Business Intelligence', 'Predictive modeling and scenario planning for future-proofing operations.', SquareTerminal],
];
const abiBenefits: [string, string][] = [
  ['Better Decision Making', 'Reduce uncertainty with hard data that supports strategic enterprise pivots.'],
  ['Operational Visibility', 'Monitor every stage of the product lifecycle in real-time without manual intervention.'],
  ['Higher Efficiency', 'Identify bottlenecks instantly and streamline workflows for better resource allocation.'],
  ['Improved Forecasting', 'Use historical scan data to predict demand surges and supply requirements.'],
  ['Business Growth', 'Drive revenue through better market understanding and optimized logistics.'],
  ['Actionable Insights', 'Move beyond data points to clear directives that impact the bottom line.'],
];

const abi2CardsA: [string, string, LucideIcon][] = [
  ['Executive Dashboards', 'High-level visibility into global operations for C-suite decision makers.', Grid2x2Plus],
  ['Business Intelligence', 'Advanced data modeling to uncover hidden trends in product movement.', ChartNoAxesCombined],
  ['Operational KPIs', 'Real-time performance metrics for manufacturing and distribution lines.', Gauge],
  ['Data-Driven Decisions', 'Leverage historical data to predict future supply chain requirements.', Grip],
];
const abi2CardsB: [string, string, LucideIcon][] = [
  ['Executive Dashboards', 'High-level strategic visibility for leadership and key stakeholders.', Grid2x2Plus],
  ['Business Intelligence', 'Advanced data processing to uncover hidden market opportunities.', ChartNoAxesCombined],
  ['Operational KPIs', 'Real-time performance tracking across all industrial touchpoints.', Gauge],
  ['Data-Driven Decisions', 'Replace intuition with empirical evidence from global scan logs.', ScanSearch],
];
const abi2EnterpriseA = ['Executive reporting', 'Authentication analytics', 'Supply chain analytics', 'Consumer insights', 'Operational KPIs', 'Custom dashboards'];
const abi2EnterpriseB = ['Executive reporting & strategic summaries', 'Authentication & security analytics', 'Supply chain flow & logistics bottlenecks', 'Consumer insights & interaction heatmaps', 'Real-time operational KPI monitoring', 'Custom dashboard builder & automated exports'];
const abi2Workflow: [string, string][] = [
  ['Data Collection', 'Multi-point scans'],
  ['Data Processing', 'Cloud verification'],
  ['Business Analytics', 'Trend identification'],
  ['Executive Dashboard', 'Visual KPIs'],
  ['Decision Making', 'Strategic actions'],
  ['Business Growth', 'Optimized results'],
];
const abi2CapabilitiesA: [string, string, LucideIcon][] = [
  ['Executive Dashboard', "A bird's-eye view of your entire operation, aggregating data from multiple production facilities into one interface.", ChartNoAxesCombined],
  ['Custom Reports', 'Build and schedule automated reports tailored to specific department needs, from logistics to marketing.', FileText],
  ['KPI Monitoring', 'Set thresholds for critical metrics and receive instant alerts when performance deviates from your baseline.', BellRing],
  ['Authentication Analytics', 'Track verification attempts globally to identify counterfeit hotspots and product diversion in real-time.', ShieldCheck],
  ['Supply Chain Analytics', 'Analyze dwell times, route efficiency, and partner performance to eliminate bottlenecks in distribution.', Network],
  ['Consumer Insights', 'Understand how, where, and when consumers interact with your product tags to optimize engagement strategies.', Users],
];
const abi2CapabilitiesB: [string, string, LucideIcon][] = [
  ['Executive Dashboard', "A bird's-eye view of your entire operational landscape, optimized for rapid comprehension and strategic action.", ChartNoAxesCombined],
  ['Custom Reports', 'Build and schedule automated reports tailored to specific department needs, from logistics to marketing.', FileText],
  ['KPI Monitoring', 'Set threshold alerts for critical metrics and receive instant notifications when performance deviates from targets.', BellRing],
  ['Authentication Analytics', 'Trace every verification attempt globally to identify potential counterfeit hotspots and unauthorized trade.', ShieldCheck],
  ['Supply Chain Analytics', 'End-to-end visibility of product movement, dwell times, and transit efficiency across the global network.', Truck],
  ['Consumer Insights', 'Understand how, where, and when consumers interact with your products to refine engagement strategies.', UsersRound],
];
const abi2ImpactA: [string, string, LucideIcon][] = [
  ['Better Decisions', 'Move beyond guesswork with hard data that supports complex enterprise decision-making processes.', BrainCog],
  ['Operational Visibility', 'Eliminate blind spots in your global supply chain with comprehensive transparency from factory to shelf.', Eye],
  ['Business Intelligence', 'Leverage predictive models to forecast demand and optimize inventory levels across multiple regions.', ScanSearch],
  ['Higher Efficiency', 'Identify and automate repetitive reporting tasks, freeing up your team for high-value strategic work.', Zap],
  ['Improved Performance', 'Continuous monitoring allows for rapid iteration and performance tuning of industrial processes.', TrendingUp],
  ['Growth Insights', 'Discover new market opportunities based on real consumer interaction data and geographic trends.', Waypoints],
];
const abi2Integrated: [string, string, LucideIcon][] = [
  ['Executive KPIs', 'Instant access to revenue metrics and performance summaries.', ChartPie],
  ['Global Supply Chain Metrics', 'Track inventory dwell time and transit efficiency across continents.', Map],
];

function AnalyticsMergedSections() {
  return <>
    <section className="abi2-hero" aria-labelledby="abi2-hero-title">
      <div className="container-tight abi2-hero-inner">
        <div className="fade-up">
          <p className="abi2-pill"><ChartColumnBig size={13} strokeWidth={2.2} />ENTERPRISE INTELLIGENCE</p>
          <h2 id="abi2-hero-title" className="abi2-h1">Transform Product Data into <span>Actionable</span> Business Insights</h2>
          <p className="abi2-hero-copy">Monitor authentication, product movement, consumer engagement, supply chain performance and operational KPIs from one enterprise analytics dashboard.</p>
          <div className="abi2-hero-actions">
            <Link href="/contact-us" data-testid="button-abi2-book-demo-hero" className="abi2-btn abi2-btn-primary">Book a Demo</Link>
            <Link href="/platform" data-testid="button-abi2-view-platform" className="abi2-btn abi2-btn-ghost">View Platform</Link>
          </div>
        </div>
        <div className="abi2-hero-art fade-up delay-1">
          <img src={`${root}solution-crops/analytics-dashboard-hero-full.png`} alt="Isometric enterprise analytics scene: robotic production lines and global freight feeding dashboards, KPI panels, global yield, efficiency score and real-time alerts tiles, with a Real-time Data Stream badge reading 99.98% Accuracy" />
          <img src={`${root}solution-crops/analytics-insights-hero-full.png`} alt="TracelyTag Analytics and BI Solution: robotic assembly lines and global nodes converging on a central processing core that fans data out to reporting dashboards, charts and product health panels" />
        </div>
      </div>
    </section>

    <section className="abi2-cards" aria-label="Enterprise intelligence capabilities">
      <div className="container-tight abi2-cards-inner">
        <div className="abi2-card-grid">
          {abi2CardsA.map(([title, copy, Icon]) => <article key={`a-${title}`} className="abi2-card">
            <Icon size={22} strokeWidth={2} className="text-[#1152d6]" />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
        <div className="abi2-card-grid">
          {abi2CardsB.map(([title, copy, Icon]) => <article key={`b-${title}`} className="abi2-card">
            <Icon size={22} strokeWidth={2} className="text-[#1152d6]" />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="abi2-enterprise" aria-labelledby="abi2-enterprise-title">
      <div className="container-tight abi2-enterprise-inner">
        <div>
          <h2 id="abi2-enterprise-title">Enterprise Analytics</h2>
          <p className="abi2-enterprise-copy">Scale your business with a robust analytical engine designed for global manufacturers. Every touchpoint in your supply chain becomes a data point for growth.</p>
          <ul className="abi2-check-grid">
            {abi2EnterpriseA.map(item => <li key={item}><CircleCheck size={18} strokeWidth={2} />{item}</li>)}
          </ul>
          <ul className="abi2-check-list">
            {abi2EnterpriseB.map(item => <li key={item}><CircleCheck size={18} strokeWidth={2} />{item}</li>)}
          </ul>
          <Link href="/contact-us" data-testid="button-abi2-solution-brief" className="abi2-btn abi2-brief">Download Solution Brief</Link>
        </div>
        <div className="abi2-enterprise-art">
          <img src={`${root}solution-crops/analytics-enterprise-monitor.png`} alt="Analytics and Business Intelligence workspace on a desktop monitor: executive KPIs with $12.5M revenue, 94.5% efficiency and 14.1% growth; authentication analytics verification trends at a 98.2% success rate with method breakdown; consumer analytics engagement heatmap and interaction rates; supply chain metrics inventory levels and shipping status; operational performance uptime 99.99% at 1,280 transactions per second; and a business reports queue" />
        </div>
      </div>
    </section>

    <section className="abi2-workflow" aria-labelledby="abi2-workflow-title">
      <div className="container-tight abi2-workflow-inner">
        <h2 id="abi2-workflow-title">The Intelligence Workflow</h2>
        <p className="abi2-workflow-sub">From raw data points to strategic business growth.</p>
        <p className="abi2-workflow-sub">From raw physical scans to strategic boardroom decisions, TraceLogic orchestrates the entire data lifecycle.</p>
        <ol className="abi2-workflow-grid">
          {abi2Workflow.map(([title, sub], index) => <li key={title} className="abi2-workflow-step">
            <span className="abi2-workflow-num">{index + 1}</span>
            <h3>{title}</h3>
            <p>{sub}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="abi2-caps" aria-labelledby="abi2-caps-title">
      <div className="container-tight abi2-caps-inner">
        <h2 id="abi2-caps-title" className="abi2-h2 is-center">Advanced Analytics Capabilities</h2>
        <p className="abi2-center-sub">Purpose-built features for industrial scale intelligence.</p>
        <div className="abi2-cap-grid">
          {abi2CapabilitiesA.map(([title, copy, Icon]) => <article key={`a-${title}`} className="abi2-cap-card">
            <span className="abi2-cap-tile"><Icon size={20} strokeWidth={2} /></span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="abi2-caps-b" aria-labelledby="abi2-caps-b-title">
      <div className="container-tight abi2-caps-inner">
        <h2 id="abi2-caps-b-title" className="abi2-h2">Advanced Features</h2>
        <div className="abi2-cap-grid">
          {abi2CapabilitiesB.map(([title, copy, Icon]) => <article key={`b-${title}`} className="abi2-cap-card is-plain">
            <Icon size={22} strokeWidth={2} className="text-[#1152d6]" />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="abi2-impact" aria-labelledby="abi2-impact-title">
      <div className="container-tight abi2-impact-inner">
        <h2 id="abi2-impact-title" className="abi2-h2">Strategic Business Impact</h2>
        <div className="abi2-impact-grid">
          {abi2ImpactA.map(([title, copy, Icon]) => <div key={title} className="abi2-impact-item">
            <Icon size={20} strokeWidth={2} />
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </div>)}
        </div>
        <div className="abi2-bento">
          <article className="abi2-bento-lead">
            <h3>Better Decisions</h3>
            <p>Leverage real-time data to drive high-stakes strategic choices with absolute confidence.</p>
          </article>
          <article className="abi2-bento-card">
            <h3>Operational Visibility</h3>
            <p>Uncover inefficiencies in your supply chain that were previously invisible to standard ERP systems.</p>
          </article>
          <article className="abi2-bento-card">
            <h3>Business Intelligence</h3>
            <p>Convert petabytes of scan data into meaningful narratives about your global market presence.</p>
          </article>
          <article className="abi2-bento-wide">
            <div>
              <h3>Higher Efficiency &amp; Growth Insights</h3>
              <p>Identify growth vectors through consumer engagement patterns and optimize operational throughput with precision data.</p>
            </div>
            <span className="abi2-bento-icon"><TrendingUp size={22} strokeWidth={2} /></span>
          </article>
        </div>
      </div>
    </section>

    <section className="abi2-integrated" aria-labelledby="abi2-integrated-title">
      <div className="container-tight abi2-integrated-inner">
        <div className="abi2-integrated-art">
          <img src={`${root}solution-crops/analytics-boardroom-suite.png`} alt="Browser window titled tracelogic-enterprise-analytics.v2 showing the Enterprise BI and Analytics Suite on a boardroom display: authentication analytics verification trends and success rates, executive KPIs of $45.2B revenue, 94.5% efficiency index and +8.5% global growth, consumer analytics engagement heatmap and interaction rates, supply chain metrics, operational performance, and a custom reporting queue" />
        </div>
        <div>
          <h2 id="abi2-integrated-title" className="abi2-h2">Integrated Analytical Power</h2>
          <p className="abi2-integrated-copy">The TraceLogic Analytics suite consolidates multiple data streams into a single, cohesive source of truth.</p>
          <div className="abi2-integrated-list">
            {abi2Integrated.map(([title, copy, Icon]) => <div key={title} className="abi2-integrated-item">
              <span className="abi2-integrated-icon"><Icon size={18} strokeWidth={2} /></span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="abi2-unlock" aria-labelledby="abi2-unlock-title">
      <div className="container-tight">
        <div className="abi2-unlock-card">
          <h2 id="abi2-unlock-title">Ready to Unlock Business Intelligence?</h2>
          <p>Join the world's leading manufacturers using TracelyTag to secure their supply chains and gain a competitive edge through data.</p>
          <div className="abi2-unlock-actions">
            <Link href="/contact-us" data-testid="button-abi2-book-demo" className="abi2-btn abi2-unlock-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-abi2-contact-sales" className="abi2-btn abi2-unlock-ghost">Contact Sales</Link>
          </div>
        </div>
      </div>
    </section>
  </>;
}

function AnalyticsBusinessIntelligence() {
  return <Shell>
    <section className="abi-hero" aria-labelledby="abi-hero-title">
      <div className="container-tight abi-hero-inner">
        <div className="fade-up">
          <p className="abi-pill"><ChartNoAxesCombined size={14} strokeWidth={2.2} />BUSINESS INTELLIGENCE</p>
          <h1 id="abi-hero-title" className="abi-h1">Turn Product Data into Actionable Business Intelligence</h1>
          <p className="abi-hero-copy">Transform every product scan, authentication and supply chain event into meaningful business insights. Monitor product performance, customer engagement, supply chain visibility and operational KPIs from one intelligent analytics platform.</p>
          <div className="abi-hero-actions">
            <Link href="/contact-us" data-testid="button-abi-book-demo-hero" className="abi-btn abi-btn-primary">Book a Demo</Link>
            <Link href="/platform" data-testid="button-abi-explore-platform" className="abi-btn abi-btn-ghost">Explore Platform</Link>
          </div>
        </div>
        <div className="abi-hero-art fade-up delay-1">
          <img src={`${root}solution-crops/analytics-bi-hero-full.png`} alt="TracelyTag analytics and business intelligence: supply chain events, QR scans and product authentications feeding a central TracelyTag engine that powers real-time insights, predictive analytics, 98.5% operational efficiency KPI, growth trends, regional sales and performance metrics" />
        </div>
      </div>
    </section>

    <section className="abi-features" aria-label="Analytics platform capabilities">
      <div className="container-tight abi-feature-grid">
        {abiFeatures.map(([title, copy, Icon]) => <article key={title} className="abi-feature-card">
          <Icon size={26} className="text-[#1152d6]" strokeWidth={2} />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="abi-why" aria-labelledby="abi-why-title">
      <div className="container-tight abi-why-inner">
        <div>
          <h2 id="abi-why-title" className="abi-why-title">Why Modern Analytics Matters</h2>
          <p className="abi-why-copy">Manual data processing and fragmented visibility are no longer sustainable for modern industrial supply chains.</p>
          <div className="abi-why-list">
            {abiChallenges.map(([title, copy]) => <div key={title} className="abi-why-item">
              <TriangleAlert size={18} strokeWidth={2} />
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>)}
          </div>
        </div>
        <div className="abi-panel">
          <h2>Enterprise Analytics Platform</h2>
          <ul className="abi-panel-list">
            {abiPlatformItems.map(item => <li key={item}><CircleCheck size={20} strokeWidth={2} />{item}</li>)}
          </ul>
        </div>
      </div>
    </section>

    <section className="abi-pipeline" aria-labelledby="abi-pipeline-title">
      <div className="container-tight abi-pipeline-inner">
        <h2 id="abi-pipeline-title">The Intelligence Pipeline</h2>
        <p className="abi-pipeline-sub">From raw event to strategic business growth</p>
        <ol className="abi-pipeline-grid">
          {abiPipeline.map(([title, copy], index) => <li key={title} className="abi-step">
            <span className="abi-step-num">{index + 1}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="abi-advanced" aria-labelledby="abi-advanced-title">
      <div className="container-tight abi-advanced-inner">
        <h2 id="abi-advanced-title">Advanced Platform Features</h2>
        <div className="abi-advanced-grid">
          {abiAdvanced.map(([title, copy, Icon]) => <article key={title} className="abi-advanced-card">
            <Icon size={24} className="text-[#1152d6]" strokeWidth={2} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="abi-benefits" aria-labelledby="abi-benefits-title">
      <div className="container-tight abi-benefits-inner">
        <h2 id="abi-benefits-title">Business Benefits</h2>
        <div className="abi-benefit-grid">
          {abiBenefits.map(([title, copy]) => <article key={title} className="abi-benefit-card">
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="abi-dash" aria-labelledby="abi-dash-title">
      <div className="container-tight">
        <div className="abi-dash-card">
          <h2 id="abi-dash-title">The TracelyTag Executive Dashboard</h2>
          <p>Unified intelligence at a glance. Manage KPIs, scan activity, and authentication health from a centralized command center.</p>
          <div className="abi-dash-art">
            <img src={`${root}solution-crops/analytics-bi-dashboard.png`} alt="Vantage Analytics &amp; Business Intelligence Executive Dashboard: executive KPIs with $2.45 Billion total revenue up 15% YoY, 92% efficiency score and steady rise growth trajectory; QR scan analytics with geographic activity heatmap, top locations New York 3.48 million, London 1.2 million and Tokyo 1.2 million, 1.2 million total scans; authentication trends of success versus failed attempts over the last 30 days at 96% success rate; consumer analytics demographics by age group and loyal, occasional and new behavior split; supply chain metrics logistics and fulfillment overview at 96% orders on-time; and business reports including Q3 Financial Summary, Market Analysis Report and Operational Efficiency Review" />
          </div>
        </div>
      </div>
    </section>

    <AnalyticsMergedSections />

    <section className="abi-cta" aria-labelledby="abi-cta-title">
      <div className="container-tight abi-cta-inner">
        <h2 id="abi-cta-title">Ready to Turn Product Data into Business Intelligence?</h2>
        <p>Join leading global enterprises using TracelyTag to drive decisions with industrial-grade data integrity.</p>
        <div className="abi-cta-actions">
          <Link href="/contact-us" data-testid="button-abi-book-demo" className="abi-btn abi-cta-primary">Book a Demo</Link>
          <Link href="/contact-us" data-testid="button-abi-contact-sales" className="abi-btn abi-cta-ghost">Contact Sales</Link>
        </div>
      </div>
    </section>
  </Shell>;
}

const cpakFeatures: [string, string, LucideIcon][] = [
  ['Smart Packaging', 'Embedded digital identity within physical materials.', Archive],
  ['Consumer Engagement', 'Direct-to-consumer relationships built on trust.', Users],
  ['Digital Experiences', 'Rich multimedia content delivered instantly.', PanelsTopLeft],
  ['Brand Protection', 'Secure authentication to fight counterfeiting.', ShieldCheck],
];
const cpakProblems: [string, string, LucideIcon][] = [
  ['Static packaging has limited value', 'Information is fixed at printing and quickly becomes obsolete.', TriangleAlert],
  ['No direct customer interaction', 'Brands lose touch with the user once the product leaves the shelf.', Ban],
  ['Limited consumer insights', 'Zero data on where, when, and how products are engaged with.', EyeOff],
];
const cpakAdvantage = ['Dynamic content updates after printing', 'Real-time scan geolocation data', 'Post-purchase loyalty triggers', 'Interactive digital warranty claims'];
const cpakSteps: [string, string][] = [
  ['Generate Secure QR', 'Unique encrypted codes for every unit.'],
  ['Print on Packaging', 'High-speed industrial printing integration.'],
  ['Consumer Scan', 'App-free interaction via smartphone.'],
  ['Authentication', 'Instant verification of product origin.'],
  ['Digital Warranty', 'Automatic registration and claim tracking.'],
  ['Loyalty & Rewards', 'Incentivize repeat purchases instantly.'],
  ['Analytics', 'Visualize engagement patterns in real-time.'],
];
const cpakAdvanced: [string, string, LucideIcon][] = [
  ['Secure QR Codes', 'Tamper-proof, serialized codes generated with enterprise-grade encryption for total security.', QrCode],
  ['Dynamic Product Pages', 'Update landing pages, marketing content, and product data without reprinting packaging materials.', LayoutTemplate],
  ['Digital Information', 'Replace bulky paper manuals with rich digital documentation, assembly videos, and ingredients.', BookOpen],
  ['Campaign Management', 'Run geography-based promotions and seasonal marketing campaigns through a central interface.', Megaphone],
  ['Consumer Engagement', 'Direct feedback loops, surveys, and social sharing integrated directly into the scan experience.', Pointer],
  ['Analytics Dashboard', 'Granular data on scan frequency, location heatmaps, and user conversion rates across your supply chain.', ChartNoAxesCombined],
];
const cpakBenefits: [string, string, LucideIcon][] = [
  ['Better Customer Experience', 'Instant access to help and information.', Smile],
  ['Stronger Brand Engagement', 'Higher emotional connection with the brand.', CircleStar],
  ['More Consumer Insights', 'First-party data for better decision making.', ChartNoAxesCombined],
  ['Higher Product Trust', 'Transparency in sourcing and quality.', Shield],
  ['Marketing Opportunities', 'Unlock upsell and cross-sell channels.', MousePointerClick],
  ['Increased Repeat Purchases', 'Direct subscription and re-order triggers.', RefreshCw],
];

function ConnectedPackaging() {
  return <Shell>
    <section className="cpak-hero" aria-labelledby="cpak-hero-title">
      <div className="container-tight cpak-hero-inner">
        <div className="fade-up">
          <h1 id="cpak-hero-title" className="cpak-h1">Transform Every Package into a <span>Connected Digital Experience</span></h1>
          <p className="cpak-hero-copy">Turn every product package into a smart digital touchpoint using secure QR codes. Deliver authentication, product information, digital content, warranties, loyalty programs and consumer engagement through a single scan.</p>
          <div className="cpak-hero-actions">
            <Link href="/contact-us" data-testid="button-cpak-start-project" className="cpak-btn cpak-btn-primary">Start Your Project</Link>
            <Link href="/contact-us" data-testid="button-cpak-view-demo" className="cpak-btn cpak-btn-ghost">View Demo</Link>
          </div>
        </div>
        <div className="cpak-hero-art fade-up delay-1">
          <img src={`${root}solution-crops/connected-packaging-hero-full.png`} alt="Connected packaging: a smartphone scanning a QR code on a shipping box unlocks product authentication, product information, digital warranty and loyalty rewards, with real-time engagement data shown on a TracelyTag analytics dashboard" />
        </div>
      </div>
    </section>

    <section className="cpak-features" aria-label="Connected packaging capabilities">
      <div className="container-tight cpak-feature-grid">
        {cpakFeatures.map(([title, copy, Icon]) => <article key={title} className="cpak-feature-card">
          <Icon size={26} className="text-[#0e46b0]" strokeWidth={2} />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="cpak-why" aria-labelledby="cpak-why-title">
      <div className="container-tight cpak-why-inner">
        <div>
          <h2 id="cpak-why-title" className="cpak-why-title">Why Connected Packaging?</h2>
          <p className="cpak-why-copy">Traditional packaging acts as a silent container. TracelyTag activates your packaging, turning it into a powerful communication channel that solves critical enterprise blind spots.</p>
          <div className="cpak-why-list">
            {cpakProblems.map(([title, copy, Icon]) => <div key={title} className="cpak-why-item">
              <Icon size={20} strokeWidth={2} />
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>)}
          </div>
        </div>
        <div className="cpak-panel">
          <h2>The Digital Advantage</h2>
          <ul className="cpak-panel-list">
            {cpakAdvantage.map(item => <li key={item}><CircleCheck size={20} strokeWidth={2} />{item}</li>)}
          </ul>
        </div>
      </div>
    </section>

    <section className="cpak-steps" aria-labelledby="cpak-steps-title">
      <div className="container-tight cpak-steps-inner">
        <h2 id="cpak-steps-title">How Connected Packaging Works</h2>
        <p className="cpak-steps-sub">A seamless journey from manufacturing to customer loyalty.</p>
        <ol className="cpak-step-grid">
          {cpakSteps.map(([title, copy], index) => <li key={title} className="cpak-step">
            <span className="cpak-step-num">{index + 1}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="cpak-advanced" aria-labelledby="cpak-advanced-title">
      <div className="container-tight cpak-advanced-inner">
        <h2 id="cpak-advanced-title">Advanced Features</h2>
        <div className="cpak-advanced-grid">
          {cpakAdvanced.map(([title, copy, Icon]) => <article key={title} className="cpak-advanced-card">
            <span className="cpak-advanced-icon"><Icon size={20} strokeWidth={2} /></span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="cpak-benefits" aria-labelledby="cpak-benefits-title">
      <div className="container-tight cpak-benefits-inner">
        <h2 id="cpak-benefits-title">Business Benefits</h2>
        <p className="cpak-benefits-sub">Measurable impact on brand value and customer lifetime value through digital packaging activation.</p>
        <div className="cpak-benefit-grid">
          {cpakBenefits.map(([title, copy, Icon]) => <article key={title} className="cpak-benefit-card">
            <span className="cpak-benefit-icon"><Icon size={20} strokeWidth={2} /></span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="cpak-dash" aria-labelledby="cpak-dash-title">
      <div className="container-tight">
        <div className="cpak-dash-card">
          <h2 id="cpak-dash-title">Unified Engagement Intelligence</h2>
          <p>Our centralized dashboard provides real-time visibility into every scan. Monitor global performance, analyze conversion funnels, and gain geographic insights into where your customers are interacting with your brand.</p>
          <div className="cpak-dash-art">
            <img src={`${root}solution-crops/connected-packaging-dashboard.png`} alt="Connected Packaging Intelligence dashboard: QR scan analytics with 1.2M total scans up 15% this month, 950K unique scans and 2m 15s average time; consumer engagement at an 85% interaction rate with 45% video views, 30% form submits and 10% survey completion; campaign performance funnel for the Sustainability Initiative from 1M awareness to 650K consideration and 250K action at a 25% conversion rate; product authentication status over the last 7 days at 92% verified, 5% counterfeit and 3% unknown across 250,000 items; geographic insights with North America the top region at 40%; and a customer journey flow from scan QR to product info, sustainability story, newsletter sign-up and purchase with drop-off rates" />
          </div>
        </div>
      </div>
    </section>

    <section className="cpak-cta" aria-labelledby="cpak-cta-title">
      <div className="container-tight cpak-cta-inner">
        <h2 id="cpak-cta-title">Ready to Transform Your Packaging?</h2>
        <p>Join leading enterprises activating their products. Schedule a personalized consultation with our experts today.</p>
        <div className="cpak-cta-actions">
          <Link href="/contact-us" data-testid="button-cpak-book-demo" className="cpak-btn cpak-cta-primary">Book a Demo</Link>
          <Link href="/contact-us" data-testid="button-cpak-contact-sales" className="cpak-btn cpak-cta-ghost">Contact Sales</Link>
        </div>
      </div>
    </section>
  </Shell>;
}

const antiFeatures: [string, string, LucideIcon][] = [
  ['Prevent Counterfeiting', 'Block illegal market entries and unauthorized manufacturing.', Ban],
  ['Brand Protection', 'Safeguard your global reputation and intellectual property assets.', Shield],
  ['Instant Verification', 'Enable immediate authentication at any point in the supply chain.', QrCode],
  ['Consumer Trust', 'Increase loyalty by proving authenticity directly to customers.', Smile],
];
const antiRisks: [string, string, LucideIcon][] = [
  ['Revenue Loss', 'Billions are lost annually to grey market and illicit trade diversions.', TrendingDown],
  ['Consumer Safety', 'Fake pharma, food, and parts pose significant health and safety risks.', TriangleAlert],
  ['Regulatory Risk', 'Non-compliance with traceability laws leads to massive legal penalties.', Gavel],
  ['Reputation Damage', 'Brand equity is eroded when customers receive substandard fakes.', SquareActivity],
];
const antiStats: [string, string, string][] = [
  ['3.3%', 'Global trade involving counterfeit goods.', 'blue'],
  ['85%', "Consumers won't return to a brand after buying a fake.", 'blue'],
  ['$1.2T', 'Total estimated cost of the counterfeit market.', 'red'],
  ['Global', 'Reach of illicit supply chains across borders.', 'navy'],
];
const antiWorkflow: [string, string][] = [
  ['Secure QR', 'Encrypted ID generation with secure hashing.'],
  ['Serialization', 'Unique identifiers assigned to every unit.'],
  ['Packaging', 'Labels integrated during the manufacturing line.'],
  ['Consumer Scan', 'Smartphone scanning via web or native app.'],
  ['Intelligence', 'Real-time alerts for suspicious scan locations.'],
];
const antiIndustrial: [string, string, LucideIcon][] = [
  ['Secure QR Identity', 'High-security QR codes that are resistant to replication and cloning through advanced cryptographic pairing.', BadgeCheck],
  ['Mass Serialization', 'Generate millions of unique IDs per second with zero collisions, fully compliant with international EPCIS standards.', ListOrdered],
  ['Mobile Verification', 'Zero-friction web-based scanner for consumers. No app download required for instant authenticity checks.', Smartphone],
  ['Verification Engine', 'A high-availability cloud engine that validates billions of scans globally with sub-millisecond response times.', Waypoints],
  ['Scan Analytics', 'Deep insights into geographical scan hotspots, suspicious patterns, and counterfeit breakout locations.', ChartNoAxesCombined],
  ['GS1 Ready', 'Full compatibility with GS1 Digital Link and other industry-specific serialization standards for global interop.', ScanBarcode],
];
const antiOutcomes: [string, string, LucideIcon][] = [
  ['Reduce Counterfeiting', 'Measurably decrease the prevalence of fake products in your key markets by up to 90%.', TrendingUp],
  ['Secure Supply Chain', 'Identify and block infiltration points where unauthorized goods enter your legitimate channels.', LockKeyhole],
  ['Consumer Confidence', 'Build deep brand trust by providing customers with absolute certainty about their purchase.', Heart],
  ['Actionable Insights', 'Turn every scan into a data point for brand protection strategy and market intelligence.', Zap],
  ['Enterprise Security', 'Military-grade encryption and SOC2 compliant infrastructure for your mission-critical data.', ShieldCheck],
  ['Brand Reputation', 'Maintain the premium perception of your brand by ensuring only genuine goods represent your name.', Star],
];
const antiMonitorPoints = ['Real-time heatmap of global scan activity', 'Automated alerts for suspicious high-volume scanning', 'Integration with law enforcement databases'];

function AntiCounterfeiting() {
  return <Shell>
    <section className="anti-hero" aria-labelledby="anti-hero-title">
      <div className="container-tight anti-hero-inner">
        <div className="fade-up">
          <p className="anti-pill"><Shield size={14} strokeWidth={2} />ENTERPRISE AUTHENTICATION</p>
          <h1 id="anti-hero-title" className="anti-h1">Anti-Counterfeiting</h1>
          <p className="anti-hero-copy">Protect your brand from counterfeit products with secure product identities, QR-based verification, serialization, and end-to-end traceability. Enable consumers and supply chain partners to instantly verify product authenticity.</p>
          <div className="anti-hero-actions">
            <Link href="/contact-us" data-testid="button-anti-book-demo-hero" className="anti-btn anti-btn-primary">Book a Demo <ArrowRight size={16} /></Link>
            <Link href="/contact-us" data-testid="button-anti-talk-expert" className="anti-btn anti-btn-ghost">Talk to an Expert</Link>
          </div>
        </div>
        <div className="anti-hero-art fade-up delay-1">
          <img src={`${root}solution-crops/anti-counterfeiting-hero-full.png`} alt="Anti-counterfeiting workflow: a shopper scans the secure QR code on a genuine TracelyTag product to verify authenticity through the secure verification engine and brand protection shield, with real-time data analytics flagging a counterfeit package on the adjacent shelf" />
        </div>
      </div>
    </section>

    <section className="anti-features" aria-label="Anti-counterfeiting outcomes">
      <div className="container-tight anti-feature-grid">
        {antiFeatures.map(([title, copy, Icon]) => <article key={title} className="anti-feature-card">
          <span className="anti-feature-icon"><Icon size={20} strokeWidth={2} /></span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="anti-crisis" aria-labelledby="anti-crisis-title">
      <div className="container-tight anti-crisis-inner">
        <div>
          <h2 id="anti-crisis-title" className="anti-crisis-title">The Global Counterfeit Crisis</h2>
          <p className="anti-crisis-copy">Illicit trade is a sophisticated, global operation. TracelyTag provides the defense mechanism required to combat modern counterfeiters.</p>
          <div className="anti-risk-grid">
            {antiRisks.map(([title, copy, Icon]) => <div key={title} className="anti-risk">
              <p className="anti-risk-head"><Icon size={18} strokeWidth={2} />{title}</p>
              <p className="anti-risk-copy">{copy}</p>
            </div>)}
          </div>
        </div>
        <div className="anti-stat-grid">
          {antiStats.map(([value, copy, tone]) => <div key={value} className="anti-stat">
            <p className={`anti-stat-value is-${tone}`}>{value}</p>
            <p className="anti-stat-copy">{copy}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="anti-flow" aria-labelledby="anti-flow-title">
      <div className="container-tight anti-flow-inner">
        <h2 id="anti-flow-title">The Verification Workflow</h2>
        <p className="anti-flow-sub">From secure identity generation to real-time consumer verification, our end-to-end system secures every touchpoint.</p>
        <ol className="anti-flow-grid">
          {antiWorkflow.map(([title, copy], index) => <li key={title} className="anti-flow-step">
            <span className="anti-flow-num">{index + 1}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="anti-industrial" aria-labelledby="anti-industrial-title">
      <div className="container-tight anti-industrial-inner">
        <div className="anti-industrial-head">
          <div>
            <h2 id="anti-industrial-title">Industrial-Grade Features</h2>
            <p>A robust toolkit designed to integrate seamlessly with global ERPs and high-speed production lines.</p>
          </div>
          <Link href="/platform" data-testid="link-anti-view-all-capabilities" className="anti-view-all">View All Capabilities <ChevronRight size={16} /></Link>
        </div>
        <div className="anti-industrial-grid">
          {antiIndustrial.map(([title, copy, Icon]) => <article key={title} className="anti-industrial-card">
            <Icon size={26} className="text-[#0e46b0]" strokeWidth={2} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="anti-outcomes" aria-labelledby="anti-outcomes-title">
      <div className="container-tight anti-outcomes-inner">
        <h2 id="anti-outcomes-title">Unmatched Business Outcomes</h2>
        <p className="anti-outcomes-sub">Realize immediate ROI through revenue protection and enhanced consumer confidence.</p>
        <div className="anti-outcome-grid">
          {antiOutcomes.map(([title, copy, Icon]) => <article key={title} className="anti-outcome">
            <span className="anti-outcome-icon"><Icon size={18} strokeWidth={2} /></span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="anti-monitor" aria-labelledby="anti-monitor-title">
      <div className="container-tight anti-monitor-inner">
        <div>
          <p className="anti-monitor-pill"><ChartNoAxesCombined size={14} strokeWidth={2.2} />LIVE MONITORING</p>
          <h2 id="anti-monitor-title">Counterfeit Intelligence Dashboard</h2>
          <p className="anti-monitor-copy">The Central Fortress command center provides a global view of your product's lifecycle. Monitor scans in real-time, identify geographical anomalies, and deploy rapid enforcement actions when counterfeits are detected.</p>
          <div className="anti-monitor-list">
            {antiMonitorPoints.map(point => <p key={point} className="anti-monitor-item"><CircleCheck size={20} strokeWidth={2} />{point}</p>)}
          </div>
        </div>
        <div className="anti-monitor-art">
          <img src={`${root}solution-crops/anti-counterfeiting-dashboard.png`} alt="FORTRESS Anti-Counterfeiting Intelligence dashboard: 247 high-priority suspicious alerts including fake pharma blisters in Asia, counterfeit electronics in Europe, illicit apparel in South America and unauthorized components in North America; a global risk heatmap flagging Shanghai high activity, Dubai emerging hub and Mexico City moderate risk; verification activity totalling 45.2M verifications up 12% with 42.1M successful and 3.1M failed; and recent events covering a counterfeit shipment seized in Port of Hamburg, a new fake product listing on a major e-commerce platform, law enforcement action in Shenzhen, China, and high volume of failed scans reported in Southeast Asia" />
        </div>
      </div>
    </section>

    <section className="anti-cta" aria-labelledby="anti-cta-title">
      <div className="container-tight anti-cta-inner">
        <h2 id="anti-cta-title">Ready to Stop Counterfeit Products?</h2>
        <p>Join the world's leading brands in securing their supply chain with TracelyTag Industrial Systems.</p>
        <div className="anti-cta-actions">
          <Link href="/contact-us" data-testid="button-anti-book-demo" className="anti-btn anti-cta-primary">Book a Demo</Link>
          <Link href="/contact-us" data-testid="button-anti-contact-sales" className="anti-btn anti-cta-ghost">Contact Sales</Link>
        </div>
      </div>
    </section>
  </Shell>;
}

const apsFeatures: [string, string, LucideIcon][] = [
  ['Garment Authentication', 'Instant verification at any point in the supply chain or retail floor.', ShieldCheck],
  ['Digital Product Passport', 'Comprehensive lifecycle data and sustainability proof for every item.', IdCard],
  ['Supply Chain Visibility', 'Real-time tracking from textile manufacturing to final delivery.', Eye],
  ['Connected Experience', 'Direct post-purchase engagement and personalized brand loyalty.', UsersRound],
];
const apsChallenges: [string, string, LucideIcon][] = [
  ['Counterfeit fashion products', 'Billions lost annually to high-quality clones damaging brand equity.', TriangleAlert],
  ['Limited supply chain visibility', 'Fragmented data across global manufacturing partners and logistics providers.', EyeOff],
  ['Sustainability expectations', 'Growing regulatory and consumer demand for circularity and traceability.', Leaf],
];
const apsWhy: [string, LucideIcon][] = [
  ['Garment Authentication', BadgeCheck],
  ['Connected Packaging', QrCode],
  ['Digital Passport', ClipboardCheck],
  ['Consumer Engagement', ChartNoAxesCombined],
  ['Supply Chain Visibility', Waypoints],
  ['Business Intelligence', ChartColumnBig],
];
const apsJourney = ['Manufacturing', 'Fabric Label Printing', 'Garment Production', 'Warehouse', 'Retail Store', 'Customer Scan', 'Digital Product Experience'];
const apsPlatformItems: [string, string][] = [
  ['Production Status', 'blue'],
  ['Authentication Requests', 'red'],
  ['Garment Tracking', 'brown'],
  ['Retail Verification', 'gray'],
  ['Consumer Engagement', 'blue'],
];
const apsBenefits: [string, string, LucideIcon][] = [
  ['Protect Brand Reputation', "Defend your brand's integrity and value by ensuring only genuine products reach your customers.", BadgeCheck],
  ['Eliminate Counterfeit Products', 'Implement uncopiable digital identities that make counterfeiting garments economically impossible.', Ban],
  ['Increase Consumer Trust', 'Provide absolute transparency and proof of authenticity to build deep, lasting customer relationships.', Handshake],
  ['Improve Supply Chain Visibility', 'Gain granular insights into product movement, stock levels, and potential bottlenecks globally.', ScanSearch],
  ['Deliver Connected Experiences', 'Turn every physical garment into a digital portal for storytelling, circularity, and loyalty programs.', TabletSmartphone],
  ['Generate Product Intelligence', 'Access real-time data on how, where, and when your products are being interacted with by consumers.', ChartScatter],
];

function ApparelClothing() {
  return <Shell>
    <section className="aps-hero" aria-labelledby="aps-hero-title">
      <div className="container-tight aps-hero-inner">
        <div className="fade-up">
          <p className="aps-pill"><CircleCheck size={14} strokeWidth={2} />ENTERPRISE APPAREL SOLUTION</p>
          <h1 id="aps-hero-title" className="aps-h1">Protect Every Garment with <span>Digital Product Identity</span></h1>
          <p className="aps-hero-copy">Help apparel brands authenticate products, eliminate counterfeit garments, enable digital product passports, improve supply chain visibility and create connected customer experiences through secure QR-powered digital identities.</p>
          <div className="aps-hero-actions">
            <Link href="/contact-us" data-testid="button-aps-book-demo-hero" className="aps-btn aps-btn-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-aps-talk-expert" className="aps-btn aps-btn-ghost">Talk to an Expert</Link>
          </div>
        </div>
        <div className="aps-hero-art fade-up delay-1">
          <img src={`${root}solution-crops/apparel-clothing-hero-full.png`} alt="Apparel digital product identity network: garment manufacturing and robotic production lines feeding a TracelyTag analytics dashboard, QR label printing and inspection, warehouse storage, delivery trucks and a retail store where a shopper scans a garment tag with a smartphone" />
        </div>
      </div>
    </section>

    <section className="aps-features" aria-label="Apparel solution capabilities">
      <div className="container-tight aps-feature-grid">
        {apsFeatures.map(([title, copy, Icon]) => <article key={title} className="aps-feature-card">
          <Icon size={26} className="text-[#0e46b0]" strokeWidth={2} />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="aps-challenges" aria-labelledby="aps-challenges-title">
      <div className="container-tight aps-challenges-inner">
        <div>
          <h2 id="aps-challenges-title" className="aps-challenges-title">Apparel Industry Challenges</h2>
          <div className="aps-challenge-list">
            {apsChallenges.map(([title, copy, Icon]) => <div key={title} className="aps-challenge">
              <span className="aps-challenge-icon"><Icon size={18} strokeWidth={2} /></span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>)}
          </div>
        </div>
        <div className="aps-panel">
          <h2>Why Apparel Brands Choose TracelyTag</h2>
          <ul className="aps-panel-list">
            {apsWhy.map(([label, Icon]) => <li key={label}><Icon size={18} strokeWidth={2} />{label}</li>)}
          </ul>
          <p className="aps-panel-quote">"TracelyTag has redefined our approach to brand protection, turning every label into a secure communication channel."</p>
        </div>
      </div>
    </section>

    <section className="aps-journey" aria-labelledby="aps-journey-title">
      <div className="container-tight aps-journey-inner">
        <h2 id="aps-journey-title">End-to-End Garment Journey</h2>
        <p className="aps-journey-sub">Trace every fiber from creation to closet</p>
        <ol className="aps-journey-grid">
          {apsJourney.map((label, index) => <li key={label} className="aps-journey-step">
            <span className={`aps-journey-num${index === apsJourney.length - 1 ? ' is-last' : ''}`}>{index + 1}</span>
            <p>{label}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="aps-platform" aria-labelledby="aps-platform-title">
      <div className="container-tight">
        <div className="aps-platform-card">
          <div>
            <h2 id="aps-platform-title">Enterprise Intelligence Platform</h2>
            <ul className="aps-platform-list">
              {apsPlatformItems.map(([label, tone]) => <li key={label}><span className={`aps-dot is-${tone}`} />{label}</li>)}
            </ul>
          </div>
          <div className="aps-platform-art">
            <img src={`${root}solution-crops/apparel-clothing-dashboard.png`} alt="Apparel Enterprise Solutions premium dashboard: production status bars for garment batches 01 to 05 with a Start Verification action; a world map of authentication requests showing successful scans and alert scans; garment tracking from factories through to retail stores; and retail verification, consumer engagement and business analytics charts with 80% growth and 20% market intelligence" />
          </div>
        </div>
      </div>
    </section>

    <section className="aps-benefits" aria-labelledby="aps-benefits-title">
      <div className="container-tight aps-benefits-inner">
        <h2 id="aps-benefits-title">Business Benefits</h2>
        <p className="aps-benefits-sub">Quantifiable impact for global fashion enterprises</p>
        <div className="aps-benefit-grid">
          {apsBenefits.map(([title, copy, Icon]) => <article key={title} className="aps-benefit-card">
            <Icon size={26} className="text-[#0e46b0]" strokeWidth={2} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="aps-cta" aria-labelledby="aps-cta-title">
      <div className="container-tight">
        <div className="aps-cta-card">
          <h2 id="aps-cta-title">Ready to Digitize Every Garment?</h2>
          <p>Join the world's leading apparel brands in creating a more secure, transparent, and connected fashion future.</p>
          <div className="aps-cta-actions">
            <Link href="/contact-us" data-testid="button-aps-book-demo" className="aps-btn aps-cta-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-aps-contact-sales" className="aps-btn aps-cta-ghost">Contact Sales</Link>
          </div>
        </div>
      </div>
    </section>
  </Shell>;
}

const dwarFeatures: [string, string, LucideIcon][] = [
  ['Instant Registration', 'One-click activation directly from the product packaging.', PencilLine],
  ['Digital Warranty', 'Secure, immutable digital certificates stored on the cloud.', Award],
  ['Faster Claims', 'Streamlined submission and approval workflows for users.', Gauge],
  ['Customer Experience', 'Unified portal for all warranty and service history needs.', Smile],
];
const dwarProblems: [string, string, LucideIcon][] = [
  ['Paper warranty cards are easily lost', 'Customers struggle to maintain physical proof of purchase over years.', TriangleAlert],
  ['Manual registration is inefficient', 'Lengthy forms lead to low registration rates and dirty customer data.', Ban],
  ['Slow warranty claims', 'Manual verification processes cause delays and customer frustration.', Gauge],
];
const dwarModern = ['One Scan Registration', 'Digital Certificate', 'Online Claim Submission', 'Service History', 'Customer Notifications', 'Warranty Analytics'];
const dwarSteps: [string, string][] = [
  ['Generate QR', 'Secure encrypted QR generation.'],
  ['Print on Product', 'Industrial grade printing integration.'],
  ['Consumer Scan', 'App-free mobile interaction.'],
  ['Registration', 'Instant user data capture.'],
  ['Digital Certificate', 'Automatic proof of ownership.'],
  ['Claim Submission', 'Digital ticket generation.'],
  ['Approval & Service', 'Automated verification flow.'],
];
const dwarAdvanced: [string, string, LucideIcon][] = [
  ['Digital Registration', 'Simplified mobile-first registration process that captures high-quality customer data in seconds.', Pointer],
  ['Warranty Certificate', 'Automated generation of secure, PDF-based digital warranty certificates with unique hash verification.', FileCheck],
  ['Claim Management', 'Centralized ticketing system for processing, verifying, and managing warranty claims efficiently.', ClipboardList],
  ['Customer Notifications', 'Automated SMS and Email triggers for warranty expiry, claim updates, and renewal offers.', BellRing],
  ['Service History', 'Transparent log of all repairs, replacements, and maintenance events linked to the digital ID.', History],
  ['Warranty Analytics', 'Deep insights into product failure rates, claim trends, and customer demographics.', ChartScatter],
];
const dwarBenefits: [string, string, LucideIcon][] = [
  ['Better Customer Experience', 'Remove friction from the after-sales journey to build brand loyalty.', Smile],
  ['Faster Claim Processing', 'Reduce manual verification time by up to 70% with automated validation.', Gauge],
  ['Reduced Fraud', 'Eliminate fake claims with unforgeable digital identities for every product.', ShieldUser],
  ['Lower Support Costs', 'Deflect common warranty queries to automated self-service portals.', PiggyBank],
  ['Higher Product Registration', 'Experience registration rates of 50%+ compared to industry standard 5%.', PencilLine],
  ['Better Warranty Insights', 'Identify manufacturing defects earlier with real-time field data.', ChartNoAxesCombined],
];

function DigitalWarranty() {
  return <Shell>
    <section className="dwar-hero" aria-labelledby="dwar-hero-title">
      <div className="container-tight dwar-hero-inner">
        <div className="fade-up">
          <p className="dwar-pill"><BadgeCheck size={14} strokeWidth={2} />ENTERPRISE SOLUTION</p>
          <h1 id="dwar-hero-title" className="dwar-h1">Simplify Warranty Registration with <span>One Secure Scan</span></h1>
          <p className="dwar-hero-copy">Replace paper warranty cards with secure digital warranties. Enable instant product registration, faster claim processing, improved customer experience and complete warranty lifecycle management through secure QR-based authentication.</p>
          <div className="dwar-hero-actions">
            <Link href="/contact-us" data-testid="button-dwar-book-demo-hero" className="dwar-btn dwar-btn-primary">Book a Demo</Link>
            <Link href="/platform" data-testid="button-dwar-explore-platform" className="dwar-btn dwar-btn-ghost">Explore Platform</Link>
          </div>
        </div>
        <div className="dwar-hero-art fade-up delay-1">
          <img src={`${root}about-hero-diagram.png`} alt="TracelyTag warranty ecosystem: secure QR code generation and industrial printing in a smart manufacturing plant, product authentication checkpoints, a centralized enterprise analytics dashboard, global track and trace logistics, and consumer engagement via mobile scans" />
        </div>
      </div>
    </section>

    <section className="dwar-features" aria-label="Digital warranty capabilities">
      <div className="container-tight dwar-feature-grid">
        {dwarFeatures.map(([title, copy, Icon]) => <article key={title} className="dwar-feature-card">
          <Icon size={24} className="text-[#0e3f9e]" strokeWidth={2} />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="dwar-challenge" aria-labelledby="dwar-challenge-title">
      <div className="container-tight dwar-challenge-inner">
        <div>
          <h2 id="dwar-challenge-title" className="dwar-challenge-title">The Challenge with Legacy Systems</h2>
          <p className="dwar-challenge-copy">Traditional paper-based systems are inefficient and prone to errors. TracelyTag digitizes your warranty process, solving critical pain points for both brands and consumers.</p>
          <div className="dwar-problem-list">
            {dwarProblems.map(([title, copy, Icon]) => <div key={title} className="dwar-problem">
              <Icon size={18} strokeWidth={2} />
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>)}
          </div>
        </div>
        <div className="dwar-panel">
          <h2>Modern Warranty Experience</h2>
          <ul className="dwar-panel-list">
            {dwarModern.map(item => <li key={item}><CircleCheck size={18} strokeWidth={2} />{item}</li>)}
          </ul>
          <p className="dwar-panel-note">Powered by TracelyTag's secure industrial authentication engine for 100% data integrity.</p>
        </div>
      </div>
    </section>

    <section className="dwar-works" aria-labelledby="dwar-works-title">
      <div className="container-tight dwar-works-inner">
        <h2 id="dwar-works-title">How Digital Warranty Works</h2>
        <p className="dwar-works-sub">A seamless end-to-end lifecycle from manufacturing to after-sales service.</p>
        <ol className="dwar-step-grid">
          {dwarSteps.map(([title, copy], index) => <li key={title} className="dwar-step">
            <span className="dwar-step-num">{index + 1}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="dwar-advanced" aria-labelledby="dwar-advanced-title">
      <div className="container-tight dwar-advanced-inner">
        <div className="dwar-advanced-head">
          <div>
            <h2 id="dwar-advanced-title">Advanced Features</h2>
            <p>Tools designed for large-scale industrial warranty management.</p>
          </div>
          <Link href="/platform" data-testid="link-dwar-view-documentation" className="dwar-doc-link">View Documentation <ArrowRight size={16} /></Link>
        </div>
        <div className="dwar-advanced-grid">
          {dwarAdvanced.map(([title, copy, Icon]) => <article key={title} className="dwar-advanced-card">
            <span className="dwar-advanced-icon"><Icon size={20} strokeWidth={2} /></span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="dwar-benefits" aria-labelledby="dwar-benefits-title">
      <div className="container-tight dwar-benefits-inner">
        <h2 id="dwar-benefits-title">Strategic Business Benefits</h2>
        <p className="dwar-benefits-sub">Quantifiable impact on your bottom line and operations.</p>
        <div className="dwar-benefit-grid">
          {dwarBenefits.map(([title, copy, Icon]) => <article key={title} className="dwar-benefit-card">
            <span className="dwar-benefit-icon"><Icon size={18} strokeWidth={2} /></span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="dwar-control" aria-labelledby="dwar-control-title">
      <div className="container-tight">
        <div className="dwar-control-card">
          <h2 id="dwar-control-title">Powerful Control Center</h2>
          <p>Command and control your entire warranty infrastructure from a single pane of glass. Monitor registrations, claims, and product performance in real-time.</p>
          <div className="dwar-control-art">
            <img src={`${root}about-dashboard-monitor.png`} alt="TracelyTag control centre dashboard on a desktop monitor: connected products at 12.5M total global count, authentication activity with a 99.8% scan success rate and 4,500 real-time scans per minute, supply chain visibility with 92% on-time shipment tracking, consumer engagement interaction trends, business intelligence showing +15% ROI year over year and an 88/100 efficiency score, and platform health with 99.99% system uptime and secure status" />
          </div>
        </div>
      </div>
    </section>

    <section className="dwar-cta" aria-labelledby="dwar-cta-title">
      <div className="container-tight dwar-cta-inner">
        <h2 id="dwar-cta-title">Ready to Modernize Your Warranty Experience?</h2>
        <p>Join leading industrial brands using TracelyTag to digitize their after-sales operations and secure their global supply chains.</p>
        <div className="dwar-cta-actions">
          <Link href="/contact-us" data-testid="button-dwar-book-demo" className="dwar-btn dwar-cta-primary">Book a Demo</Link>
          <Link href="/contact-us" data-testid="button-dwar-contact-sales" className="dwar-btn dwar-cta-ghost">Contact Sales</Link>
        </div>
      </div>
    </section>
  </Shell>;
}

const ppaPillars: [string, LucideIcon][] = [
  ['Secure Digital Identity', Fingerprint],
  ['Instant Verification', Gauge],
  ['Consumer Trust', Heart],
  ['Brand Protection', Shield],
];
const ppaRisks: [string, string, LucideIcon][] = [
  ['Revenue Loss', 'Untracked counterfeit sales directly impact your bottom line and market share.', TrendingDown],
  ['Brand Damage', 'Low-quality replicas tarnish brand prestige and consumer perception.', Frown],
  ['Supply Chain Risk', 'Unauthorized leaks and grey market activities disrupt distribution channels.', TriangleAlert],
  ['Liability Exposure', 'Safety risks from fakes can lead to legal challenges and regulatory fines.', Gavel],
];
const ppaWorkflow: [string, string, LucideIcon][] = [
  ['Generate QR', 'Unique encrypted codes for each item.', QrCode],
  ['Print on Product', 'Seamless integration into packaging lines.', Printer],
  ['Consumer Scan', 'No app required, works via mobile browser.', ScanLine],
  ['Verification Engine', 'Cloud-based cryptographic check.', CodeXml],
  ['Result', 'Real-time "Authentic" or "Suspicious" alert.', CircleCheck],
  ['Analytics', 'Data captured on dashboard instantly.', ChartNoAxesCombined],
];
const ppaFeatures: [string, string, LucideIcon][] = [
  ['Secure QR Generation', 'High-density secure identifiers that are impossible to duplicate or reverse-engineer, using proprietary cryptographic layers.', LockKeyhole],
  ['Unique Product Identity', 'Serialize every individual unit with its own digital twin for granular end-to-end tracking and lifecycle management.', Database],
  ['Mobile Verification', 'Branded web experience that connects consumers directly with your official brand story without requiring third-party apps.', Smartphone],
  ['Verification Engine', 'Global low-latency API infrastructure capable of handling millions of concurrent scans with sub-second response times.', Waypoints],
  ['Authentication Analytics', 'Geospatial heatmaps showing where your products are being verified globally, helping identify suspicious patterns.', ChartColumnBig],
  ['GS1 Ready Support', 'Full compliance with international standards for digital link and supply chain data exchange (EPCIS/GS1).', Box],
];
const ppaValue: [string, string][] = [
  ['Protect Revenue', 'Recover lost sales by shutting down illicit distribution channels and grey market activities.'],
  ['Consumer Trust', 'Prove authenticity instantly at the point of sale to build lasting brand loyalty and preference.'],
  ['Reduce Fakes', 'De-incentivize counterfeiters with robust, uncopiable technology that makes fakes easy to spot.'],
  ['Real-Time Insights', 'See scan data as it happens anywhere in the world, enabling agile supply chain responses.'],
  ['Global Scalability', 'Deploy across millions of units without performance degradation, supported by industrial SLAs.'],
  ['Enterprise Security', 'SOC2 compliant data handling and cryptographic key management for mission-critical reliability.'],
];

function PremiumProductAuthentication() {
  return <Shell>
    <section className="ppa-hero" aria-labelledby="ppa-hero-title">
      <div className="container-tight ppa-hero-inner">
        <div className="fade-up">
          <p className="ppa-pill"><BadgeCheck size={14} strokeWidth={2.2} />ENTERPRISE GRADE SECURITY</p>
          <h1 id="ppa-hero-title" className="ppa-h1">Product Authentication</h1>
          <p className="ppa-hero-copy">Protect every product with a secure digital identity that enables instant authentication, strengthens consumer trust, and helps combat counterfeit products across the supply chain.</p>
          <div className="ppa-hero-actions">
            <Link href="/contact-us" data-testid="button-ppa-book-demo-hero" className="ppa-btn ppa-btn-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-ppa-talk-expert" className="ppa-btn ppa-btn-ghost">Talk to an Expert</Link>
          </div>
        </div>
        <div className="ppa-hero-art fade-up delay-1">
          <img src={`${root}solution-crops/anti-counterfeiting-hero-full.png`} alt="Product authentication in practice: a shopper scans the secure QR code on a genuine TracelyTag product to verify it through the cloud verification engine and brand protection shield, while real-time analytics flag a counterfeit package on the adjacent shelf" />
        </div>
      </div>
    </section>

    <section className="ppa-pillars" aria-label="Product authentication pillars">
      <div className="container-tight ppa-pillar-grid">
        {ppaPillars.map(([label, Icon]) => <div key={label} className="ppa-pillar">
          <span className="ppa-pillar-icon"><Icon size={20} strokeWidth={2} /></span>
          <p>{label}</p>
        </div>)}
      </div>
    </section>

    <section className="ppa-challenge" aria-labelledby="ppa-challenge-title">
      <div className="container-tight ppa-challenge-inner">
        <h2 id="ppa-challenge-title" className="ppa-challenge-title">The Counterfeit Challenge</h2>
        <p className="ppa-challenge-copy">Counterfeiting costs global brands billions annually. Traditional security measures are no longer enough to protect your reputation and revenue.</p>
        <div className="ppa-challenge-body">
          <div className="ppa-challenge-art">
            <img src={`${root}solution-crops/product-authentication-counterfeit-map.png`} alt="Isometric world map of a compromised supply chain: goods move from manufacturing through logistics, warehouse, distributor and Retailer A, while red alerts mark broken trust, financial loss, unauthorized branch shipments and counterfeit goods entering the channel" />
          </div>
          <div className="ppa-risk-grid">
            {ppaRisks.map(([title, copy, Icon]) => <div key={title} className="ppa-risk">
              <span className="ppa-risk-icon"><Icon size={18} strokeWidth={2} /></span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="ppa-flow" aria-labelledby="ppa-flow-title">
      <div className="container-tight ppa-flow-inner">
        <p className="ppa-eyebrow">WORKFLOW</p>
        <h2 id="ppa-flow-title">How Authentication Works</h2>
        <ol className="ppa-flow-grid">
          {ppaWorkflow.map(([title, copy, Icon], index) => <li key={title} className="ppa-flow-step">
            <span className="ppa-flow-num">{index + 1}</span>
            <span className="ppa-flow-icon"><Icon size={26} strokeWidth={2} /></span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="ppa-features" aria-labelledby="ppa-features-title">
      <div className="container-tight ppa-features-inner">
        <h2 id="ppa-features-title" className="ppa-section-label">Advanced Features</h2>
        <div className="ppa-feature-grid">
          {ppaFeatures.map(([title, copy, Icon]) => <article key={title} className="ppa-feature-card">
            <span className="ppa-feature-icon"><Icon size={20} strokeWidth={2} /></span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="ppa-value" aria-labelledby="ppa-value-title">
      <div className="container-tight ppa-value-inner">
        <div className="ppa-value-head">
          <div>
            <h2 id="ppa-value-title" className="ppa-section-label">Enterprise Value</h2>
            <p className="ppa-value-copy">Beyond security, Product Authentication unlocks new levels of operational efficiency and consumer insights across your global value chain.</p>
          </div>
          <Link href="/contact-us" data-testid="button-ppa-roi-calculator" className="ppa-btn ppa-btn-primary ppa-roi">View ROI Calculator</Link>
        </div>
        <div className="ppa-value-grid">
          {ppaValue.map(([title, copy]) => <article key={title} className="ppa-value-card">
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="ppa-intel" aria-labelledby="ppa-intel-title">
      <div className="container-tight ppa-intel-inner">
        <h2 id="ppa-intel-title" className="ppa-section-label">Enterprise Authentication Intelligence</h2>
        <p className="ppa-intel-copy">Monitor scan activity, detect anomalies, and manage product lifecycles through a single, powerful administrative interface designed for scale.</p>
        <div className="ppa-intel-art">
          <img src={`${root}solution-crops/anti-counterfeiting-dashboard.png`} alt="Authentication intelligence dashboard: 247 high-priority suspicious alerts across Asia, Europe, South America and North America; a global risk heatmap flagging Shanghai, Dubai and Mexico City; verification activity of 45.2M scans up 12% with 42.1M successful and 3.1M failed; and a recent events feed covering seizures, fake listings and law-enforcement action" />
        </div>
      </div>
    </section>

    <section className="ppa-cta" aria-labelledby="ppa-cta-title">
      <div className="container-tight">
        <div className="ppa-cta-card">
          <h2 id="ppa-cta-title">Ready to Protect Every Product?</h2>
          <p>Join the world's most trusted brands using TracelyTag to secure their global supply chains and empower their consumers.</p>
          <div className="ppa-cta-actions">
            <Link href="/contact-us" data-testid="button-ppa-book-demo" className="ppa-btn ppa-cta-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-ppa-contact-sales" className="ppa-btn ppa-cta-ghost">Contact Sales</Link>
          </div>
        </div>
      </div>
    </section>
  </Shell>;
}

const scvFeatures: [string, string, LucideIcon][] = [
  ['End-to-End Visibility', 'Complete lifecycle tracking from raw materials to final consumer delivery.', Waypoints],
  ['Warehouse Tracking', 'Real-time location data for inventory within high-tech industrial facilities.', Archive],
  ['Logistics Monitoring', 'Global shipment tracking with precise geolocation and arrival prediction.', Truck],
  ['Supply Chain Intelligence', 'Advanced analytics to optimize flow and reduce operational friction.', ChartNoAxesCombined],
];
const scvProblems: [string, string, LucideIcon, string][] = [
  ['Limited shipment visibility', 'Blind spots in transit leading to reactive logistics management.', CircleAlert, 'is-red'],
  ['Inventory blind spots', 'Lack of real-time counts across distributed warehouse networks.', Ban, 'is-slate'],
];
const scvBullets = [
  'Delayed deliveries and missed SLAs',
  'Manual tracking through Excel and emails',
  'Poor operational visibility for stakeholders',
  'Slow issue resolution due to data siloes',
];
const scvConnected: [string, string][] = [
  ['Live inventory visibility', 'Automated SKU tracking across all nodes.'],
  ['Warehouse monitoring', 'Smart racking and dock status tracking.'],
  ['Shipment tracking', 'GPS-integrated freight monitoring.'],
  ['Distribution insights', 'Predictive routing and optimization.'],
  ['Retail visibility', 'In-store stock and shelf availability.'],
  ['Operational intelligence', 'Executive dashboards for decision making.'],
];
const scvFlow: [string, string, LucideIcon][] = [
  ['Manufacturing', 'Batch Creation', Factory],
  ['Packaging', 'Unit Tagging', Package],
  ['Warehouse', 'Stock Mgmt', Warehouse],
  ['Distribution', 'Freight Flow', Truck],
  ['Retail', 'Shelf Visibility', Store],
  ['Consumer', 'Verification', CircleUserRound],
  ['Analytics', 'Optimization', ChartColumnBig],
];
const scvCapabilities: [string, string, LucideIcon][] = [
  ['Shipment Tracking', 'Real-time global transit status with automated geo-fencing alerts.', RouteIcon],
  ['Inventory Monitoring', 'Live stock levels with predictive re-ordering triggers.', ScanBarcode],
];
const scvCapabilitiesRow: [string, string, LucideIcon][] = [
  ['Distribution Intelligence', 'Network optimization maps identifying bottlenecks.', Waypoints],
  ['Retail Visibility', 'Shelf-level insights and automated point-of-sale audits.', ShoppingBasket],
  ['Supply Chain Analytics', 'BI-integrated reports for C-suite decision making.', ChartNoAxesCombined],
];
const scvImpact: [string, string, LucideIcon][] = [
  ['Complete Product Visibility', 'Eliminate "black holes" in the supply chain with persistent tracking.', BadgeCheck],
  ['Improved Inventory Accuracy', 'Reduce discrepancies between physical stock and digital records.', ChartLine],
  ['Faster Deliveries', 'Streamline transit routes and reduce idle time at port or warehouse.', Gauge],
  ['Reduced Operational Costs', 'Minimize shrinkage and eliminate manual auditing labor.', Banknote],
  ['Better Decision Making', 'Data-driven forecasts based on real-world movement patterns.', BrainCog],
  ['Supply Chain Optimization', 'Continuous improvement through granular efficiency analysis.', Cog],
];

function SupplyChainVisibility() {
  return <Shell>
    <section className="scv-hero" aria-labelledby="scv-hero-title">
      <div className="container-tight scv-hero-inner">
        <div className="fade-up">
          <p className="scv-pill"><Eye size={14} strokeWidth={2.2} />SUPPLY CHAIN VISIBILITY</p>
          <h1 id="scv-hero-title" className="scv-h1">Gain Complete Visibility Across Your Supply Chain</h1>
          <p className="scv-hero-copy">Monitor products from manufacturing to distribution with end-to-end supply chain visibility. Track inventory movement, warehouse operations, shipments and product locations through one intelligent platform.</p>
          <div className="scv-hero-actions">
            <Link href="/contact-us" data-testid="button-scv-book-demo-hero" className="scv-btn scv-btn-primary">Book a Demo</Link>
            <Link href="/platform" data-testid="button-scv-explore-platform" className="scv-btn scv-btn-ghost">Explore Platform</Link>
          </div>
        </div>
        <div className="scv-hero-art fade-up delay-1">
          <img src={`${root}solution-crops/supply-chain-visibility-hero-full.png`} alt="Connected supply chain diagram: manufacturing, high-tech warehouse, distribution centre and retail stores linked by secure data flow lanes to a central TracelyTag control tower, with real-time tracking and end-to-end visibility markers around the loop" />
        </div>
      </div>
    </section>

    <section className="scv-features" aria-label="Supply chain visibility capabilities">
      <div className="container-tight scv-feature-grid">
        {scvFeatures.map(([title, copy, Icon]) => <article key={title} className="scv-feature-card">
          <Icon size={22} strokeWidth={2} className="text-[#1152d6]" />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="scv-why" aria-labelledby="scv-why-title">
      <div className="container-tight scv-why-inner">
        <div>
          <h2 id="scv-why-title" className="scv-why-title">Why Supply Chain Visibility Matters</h2>
          <div className="scv-problem-list">
            {scvProblems.map(([title, copy, Icon, tone]) => <div key={title} className={`scv-problem ${tone}`}>
              <Icon size={18} strokeWidth={2} />
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>)}
          </div>
          <ul className="scv-bullets">
            {scvBullets.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="scv-panel">
          <h2>Connected Supply Chain</h2>
          <div className="scv-panel-grid">
            {scvConnected.map(([title, copy]) => <div key={title}>
              <CircleCheck size={20} strokeWidth={2} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="scv-flow" aria-labelledby="scv-flow-title">
      <div className="container-tight scv-flow-inner">
        <h2 id="scv-flow-title">Integrated Supply Chain Flow</h2>
        <p className="scv-flow-sub">Unified visibility across every stage of your industrial ecosystem.</p>
        <ol className="scv-flow-grid">
          {scvFlow.map(([title, sub, Icon], index) => <li key={title} className="scv-flow-step">
            <span className={`scv-flow-icon${index === scvFlow.length - 1 ? ' is-last' : ''}`}><Icon size={20} strokeWidth={2} /></span>
            <h3>{title}</h3>
            <p>{sub}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="scv-caps" aria-labelledby="scv-caps-title">
      <div className="container-tight scv-caps-inner">
        <h2 id="scv-caps-title" className="scv-caps-title">Platform Capabilities</h2>
        <div className="scv-caps-grid">
          <article className="scv-cap-feature">
            <Bot size={24} strokeWidth={2} className="text-[#1152d6]" />
            <h3>Warehouse Visibility</h3>
            <p>Track assets across multi-story facilities with sub-meter precision using IoT-enabled tagging.</p>
            <div className="scv-stats">
              <div className="scv-stat"><span className="scv-stat-value">99.9%</span><span className="scv-stat-label">ACCURACY</span></div>
              <div className="scv-stat"><span className="scv-stat-value">&lt;1s</span><span className="scv-stat-label">LATENCY</span></div>
            </div>
          </article>
          <div className="scv-cap-side">
            {scvCapabilities.map(([title, copy, Icon]) => <article key={title} className="scv-cap-card">
              <Icon size={20} strokeWidth={2} className="text-[#1152d6]" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>)}
          </div>
          {scvCapabilitiesRow.map(([title, copy, Icon]) => <article key={title} className="scv-cap-card">
            <Icon size={20} strokeWidth={2} className="text-[#1152d6]" />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="scv-impact" aria-labelledby="scv-impact-title">
      <div className="container-tight scv-impact-inner">
        <h2 id="scv-impact-title">Measurable Business Impact</h2>
        <p className="scv-impact-sub">Transforming logistics into a strategic competitive advantage.</p>
        <div className="scv-impact-grid">
          {scvImpact.map(([title, copy, Icon]) => <div key={title} className="scv-impact-item">
            <span className="scv-impact-icon"><Icon size={20} strokeWidth={2} /></span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </div>)}
        </div>
      </div>
    </section>

    <section className="scv-command" aria-labelledby="scv-command-title">
      <div className="container-tight">
        <div className="scv-command-card">
          <h2 id="scv-command-title">Command Center Control</h2>
          <p>A unified dashboard designed for industrial scale and precision.</p>
          <div className="scv-command-art">
            <img src={`${root}solution-crops/supply-chain-visibility-dashboard.png`} alt="Supply Chain Visibility dashboard on a desktop monitor: warehouse status with 75% loading dock occupancy across four docks, inventory levels for raw materials, WIP and finished goods, shipment tracking from factory to port to retail marked delivered, a global distribution map, supply chain KPIs including 92% efficiency and 99.5% accuracy, and operational analytics for order fulfilment rate and cycle time" />
          </div>
        </div>
      </div>
    </section>

    <section className="scv-cta" aria-labelledby="scv-cta-title">
      <div className="container-tight scv-cta-inner">
        <h2 id="scv-cta-title">Ready to Gain Complete Supply Chain Visibility?</h2>
        <p>Join leading industrial enterprises using TracelyTag to secure and monitor their global logistics operations in real-time.</p>
        <div className="scv-cta-actions">
          <Link href="/contact-us" data-testid="button-scv-book-demo" className="scv-btn scv-cta-primary">Book a Demo</Link>
          <Link href="/contact-us" data-testid="button-scv-contact-sales" className="scv-btn scv-cta-ghost">Contact Sales</Link>
        </div>
      </div>
    </section>
  </Shell>;
}

const cdpPillars: [string, string, LucideIcon][] = [
  ['Unified Customer Profiles', 'Aggregate identity data across all touchpoints into a single source of truth.', IdCard],
  ['360° Customer View', 'Understand the complete journey from initial scan to repeat purchase.', Eye],
  ['First-Party Data', 'Collect clean, consented data directly from product authentications.', ShieldCheck],
  ['Actionable Insights', 'Turn raw interaction data into targeted segments and marketing triggers.', ChartNoAxesCombined],
];
const cdpEngageCards: [string, string, LucideIcon][] = [
  ['Consumer Engagement', 'Build direct digital bridges between physical products and buyers.', UsersRound],
  ['Personalized Experiences', 'Dynamic content tailored to consumer behavior and scanning context.', Sparkles],
  ['Product Registration', 'Streamline warranty and registration workflows with a single tap.', UserRoundCheck],
  ['Customer Insights', 'Transform scan data into actionable marketing intelligence.', ChartNoAxesCombined],
];
const cdpSilos: [string, string][] = [
  ['Data Fragmentation', 'Customer information scattered across multiple siloed ERP and CRM systems.'],
  ['Anonymous Interactivity', 'Products are sold, but the identity of the end consumer remains unknown.'],
  ['Lack of Personalization', 'Generic marketing campaigns that fail to address specific user needs or behaviors.'],
  ['Poor Intelligence', 'Limited ability to perform high-fidelity audience segmentation and predictive modeling.'],
];
const cdpIntelligence: [string, LucideIcon][] = [
  ['Centralized customer profiles', ArrowRightLeft],
  ['First-party data collection', BadgeCheck],
  ['Real-time profile updates', History],
  ['Audience segmentation', UsersRound],
  ['Personalized engagement', Pointer],
];
const cdpPainPoints = [
  'Zero direct communication with consumers after purchase.',
  'Fragmented or non-existent consumer behavioral data.',
  'Low retention due to generic post-purchase workflows.',
  'Missed opportunities for cross-selling and up-selling.',
];
const cdpConnectedExperience: [string, LucideIcon][] = [
  ['Personalized Landing Pages', PanelsTopLeft],
  ['Instant Product Info', Info],
  ['Feedback Collection', MessageSquareText],
  ['Promotions & Offers', Tag],
  ['Product Registration', IdCard],
  ['Customer Support', Headset],
];
const cdpLifecycle: [string, string, LucideIcon][] = [
  ['Consumer Scan', 'Identity capture starts at the product scan', ScanQrCode],
  ['Authentication', 'Validation of product and user intent', ShieldCheck],
  ['Profile Creation', 'Mapping interaction to a unique ID', UserRoundPlus],
  ['Data Collection', 'Telemetry and behavioral ingestion', Server],
  ['Segmentation', 'Clustering based on rich attributes', Shapes],
  ['Personalization', 'Tailored content and offers delivered', WandSparkles],
  ['Analytics', 'Closing the loop with ROI measurement', ChartColumnBig],
];
const cdpEngageSteps = ['Consumer Scan', 'Authentication', 'Personalized Experience', 'Offers & Rewards', 'Analytics Dashboard'];
const cdpCapabilities: [string, string, LucideIcon][] = [
  ['Customer Profiles', 'Unified views that combine offline hardware scans with online digital interactions.', User],
  ['Audience Segmentation', 'Dynamically group customers by location, product type, scan frequency, and behavior.', UsersRound],
  ['First-Party Collection', 'Compliant data gathering directly from your own physical product ecosystem.', CloudDownload],
  ['Behavior Tracking', 'Monitor real-time engagement patterns across the entire product lifecycle.', ChartNoAxesCombined],
  ['Customer Intelligence', 'Predictive modeling to identify high-value users and churn risks automatically.', BrainCog],
  ['CDP Analytics', 'Comprehensive dashboarding for cross-functional visibility into customer metrics.', ChartColumn],
];
const cdpAdvanced: [string, string, LucideIcon][] = [
  ['Personalized Landing Pages', 'Design and deploy high-converting landing pages tailored to specific product batches or consumer segments.', PanelTop],
  ['Product Registration', 'Automated registration workflows that sync directly with your CRM and warranty management systems.', SquarePen],
  ['Feedback Collection', 'Capture voice-of-the-customer data at the point of product usage through interactive surveys and ratings.', MessageSquarePlus],
  ['Campaign Management', 'Schedule and rotate seasonal campaigns, limited-time offers, and brand stories across your product fleet.', Megaphone],
  ['Customer Insights', 'Anonymized tracking of consumer location, device usage, and scanning patterns to refine marketing strategies.', Search],
  ['Engagement Analytics', 'Full-funnel visualization of the scan-to-action journey with real-time conversion monitoring.', ChartNoAxesCombined],
];
const cdpOutcomes: [string, string][] = [
  ['Increase Customer Understanding', 'Gain deep qualitative insights into how your products are used post-sale.'],
  ['Better Audience Segmentation', 'Improve targeting accuracy with precise, real-world behavioral triggers.'],
  ['Higher Personalization', 'Deliver hyper-relevant messaging that converts at a significantly higher rate.'],
  ['Improved Marketing ROI', 'Optimize ad spend by reaching the exact users currently engaging with products.'],
  ['Better Customer Retention', 'Increase LTV by staying connected and resolving issues before they arise.'],
  ['Data-Driven Decisions', 'Replace guesswork with hard data collected from billions of interaction points.'],
];
const cdpBenefits: [string, string, LucideIcon][] = [
  ['Higher Customer Engagement', 'Increase interaction rates by 40% through accessible, value-driven digital experiences.', TrendingUp],
  ['Better Customer Experience', 'Reduce friction for support and info access, boosting brand perception.', Smile],
  ['Increased Brand Loyalty', 'Nurture long-term advocates through personalized rewards and direct recognition.', Gem],
  ['Actionable Consumer Insights', 'Gather first-party data to optimize product development and targeting.', Microscope],
  ['Higher Repeat Purchases', 'Drive recurring revenue with context-aware offers at the perfect lifecycle moment.', ShoppingCart],
  ['Stronger Brand Relationships', 'Own the narrative by communicating directly with your end-user.', Handshake],
];
const cdpDashboardBullets = [
  'Real-time global heatmaps of consumer activity.',
  'Deep funnel analytics for scan-to-registration.',
  'Cohort analysis by demographic and product type.',
];

function CustomerDataPlatform() {
  return <Shell>
    <section className="cdp-hero" aria-labelledby="cdp-hero-title">
      <div className="container-tight cdp-hero-inner">
        <div className="fade-up">
          <p className="cdp-pill"><Database size={13} strokeWidth={2.2} />ENTERPRISE INDUSTRIAL CDP</p>
          <h1 id="cdp-hero-title" className="cdp-h1">Build a Unified Customer Data Platform</h1>
          <p className="cdp-hero-copy">Collect, unify and activate customer data from every authenticated product interaction. Build a complete customer profile to power personalized engagement, marketing automation and business intelligence.</p>
          <div className="cdp-hero-actions">
            <Link href="/contact-us" data-testid="button-cdp-book-demo-hero" className="cdp-btn cdp-btn-primary">Book a Demo</Link>
            <Link href="/platform" data-testid="button-cdp-explore-platform-hero" className="cdp-btn cdp-btn-ghost">Explore Platform</Link>
          </div>
        </div>
        <div className="cdp-hero-art fade-up delay-1">
          <img src={`${root}solution-crops/cdp-hero-full.png`} alt="Customer Data Platform Solution home screen: packages moving along scanning conveyors with operators capturing scan data, feeding a unified customer profile core that powers customer journey insights, real-time data integration, segmentation and activation, and a global data network" />
        </div>
      </div>
    </section>

    <section className="cdp-pillars" aria-label="Customer data platform pillars">
      <div className="container-tight cdp-pillar-grid">
        {cdpPillars.map(([title, copy, Icon]) => <article key={title} className="cdp-pillar-card">
          <Icon size={22} strokeWidth={2} className="text-[#0e3f9e]" />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="cdp-scan" aria-labelledby="cdp-scan-title">
      <div className="container-tight cdp-scan-inner">
        <div className="fade-up">
          <p className="cdp-pill is-soft">ENTERPRISE SOLUTION</p>
          <h2 id="cdp-scan-title" className="cdp-h1">Turn Every Product Scan into a Consumer Relationship</h2>
          <p className="cdp-hero-copy">Connect directly with your consumers through every product scan. Deliver personalized experiences, product information, campaigns, rewards, support and valuable engagement insights from a single secure QR code.</p>
          <div className="cdp-hero-actions">
            <Link href="/contact-us" data-testid="button-cdp-book-demo-scan" className="cdp-btn cdp-btn-primary">Book a Demo</Link>
            <Link href="/platform" data-testid="button-cdp-explore-platform-scan" className="cdp-btn cdp-btn-ghost">Explore Platform</Link>
          </div>
        </div>
        <div className="cdp-hero-art fade-up delay-1">
          <img src={`${root}solution-crops/consumer-engagement-hero-full.png`} alt="A consumer scans the secure QR code on a TracelyTag product box with a phone, branching out to a personalized product page, an analytics dashboard, offers and promotions, product registration and customer feedback" />
        </div>
      </div>
    </section>

    <section className="cdp-engage-cards" aria-label="Consumer engagement capabilities">
      <div className="container-tight cdp-pillar-grid">
        {cdpEngageCards.map(([title, copy, Icon]) => <article key={title} className="cdp-pillar-card">
          <span className="cdp-tile"><Icon size={20} strokeWidth={2} /></span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="cdp-silos" aria-labelledby="cdp-silos-title">
      <div className="container-tight cdp-silos-inner">
        <div>
          <h2 id="cdp-silos-title" className="cdp-h2">Breaking Down Industrial Data Silos</h2>
          <div className="cdp-silo-list">
            {cdpSilos.map(([title, copy]) => <div key={title} className="cdp-silo">
              <CircleX size={18} strokeWidth={2} />
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>)}
          </div>
        </div>
        <div className="cdp-panel">
          <h2>Unified Customer Intelligence</h2>
          <ul className="cdp-panel-list">
            {cdpIntelligence.map(([label, Icon]) => <li key={label}><Icon size={18} strokeWidth={2} />{label}</li>)}
          </ul>
        </div>
      </div>
    </section>

    <section className="cdp-why" aria-labelledby="cdp-why-title">
      <div className="container-tight cdp-why-inner">
        <div>
          <h2 id="cdp-why-title" className="cdp-h2">Why Consumer Engagement?</h2>
          <p className="cdp-why-copy">Most brands lose visibility the moment a product leaves the retail shelf. TracelyTag bridges this gap, solving critical enterprise pain points:</p>
          <ul className="cdp-pain-list">
            {cdpPainPoints.map(item => <li key={item}><CircleX size={17} strokeWidth={2} />{item}</li>)}
          </ul>
        </div>
        <div className="cdp-experience-card">
          <h3 className="cdp-experience-title"><Waypoints size={18} strokeWidth={2} />Connected Consumer Experience</h3>
          <div className="cdp-experience-grid">
            {cdpConnectedExperience.map(([label, Icon]) => <div key={label}><Icon size={18} strokeWidth={2} /><span>{label}</span></div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="cdp-lifecycle" aria-labelledby="cdp-lifecycle-title">
      <div className="container-tight cdp-lifecycle-inner">
        <h2 id="cdp-lifecycle-title" className="cdp-h2 is-center">The Customer Data Lifecycle</h2>
        <p className="cdp-center-sub">See how product interactions translate into rich customer insights through our automated data pipeline.</p>
        <ol className="cdp-lifecycle-grid">
          {cdpLifecycle.map(([title, copy, Icon]) => <li key={title} className="cdp-lifecycle-step">
            <span className="cdp-lifecycle-icon"><Icon size={22} strokeWidth={2} /></span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="cdp-works" aria-labelledby="cdp-works-title">
      <div className="container-tight cdp-works-inner">
        <h2 id="cdp-works-title" className="cdp-h2 is-center">How Consumer Engagement Works</h2>
        <p className="cdp-center-sub">A seamless end-to-end journey from the physical scan to the digital dashboard.</p>
        <ol className="cdp-works-grid">
          {cdpEngageSteps.map((label, index) => <li key={label} className="cdp-works-step">
            <span className="cdp-works-num">{index + 1}</span>
            <p>{label}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="cdp-caps" aria-labelledby="cdp-caps-title">
      <div className="container-tight cdp-caps-inner">
        <h2 id="cdp-caps-title" className="cdp-h2">Powerful Core Capabilities</h2>
        <p className="cdp-caps-sub">The tools you need to master your customer relationships at scale.</p>
        <div className="cdp-card-grid">
          {cdpCapabilities.map(([title, copy, Icon]) => <article key={title} className="cdp-cap-card">
            <span className="cdp-tile"><Icon size={20} strokeWidth={2} /></span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="cdp-advanced" aria-labelledby="cdp-advanced-title">
      <div className="container-tight cdp-advanced-inner">
        <h2 id="cdp-advanced-title" className="cdp-h2">Advanced Features</h2>
        <div className="cdp-card-grid">
          {cdpAdvanced.map(([title, copy, Icon]) => <article key={title} className="cdp-adv-card">
            <Icon size={22} strokeWidth={2} className="text-[#0e3f9e]" />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="cdp-workspace" aria-labelledby="cdp-workspace-title">
      <div className="container-tight cdp-workspace-inner">
        <h2 id="cdp-workspace-title" className="cdp-h2 is-center">Complete Control in One Workspace</h2>
        <p className="cdp-center-sub">Manage your entire customer database through a clean, industrial-grade interface.</p>
        <div className="cdp-workspace-art">
          <img src={`${root}solution-crops/cdp-workspace.png`} alt="Customer Data Platform (CDP) overview for Q3 2023 on a desktop monitor in an office: a customer journey map from awareness to advocacy with 32% drop-offs and 45% conversion, daily active users totalling 158K, a behavioural heatmap by page, feature and time of day, an audience segments overview, and a searchable customer profiles table with segment, LTV and last-active columns" />
        </div>
        <div className="cdp-outcome-grid">
          {cdpOutcomes.map(([title, copy]) => <div key={title} className="cdp-outcome">
            <span className="cdp-outcome-icon"><CheckCheck size={17} strokeWidth={2.2} /></span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </div>)}
        </div>
      </div>
    </section>

    <section className="cdp-benefits" aria-labelledby="cdp-benefits-title">
      <div className="container-tight cdp-benefits-inner">
        <h2 id="cdp-benefits-title" className="cdp-h2 is-center">Quantifiable Business Benefits</h2>
        <div className="cdp-benefit-grid">
          {cdpBenefits.map(([title, copy, Icon]) => <div key={title} className="cdp-benefit">
            <h3><Icon size={18} strokeWidth={2} />{title}</h3>
            <p>{copy}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="cdp-dashboard" aria-labelledby="cdp-dashboard-title">
      <div className="container-tight cdp-dashboard-inner">
        <div>
          <h2 id="cdp-dashboard-title" className="cdp-h2">Consumer Engagement Dashboard</h2>
          <p className="cdp-dashboard-copy">Visualize the entire customer journey in high definition. Our enterprise dashboard provides real-time visibility into geographic scan patterns, engagement conversion rates, and campaign performance across all product lines.</p>
          <ul className="cdp-dashboard-bullets">
            {cdpDashboardBullets.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="cdp-dashboard-art">
          <img src={`${root}solution-crops/consumer-engagement-dashboard.png`} alt="Consumer Engagement Intelligence dashboard: total consumer scans trending up 1.33%, active users of 5.2K daily, 32.8K weekly and 145K monthly, a 68% high engagement rate gauge, the scan to app to interact to purchase to share customer journey, campaign performance by funnel stage, and a geographic insights world map" />
        </div>
      </div>
    </section>

    <section className="cdp-cta-band" aria-labelledby="cdp-cta-band-title">
      <div className="container-tight cdp-cta-band-inner">
        <h2 id="cdp-cta-band-title">Ready to Build Stronger Consumer Relationships?</h2>
        <p>Join leading global brands using TracelyTag to bridge the gap between physical products and digital engagement.</p>
        <div className="cdp-cta-actions">
          <Link href="/contact-us" data-testid="button-cdp-book-demo-band" className="cdp-btn cdp-cta-primary">Book a Demo</Link>
          <Link href="/contact-us" data-testid="button-cdp-contact-sales-band" className="cdp-btn cdp-cta-ghost">Contact Sales</Link>
        </div>
      </div>
    </section>

    <section className="cdp-cta" aria-labelledby="cdp-cta-title">
      <div className="container-tight">
        <div className="cdp-cta-card">
          <h2 id="cdp-cta-title">Ready to Build a Unified Customer View?</h2>
          <p>Join hundreds of enterprise brands using TracelyTag to bridge the gap between physical products and digital intelligence.</p>
          <div className="cdp-cta-actions">
            <Link href="/contact-us" data-testid="button-cdp-book-demo" className="cdp-btn cdp-cta-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-cdp-contact-sales" className="cdp-btn cdp-cta-ghost">Contact Sales</Link>
          </div>
        </div>
      </div>
    </section>
  </Shell>;
}

const tntFeatures: [string, string, LucideIcon][] = [
  ['End-to-End Visibility', 'Real-time tracking from the factory floor to the final customer scan.', Eye],
  ['Product Journey', 'Immutable digital trail documenting every touchpoint in the lifecycle.', Shuffle],
  ['Supply Chain Intelligence', 'Actionable data insights to optimize logistics and reduce waste.', ChartNoAxesCombined],
  ['Global Traceability', 'Seamless cross-border monitoring for international trade compliance.', Globe],
];
const tntChallenges: [string, string, LucideIcon][] = [
  ['Limited Visibility', 'No real-time location data once products leave the factory.', EyeOff],
  ['Manual Tracking', 'Error-prone paper logs and siloed spreadsheets.', ClipboardPaste],
  ['Lost Inventory', 'High shrinkage rates due to poor warehouse monitoring.', Archive],
  ['Product Recalls', 'Slow and expensive recall processes for unsafe batches.', TriangleAlert],
];
const tntImpact: [string, string][] = [
  ['Supply Chain Inefficiencies', '42% Cost Leakage'],
  ['Compliance Gaps', 'Critical Risk'],
];
const tntWorkflow: [string, string][] = [
  ['Generate QR', 'Unique ID creation'],
  ['Serialize', 'Item-level marking'],
  ['Aggregate', 'Cases & pallets'],
  ['Warehouse', 'Inbound logging'],
  ['Distribution', 'Shipment monitor'],
  ['Retail', 'On-shelf status'],
  ['Consumer', 'Auth scan'],
  ['Analytics', 'Data insights'],
];
const tntAdvanced: [string, string, LucideIcon][] = [
  ['Secure Serialization', 'Tamper-proof unique identifiers assigned to each unit at the point of production.', Hash],
  ['Aggregation', 'Map individual items to boxes and pallets for fast bulk scanning and logistics.', Layers],
  ['Warehouse Tracking', 'Manage inbound/outbound flow with high-speed automated data capture.', ChartColumnBig],
  ['Distribution Monitoring', 'Trace product movement through various distribution centers worldwide.', Truck],
  ['Mobile Verification', 'App-less authentication for consumers to verify product origin in seconds.', Smartphone],
  ['Analytics Dashboard', 'Unified view of your entire supply chain performance and health.', Grid2x2Plus],
];
const tntBenefits: [string, string, LucideIcon][] = [
  ['Complete Visibility', 'Eliminate blind spots and know exactly where every product is at any given moment.', CircleCheck],
  ['Faster Product Recalls', 'Isolate problematic batches in minutes instead of weeks, protecting consumers.', Asterisk],
  ['Better Inventory Control', 'Optimize stock levels and reduce overstock or stockouts across your network.', ClipboardCheck],
  ['Improved Compliance', 'Meet global regulatory requirements (e.g., DSCSA) with automated reporting.', Gavel],
  ['Supply Chain Transparency', 'Build brand trust by proving provenance and ethical sourcing to customers.', Handshake],
  ['Operational Efficiency', 'Reduce manual labor and errors through automated scan-to-cloud workflows.', TrendingUp],
];

function TrackAndTrace() {
  return <Shell>
    <section className="tnt-hero" aria-labelledby="tnt-hero-title">
      <div className="container-tight tnt-hero-inner">
        <div className="fade-up">
          <p className="tnt-pill"><BadgeCheck size={14} strokeWidth={2.2} />ENTERPRISE SOLUTION</p>
          <h1 id="tnt-hero-title" className="tnt-h1">Track Every Product Across the Supply Chain</h1>
          <p className="tnt-hero-copy">Gain complete visibility into your products from manufacturing to the end consumer with secure serialization, aggregation, QR-based tracking and real-time supply chain insights.</p>
          <div className="tnt-hero-actions">
            <Link href="/contact-us" data-testid="button-tnt-book-demo-hero" className="tnt-btn tnt-btn-primary">Book a Demo <ArrowRight size={16} /></Link>
            <Link href="/platform" data-testid="button-tnt-explore-platform" className="tnt-btn tnt-btn-ghost">Explore Platform</Link>
          </div>
        </div>
        <div className="tnt-hero-art fade-up delay-1">
          <img src={`${root}solution-crops/track-and-trace-hero-full.png`} alt="TracelyTag track and trace map: a manufacturing plant with serialization and QR code printing feeds product aggregation and case packing, then warehouse storage, inventory management and a distribution centre, on to retail stores with on-shelf availability and POS data, logistics and transport and shipment tracking, all reporting into the TracelyTag analytics hub while a consumer scans a code on a phone for mobile verification" />
        </div>
      </div>
    </section>

    <section className="tnt-features" aria-label="Track and trace capabilities">
      <div className="container-tight tnt-feature-grid">
        {tntFeatures.map(([title, copy, Icon]) => <article key={title} className="tnt-feature-card">
          <Icon size={24} strokeWidth={2} className="text-[#0e3f9e]" />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="tnt-challenge" aria-labelledby="tnt-challenge-title">
      <div className="container-tight tnt-challenge-inner">
        <div>
          <h2 id="tnt-challenge-title" className="tnt-h2">The Visibility Challenge</h2>
          <p className="tnt-challenge-copy">Traditional supply chains often operate in the dark, leading to critical blind spots that affect profitability and brand trust.</p>
          <div className="tnt-challenge-grid">
            {tntChallenges.map(([title, copy, Icon]) => <div key={title} className="tnt-challenge-item">
              <span className="tnt-challenge-icon"><Icon size={18} strokeWidth={2} /></span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>)}
          </div>
        </div>
        <div className="tnt-impact-card">
          <p className="tnt-impact-label"><span className="tnt-impact-dot" />INDUSTRY IMPACT</p>
          <div className="tnt-impact-list">
            {tntImpact.map(([label, value], index) => <div key={label} className="tnt-impact-row">
              <div className="tnt-impact-head">
                <h3>{label}</h3>
                <span>{value}</span>
              </div>
              <span className="tnt-impact-bar"><span style={{ width: index === 0 ? '42%' : '75%' }} /></span>
            </div>)}
          </div>
          <blockquote className="tnt-quote">"Without granular tracking, companies lose billions in counterfeiting and logistics errors every year."</blockquote>
          <p className="tnt-quote-source">— Global Logistics Review</p>
        </div>
      </div>
    </section>

    <section className="tnt-works" aria-labelledby="tnt-works-title">
      <div className="container-tight tnt-works-inner">
        <h2 id="tnt-works-title" className="tnt-h2 is-center">How Track &amp; Trace Works</h2>
        <p className="tnt-center-sub">Our seamless workflow connects physical goods with digital intelligence at every stage.</p>
        <ol className="tnt-works-grid">
          {tntWorkflow.map(([title, sub], index) => <li key={title} className="tnt-works-step">
            <span className="tnt-works-num">{index + 1}</span>
            <h3>{title}</h3>
            <p>{sub}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="tnt-advanced" aria-labelledby="tnt-advanced-title">
      <div className="container-tight tnt-advanced-inner">
        <h2 id="tnt-advanced-title" className="tnt-h2">Advanced Features</h2>
        <p className="tnt-advanced-sub">Cutting-edge technology for precise tracking.</p>
        <div className="tnt-advanced-grid">
          {tntAdvanced.map(([title, copy, Icon]) => <article key={title} className="tnt-advanced-card">
            <Icon size={22} strokeWidth={2} className="text-[#0e3f9e]" />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="tnt-benefits" aria-labelledby="tnt-benefits-title">
      <div className="container-tight tnt-benefits-inner">
        <h2 id="tnt-benefits-title" className="tnt-h2 is-center">Business Benefits</h2>
        <p className="tnt-center-sub">Driving ROI through digital transformation.</p>
        <div className="tnt-benefit-grid">
          {tntBenefits.map(([title, copy, Icon]) => <div key={title} className="tnt-benefit">
            <Icon size={20} strokeWidth={2} />
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </div>)}
        </div>
      </div>
    </section>

    <section className="tnt-dash" aria-labelledby="tnt-dash-title">
      <div className="container-tight tnt-dash-inner">
        <h2 id="tnt-dash-title" className="tnt-h2 is-center">Supply Chain Intelligence</h2>
        <p className="tnt-center-sub">Gain real-time visibility with our comprehensive Track &amp; Trace dashboard.</p>
        <div className="tnt-dash-art">
          <img src={`${root}solution-crops/track-and-trace-dashboard.png`} alt="Track &amp; Trace Intelligence Platform on a desktop monitor: a product journey timeline from manufacturing in Shanghai through in-transit, ocean freight, customs clearance and retail delivery; warehouse status gauges for Shanghai Hub 85% at 1,200 items, Los Angeles DC 60% at 4,500 items, Rotterdam Facility 45% at 2,100 items and Singapore Warehouse 72% at 3,000 items; a global distribution map with 114 active shipments, 185 on time and 29 delayed; an inventory overview of stock by category and stock value; and supply chain analytics with delivery performance, lead time trends, 1,500 total shipments, 14.2 days average transit time and $5.50 cost per unit" />
        </div>
      </div>
    </section>

    <section className="tnt-cta" aria-labelledby="tnt-cta-title">
      <div className="container-tight tnt-cta-inner">
        <h2 id="tnt-cta-title">Ready to Track Every Product?</h2>
        <p>Join global leaders using TracelyTag to secure their supply chain and protect their brand.</p>
        <div className="tnt-cta-actions">
          <Link href="/contact-us" data-testid="button-tnt-book-demo" className="tnt-btn tnt-cta-primary">Book a Demo</Link>
          <Link href="/contact-us" data-testid="button-tnt-contact-sales" className="tnt-btn tnt-cta-ghost">Contact Sales</Link>
        </div>
      </div>
    </section>
  </Shell>;
}

const vfePills: [string, LucideIcon][] = [
  ['Instant Verification', ShieldCheck],
  ['Secure Authentication', ShieldPlus],
  ['Real-Time Validation', RefreshCw],
  ['Enterprise Security', ShieldEllipsis],
];
const vfeReasons: [string, string, LucideIcon][] = [
  ['Counterfeit products', 'Prevent revenue loss from fake goods entering your supply chain.', CircleAlert],
  ['Fake QR codes', 'Defend against sophisticated duplication and phishing attempts.', QrCode],
  ['Consumer uncertainty', 'Build trust by giving customers immediate proof of authenticity.', CircleQuestionMark],
  ['Manual verification', 'Replace slow, error-prone manual processes with automation.', UserRoundCog],
  ['Weak product security', 'Bolster perimeter defenses at the individual unit level.', LockKeyholeOpen],
  ['Brand reputation risks', 'Minimize long-term damage from counterfeit quality issues.', ShieldAlert],
];
const vfePanelItems = ['Instant verification', 'Secure QR validation', 'Authentication logic', 'Product identity lookup', 'Verification history', 'Enterprise-grade security'];
const vfeLifecycle: [string, LucideIcon][] = [
  ['Consumer Scan', Smartphone],
  ['QR Validation', ScanQrCode],
  ['Product Identity', Database],
  ['Verification Engine', Cpu],
  ['Result Render', ClipboardCheck],
  ['Business Intelligence', ChartNoAxesCombined],
];
const vfeAdvanced: [string, string, LucideIcon][] = [
  ['QR Validation', 'Enterprise-grade validation to detect cloned or manipulated QR structures instantly.', QrCode],
  ['Authentication Engine', 'Proprietary logic mapping scans to unique product DNA for high-fidelity confirmation.', Cog],
  ['Product Identity Lookup', 'Sub-millisecond access to global product registry for real-time authentication.', SearchCheck],
  ['Verification History', 'Comprehensive immutable logs of every verification attempt across the globe.', FileClock],
  ['Fraud Detection Support', 'AI-assisted detection of geographic anomalies and repeat-scan fraud patterns.', ShieldAlert],
  ['Verification Analytics', 'Actionable dashboards detailing authentication rates and regional risk scores.', ChartColumnBig],
];
const vfeBenefits: [string, string, LucideIcon][] = [
  ['Protect Brand Trust', 'Maintain high standards by ensuring only genuine products reach consumers.', BadgeCheck],
  ['Verify Every Product', 'Scalable architecture capable of handling billions of unique identifiers.', Barcode],
  ['Improve Consumer Confidence', 'Differentiate your brand with a visible commitment to security.', ThumbsUp],
  ['Reduce Counterfeit Risk', 'Active defense mechanisms that make counterfeiting unprofitable.', Shield],
  ['Enterprise Security', 'End-to-end encryption for all data transit and verification requests.', LockKeyhole],
  ['Better Business Insights', 'Convert scan data into geographic and behavioral market intelligence.', ScanSearch],
];

function VerificationEngine() {
  return <Shell>
    <section className="vfe-hero" aria-labelledby="vfe-hero-title">
      <div className="container-tight vfe-hero-inner">
        <div className="fade-up">
          <h1 id="vfe-hero-title" className="vfe-h1">Verify Every Product with a <span>Secure Verification Engine</span></h1>
          <p className="vfe-hero-copy">Instantly verify product authenticity using TracelyTag's enterprise verification engine. Authenticate every scan, validate secure product identities and provide trusted verification results for consumers, partners and supply chain stakeholders.</p>
          <div className="vfe-hero-actions">
            <Link href="/contact-us" data-testid="button-vfe-book-demo-hero" className="vfe-btn vfe-btn-primary">Book a Demo</Link>
            <Link href="/platform" data-testid="button-vfe-view-platform" className="vfe-btn vfe-btn-ghost">View Platform</Link>
          </div>
        </div>
        <div className="vfe-hero-art fade-up delay-1">
          <img src={`${root}solution-crops/verification-engine-hero-full.png`} alt="TracelyTag Verification Engine diagram: a secure QR code and mobile scan feed a cloud verification engine backed by a product authenticity database with data encryption, real-time verification and a traceability chain, returning a Genuine Product result on a phone while a suspicious product raises a tampered or counterfeit alert" />
        </div>
      </div>
    </section>

    <section className="vfe-pills" aria-label="Verification engine highlights">
      <div className="container-tight vfe-pill-grid">
        {vfePills.map(([label, Icon]) => <div key={label} className="vfe-pill-card">
          <Icon size={20} strokeWidth={2} />
          <p>{label}</p>
        </div>)}
      </div>
    </section>

    <section className="vfe-why" aria-labelledby="vfe-why-title">
      <div className="container-tight vfe-why-inner">
        <div>
          <h2 id="vfe-why-title" className="vfe-h2">Why Verification Matters</h2>
          <div className="vfe-reason-grid">
            {vfeReasons.map(([title, copy, Icon]) => <div key={title} className="vfe-reason">
              <Icon size={18} strokeWidth={2} />
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>)}
          </div>
        </div>
        <div className="vfe-panel">
          <h2>Enterprise Verification Engine</h2>
          <ul className="vfe-panel-list">
            {vfePanelItems.map(item => <li key={item}><CircleCheck size={19} strokeWidth={2} />{item}</li>)}
          </ul>
        </div>
      </div>
    </section>

    <section className="vfe-lifecycle" aria-labelledby="vfe-lifecycle-title">
      <div className="container-tight vfe-lifecycle-inner">
        <h2 id="vfe-lifecycle-title" className="vfe-h2 is-center">The Verification Lifecycle</h2>
        <ol className="vfe-lifecycle-grid">
          {vfeLifecycle.map(([label, Icon], index) => <li key={label} className="vfe-lifecycle-step">
            <span className={`vfe-lifecycle-icon${index === 3 ? ' is-active' : ''}`}><Icon size={26} strokeWidth={2} /></span>
            <h3>{label}</h3>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="vfe-advanced" aria-labelledby="vfe-advanced-title">
      <div className="container-tight vfe-advanced-inner">
        <h2 id="vfe-advanced-title" className="vfe-h2 is-center">Advanced Features</h2>
        <div className="vfe-advanced-grid">
          {vfeAdvanced.map(([title, copy, Icon]) => <article key={title} className="vfe-advanced-card">
            <Icon size={22} strokeWidth={2} className="text-[#0e3f9e]" />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="vfe-dash" aria-label="Verification Intelligence Overview dashboard">
      <div className="container-tight vfe-dash-inner">
        <div className="vfe-dash-art">
          <img src={`${root}solution-crops/verification-engine-dashboard.png`} alt="VerifiCore Verification Intelligence Overview for the last 30 days: verification requests at 1.8M daily volume up 14.2% with 61K average requests, 96.5M total successful verifications and a 99.8% verification success rate, a suspicious products table listing 5 high risk items with investigate actions, a global scan locations heatmap, verification trends comparing requests and successes by week, and security analytics showing an operational system at 99.99% uptime with a platform risk score of 14 and a minimal threat level" />
        </div>
      </div>
    </section>

    <section className="vfe-benefits" aria-labelledby="vfe-benefits-title">
      <div className="container-tight vfe-benefits-inner">
        <h2 id="vfe-benefits-title" className="vfe-h2 is-center">Business Benefits</h2>
        <div className="vfe-benefit-grid">
          {vfeBenefits.map(([title, copy, Icon]) => <article key={title} className="vfe-benefit-card">
            <h3><Icon size={18} strokeWidth={2} />{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="vfe-cta" aria-labelledby="vfe-cta-title">
      <div className="container-tight vfe-cta-inner">
        <h2 id="vfe-cta-title">Ready to Verify Every Product with Confidence?</h2>
        <div className="vfe-cta-actions">
          <Link href="/contact-us" data-testid="button-vfe-book-demo" className="vfe-btn vfe-cta-primary">Book a Demo</Link>
          <Link href="/contact-us" data-testid="button-vfe-contact-sales" className="vfe-btn vfe-cta-ghost">Contact Sales</Link>
        </div>
      </div>
    </section>
  </Shell>;
}

const rpaPillars: [string, LucideIcon][] = [
  ['Secure Digital Identity', Fingerprint],
  ['Instant Verification', Gauge],
  ['Consumer Trust', Heart],
  ['Brand Protection', Shield],
];
const rpaRisks: [string, string, LucideIcon][] = [
  ['Revenue Loss', 'Untracked counterfeit sales directly impact your bottom line and market share.', TrendingDown],
  ['Brand Damage', 'Low-quality replicas tarnish brand prestige and consumer perception.', Frown],
  ['Supply Chain Risk', 'Unauthorized leaks and grey market activities disrupt distribution channels.', TriangleAlert],
  ['Liability Exposure', 'Safety risks from fakes can lead to legal challenges and regulatory fines.', Gavel],
];
const rpaWorkflow: [string, string, LucideIcon][] = [
  ['Generate QR', 'Unique encrypted codes for each item.', QrCode],
  ['Print on Product', 'Seamless integration into packaging lines.', Printer],
  ['Consumer Scan', 'No app required, works via mobile browser.', ScanLine],
  ['Verification Engine', 'Cloud-based cryptographic check.', CodeXml],
  ['Result', 'Real-time "Authentic" or "Suspicious" alert.', CircleCheck],
  ['Analytics', 'Data captured on dashboard instantly.', ChartNoAxesCombined],
];
const rpaFeatures: [string, string, LucideIcon][] = [
  ['Secure QR Generation', 'High-density secure identifiers that are impossible to duplicate or reverse-engineer, using proprietary cryptographic layers.', LockKeyhole],
  ['Unique Product Identity', 'Serialize every individual unit with its own digital twin for granular end-to-end tracking and lifecycle management.', Database],
  ['Mobile Verification', 'Branded web experience that connects consumers directly with your official brand story without requiring third-party apps.', Smartphone],
  ['Verification Engine', 'Global low-latency API infrastructure capable of handling millions of concurrent scans with sub-second response times.', Waypoints],
  ['Authentication Analytics', 'Geospatial heatmaps showing where your products are being verified globally, helping identify suspicious patterns.', ChartColumnBig],
  ['GS1 Ready Support', 'Full compliance with international standards for digital link and supply chain data exchange (EPCIS/GS1).', Box],
];
const rpaValue: [string, string][] = [
  ['Protect Revenue', 'Recover lost sales by shutting down illicit distribution channels and grey market activities.'],
  ['Consumer Trust', 'Prove authenticity instantly at the point of sale to build lasting brand loyalty and preference.'],
  ['Reduce Fakes', 'De-incentivize counterfeiters with robust, uncopiable technology that makes fakes easy to spot.'],
  ['Real-Time Insights', 'See scan data as it happens anywhere in the world, enabling agile supply chain responses.'],
  ['Global Scalability', 'Deploy across millions of units without performance degradation, supported by industrial SLAs.'],
  ['Enterprise Security', 'SOC2 compliant data handling and cryptographic key management for mission-critical reliability.'],
];

function RefinedProductAuthentication() {
  return <Shell>
    <section className="rpa-hero" aria-labelledby="rpa-hero-title">
      <div className="container-tight rpa-hero-inner">
        <div className="fade-up">
          <p className="rpa-pill"><BadgeCheck size={14} strokeWidth={2.2} />ENTERPRISE GRADE SECURITY</p>
          <h1 id="rpa-hero-title" className="rpa-h1">Product Authentication</h1>
          <p className="rpa-hero-copy">Protect every product with a secure digital identity that enables instant authentication, strengthens consumer trust, and helps combat counterfeit products across the supply chain.</p>
          <div className="rpa-hero-actions">
            <Link href="/contact-us" data-testid="button-rpa-book-demo-hero" className="rpa-btn rpa-btn-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-rpa-talk-expert" className="rpa-btn rpa-btn-ghost">Talk to an Expert</Link>
          </div>
        </div>
        <div className="rpa-hero-art fade-up delay-1">
          <img src={`${root}solution-crops/anti-counterfeiting-hero-full.png`} alt="Product authentication in practice: a shopper scans the secure QR code on a genuine TracelyTag product to verify it through the cloud verification engine and brand protection shield, while real-time analytics flag a counterfeit package on the adjacent shelf" />
        </div>
      </div>
    </section>

    <section className="rpa-pillars" aria-label="Product authentication pillars">
      <div className="container-tight rpa-pillar-grid">
        {rpaPillars.map(([label, Icon]) => <div key={label} className="rpa-pillar">
          <span className="rpa-pillar-icon"><Icon size={20} strokeWidth={2} /></span>
          <p>{label}</p>
        </div>)}
      </div>
    </section>

    <section className="rpa-challenge" aria-labelledby="rpa-challenge-title">
      <div className="container-tight rpa-challenge-inner">
        <h2 id="rpa-challenge-title" className="rpa-challenge-title">The Counterfeit Challenge</h2>
        <p className="rpa-challenge-copy">Counterfeiting costs global brands billions annually. Traditional security measures are no longer enough to protect your reputation and revenue.</p>
        <div className="rpa-challenge-body">
          <div className="rpa-challenge-art">
            <img src={`${root}solution-crops/product-authentication-counterfeit-map.png`} alt="Isometric world map of a compromised supply chain: goods move from manufacturing through logistics, warehouse, distributor and Retailer A, while red alerts mark broken trust, financial loss, unauthorized branch shipments and counterfeit goods entering the channel" />
          </div>
          <div className="rpa-risk-grid">
            {rpaRisks.map(([title, copy, Icon]) => <div key={title} className="rpa-risk">
              <span className="rpa-risk-icon"><Icon size={18} strokeWidth={2} /></span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="rpa-flow" aria-labelledby="rpa-flow-title">
      <div className="container-tight rpa-flow-inner">
        <p className="rpa-eyebrow">WORKFLOW</p>
        <h2 id="rpa-flow-title">How Authentication Works</h2>
        <ol className="rpa-flow-grid">
          {rpaWorkflow.map(([title, copy, Icon], index) => <li key={title} className="rpa-flow-step">
            <span className="rpa-flow-icon"><Icon size={26} strokeWidth={2} /></span>
            <p className="rpa-flow-step-label">STEP {String(index + 1).padStart(2, '0')}</p>
            <h3>{title}</h3>
            <p>{copy}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="rpa-features" aria-labelledby="rpa-features-title">
      <div className="container-tight rpa-features-inner">
        <h2 id="rpa-features-title" className="rpa-section-label">Advanced Features</h2>
        <div className="rpa-feature-grid">
          {rpaFeatures.map(([title, copy, Icon]) => <article key={title} className="rpa-feature-card">
            <span className="rpa-feature-icon"><Icon size={20} strokeWidth={2} /></span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="rpa-value" aria-labelledby="rpa-value-title">
      <div className="container-tight rpa-value-inner">
        <div className="rpa-value-head">
          <div>
            <h2 id="rpa-value-title" className="rpa-section-label">Enterprise Value</h2>
            <p className="rpa-value-copy">Beyond security, Product Authentication unlocks new levels of operational efficiency and consumer insights across your global value chain.</p>
          </div>
          <Link href="/contact-us" data-testid="button-rpa-roi-calculator" className="rpa-btn rpa-btn-primary rpa-roi">View ROI Calculator</Link>
        </div>
        <div className="rpa-value-grid">
          {rpaValue.map(([title, copy]) => <article key={title} className="rpa-value-card">
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="rpa-intel" aria-labelledby="rpa-intel-title">
      <div className="container-tight rpa-intel-inner">
        <h2 id="rpa-intel-title" className="rpa-section-label">Enterprise Authentication Intelligence</h2>
        <p className="rpa-intel-copy">Monitor scan activity, detect anomalies, and manage product lifecycles through a single, powerful administrative interface designed for scale.</p>
        <div className="rpa-intel-art">
          <img src={`${root}solution-crops/anti-counterfeiting-dashboard.png`} alt="Authentication intelligence dashboard: 247 high-priority suspicious alerts across Asia, Europe, South America and North America; a global risk heatmap flagging Shanghai, Dubai and Mexico City; verification activity of 45.2M scans up 12% with 42.1M successful and 3.1M failed; and a recent events feed covering seizures, fake listings and law-enforcement action" />
        </div>
      </div>
    </section>

    <section className="rpa-cta" aria-labelledby="rpa-cta-title">
      <div className="container-tight">
        <div className="rpa-cta-card">
          <h2 id="rpa-cta-title">Ready to Protect Every Product?</h2>
          <p>Join the world's most trusted brands using TracelyTag to secure their global supply chains and empower their consumers.</p>
          <div className="rpa-cta-actions">
            <Link href="/contact-us" data-testid="button-rpa-book-demo" className="rpa-btn rpa-cta-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-rpa-contact-sales" className="rpa-btn rpa-cta-ghost">Contact Sales</Link>
          </div>
        </div>
      </div>
    </section>
  </Shell>;
}

const aggrCards: [string, LucideIcon][] = [
  ['Parent-Child Mapping', Network],
  ['Packaging Hierarchy', Layers],
  ['Automated Aggregation', RefreshCw],
  ['Enterprise Traceability', BadgeCheck],
];
const aggrProblems = [
  'Manual packaging hierarchy processes lead to errors',
  'No automated parent-child relationship tracking',
  'Difficult, time-consuming product recalls',
  'Poor visibility into real-time warehouse inventory',
  'Slow product tracking through the supply chain',
  'Significant compliance and regulatory challenges',
];
const aggrPanelItems = ['Unit to pallet mapping', 'Parent-child hierarchy', 'Automated aggregation', 'Warehouse visibility', 'Fast product recalls', 'Enterprise scalability'];
const aggrChain: [string, LucideIcon][] = [
  ['Individual Product', Archive],
  ['Bundle', Package],
  ['Carton', ClipboardCheck],
  ['Shipper', Box],
  ['Pallet', Container],
  ['Warehouse', Warehouse],
  ['Analytics', ChartNoAxesCombined],
];
const aggrAdvanced: [string, string, LucideIcon][] = [
  ['Parent-Child Mapping', 'Define complex relational data structures for every packaging layer.', Network],
  ['Automated Aggregation', 'Trigger-based relationship building as products move through lines.', Cog],
  ['Packaging Hierarchy', 'Multi-tier nesting support from unit level to global logistics units.', List],
  ['Warehouse Integration', 'Seamless sync with WMS/ERP systems for real-time inventory updates.', Forklift],
  ['Recall Support', 'Instantly identify every sub-component within a specific pallet or batch.', FileClock],
  ['Aggregation Analytics', 'Deep insights into line efficiency and packaging utilization rates.', ChartColumn],
];
const aggrBenefits: [string, string, LucideIcon][] = [
  ['Complete Product Hierarchy', 'Total transparency from raw units to shipping containers.', Waypoints],
  ['Faster Product Recalls', 'Reduce recall windows from days to minutes with precision data.', Gauge],
  ['Improved Warehouse Efficiency', 'Streamline pick-and-pack workflows with intelligent mapping.', Bot],
  ['Better Inventory Visibility', 'Know exactly what is in every crate, carton, and pallet globally.', Eye],
  ['Regulatory Compliance', 'Meet DSCSA, EU FMD, and global serialization requirements.', Gavel],
  ['Enterprise Scalability', 'Architecture designed to handle billions of parent-child links.', TrendingUp],
];

function CasePalletAggregation() {
  return <Shell>
    <section className="aggr-hero" aria-labelledby="aggr-hero-title">
      <div className="container-tight aggr-hero-inner">
        <div className="fade-up">
          <h1 id="aggr-hero-title" className="aggr-h1">Aggregate Every Product Across Every Packaging Level</h1>
          <p className="aggr-hero-copy">Automatically build parent-child relationships between units, bundles, cartons, shippers and pallets to achieve complete product hierarchy and end-to-end traceability throughout the supply chain.</p>
          <div className="aggr-hero-actions">
            <Link href="/contact-us" data-testid="button-aggr-book-demo-hero" className="aggr-btn aggr-btn-primary">Book a Demo</Link>
            <Link href="/platform" data-testid="button-aggr-view-platform" className="aggr-btn aggr-btn-ghost">View Platform</Link>
          </div>
        </div>
        <div className="aggr-hero-art fade-up delay-1">
          <img src={`${root}solution-crops/aggregation-hero-full.png`} alt="Isometric aggregation flow: individual products are grouped into bundles, then cartons, then TracelyTag shippers, then stacked pallets carried by an autonomous transporter into an automated warehouse, with each level labelled and linked by data arrows" />
        </div>
      </div>
    </section>

    <section className="aggr-cards" aria-label="Aggregation capabilities">
      <div className="container-tight aggr-card-grid">
        {aggrCards.map(([label, Icon]) => <div key={label} className="aggr-card">
          <Icon size={22} strokeWidth={2} />
          <p>{label}</p>
        </div>)}
      </div>
    </section>

    <section className="aggr-why" aria-labelledby="aggr-why-title">
      <div className="container-tight aggr-why-inner">
        <div>
          <h2 id="aggr-why-title" className="aggr-h2">Why Aggregation Matters</h2>
          <ul className="aggr-problem-list">
            {aggrProblems.map(item => <li key={item}><X size={18} strokeWidth={2.5} />{item}</li>)}
          </ul>
        </div>
        <div className="aggr-panel">
          <h2>Smart Product Aggregation</h2>
          <ul className="aggr-panel-grid">
            {aggrPanelItems.map(item => <li key={item}><CircleCheck size={19} strokeWidth={2} />{item}</li>)}
          </ul>
        </div>
      </div>
    </section>

    <section className="aggr-chain" aria-label="Packaging aggregation chain">
      <div className="container-tight aggr-chain-inner">
        <ol className="aggr-chain-grid">
          {aggrChain.map(([label, Icon], index) => <li key={label} className={`aggr-chain-step${index === aggrChain.length - 1 ? ' is-last' : ''}`}>
            <span className="aggr-chain-icon"><Icon size={22} strokeWidth={2} /></span>
            <h3>{label}</h3>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="aggr-advanced" aria-labelledby="aggr-advanced-title">
      <div className="container-tight aggr-advanced-inner">
        <h2 id="aggr-advanced-title" className="aggr-h2">Advanced Features</h2>
        <div className="aggr-advanced-grid">
          {aggrAdvanced.map(([title, copy, Icon]) => <article key={title} className="aggr-advanced-card">
            <Icon size={22} strokeWidth={2} className="text-[#0e3f9e]" />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="aggr-benefits" aria-labelledby="aggr-benefits-title">
      <div className="container-tight aggr-benefits-inner">
        <h2 id="aggr-benefits-title" className="aggr-h2 is-center">Business Benefits</h2>
        <div className="aggr-benefit-grid">
          {aggrBenefits.map(([title, copy, Icon]) => <div key={title} className="aggr-benefit">
            <span className="aggr-benefit-icon"><Icon size={18} strokeWidth={2} /></span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </div>)}
        </div>
      </div>
    </section>

    <section className="aggr-dash" aria-label="Aggregation Intelligence Control Center">
      <div className="container-tight aggr-dash-inner">
        <div className="aggr-dash-art">
          <img src={`${root}solution-crops/aggregation-control-center.png`} alt="Aggregation Intelligence Control Center with Live Sync: Active, a sidebar for Dashboard, Aggregation Jobs, Packaging Hierarchy, Relationships, Pallet Status, Warehouse Mapping and Analytics, and a wall display showing aggregation job progress bars, a packaging hierarchy tree of nested cartons, pallet status cards with location and temperature, warehouse mapping and aggregation analytics for efficiency and throughput" />
        </div>
      </div>
    </section>

    <section className="aggr-cta" aria-labelledby="aggr-cta-title">
      <div className="container-tight aggr-cta-inner">
        <h2 id="aggr-cta-title">Ready to Build Intelligent Product Hierarchies?</h2>
        <p>Join industry leaders using our platform to secure their supply chains and achieve total product visibility.</p>
        <div className="aggr-cta-actions">
          <Link href="/contact-us" data-testid="button-aggr-book-demo" className="aggr-btn aggr-cta-primary">Book a Demo</Link>
          <Link href="/contact-us" data-testid="button-aggr-contact-sales" className="aggr-btn aggr-cta-ghost">Contact Sales</Link>
        </div>
      </div>
    </section>
  </Shell>;
}

const gs1Cards: [string, string, LucideIcon][] = [
  ['GS1 Standards', 'Native alignment with GS1-128 and EPCIS specifications.', Award],
  ['GTIN & SSCC', 'Unified management for item and logistical unit identification.', Barcode],
  ['GS1 DataMatrix', 'High-density 2D barcodes for granular product data.', QrCode],
  ['Global Compliance', 'Adhere to regional regulatory mandates automatically.', ShieldCheck],
];
const gs1Why: [string, string][] = [
  ['Global Interoperability', 'Ensure your products are recognized by every retailer and distributor worldwide through common standards.'],
  ['Regulatory Compliance', 'Meet stringent FDA, EU, and regional traceability laws with automated documentation workflows.'],
  ['Standardized Identification', 'Eliminate ambiguity in your product catalog with unique, globally unique identification numbers.'],
  ['Supply Chain Visibility', 'Gain real-time insights into the location and status of every serialized unit in your network.'],
];
const gs1Support = ['GTIN Management', 'SSCC Generation', 'GS1 DataMatrix Printing', 'Serialization Support', 'Global Standards Validation', 'Enterprise Integration (API)'];
const gs1Workflow = ['Create Product', 'Assign GTIN', 'Generate Serial Number', 'Create GS1 DataMatrix', 'Package & Aggregate', 'Verify', 'Track & Trace'];
const gs1Features: [string, string, LucideIcon][] = [
  ['GTIN Management', 'Centralized repository for all Global Trade Item Numbers with automated uniqueness validation.', Archive],
  ['SSCC Support', 'Dynamic generation of Serial Shipping Container Codes for pallet and case aggregation.', PackageCheck],
  ['GS1 DataMatrix', 'Engineered for high-speed printing and industrial scanning environments.', Grid2x2],
  ['Serialization', 'Mass serialization capabilities capable of handling millions of unique identifiers per minute.', Menu],
  ['Aggregation', 'Hierarchical parent-child linking from individual unit to master pallet.', Network],
  ['Compliance Analytics', 'Real-time dashboards monitoring scan rates and regulatory readiness scores.', ChartColumnBig],
];
const gs1Benefits: [string, string, LucideIcon][] = [
  ['Global Compliance', 'Automatic adherence to over 40+ national pharmaceutical and food safety regulations.', Globe],
  ['Supply Chain Standardization', 'Unified data language reduces friction between manufacturers, wholesalers, and providers.', SlidersVertical],
  ['Faster Integration', 'Rapid onboarding for trading partners with standard GS1 electronic message support.', Gauge],
  ['Regulatory Readiness', 'Be audit-ready 24/7 with comprehensive digital audit trails and EPCIS event logs.', ClipboardCheck],
  ['Enterprise Scalability', 'Cloud-native architecture that grows with your production volume without performance lag.', TrendingUp],
  ['Improved Traceability', 'Locate specific batches or units in seconds to mitigate risk and handle recalls efficiently.', Crosshair],
];

function Gs1StandardsCompliance() {
  return <Shell>
    <section className="gs1-hero" aria-labelledby="gs1-hero-title">
      <div className="container-tight gs1-hero-inner">
        <div className="fade-up">
          <p className="gs1-pill"><span className="gs1-pill-dot" />ENTERPRISE SOLUTION</p>
          <h1 id="gs1-hero-title" className="gs1-h1">Build GS1-Compliant Product Identification at Enterprise Scale</h1>
          <p className="gs1-hero-copy">Implement global GS1 standards for product identification, serialization and traceability. Support GTIN, SSCC, GS1 DataMatrix and standardized product data across your supply chain.</p>
          <div className="gs1-hero-actions">
            <Link href="/contact-us" data-testid="button-gs1-book-demo-hero" className="gs1-btn gs1-btn-primary">Book a Demo</Link>
            <Link href="/platform" data-testid="button-gs1-view-platform" className="gs1-btn gs1-btn-ghost">View Platform</Link>
          </div>
        </div>
        <div className="gs1-hero-art fade-up delay-1">
          <img src={`${root}solution-crops/gs1-compliance-hero-full.png`} alt="TracelyTag GS1 compliance flow: a manufacturing line assigns GTINs, automated serialization servers generate unique IDs, an industrial printer applies GS1 DataMatrix codes to serialized units, and pallets are labelled through SSCC aggregation, all routed through the centralized TracelyTag GS1 verification platform" />
        </div>
      </div>
    </section>

    <section className="gs1-cards" aria-label="GS1 compliance capabilities">
      <div className="container-tight gs1-card-grid">
        {gs1Cards.map(([title, copy, Icon]) => <article key={title} className="gs1-card">
          <Icon size={24} strokeWidth={2} className="text-[#0e3f9e]" />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="gs1-why" aria-labelledby="gs1-why-title">
      <div className="container-tight gs1-why-inner">
        <div>
          <h2 id="gs1-why-title" className="gs1-h2">Why GS1 Compliance Matters</h2>
          <div className="gs1-why-grid">
            {gs1Why.map(([title, copy]) => <div key={title} className="gs1-why-item">
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>)}
          </div>
        </div>
        <div className="gs1-panel">
          <h2>Enterprise GS1 Support</h2>
          <ul className="gs1-panel-list">
            {gs1Support.map(item => <li key={item}><CircleCheck size={19} strokeWidth={2} />{item}</li>)}
          </ul>
        </div>
      </div>
    </section>

    <section className="gs1-flow" aria-labelledby="gs1-flow-title">
      <div className="container-tight gs1-flow-inner">
        <h2 id="gs1-flow-title" className="gs1-h2 is-center">The Serialization Workflow</h2>
        <ol className="gs1-flow-grid">
          {gs1Workflow.map((label, index) => <li key={label} className="gs1-flow-step">
            <span className="gs1-flow-num">{index + 1}</span>
            <h3>{label}</h3>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="gs1-features" aria-labelledby="gs1-features-title">
      <div className="container-tight gs1-features-inner">
        <h2 id="gs1-features-title" className="gs1-h2">Advanced Compliance Features</h2>
        <div className="gs1-feature-grid">
          {gs1Features.map(([title, copy, Icon]) => <article key={title} className="gs1-feature-card">
            <Icon size={22} strokeWidth={2} className="text-[#0e3f9e]" />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="gs1-dash" aria-labelledby="gs1-dash-title">
      <div className="container-tight gs1-dash-inner">
        <div className="gs1-dash-head">
          <div>
            <h2 id="gs1-dash-title" className="gs1-h2">GS1 Compliance Intelligence</h2>
            <p className="gs1-dash-sub">Unified dashboard for global serialization monitoring.</p>
          </div>
          <Link href="/contact-us" data-testid="button-gs1-open-dashboard" className="gs1-btn gs1-btn-primary gs1-dash-cta">Open Dashboard</Link>
        </div>
        <div className="gs1-dash-art">
          <img src={`${root}solution-crops/gs1-compliance-dashboard.png`} alt="GS1 Compliance Intelligence dashboard on a desktop monitor with Dashboard, GTIN Registry, SSCC Management, Serialization, Code Gen and Analytics tabs: a 94% healthy GS1 compliance score gauge, serialization status for batches at 85%, 42% and 100% complete, code generation throughput of 12,000 codes per minute, a GTIN registry table of active Premium Widget entries, SSCC management cards showing units in transit to EU hubs, and a compliance analytics regional readiness world map with EU, NA and APAC readiness callouts" />
        </div>
      </div>
    </section>

    <section className="gs1-benefits" aria-label="GS1 compliance business benefits">
      <div className="container-tight gs1-benefit-grid">
        {gs1Benefits.map(([title, copy, Icon]) => <div key={title} className="gs1-benefit">
          <h3><Icon size={19} strokeWidth={2} />{title}</h3>
          <p>{copy}</p>
        </div>)}
      </div>
    </section>

    <section className="gs1-cta" aria-labelledby="gs1-cta-title">
      <div className="container-tight gs1-cta-inner">
        <h2 id="gs1-cta-title">Ready to Implement GS1 Standards?</h2>
        <p>Join hundreds of global manufacturers who rely on TracelyTag for their serialization and GS1 compliance needs.</p>
        <div className="gs1-cta-actions">
          <Link href="/contact-us" data-testid="button-gs1-book-demo" className="gs1-btn gs1-cta-primary">Book a Demo</Link>
          <Link href="/contact-us" data-testid="button-gs1-contact-sales" className="gs1-btn gs1-cta-ghost">Contact Sales</Link>
        </div>
      </div>
    </section>
  </Shell>;
}

const loyCards: [string, string, LucideIcon][] = [
  ['Loyalty Rewards', 'Instant digital incentives triggered by authentic product interactions.', Tag],
  ['Customer Retention', 'Automated re-engagement campaigns based on scan frequency and geography.', TrendingUp],
  ['Repeat Purchases', 'Personalized coupons and tier-based benefits that drive return customers.', RefreshCw],
  ['Consumer Insights', 'Real-time first-party data capturing every step of the post-purchase journey.', ChartNoAxesCombined],
];
const loyProblems: [string, string][] = [
  ['Low Repeat Purchase Rates', 'Customers lose connection with the brand immediately after the initial checkout.'],
  ['High Acquisition Costs', 'Marketing spend is focused on new customers rather than nurturing high-value regulars.'],
  ['Limited Consumer Insights', 'Third-party retailers hide customer data, leaving brands blind to their actual users.'],
];
const loySolution: [string, LucideIcon][] = [
  ['Reward Points', CircleStar],
  ['Cashback', Banknote],
  ['Referrals', UserRoundPlus],
  ['Membership Tiers', ChartColumn],
  ['Personalized Offers', Megaphone],
  ['Digital Redemption', Ticket],
];
const loyJourney: [string, string, LucideIcon][] = [
  ['Consumer Scan', 'Scan product QR', ScanQrCode],
  ['Authentication', 'Verify product origin', BadgeCheck],
  ['Enrollment', 'Join loyalty program', UserRoundPlus],
  ['Earn', 'Accumulate points', CirclePlus],
  ['Redeem', 'Claim rewards', Gift],
  ['Personalization', 'Tailored campaigns', WandSparkles],
  ['Analytics', 'Actionable data', ChartColumnBig],
];
const loyFeatures: [string, string, LucideIcon][] = [
  ['QR Based Loyalty', 'Secure, encrypted QR codes that serve as a direct portal between physical products and digital rewards.', QrCode],
  ['Reward Engine', 'Configurable logic for points allocation, expiry rules, and multi-action reward triggers.', Cog],
  ['Coupon Management', 'End-to-end lifecycle management of digital coupons from generation to retailer clearing.', Tag],
  ['Referral Programs', 'Viral growth tools that incentivize your best customers to become brand ambassadors.', Share2],
  ['Tier Membership', 'Gamified customer levels that unlock exclusive content, early access, and premium pricing.', CircleStar],
  ['Loyalty Analytics', 'Granular dashboarding of program health, burn rates, and customer lifetime value (CLV).', ChartColumn],
];
const loyRoi: [string, string, LucideIcon][] = [
  ['Increase Repeat Purchases', 'Direct incentives at the moment of product use drive the next purchase decision.', ShoppingCart],
  ['Improve Retention', 'Deepen emotional connection with customers through consistent reward fulfillment.', Users],
  ['Strengthen Loyalty', 'Transform transactional buyers into passionate brand advocates.', HandHeart],
  ['Better Insights', 'Build a proprietary database of consumer behavior and preferences.', Search],
  ['Increase CLV', 'Maximize the revenue potential of every individual customer over time.', ChartColumn],
  ['Marketing Performance', 'Use precision data to optimize ad spend and campaign targeting.', MousePointerClick],
];

function LoyaltyPrograms() {
  return <Shell>
    <section className="loy-hero" aria-labelledby="loy-hero-title">
      <div className="container-tight loy-hero-inner">
        <div className="fade-up">
          <p className="loy-pill">ENTERPRISE LOYALTY INTELLIGENCE</p>
          <h1 id="loy-hero-title" className="loy-h1">Build Customer Loyalty with Every Product Scan</h1>
          <p className="loy-hero-copy">TracelyTag helps brands reward genuine customers, increase repeat purchases, improve retention and build long-term customer relationships through secure QR-powered loyalty programs.</p>
          <div className="loy-hero-actions">
            <Link href="/contact-us" data-testid="button-loy-book-demo-hero" className="loy-btn loy-btn-primary">Book a Demo</Link>
            <Link href="/platform" data-testid="button-loy-explore-platform" className="loy-btn loy-btn-ghost">Explore Platform</Link>
          </div>
        </div>
        <div className="loy-hero-art fade-up delay-1">
          <img src={`${root}solution-crops/consumer-engagement-hero-full.png`} alt="A consumer scans the secure QR code on a TracelyTag product box with a phone, branching out to a personalized product page, an analytics dashboard, offers and promotions, product registration and customer feedback" />
        </div>
      </div>
    </section>

    <section className="loy-cards" aria-label="Loyalty programme capabilities">
      <div className="container-tight loy-card-grid">
        {loyCards.map(([title, copy, Icon]) => <article key={title} className="loy-card">
          <Icon size={24} strokeWidth={2} className="text-[#1152d6]" />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="loy-why" aria-labelledby="loy-why-title">
      <div className="container-tight loy-why-inner">
        <div>
          <h2 id="loy-why-title" className="loy-h2">Modern Brands Face Fragmented Loyalty Channels</h2>
          <div className="loy-problem-list">
            {loyProblems.map(([title, copy]) => <div key={title} className="loy-problem">
              <span className="loy-problem-icon"><TriangleAlert size={17} strokeWidth={2} /></span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>)}
          </div>
        </div>
        <div className="loy-panel">
          <h2><ShieldCheck size={22} strokeWidth={2} />Integrated TracelyTag Solution</h2>
          <ul className="loy-panel-grid">
            {loySolution.map(([label, Icon]) => <li key={label}><Icon size={18} strokeWidth={2} />{label}</li>)}
          </ul>
        </div>
      </div>
    </section>

    <section className="loy-journey" aria-labelledby="loy-journey-title">
      <div className="container-tight loy-journey-inner">
        <h2 id="loy-journey-title" className="loy-h2 is-center">The Seamless Loyalty Journey</h2>
        <p className="loy-center-sub">Connecting physical products to digital rewards in 7 simple steps.</p>
        <ol className="loy-journey-grid">
          {loyJourney.map(([title, sub, Icon], index) => <li key={title} className="loy-journey-step">
            <span className={`loy-journey-icon${index === loyJourney.length - 1 ? ' is-last' : ''}`}><Icon size={20} strokeWidth={2} /></span>
            <h3>{title}</h3>
            <p>{sub}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="loy-features" aria-labelledby="loy-features-title">
      <div className="container-tight loy-features-inner">
        <h2 id="loy-features-title" className="loy-h2 is-center">Enterprise-Grade Feature Set</h2>
        <div className="loy-feature-grid">
          {loyFeatures.map(([title, copy, Icon]) => <article key={title} className="loy-feature-card">
            <span className="loy-feature-icon"><Icon size={20} strokeWidth={2} /></span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="loy-roi" aria-labelledby="loy-roi-title">
      <div className="container-tight loy-roi-inner">
        <h2 id="loy-roi-title" className="loy-h2 is-center">Quantifiable ROI for Your Brand</h2>
        <div className="loy-roi-grid">
          {loyRoi.map(([title, copy, Icon]) => <div key={title} className="loy-roi-item">
            <span className="loy-roi-icon"><Icon size={19} strokeWidth={2} /></span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </div>)}
        </div>
      </div>
    </section>

    <section className="loy-command" aria-labelledby="loy-command-title">
      <div className="container-tight loy-command-inner">
        <h2 id="loy-command-title" className="loy-h2 is-center">Command Center for Customer Engagement</h2>
        <p className="loy-center-sub">Monitor real-time point issuance, campaign performance, and geographic heatmaps to stay ahead of market trends.</p>
        <div className="loy-command-art">
          <img src={`${root}solution-crops/consumer-engagement-dashboard.png`} alt="Consumer Engagement Intelligence dashboard: total consumer scans trending up 1.33%, active users of 5.2K daily, 32.8K weekly and 145K monthly, a 68% high engagement rate gauge, the scan to app to interact to purchase to share customer journey, campaign performance by funnel stage, and a geographic insights world map" />
        </div>
      </div>
    </section>

    <section className="loy-cta" aria-labelledby="loy-cta-title">
      <div className="container-tight loy-cta-inner">
        <h2 id="loy-cta-title">Ready to Build Long-Term Customer Loyalty?</h2>
        <p>Join leading global brands using TracelyTag to bridge the gap between their products and their people.</p>
        <div className="loy-cta-actions">
          <Link href="/contact-us" data-testid="button-loy-book-demo" className="loy-btn loy-cta-primary">Book a Demo</Link>
          <Link href="/contact-us" data-testid="button-loy-contact-sales" className="loy-btn loy-cta-ghost">Contact Sales</Link>
        </div>
      </div>
    </section>
  </Shell>;
}

const mvfCards: [string, string, LucideIcon][] = [
  ['Instant Verification', 'Sub-second authentication results delivered globally.', Zap],
  ['Mobile Experience', 'Intuitive, app-free verification via standard web browsers.', Smartphone],
  ['Consumer Trust', 'Build brand loyalty through verifiable transparency.', ShieldCheck],
  ['Connected Products', 'Bridge the physical and digital product journey.', Waypoints],
];
const mvfPanelItems = ['Secure QR Scan', 'Instant Authentication', 'Product Information', 'Digital Warranty', 'Loyalty Integration', 'Verification Analytics'];
const mvfWorkflow: [string, string][] = [
  ['Scan Product', 'User scans the unique secure QR code on the physical product package using a mobile device.'],
  ['Verify QR', 'The platform validates the integrity and uniqueness of the GS1 digital link or secure identifier.'],
  ['Authenticate Product', 'Proprietary algorithms check for counterfeit signatures or unauthorized duplication of the identifier.'],
  ['Display Product Information', 'Rich product data, manufacturing details, and origin information are instantly presented to the user.'],
  ['Consumer Engagement', 'Activation of value-added services such as digital warranties, loyalty points, or recycling instructions.'],
  ['Analytics Recorded', 'The scan event, location (opt-in), and verification status are securely logged for enterprise analysis.'],
  ['Business Intelligence', 'Real-time alerts and trends are delivered to management dashboards for strategic decision making.'],
];
const mvfFeatures: [string, string, LucideIcon][] = [
  ['QR Scanning', 'Advanced scanning technology compatible with all smartphone cameras without third-party apps.', QrCode],
  ['Authentication', 'Cryptographic verification layers that identify genuine products and highlight potential fraud.', ShieldCheck],
  ['Product Information', 'Dynamic content delivery system showing specifications, usage guides, and compliance data.', Info],
  ['Digital Services', 'Easily integrate warranty registration, service requests, and brand-authorized digital touchpoints.', Grip],
  ['Consumer Engagement', 'Build direct relationships through personalized content based on the verified product instance.', Users],
  ['Verification Analytics', 'Deep insights into scan locations, user behaviors, and regional authentication trends.', ScanSearch],
];
const mvfBenefits: [string, string, LucideIcon][] = [
  ['Increase Consumer Trust', 'Establish a transparent link between the physical item and its digital heritage.', TrendingUp],
  ['Instant Verification', 'Eliminate manual checks with lightning-fast automated mobile authentication.', Gauge],
  ['Reduce Counterfeits', 'Detect and deter illicit trade through real-time global monitoring and alerts.', Shield],
  ['Improve Customer Experience', 'Provide immediate value and peace of mind at the critical moment of scan.', Smile],
  ['Real-Time Insights', 'Leverage scan data to optimize supply chains and marketing strategies.', ChartNoAxesCombined],
  ['Enterprise Scalability', 'Deploy across millions of products with centralized management and security.', Sparkles],
];

function MobileVerification() {
  return <Shell>
    <section className="mvf-hero" aria-labelledby="mvf-hero-title">
      <div className="container-tight mvf-hero-inner">
        <div className="fade-up">
          <p className="mvf-pill">MOBILE VERIFICATION ENGINE</p>
          <h1 id="mvf-hero-title" className="mvf-h1">Verify Every Product Instantly with Mobile Verification</h1>
          <p className="mvf-hero-copy">Empower consumers, distributors, retailers and field teams to instantly verify product authenticity using a secure mobile verification experience. Every scan delivers trusted product information, authentication results and connected digital services.</p>
          <div className="mvf-hero-actions">
            <Link href="/contact-us" data-testid="button-mvf-enable-verification" className="mvf-btn mvf-btn-primary">Enable Verification</Link>
            <Link href="/platform" data-testid="button-mvf-view-demo" className="mvf-btn mvf-btn-ghost">View Demo</Link>
          </div>
        </div>
        <div className="mvf-hero-art fade-up delay-1">
          <img src={`${root}solution-crops/verification-engine-hero-full.png`} alt="TracelyTag mobile verification flow: a secure QR code and mobile scan feed a cloud verification engine backed by a product authenticity database with data encryption, real-time verification and a traceability chain, returning a Genuine Product result on a phone while a suspicious product raises a tampered or counterfeit alert" />
        </div>
      </div>
    </section>

    <section className="mvf-cards" aria-label="Mobile verification capabilities">
      <div className="container-tight mvf-card-grid">
        {mvfCards.map(([title, copy, Icon]) => <article key={title} className="mvf-card">
          <Icon size={24} strokeWidth={2} className="text-[#0e3f9e]" />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="mvf-enterprise" aria-labelledby="mvf-enterprise-title">
      <div className="container-tight">
        <div className="mvf-enterprise-card">
          <div>
            <h2 id="mvf-enterprise-title">Enterprise Mobile Verification</h2>
            <p className="mvf-enterprise-copy">Our enterprise-grade platform provides the infrastructure needed for global scale verification, ensuring high availability and tamper-proof security across all markets.</p>
            <ul className="mvf-enterprise-grid">
              {mvfPanelItems.map(item => <li key={item}><CircleCheck size={19} strokeWidth={2} />{item}</li>)}
            </ul>
          </div>
          <div className="mvf-uptime">
            <QrCode size={54} strokeWidth={1.8} />
            <p>99.99% AUTHENTICATION UPTIME</p>
          </div>
        </div>
      </div>
    </section>

    <section className="mvf-flow" aria-labelledby="mvf-flow-title">
      <div className="container-tight mvf-flow-inner">
        <h2 id="mvf-flow-title" className="mvf-h2 is-center">The Verification Workflow</h2>
        <span className="mvf-rule" />
        <ol className="mvf-flow-list">
          {mvfWorkflow.map(([title, copy], index) => <li key={title} className="mvf-flow-step">
            <span className="mvf-flow-num">{index + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="mvf-features" aria-label="Mobile verification feature set">
      <div className="container-tight mvf-feature-grid">
        {mvfFeatures.map(([title, copy, Icon]) => <article key={title} className="mvf-feature-card">
          <span className="mvf-feature-icon"><Icon size={20} strokeWidth={2} /></span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </section>

    <section className="mvf-benefits" aria-labelledby="mvf-benefits-title">
      <div className="container-tight mvf-benefits-inner">
        <h2 id="mvf-benefits-title" className="mvf-h2 is-center">Enterprise Business Benefits</h2>
        <span className="mvf-rule" />
        <div className="mvf-benefit-grid">
          {mvfBenefits.map(([title, copy, Icon]) => <div key={title} className="mvf-benefit">
            <h3><Icon size={19} strokeWidth={2} />{title}</h3>
            <p>{copy}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="mvf-intel" aria-labelledby="mvf-intel-title">
      <div className="container-tight mvf-intel-inner">
        <h2 id="mvf-intel-title" className="mvf-intel-title">Actionable Intelligence</h2>
        <p className="mvf-intel-sub">Monitor your global verification network from a single, high-fidelity command center.</p>
        <div className="mvf-intel-art">
          <span className="mvf-intel-dots"><i /><i /><i /></span>
          <img src={`${root}solution-crops/verification-engine-dashboard.png`} alt="VerifiCore Verification Intelligence Overview for the last 30 days: verification requests at 1.8M daily volume up 14.2% with 61K average requests, 96.5M total successful verifications and a 99.8% verification success rate, a suspicious products table listing 5 high risk items with investigate actions, a global scan locations heatmap, verification trends comparing requests and successes by week, and security analytics showing an operational system at 99.99% uptime with a platform risk score of 14 and a minimal threat level" />
        </div>
      </div>
    </section>

    <section className="mvf-cta" aria-labelledby="mvf-cta-title">
      <div className="container-tight">
        <div className="mvf-cta-card">
          <h2 id="mvf-cta-title">Ready to Enable Instant Product Verification?</h2>
          <p>Join leading global brands securing their supply chains and engaging consumers with TracelyTag's Mobile Verification solution.</p>
          <div className="mvf-cta-actions">
            <Link href="/contact-us" data-testid="button-mvf-book-demo" className="mvf-btn mvf-cta-primary">Book a Demo</Link>
            <Link href="/contact-us" data-testid="button-mvf-contact-sales" className="mvf-btn mvf-cta-ghost">Contact Sales</Link>
          </div>
        </div>
      </div>
    </section>
  </Shell>;
}

function Solutions() { return <Shell><Hero eyebrow="SOLUTIONS" title="Solutions for Every Product Journey" copy="Connect your product, your supply chain, and your customer experience with TracelyTag." image="why-hero-diagram.png" alt="TracelyTag solutions ecosystem" /><section className="container-tight grid gap-4 py-12 md:grid-cols-3">{solutionItems.map(([t, slug]) => <Link key={slug} href={`/solutions/${slug}`} data-testid={`card-solution-${slug}`} className="card-line rounded border bg-white p-6"><Sparkles size={18} className="mb-8 text-[#0753a4]" /><h3 className="text-[13px] font-bold text-[#20324b]">{t}</h3><span className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold text-[#0753a4]">Explore solution <ArrowRight size={13}/></span></Link>)}</section></Shell>; }
function Industries() { return <Shell><Hero eyebrow="INDUSTRIES" title="Product Intelligence for Every Industry" copy="TracelyTag connects products, people, and performance across the world's most demanding industries." image="about-hero-diagram.png" alt="Connected industry traceability" /><section className="container-tight grid gap-4 py-12 md:grid-cols-3">{industryItems.map(([t, slug, Icon]) => <Link key={slug} href={`/industries/${slug}`} data-testid={`card-industry-${slug}`} className="card-line rounded border bg-white p-6"><Icon size={18} className="mb-8 text-[#0753a4]" /><h3 className="text-[13px] font-bold text-[#20324b]">{t}</h3><span className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold text-[#0753a4]">Explore industry <ArrowRight size={13}/></span></Link>)}</section></Shell>; }

function Router() {
  return <ErrorBoundary resetKey={useLocation()[0]}><Switch>
    <Route path="/" component={Home} /><Route path="/about-us" component={About} /><Route path="/why-tracelytag" component={Why} /><Route path="/platform" component={Platform} />
    <Route path="/platform/gs1-standards-compliance" component={Gs1StandardsCompliance} />
    <Route path="/platform/loyalty-programs" component={LoyaltyPrograms} />
    <Route path="/platform/product-digitalization"><ProductDigitalizationPage Shell={Shell} /></Route>
    <Route path="/platform/product-authentication"><ProductAuthenticationPage Shell={Shell} /></Route>
    <Route path="/platform/Refined-Product-Authentication" component={RefinedProductAuthentication} />
    <Route path="/platform/case-pallet-aggregation" component={CasePalletAggregation} />
    <Route path="/platform/mobile-verification" component={MobileVerification} />
    <Route path="/platform/brand-protection"><SupplyChainIntegrityPage Shell={Shell} /></Route>
    <Route path="/solutions/supply-chain-visibility"><SupplyChainIntegrityPage Shell={Shell} /></Route>
    {platformItems.map(([, href]) => <Route key={href} path={href}><GenericPage type="platform" /></Route>)}
    <Route path="/solutions" component={Solutions} /><Route path="/solutions/analytics-business-intelligence" component={AnalyticsBusinessIntelligence} /><Route path="/solutions/analytics-dashboard"><Redirect to="/solutions/analytics-business-intelligence" /></Route><Route path="/solutions/analytics-dashboard-insights"><Redirect to="/solutions/analytics-business-intelligence" /></Route><Route path="/solutions/connected-packaging" component={ConnectedPackaging} /><Route path="/solutions/anti-counterfeiting" component={AntiCounterfeiting} /><Route path="/solutions/apparel-clothing" component={ApparelClothing} /><Route path="/solutions/digital-warranty" component={DigitalWarranty} /><Route path="/solutions/premium-product-authentication" component={PremiumProductAuthentication} /><Route path="/solutions/supply-chain-visibility" component={SupplyChainVisibility} /><Route path="/solutions/customer-data-platform" component={CustomerDataPlatform} /><Route path="/solutions/consumer-engagement"><Redirect to="/solutions/customer-data-platform" /></Route><Route path="/solutions/track-and-trace" component={TrackAndTrace} /><Route path="/solutions/verification-engine" component={VerificationEngine} /><Route path="/solutions/:slug" component={SolutionPage} />
    <Route path="/hardware-integration" component={Hardware} /><Route path="/industries" component={Industries} /><Route path="/industries/agriculture-agtech" component={AgricultureAgTech} /><Route path="/industries/apparel-fashion" component={ApparelFashion} /><Route path="/industries/cosmetics-beauty" component={CosmeticsBeauty} /><Route path="/industries/fmcg-consumer-goods" component={FmcgConsumerGoods} /><Route path="/industries/food-beverage" component={FoodBeverage} /><Route path="/industries/pharmaceuticals" component={Pharmaceuticals} /><Route path="/industries/electronics-high-tech" component={ElectronicsHighTech} /><Route path="/industries/:slug" component={IndustryPage} />
    <Route path="/contact-us" component={Contact} /><Route path="/login" component={Login} /><Route component={NotFound} />
  </Switch></ErrorBoundary>;
}
function App() { return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>; }
export default App;