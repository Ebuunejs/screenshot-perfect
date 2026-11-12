import {Text} from '@/components/site';
export function LegalPage({privacy=false}:{privacy?:boolean}){
 const page=privacy?'datenschutzerklaerung':'impressum';
 const ids=privacy?['1701143510','1730321286']:['1134479579','1317901857','1536560442','1066221079'];
 return <section className="section"><div className="site-container"><div className="legal-content">{ids.map(id=><Text key={id} page={page} id={id}/>)}{privacy&&<div className="open-note mt-8">Offen: Die ursprünglichen Cookie-Einstellungen sind noch nicht angebunden.</div>}</div></div></section>;
}
