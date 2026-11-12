import {describe,it,expect} from 'vitest';
import {prices,validateContact} from '@/content/contact';
const valid={firstName:'Anna',lastName:'Muster',email:'anna@example.com',phone:'+41 79 123 45 67',message:''};
describe('Original contact rules',()=>{
 it('requires first name, last name, email and phone',()=>{expect(Object.keys(validateContact({}))).toEqual(['firstName','lastName','email','phone']);});
 it('keeps message optional as in original form',()=>{expect(validateContact(valid)).toEqual({});});
 it('rejects invalid email',()=>{expect(validateContact({...valid,email:'invalid'})["email"]).toBe('Please enter a valid email');});
 it('rejects invalid phone',()=>{expect(validateContact({...valid,phone:'abc'})["phone"]).toBe('Please enter a valid phone number');});
 it('keeps 25 minute treatment at 60',()=>{expect(prices.find(p=>p.duration===25)?.amount).toBe(60);});
 it('keeps 50 minute treatment at 110',()=>{expect(prices.find(p=>p.duration===50)?.amount).toBe(110);});
});
