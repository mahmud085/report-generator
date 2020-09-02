import { ContactType } from '../types/contact';

export const totalAmountOfContacts = (contacts: any, listing_id: any) => 
  contacts.reduce((a: number, next: ContactType) => 
    (next.listing_id === listing_id ? a + 1 : a), 0);