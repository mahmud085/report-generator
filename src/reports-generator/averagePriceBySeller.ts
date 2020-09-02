import { generateOutput } from "../output/output-writer";
import { ListType } from "../types/list";

export async function averagePriceBySeller(listings: ListType[]) {

 const private_seller = await listings.filter((list: ListType) => list.seller_type === 'private');
 const dealer_seller = await listings.filter((list: ListType) => list.seller_type === 'dealer');
 const other_seller = await listings.filter((list: ListType) => list.seller_type === 'other');

 const avgPriceForPrivateSeller = await private_seller.reduce((total: number, next: ListType) => total + next.price, 0 ) / private_seller.length;
 const avgPriceForDealerSeller = await dealer_seller.reduce((total: number, next: ListType) => total + next.price, 0 ) / dealer_seller.length;
 const avgPriceForOtherSeller = await other_seller.reduce((total: number, next: ListType) => total + next.price, 0 ) / other_seller.length;
 
 const results = [
  {
    "Seller Type": "private",
    "Average In Euro": `€ ${avgPriceForPrivateSeller},-`
  },
  {
    "Seller Type": "dealer",
    "Average In Euro": `€ ${avgPriceForDealerSeller},-`
  },
  {
    "Seller Type": "other",
    "Average In Euro": `€ ${avgPriceForOtherSeller},-`
  }
 ];

 generateOutput("Average Listing Selling Price per Seller Type", results);
 return results;
}


