export const prices = [{ duration: 25, amount: 60 }, { duration: 50, amount: 110 }];
export const contactFields = [
 { name: 'firstName', label: 'Vorname *', type: 'text', required: true },
 { name: 'lastName', label: 'Nachname *', type: 'text', required: true },
 { name: 'email', label: 'E-Mail *', type: 'email', required: true },
 { name: 'phone', label: 'Telefon *', type: 'tel', required: true },
 { name: 'message', label: 'Nachricht *', type: 'textarea', required: false },
];
export function validateContact(values: Record<string,string>) {
 const errors: Record<string,string> = {};
 for (const field of contactFields) {
  const value = values[field.name]?.trim() ?? '';
  if (field.required && !value) errors[field.name] = 'This field is required';
  else if (value && field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errors[field.name] = 'Please enter a valid email';
  else if (value && field.type === 'tel' && !/^[\d\s+.\-]*\d[\d\s+.\-]*$/.test(value)) errors[field.name] = 'Please enter a valid phone number';
 }
 return errors;
}
