import { useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Link, useLocation, useParams, Router as WouterRouter } from 'wouter';
import { ArrowRight, BarChart3, Boxes, Check, ChevronDown, Factory, Globe2, LockKeyhole, Menu, Monitor, Network, PackageCheck, QrCode, ScanLine, ShieldCheck, Sparkles, Truck, Users, X, type LucideIcon } from 'lucide-react';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();
const root = '/reference/img/';

const platformItems = [
  ['Product Digitalization', '/platform/product-digitalization', QrCode],
  ['Product Authentication', '/platform/product-authentication', ShieldCheck],
  ['Case & Pallet Aggregation', '/platform/case-pallet-aggregation', Boxes],
  ['GS1 Standards Compliance', '/platform/gs1-standards-compliance', Check],
  ['Loyalty Programs', '/platform/loyalty-programs', Users],
  ['Mobile Verification', '/platform/mobile-verification', ScanLine],
] as const;
const solutionItems = [
  ['Analytics & Business Intelligence', 'analytics-business-intelligence'],
  ['Anti-Counterfeiting Solution', 'anti-counterfeiting'],
  ['Connected Packaging Solution', 'connected-packaging'],
  ['Consumer Engagement Solution', 'consumer-engagement'],
  ['Digital Warranty Solution', 'digital-warranty'],
  ['Product Authentication Solution', 'product-authentication'],
  ['Supply Chain Visibility Solution', 'supply-chain-visibility'],
  ['Track & Trace Solution', 'track-and-trace'],
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

function Home() {
  return <Shell><Hero eyebrow="ENTERPRISE READY" title="Secure the Future of Your Supply Chain" copy="Protect brand integrity with TracelyTag's advanced serialization platform. Bridging physical manufacturing and digital cloud verification at global scale." image="about-hero-diagram.png" alt="TracelyTag supply chain intelligence platform" cta="Get Started" /><section className="border-b border-[#dfe5eb] bg-white"><div className="container-tight grid grid-cols-2 gap-y-5 py-7 md:grid-cols-4">{homeProofItems.map(([label, Icon]) => <div key={label} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.12em] text-[#566477]"><span className="grid size-7 place-items-center rounded-md border border-[#d6e1ef] bg-[#f4f8fc] text-[#0753a4]"><Icon size={14} strokeWidth={1.7} /></span>{label}</div>)}</div></section><section className="bg-[#f1f3f6] py-14"><div className="container-tight"><div className="mx-auto max-w-[560px] text-center"><p className="eyebrow mb-4">PRODUCT INTELLIGENCE</p><h2 className="display text-[28px] font-bold text-[#172536] md:text-[34px]">Deploy intelligence across every node of your global distribution network with medical-grade precision.</h2></div><div className="mt-9 grid gap-4 md:grid-cols-4">{homeJourneyItems.map(([title, text, Icon]) => <div key={title} className="card-line rounded-[4px] border bg-white p-5"><Icon size={17} className="mb-7 text-[#0753a4]" strokeWidth={1.6} /><h3 className="text-[12px] font-bold text-[#20324b]">{title}</h3><p className="mt-2 text-[10px] leading-4 text-[#6a7480]">{text}</p></div>)}</div></div></section><MonitorSection image="about-dashboard-monitor.png" title="Dashboard Intelligence" /><section className="container-tight py-14"><div className="text-center"><p className="eyebrow mb-3">SECTOR-WIDE EMPOWERMENT</p><h2 className="display text-[29px] font-bold text-[#172536]">Connect every part of your product journey.</h2></div><div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">{['Pharmaceuticals','Food & Beverage','Apparel & Fashion','Electronics'].map((label, i) => <div key={label} className="card-line rounded border bg-white p-5 text-center"><span className="mx-auto grid size-8 place-items-center rounded-full bg-[#edf5ff] text-[10px] font-bold text-[#0753a4]">0{i + 1}</span><h3 className="mt-4 text-[11px] font-bold text-[#20324b]">{label}</h3></div>)}</div></section><section className="bg-[#f1f3f6] py-14"><div className="container-tight grid gap-10 md:grid-cols-[.85fr_1.15fr]"><div><p className="eyebrow mb-4">WHY THE INDUSTRY TRUSTS TRACELYTAG</p><h2 className="display text-[32px] font-bold text-[#172536]">A platform built for product integrity.</h2><p className="mt-4 text-[12px] leading-6 text-[#657180]">Secure the complete product journey with traceability, authentication, and connected product intelligence.</p></div><div className="grid gap-3 sm:grid-cols-2">{homeIntegrityItems.map(([label, Icon]) => <div key={label} className="card-line rounded border bg-white p-5"><Icon size={17} className="mb-5 text-[#0753a4]" /><h3 className="text-[12px] font-bold text-[#20324b]">{label}</h3><p className="mt-2 text-[10px] leading-4 text-[#6a7480]">Enterprise-ready product intelligence for every workflow.</p></div>)}</div></div></section><CTA title="Ready to Secure Your Brand's Integrity?" copy="Join the global leaders creating trusted, intelligent products with TracelyTag." /></Shell>;
}

function MonitorSection({ image, title }: { image: string; title: string }) {
  return <section className="container-tight grid items-center gap-10 py-16 md:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow mb-4">THE INTELLIGENCE LAYER</p><h2 className="display text-[32px] font-bold text-[#172536]">{title}</h2><p className="mt-4 text-[12px] leading-6 text-[#687382]">The centralized platform that turns connected product data into real-time business insight.</p><div className="mt-5 space-y-2 text-[11px] text-[#526174]"><p><Check size={13} className="mr-2 inline text-[#0753a4]" />Real-Time Monitoring</p><p><Check size={13} className="mr-2 inline text-[#0753a4]" />Supply Chain Visibility</p><p><Check size={13} className="mr-2 inline text-[#0753a4]" />Actionable Insights</p></div></div><div className="soft-panel p-3"><img src={`${root}${image}`} alt="TracelyTag platform dashboard" className="w-full" /></div></section>;
}

function CTA({ title, copy }: { title: string; copy: string }) { return <section className="container-tight"><div className="rounded-[4px] bg-[#064aa0] px-7 py-10 text-center text-white shadow-[0_12px_30px_rgba(6,74,160,.18)]"><h2 className="display text-[25px] font-bold">{title}</h2><p className="mx-auto mt-3 max-w-[520px] text-[11px] leading-5 text-white/75">{copy}</p><div className="mt-6 flex justify-center gap-3"><Button href="/contact-us">Book a Demo</Button><Button href="/contact-us" secondary>Contact Sales</Button></div></div></section>; }

const aboutFeatures: [string,string,typeof Factory][] = [['Product Authentication','Secure, transparent product verification from source to shelf.',ShieldCheck],['Anti-Counterfeiting','Protect your brand and your customers with a trusted digital identity.',LockKeyhole],['Track & Trace','End-to-end visibility across every movement in your supply chain.',Truck],['Connected Products','Bring every product interaction into one intelligent platform.',Network]];
const homeProofItems: Array<[string, LucideIcon]> = [['Product Authentication',ShieldCheck],['Anti-Counterfeiting',LockKeyhole],['Track & Trace',Network],['GS1 Ready',QrCode]];
const homeJourneyItems: Array<[string, string, LucideIcon]> = [['Authorize','Verify every product with a secure digital identity.',ShieldCheck],['Prove','Protect your brand and authenticate your products.',LockKeyhole],['Trace','Follow every product across the global supply chain.',Network],['Engage','Create connected experiences for every customer.',Users]];
const homeIntegrityItems: Array<[string, LucideIcon]> = [['Secure Generation',QrCode],['Serialization',Network],['Aggregation',Boxes],['Workflow Engine',Sparkles]];

function About() { return <Shell><Hero eyebrow="ABOUT TRACELYTAG" title="Building Trust Through Connected Products" copy="The unified product intelligence platform that helps manufacturers and brands create secure, transparent, and intelligent products." image="about-hero-diagram.png" alt="Connected products and global traceability diagram" /><FeatureCards items={aboutFeatures} /><section className="bg-[#f1f3f6] py-16"><div className="container-tight grid gap-10 md:grid-cols-2"><div><p className="eyebrow mb-4">WHO WE ARE</p><h2 className="display text-[34px] font-bold text-[#172536]">A new standard for product trust.</h2><p className="mt-4 text-[12px] leading-6 text-[#657180]">We help manufacturers and brands build a stronger connection between products, people, and performance.</p></div><BlueBand title="Our Mission" items={['Product Intelligence','Connected Product Trust','Supply Chain Visibility','Proven Technology']}/></div></section><MonitorSection image="about-dashboard-monitor.png" title="What We Deliver" /><CTA title="Ready to Build Connected Products?" copy="Join the global leaders creating trusted, intelligent products with TracelyTag." /></Shell>; }

function Why() { return <Shell><Hero eyebrow="THE TRACELYTAG DIFFERENCE" title="Why Leading Manufacturers Choose TracelyTag" copy="The product intelligence platform built for the complexity of modern manufacturing, supply chains, and consumer engagement." image="why-hero-diagram.png" alt="Why TracelyTag connected ecosystem diagram" /><FeatureCards items={[['Enterprise Platform','A complete operating system for connected products.',Network],['Scalable Infrastructure','Built to grow with your products, markets, and teams.',Boxes],['Global Digital Identity','A trusted digital identity for every product.',Globe2],['Actionable Intelligence','Insights that help you make better decisions, faster.',BarChart3]]} /><BlueBand title="Built For Modern Manufacturers" items={['Enterprise Platform','Global Infrastructure','Real-Time Data','Secure by Design']} /><section className="container-tight py-16 text-center"><p className="eyebrow mb-4">THE TRACELYTAG DIFFERENCE</p><h2 className="display mx-auto max-w-[500px] text-[34px] font-bold text-[#172536]">Six pillars of enterprise authentication</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{[['Product Platform','A complete platform for your connected product ecosystem.'],['Authentication','Secure every product with a trusted digital identity.'],['Track & Trace','Follow every product, from source to consumer.'],['Connected Products','Create meaningful product experiences.'],['Advanced Analytics','Turn product data into business intelligence.'],['Enterprise Integrations','Connect your existing systems with ease.']].map(([t,c]) => <div key={t} className="card-line rounded border bg-white p-5 text-left"><ShieldCheck size={17} className="mb-5 text-[#0753a4]" /><h3 className="text-[12px] font-bold">{t}</h3><p className="mt-2 text-[10px] leading-4 text-[#6a7480]">{c}</p></div>)}</div></section><MonitorSection image="why-dashboard-monitor.png" title="Real-Time Operational Intelligence" /><CTA title="Ready to Transform Your Product Ecosystem?" copy="Build trusted, connected products with TracelyTag." /></Shell>; }

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
  'consumer-engagement': { title:'Consumer Engagement Solution', image:'about-dashboard-monitor.png', eyebrow:'SOLUTIONS' },
  'digital-warranty': { title:'Digital Warranty Solution', image:'why-dashboard-monitor.png', eyebrow:'SOLUTIONS' },
  'product-authentication-solution': { title:'Product Authentication Solution', image:'why-hero-diagram.png', eyebrow:'SOLUTIONS' },
  'supply-chain-visibility': { title:'Supply Chain Visibility Solution', image:'hardware-hero-diagram.png', eyebrow:'SOLUTIONS' },
  'track-and-trace': { title:'Track & Trace Solution', image:'about-hero-diagram.png', eyebrow:'SOLUTIONS' },
};

function GenericPage({ type }: { type: 'platform'|'solution'|'industry' }) {
  const params = useParams<{slug:string}>(); const slug = params.slug || (type === 'platform' ? 'product-digitalization' : type === 'industry' ? 'agriculture-agtech' : 'analytics-business-intelligence');
  const industry = industryItems.find(x => x[1] === slug);
  const data = industry ? {title: industry[0], image:'about-hero-diagram.png', eyebrow:'INDUSTRIES'} : genericMap[slug] || {title: type === 'industry' ? 'Industries' : type === 'solution' ? 'Solutions' : 'Platform', image:'about-hero-diagram.png', eyebrow:type.toUpperCase()};
  return <Shell><Hero eyebrow={data.eyebrow} title={data.title} copy="The unified product intelligence platform that helps manufacturers and brands create secure, transparent, and intelligent products." image={data.image} alt={data.title} /><FeatureCards items={aboutFeatures} /><MonitorSection image={data.image.includes('dashboard') ? data.image : 'about-dashboard-monitor.png'} title="The Intelligence Layer" /><BlueBand title="Connected Product Intelligence" items={['Product Authentication','Track & Trace','Supply Chain Visibility','Consumer Engagement']} /><CTA title="Ready to Build Connected Products?" copy="Join the global leaders creating trusted, intelligent products with TracelyTag." /></Shell>;
}

function Platform() { return <Shell><Hero eyebrow="THE TRACELYTAG PLATFORM" title="One Platform. Complete Product Intelligence." copy="Build, authenticate, track, and connect every product across its entire lifecycle." image="about-hero-diagram.png" alt="TracelyTag product intelligence platform" /><FeatureCards items={aboutFeatures} /><BlueBand title="The Intelligence Layer" items={['Product Digitalization','Product Authentication','Case & Pallet Aggregation','Mobile Verification']} /><CTA title="Ready to Build Connected Products?" copy="Join the global leaders creating trusted, intelligent products with TracelyTag." /></Shell>; }
function Solutions() { return <Shell><Hero eyebrow="SOLUTIONS" title="Solutions for Every Product Journey" copy="Connect your product, your supply chain, and your customer experience with TracelyTag." image="why-hero-diagram.png" alt="TracelyTag solutions ecosystem" /><section className="container-tight grid gap-4 py-12 md:grid-cols-3">{solutionItems.map(([t, slug]) => <Link key={slug} href={`/solutions/${slug}`} data-testid={`card-solution-${slug}`} className="card-line rounded border bg-white p-6"><Sparkles size={18} className="mb-8 text-[#0753a4]" /><h3 className="text-[13px] font-bold text-[#20324b]">{t}</h3><span className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold text-[#0753a4]">Explore solution <ArrowRight size={13}/></span></Link>)}</section></Shell>; }
function Industries() { return <Shell><Hero eyebrow="INDUSTRIES" title="Product Intelligence for Every Industry" copy="TracelyTag connects products, people, and performance across the world's most demanding industries." image="about-hero-diagram.png" alt="Connected industry traceability" /><section className="container-tight grid gap-4 py-12 md:grid-cols-3">{industryItems.map(([t, slug, Icon]) => <Link key={slug} href={`/industries/${slug}`} data-testid={`card-industry-${slug}`} className="card-line rounded border bg-white p-6"><Icon size={18} className="mb-8 text-[#0753a4]" /><h3 className="text-[13px] font-bold text-[#20324b]">{t}</h3><span className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold text-[#0753a4]">Explore industry <ArrowRight size={13}/></span></Link>)}</section></Shell>; }

function Router() {
  return <ErrorBoundary resetKey={useLocation()[0]}><Switch>
    <Route path="/" component={Home} /><Route path="/about-us" component={About} /><Route path="/why-tracelytag" component={Why} /><Route path="/platform" component={Platform} />
    {platformItems.map(([, href]) => <Route key={href} path={href}><GenericPage type="platform" /></Route>)}
    <Route path="/solutions" component={Solutions} /><Route path="/solutions/:slug"><GenericPage type="solution" /></Route>
    <Route path="/hardware-integration" component={Hardware} /><Route path="/industries" component={Industries} /><Route path="/industries/:slug"><GenericPage type="industry" /></Route>
    <Route path="/contact-us" component={Contact} /><Route path="/login" component={Login} /><Route component={NotFound} />
  </Switch></ErrorBoundary>;
}
function App() { return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>; }
export default App;