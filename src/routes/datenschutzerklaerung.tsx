import {createFileRoute} from '@tanstack/react-router';
import {LegalPage} from '@/components/legal';
import {pageHead} from '@/components/site';
export const Route=createFileRoute('/datenschutzerklaerung')({head:()=>pageHead('Datenschutzerklärung · Med. Massage Huser','Datenschutzerklärung von Med. Massage Huser in Roggwil.'),component:Privacy});
function Privacy(){return <LegalPage privacy/>;}
