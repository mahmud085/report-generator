import { mostContactedListingPerMonth } from './mostContactedListingPerMont';
import MockLists from '../../test-data/list';
import MockContacts from '../../test-data/contact';

const MockResult = [ { Ranking: 1,
  'Listing Id': 1,
  Make: 'Audi',
  'Selling Price': '€ 49717,-',
  Mileage: '6500 KM',
  Total_amount_of_contacts: 4 },
{ Ranking: 2,
  'Listing Id': 10,
  Make: 'Mercedes-Benz',
  'Selling Price': '€ 40070,-',
  Mileage: '2500 KM',
  Total_amount_of_contacts: 3 },
{ Ranking: 3,
  'Listing Id': 9,
  Make: 'VW',
  'Selling Price': '€ 26350,-',
  Mileage: '500 KM',
  Total_amount_of_contacts: 1 },
{ Ranking: 4,
  'Listing Id': 8,
  Make: 'Renault',
  'Selling Price': '€ 25633,-',
  Mileage: '8000 KM',
  Total_amount_of_contacts: 1 },
{ Ranking: 5,
  'Listing Id': 2,
  Make: 'Mazda',
  'Selling Price': '€ 22031,-',
  Mileage: '7000 KM',
  Total_amount_of_contacts: 1 } ]

describe('mostContactedListingsPerMonth', () => { 
  it('should return data with 5 most contacted listings', async () => {
    await expect(mostContactedListingPerMonth(MockLists, MockContacts, 5, 2020)).resolves.toEqual(MockResult);
  });
});