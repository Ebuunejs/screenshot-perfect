import {createFileRoute} from '@tanstack/react-router';
import {HomePage} from '@/components/home';
import {pageHead} from '@/components/site';
export const Route=createFileRoute('/')({head:()=>pageHead('Med. Massage Huser · Therapeutische Massagen in Roggwil','Berührung, die bewegt – von Kopf bis Fuss in besten Händen'),component:HomePage});
