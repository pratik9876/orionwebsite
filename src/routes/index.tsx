import { createFileRoute, Link } from '@tanstack/react-router';
import { Apple, ArrowRight, Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import preview from '@/assets/orion-app-preview.jpg';
import { SiteHeader, SiteFooter, FeatureGrid, RatingDemo, CtaBand, PreviewButton } from '@/components/orion-site';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [{ title: 'Orion Studio — Your best photos, brought into focus' }, { name: 'description', content: 'AI-assisted photo culling for Mac. View RAW photos, rate your favorites, and group duplicates with Orion Studio.' }, { property: 'og:title', content: 'Orion Studio — AI-assisted photo culling for Mac' }, { property: 'og:description', content: 'Less time choosing. More time creating. Discover your best photographs with Orion Studio.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  component: Index,
});

function Index() {
 return <><SiteHeader /><main>
  <section className="hero"><div className="site-width"><div className="eyebrow"><Sparkles size={13} /> A little intelligence. A lot of intuition.</div><h1>Orion Studio</h1><p className="hero-subtitle">Your best photos. Brought into focus.</p><p className="hero-copy">From thousands of frames to the ones that matter.<br className="hidden sm:block" /> AI-assisted photo culling, beautifully made for your Mac.</p><div className="hero-actions"><Button size="lg" asChild><Link to="/download"><Apple /> Get Orion for Mac</Link></Button><PreviewButton /></div><p className="mt-3 text-[11px] text-muted-foreground">Made for macOS. Made for your creative flow.</p><div className="mac-preview"><img src={preview} alt="Orion Studio concept screenshot showing a RAW photo viewer, AI ratings, and a filmstrip of Dolomites photographs" width={1536} height={1024} fetchPriority="high" /></div><div className="hero-bottom"><span className="flex items-center gap-1.5"><Check size={13} /> RAW-friendly</span><span className="flex items-center gap-1.5"><Sparkles size={13} /> AI-assisted selection</span><span className="flex items-center gap-1.5"><Apple size={13} /> Mac-inspired by design</span></div></div></section>
  <section className="brand-strip"><div className="site-width flex flex-wrap items-center justify-center gap-x-12 gap-y-4"><span className="text-[11px] text-muted-foreground">YOUR CAMERA. YOUR ORIGINALS.</span>{['Canon','Nikon','SONY','FUJIFILM','Leica'].map(name => <span key={name} className="text-lg font-semibold text-muted-foreground">{name}</span>)}</div></section>
  <section className="site-width feature-section"><div className="flex flex-wrap items-end justify-between gap-5"><div><div className="eyebrow mb-3">Less sorting. More creating.</div><h2 className="section-title">Everything you need.<br />Nothing in your way.</h2></div><p className="max-w-sm text-sm leading-7 text-muted-foreground">A thoughtful set of tools to turn a full memory card into a collection you’re proud of.</p></div><FeatureGrid /><Link to="/features" className="mt-7 inline-flex items-center gap-2 text-sm text-primary">Explore all features <ArrowRight size={15} /></Link></section>
  <section id="interactive-preview" className="border-y border-border bg-studio-surface"><div className="site-width feature-section grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr]"><div><div className="eyebrow mb-4">Your eye. Your final say.</div><h2 className="section-title">Find the keepers.<br />Keep the feeling.</h2><p className="section-copy">You know a great photo when you see one. Orion helps you get there, with clear ratings and a photo-first workspace.</p><div className="mt-7 flex items-center gap-2 text-sm"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary"><Check size={15} /></span>Every selection stays yours.</div></div><RatingDemo /></div></section>
  <CtaBand />
 </main><SiteFooter /></>;
}
