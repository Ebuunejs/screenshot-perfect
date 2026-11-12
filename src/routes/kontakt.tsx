import {createFileRoute} from '@tanstack/react-router';
import {ContactPage} from '@/components/contact-page';
import {pageHead} from '@/components/site';
export const Route=createFileRoute('/kontakt')({head:()=>pageHead('Kontakt · Med. Massage Huser in Roggwil','Kontaktdaten, Öffnungszeiten und Anfahrt zu Med. Massage Huser an der St. Gallerstrasse 39 in Roggwil.'),component:ContactPage});
