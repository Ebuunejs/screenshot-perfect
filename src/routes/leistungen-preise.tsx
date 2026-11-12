import {createFileRoute} from '@tanstack/react-router';
import {ServicesPage} from '@/components/services';
import {pageHead} from '@/components/site';
export const Route=createFileRoute('/leistungen-preise')({head:()=>pageHead('Leistungen - Preise · Med. Massage Huser','Professionelle Massagen, Behandlungen und Preise bei Med. Massage Huser in Roggwil.'),component:ServicesPage});
