import { useEffect, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Link, useLocation, useParams, Router as WouterRouter } from 'wouter';
import { Archive, ArrowRight, Award, BadgeCheck, Ban, BarChart3, Boxes, ChartColumn, ChartNoAxesCombined, Check, ChevronDown, CircleCheck, CircleStar, ClipboardList, ClipboardPaste, DropletOff, Eye, EyeOff, Factory, FileText, Gavel, Globe2, HandHeart, Handshake, History, IdCard, Info, Leaf, LockKeyhole, Megaphone, Menu, MessagesSquare, Monitor, MonitorSmartphone, Network, OctagonAlert, Package, PackageCheck, Printer, QrCode, Route as RouteIcon, ScanLine, ScanQrCode, ScanSearch, Search, Shield, ShieldAlert, ShieldCheck, ShieldPlus, Smartphone, SmartphoneCharging, Sparkles, SquareCheckBig, Store, Tag, TriangleAlert, Truck, Unlink, UserRoundX, Users, UserSearch, Warehouse, Waypoints, X, type LucideIcon } from 'lucide-react';
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
  ['Analytics Dashboard', 'analytics-dashboard'],
  ['Analytics Dashboard Insights', 'analytics-dashboard-insights'],
  ['Anti-Counterfeiting Solution', 'anti-counterfeiting'],
  ['Apparel & Clothing Industry', 'apparel-clothing'],
  ['Connected Packaging Solution', 'connected-packaging'],
  ['Consumer Engagement Solution', 'consumer-engagement'],
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
  'analytics-dashboard': {
    ...solutionBase,
    eyebrow: 'ANALYTICS DASHBOARD',
    title: 'Transform Product Data into Actionable Business Insights',
    copy: 'Monitor authentication, product movement, customer engagement, supply chain performance, and operational KPIs from one intelligent analytics platform.',
    challengeEyebrow: 'ONE VIEW OF YOUR OPERATION',
    challengeTitle: 'Stop searching for the signal.',
    challengeCopy: 'Your teams should not need to reconcile disconnected reports to understand how products are moving. TracelyTag makes the important signals visible at a glance.',
    panelTitle: 'A Dashboard Built for Action',
    journeyTitle: 'From Product Event to Business Insight',
    capabilityTitle: 'Dashboard Capabilities',
    capabilityCopy: 'A focused workspace for monitoring the health of your product network.',
    dashboardTitle: 'Your Product Intelligence Dashboard',
    dashboardCopy: 'Monitor activity, spot exceptions, and share a trusted source of truth with every stakeholder.',
    benefits: [['Faster Decisions', 'Give leaders the context they need without waiting for a report.'], ['Shared Visibility', 'Align operations, commercial, and executive teams around one view.'], ['Exception Management', 'Surface unusual activity before it impacts customers.'], ['Clear Reporting', 'Turn complex product data into easy-to-understand trends.'], ['Team Efficiency', 'Reduce manual analysis and repetitive data gathering.'], ['Confident Action', 'Move from what happened to what to do next.']],
    ctaTitle: 'Ready to See Your Product Ecosystem Clearly?',
    ctaCopy: 'Give your teams the live intelligence they need to move with confidence.',
  },
  'analytics-dashboard-insights': {
    ...solutionBase,
    eyebrow: 'ANALYTICS DASHBOARD INSIGHTS',
    title: 'Transform Product Data into Actionable Business Insights',
    copy: 'Monitor authentication, product movement, customer engagement, supply chain performance, and operational KPIs from one intelligent analytics platform.',
    challengeEyebrow: 'FROM DATA TO DIRECTION',
    challengeTitle: 'Make every signal count.',
    challengeCopy: 'TracelyTag organizes verified product events into patterns your teams can use to improve performance, reduce risk, and grow trust.',
    panelTitle: 'Insights for Every Team',
    journeyTitle: 'The Product Insight Journey',
    capabilityTitle: 'Insight-Driven Capabilities',
    capabilityCopy: 'Move beyond dashboards with context that helps your teams choose the next best action.',
    dashboardTitle: 'A Clearer View of What Matters',
    dashboardCopy: 'Give stakeholders the right level of detail, from executive summaries to operational investigation.',
    benefits: [['Identify Trends', 'Understand what is changing across your product network.'], ['Prioritize Action', 'Focus attention on the exceptions with the greatest impact.'], ['Improve Performance', 'Use evidence to refine workflows and partner operations.'], ['Protect Trust', 'Spot suspicious activity and respond with context.'], ['Learn from Engagement', 'Connect customer interactions to product performance.'], ['Scale Intelligence', 'Make useful insight available across the enterprise.']],
    ctaTitle: 'Ready to Turn Product Interactions into Insights?',
    ctaCopy: 'Connect your data and make smarter product decisions with TracelyTag.',
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
  'consumer-engagement': {
    ...solutionBase,
    eyebrow: 'CONSUMER ENGAGEMENT',
    title: 'Build Stronger Relationships with Every Product',
    copy: 'Turn verified product interactions into relevant, trusted experiences that connect brands with customers long after purchase.',
    heroImage: 'about-dashboard-monitor.png',
    challengeEyebrow: 'THE MODERN CUSTOMER RELATIONSHIP',
    challengeTitle: 'Earn attention with a useful product experience.',
    challengeCopy: 'A secure product identity creates a trusted moment for customers to learn, verify, register, and engage with your brand.',
    panelTitle: 'Connected Experiences That Convert',
    journeyTitle: 'The Customer Engagement Journey',
    capabilityTitle: 'Experiences Built on Product Trust',
    capabilityCopy: 'Use the product itself as a direct, measurable channel for meaningful engagement.',
    dashboardTitle: 'Understand Customer Product Interactions',
    dashboardCopy: 'Connect verification and engagement signals to see what customers need and where they respond.',
    benefits: [['Build Trust', 'Lead with a verified, transparent product experience.'], ['Increase Engagement', 'Give customers a clear reason to interact.'], ['Grow Loyalty', 'Create relationships that continue after purchase.'], ['Learn Directly', 'Capture useful first-party product interactions.'], ['Protect the Experience', 'Ensure customers reach trusted product information.'], ['Measure Impact', 'Connect engagement activity to product performance.']],
    ctaTitle: 'Ready to Create More Connected Customers?',
    ctaCopy: 'Turn every product into a trusted, useful relationship with your brand.',
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
    heroImage: 'industry-crops/agriculture-agtech-hero.png',
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
    heroImage: 'industry-crops/apparel-fashion-hero.png',
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
    heroImage: 'industry-crops/cosmetics-beauty-hero.png',
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
    heroImage: 'industry-crops/electronics-high-tech-hero.png',
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
    heroImage: 'industry-crops/fmcg-consumer-goods-hero.png',
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
    heroImage: 'industry-crops/food-beverage-hero.png',
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
    heroImage: 'industry-crops/pharmaceuticals-hero.png',
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
          <img src={`${root}industry-crops/electronics-high-tech-hero.png`} alt="Connected electronics manufacturing, warehouse and retail traceability network powered by TracelyTag" />
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
          <img src={`${root}industry-crops/agriculture-agtech-hero.png`} alt="Agrochemical manufacturing plant, digital warehouse, distribution trucks, agriculture retailer and farmer-in-field traceability network powered by TracelyTag" />
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
          <img src={`${root}industry-crops/apparel-fashion-hero.png`} alt="Garment manufacturing, fabric label printing, warehouse, distribution and retail store traceability network powered by TracelyTag" />
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
          <img src={`${root}industry-crops/cosmetics-beauty-hero.png`} alt="Cosmetics manufacturing line, warehouse, distribution and beauty retail store traceability network powered by TracelyTag" />
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
          <img src={`${root}industry-crops/fmcg-consumer-goods-hero.png`} alt="FMCG manufacturing line with TIJ and TTO printers, automated warehouse, distribution fleet and retail shelf scanning powered by TracelyTag" />
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
    <Route path="/solutions" component={Solutions} /><Route path="/solutions/:slug" component={SolutionPage} />
    <Route path="/hardware-integration" component={Hardware} /><Route path="/industries" component={Industries} /><Route path="/industries/agriculture-agtech" component={AgricultureAgTech} /><Route path="/industries/apparel-fashion" component={ApparelFashion} /><Route path="/industries/cosmetics-beauty" component={CosmeticsBeauty} /><Route path="/industries/fmcg-consumer-goods" component={FmcgConsumerGoods} /><Route path="/industries/electronics-high-tech" component={ElectronicsHighTech} /><Route path="/industries/:slug" component={IndustryPage} />
    <Route path="/contact-us" component={Contact} /><Route path="/login" component={Login} /><Route component={NotFound} />
  </Switch></ErrorBoundary>;
}
function App() { return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>; }
export default App;