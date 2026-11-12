import {createFileRoute} from '@tanstack/react-router';
import {LegalPage} from '@/components/legal';
import {pageHead} from '@/components/site';
export const Route=createFileRoute('/impressum')({head:()=>pageHead('Impressum · Med. Massage Huser','Kontaktangaben und rechtliche Hinweise zu Med. Massage Huser in Roggwil.'),component:LegalPage});
