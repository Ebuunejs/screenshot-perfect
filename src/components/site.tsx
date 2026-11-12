import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowRight, ArrowUp, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import original from '@/content/original.json';
import logo from '@/assets/logo.asset.json';
export type OriginalPage = keyof typeof original;
export function Text({ id, page='home', className='' }: {id:string;page?:OriginalPage;className?:string}) {
 const blocks: Record<string,string> = original[page];
 return <div className={className} data-original={id} dangerouslySetInnerHTML={{__html:blocks[id] ?? ''}} />;
}
export function Appointment({label='Termin vereinbaren',inverse=false}: {label?:string;inverse?:boolean}) {
 return <Button asChild variant={inverse?'inverse':'appointment'} size="lg" className="h-12 gap-6 text-xs"><Link to="/kontakt">{label}<ArrowRight size={16}/></Link></Button>;
}
export function SiteHeader() {
 const [open,setOpen]=useState(false);
 const nav=<><Link to="/" onClick={()=>setOpen(false)}>Startseite</Link><Link to="/leistungen-preise" onClick={()=>setOpen(false)}>Leistungen - Preise</Link><Link to="/kontakt" onClick={()=>setOpen(false)}>Kontakt</Link></>;
 return <><div className="top-strip"><div className="site-container flex items-center justify-between gap-4"><Text id="1191410887"/><a className="whatsapp" href="https://wa.me/+41799329325" aria-label="whatsapp"><MessageCircle size={14}/></a></div></div><header className="site-header"><div className="site-container header-inner"><Link to="/" className="brand" aria-label="Med. Massage Huser"><img src={logo.url} alt="Med. Massage Huser Logo"/></Link><nav className="desktop-nav" aria-label="Navigation">{nav}</nav><div className="header-appointment"><Appointment/></div><Button variant="ghost" size="icon" className="mobile-menu-toggle" aria-label={open?'Menü schliessen':'Menü öffnen'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button></div>{open&&<nav className="mobile-nav" aria-label="Mobile Navigation">{nav}<Appointment/></nav>}</header></>;
}
export function SiteFooter() {
 return <footer className="site-footer"><div className="site-container"><div className="footer-main"><div className="footer-brand"><Link to="/"><img src={logo.url} alt="Med. Massage Huser Logo"/></Link><Text id="1251627071"/><a href="https://wa.me/+41799329325" aria-label="whatsapp" className="inline-flex mt-5 text-primary"><MessageCircle size={20}/></a></div><div><Text id="1844128034"/><Text id="1988498469"/><Text id="1743365794" className="mt-4"/></div><div><Text id="1107607710"/><Button variant="link" asChild className="px-0 mt-5"><a href="tel:+41799329325"><Phone/>Jetzt anrufen</a></Button></div></div><div className="footer-bottom"><span>© 2026 Med. Massage Huser</span><div className="flex items-center gap-7"><Link to="/datenschutzerklaerung">Datenschutzerklärung</Link><span>|</span><Link to="/impressum">Impressum</Link><a href="#dm" aria-label="ar-arrow_drop_up"><ArrowUp size={18}/></a></div></div></div></footer>;
}
export function pageHead(title:string,description:string,image?:string) {
 return {meta:[{title},{name:'description',content:description},{property:'og:title',content:title},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'},...(image?[{property:'og:image',content:image},{name:'twitter:image',content:image}]:[])]};
}
