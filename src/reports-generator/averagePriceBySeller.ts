import { generateOutput } from "../output-generator/output-writer";
import { ListType } from "../types/list";

function filterSeller(listings: ListType[], sellerType: string) {
  return listings.filter((list: ListType) => list.seller_type === sellerType);
}

function calculateAverageSellingPrice(sellers: ListType[]) {
  return sellers.reduce((total: number, next: ListType) => total + next.price, 0 ) / sellers.length;
}

export async function averagePriceBySeller(listings: ListType[]) {

 const private_sellers = await filterSeller(listings, 'private');
 const dealer_sellers = await filterSeller(listings, 'dealer');
 const other_sellers = await filterSeller(listings, 'other');

 const avgPriceForPrivateSeller = await calculateAverageSellingPrice(private_sellers);
 const avgPriceForDealerSeller = await calculateAverageSellingPrice(dealer_sellers);
 const avgPriceForOtherSeller = await calculateAverageSellingPrice(other_sellers);
 
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


