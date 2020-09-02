import { generateOutput } from "../output/output-writer";
import { ListType } from "../types/list";

function calculatePercentage(carsByMake: number, totalCars: number) {
  return ((carsByMake / totalCars) * 100).toFixed(2);
}

function filterCarsByMake(listings: ListType[], car: string) {
  return listings
  .filter((list: ListType) => list.make === car).length
}

export async function availableCardistribution(listings: ListType[]) {
  const carProducers = await Array.from(new Set(listings.map((list: ListType) => list.make)));
  
  const results = carProducers.map(car => {
    return { 
      "Make": car,
      "Distribution": calculatePercentage(filterCarsByMake(listings, car), listings.length)
    }
  });
  
  let output = results
    .sort((a: any, b: any) => b.Distribution - a.Distribution)
    .map((res: any) => {
        return Object.assign({}, res, {Distribution: `${res.Distribution}%`
    });
  });
  
  generateOutput("Percentual Distribution of available cars by Make", output);
  
  return output;
}
 
 
 