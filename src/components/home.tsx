import { Link } from '@tanstack/react-router';
import { HeartHandshake, Hand, BadgeCheck } from 'lucide-react';
import { Text, Appointment } from '@/components/site';
import hero from '@/assets/hero.asset.json';
import t1 from '@/assets/treatment-1.asset.json';
import t2 from '@/assets/treatment-2.asset.json';
import t3 from '@/assets/treatment-3.asset.json';
import t4 from '@/assets/treatment-4.asset.json';
import t5 from '@/assets/treatment-5.asset.json';
import gift1 from '@/assets/voucher-1.asset.json';
import gift2 from '@/assets/voucher-2.asset.json';
export const treatments=[
 {heading:'1789391196',copy:'1959195889',image:t1.url,alt:'Schultermassage',hash:'Bindegewebsmassage',imageHash:'Bindegewebsmassage'},
 {heading:'1021847555',copy:'1810139658',image:t2.url,alt:'Med. Massage Huser',hash:'Elektrotherapie',imageHash:'Elektrotherapie'},
 {heading:'1241170899',copy:'1068933205',image:t3.url,alt:'Fussmassage',hash:'Fussreflexzonen-Massage',imageHash:'Fussreflexzonen-Massage'},
 {heading:'1112874519',copy:'1856609433',image:t4.url,alt:'Schultermassage',hash:'KlassischeMassage',imageHash:'Bindegewebsmassage'},
 {heading:'1475863338',copy:'1038124817',image:t5.url,alt:'Massage',hash:'Schwangerschaftsmassage',imageHash:'KlassischeMassage'},
];
export function HomePage() {
 return <><section className="hero"><img className="hero-photo" src={hero.url} alt="Schultermassage"/><div className="site-container hero-content"><h1>Berührung, die bewegt – von Kopf bis Fuss in besten Händen</h1><Appointment/><Text id="1652578019" className="cancel-note"/></div></section>
 <section className="section"><div className="site-container intro-grid"><Text id="1838984766"/><Text id="1578157839" className="intro-copy"/></div></section>
 <section className="section section-tinted"><div className="site-container"><Text id="1224660800" className="eyebrow"/><Text id="1616701130" className="section-heading"/><div className="treatments-grid">{treatments.map(t=><article className="treatment-card" key={t.hash}><Link to="/leistungen-preise" hash={t.imageHash}><img src={t.image} alt={t.alt} loading="lazy"/></Link><div className="treatment-content"><Text id={t.heading}/><Text id={t.copy}/><Link to="/leistungen-preise" hash={t.hash} className="more">Erfahren Sie mehr ❯</Link></div></article>)}</div></div></section>
 <section className="section"><div className="site-container intro-grid"><div><Text id="1312212874"/><Text id="1349849467" className="intro-copy"/><Text id="1721071676" className="open-note mt-7"/></div><div><Text id="1512772628" className="eyebrow"/><Text id="1012266988" className="timeline"/></div></div></section>
 <section className="section section-tinted"><div className="site-container gift-grid"><Text id="1446650560" className="gift-copy"/><div className="gift-images"><img src={gift1.url} alt="" loading="lazy"/><img src={gift2.url} alt="" loading="lazy"/></div></div></section>
 <section className="section"><div className="site-container values-grid">{[{Icon:Hand,h:'1567223450',p:'1219056620'},{Icon:BadgeCheck,h:'1701030487',p:'1633473612'},{Icon:HeartHandshake,h:'1008133050',p:'1064082893'}].map(({Icon,h,p})=><div key={h}><Icon className="value-icon"/><Text id={h}/><Text id={p}/></div>)}</div></section>
 <section className="cta-band"><div className="site-container cta-inner"><Text id="1324591721"/><Appointment inverse/></div></section></>;
}
