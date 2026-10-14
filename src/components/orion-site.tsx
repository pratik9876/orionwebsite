import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Apple, ArrowRight, Check, Copy, FileImage, Image, Menu, Play, Sparkles, Star, X, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/orion-logo.jpg.asset.json';
import mountain from '@/assets/dolomites.jpg';

export const features = [
  { icon: FileImage, title: 'Your RAW files. Right at home.', short: 'RAW format support', copy: 'Start with the originals. Review your RAW photographs without adding a conversion step to your workflow.' },
  { icon: Image, title: 'See every little detail.', short: 'Photo viewer', copy: 'A distraction-free photo viewer puts your images first, so you can focus on the moments that matter.' },
  { icon: Star, title: 'Good. Great. The one.', short: 'Rating system', copy: 'Give every photograph a clear place in your selection with a familiar five-star rating system.' },
  { icon: Sparkles, title: 'A second pair of eyes.', short: 'AI-powered rating', copy: 'Let AI help surface promising images, while you keep the final say on every photograph.' },
  { icon: Copy, title: 'Less repetition. More clarity.', short: 'Duplicate grouping', copy: 'Bring similar photographs together. Compare the subtle differences and choose your favorite frame.' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header relative z-20"><div className="site-width flex h-full items-center justify-between gap-4">
    <Link to="/" className="flex items-center gap-2.5" aria-label="Orion Studio home"><img src={logo.url} alt="Orion logo" className="brand-logo" /><span className="text-lg font-semibold">Orion Studio</span></Link>
    <nav className="desktop-nav flex items-center gap-8 text-[13px]"><Link to="/features" activeProps={{ className: 'text-primary' }}>Features</Link><Link to="/workflow" activeProps={{ className: 'text-primary' }}>How it works</Link><Link to="/download" activeProps={{ className: 'text-primary' }}>Get Orion</Link></nav>
    <div className="flex items-center gap-2"><Button asChild size="sm" className="hidden sm:inline-flex"><Link to="/download"><Apple /> Get Orion for Mac</Link></Button><Button variant="ghost" size="icon" className="sm:hidden" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>
  </div>{open && <nav className="absolute top-full flex w-full flex-col gap-5 border-b border-border bg-background p-6 text-sm"><Link to="/features" onClick={() => setOpen(false)}>Features</Link><Link to="/workflow" onClick={() => setOpen(false)}>How it works</Link><Link to="/download" onClick={() => setOpen(false)}>Get Orion for Mac</Link></nav>}</header>;
}

export function SiteFooter() { return <footer className="site-width footer flex flex-wrap items-center justify-between gap-5"><div className="flex items-center gap-2"><img src={logo.url} alt="" className="h-7 w-7 object-contain" /><span>© 2026 Orion Studio</span></div><span>Made for photographers. Designed for Mac.</span><Link to="/features" className="flex items-center gap-1">Explore Orion <ArrowRight size={13} /></Link></footer>; }

export function FeatureGrid() { return <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{features.map((f) => <article className="feature-item" key={f.short}><div className="feature-icon"><f.icon size={20} /></div><h3>{f.title}</h3><p>{f.copy}</p><div className="mt-6 text-[11px] font-medium text-primary">{f.short}</div></article>)}<article className="feature-item flex flex-col justify-between"><Monitor className="mb-5 text-muted-foreground" size={32} /><div><h3>Feels like your Mac. Because it belongs.</h3><p>A familiar workspace. A focused experience. Nothing between you and your best photographs.</p></div></article></div>; }

export function RatingDemo() {
  const [rating, setRating] = useState(4);
  const [picked, setPicked] = useState(false);
  return <div className="demo-window"><div className="demo-toolbar"><i className="traffic" /><i className="traffic" /><i className="traffic" /><span className="flex-1 text-center">Orion Studio · Interactive preview</span><Image size={14} /></div><img src={mountain} alt="A hiker overlooking the Dolomites at sunrise" className="demo-photo" loading="lazy" width={1536} height={1024} /><div className="demo-controls"><div><div className="text-xs font-medium">DSC_2048.NEF</div><div className="mt-1 text-[10px] opacity-60">Dolomites · {rating} stars{picked ? ' · Selected' : ''}</div></div><div className="flex gap-0.5">{[1,2,3,4,5].map(n => <Button key={n} variant="ghost" size="icon" className="star-button h-7 w-7" title={`Rate ${n} stars`} aria-label={`Rate ${n} stars`} onClick={() => setRating(n)}><Star fill={n <= rating ? 'currentColor' : 'none'} /></Button>)}</div><Button size="sm" variant={picked ? 'default' : 'secondary'} onClick={() => setPicked(!picked)}><Check />{picked ? 'Selected' : 'Select photo'}</Button></div><p className="border-t border-border/20 px-4 py-2 text-[10px] opacity-60">Sample photograph · Ratings are a preview, not AI analysis.</p></div>;
}

export function CtaBand() { return <section className="cta-band"><div className="site-width"><Apple size={27} className="mx-auto mb-5" /><h2 className="section-title">Your next great photo is in there.</h2><p className="section-copy">Find it with Orion Studio.</p><Button asChild className="mt-6" size="lg"><Link to="/download">Get Orion for Mac <ArrowRight /></Link></Button></div></section>; }

export function PreviewButton() { return <Button variant="outline" size="lg" onClick={() => document.getElementById('interactive-preview')?.scrollIntoView({ behavior: 'smooth' })}><Play size={15} /> See it in action</Button>; }