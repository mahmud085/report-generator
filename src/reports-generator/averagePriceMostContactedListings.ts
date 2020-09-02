import { totalAmountOfContacts } from '../helpers/totalAmountOfContacts';
import { getListById } from '../helpers/getListById';
import { generateOutput } from '../output-generator/output-writer';
import { ListType } from '../types/list';
import { ContactType } from '../types/contact';

interface ContactedList {id: number, price: number,amount_of_contacts: number }

function calculateAveragePrice(contactedLists: ContactedList[]) {
  if(contactedLists.length === 0) return 0;
  return contactedLists.reduce((acc: number, next: ContactedList) => acc + next.price, 0) / contactedLists.length;
}

export async function averagePriceMostContactedListings(listings: ListType[], contacts: ContactType[]) {
  
  const listingIds = await Array.from(new Set(contacts.map((contact: ContactType) => contact.listing_id)));

  let results = await Promise.all(listingIds.map(async (listing_id) => {
    let num_of_contacts = await totalAmountOfContacts(contacts,listing_id);
    let list_by_id = (await getListById(listings, listing_id) as ListType);
    
    return {
      "id": list_by_id.id,
      "price": list_by_id.price,
      "amount_of_contacts": num_of_contacts
    }
  }));
  
  let thirtyPercent = Math.ceil(results.length * 0.3);
  let mostContactedLists = results.sort((a: any,b: any) => b.amount_of_contacts - a.amount_of_contacts).slice(0, thirtyPercent);
  let averagePrice = await calculateAveragePrice(mostContactedLists)

  generateOutput("Average price of the 30% most contacted listings", {"Avergae Price": `€ ${averagePrice.toFixed(2)},-`});
  
  return averagePrice;
}