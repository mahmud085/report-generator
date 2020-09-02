import { dateTimeConverter } from "../helpers/dataTimeConverter";
import { totalAmountOfContacts } from '../helpers/totalAmountOfContacts';
import { getListById } from '../helpers/getListById';
import { generateOutput } from "../output/output-writer";
import { ListType } from '../types/list';
import { ContactType } from '../types/contact';

export async function mostContactedListingPerMonth(listings: ListType[], contacts: ContactType[], month: number, year: number) {
  const filteredContacts = await contacts.filter((contact: ContactType) => parseInt(contact.contact_date.split('/')[1]) === month && parseInt(contact.contact_date.split('/')[2]) === year);
  const listingIds = await Array.from(new Set(filteredContacts.map((contact: ContactType) => contact.listing_id)));

  let results = await Promise.all(listingIds.map(async (listing_id) => {
    const num_of_contacts = await totalAmountOfContacts(filteredContacts,listing_id);
    const list_by_id = await getListById(listings, listing_id);
    return {
      "Listing Id": list_by_id?.id,
      "Make": list_by_id?.make,
      "Selling Price": `€ ${list_by_id?.price},-`,
      "Mileage": `${list_by_id?.mileage} KM`,
      "Total_amount_of_contacts": num_of_contacts
    }
  }));
  
  const output = results
    .sort((a: any, b: any) => b.Total_amount_of_contacts - a.Total_amount_of_contacts)
    .slice(0, 5)
    .map((res: any, index: any) => ({ Ranking: index+1, ...res }));

  generateOutput("The Top 5 most contacted listings per Month", output);
  
  return output;
}


