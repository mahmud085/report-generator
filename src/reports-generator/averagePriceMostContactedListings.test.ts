import { averagePriceMostContactedListings } from './averagePriceMostContactedListings';
import MockLists from '../../test-data/list';
import MockContacts from '../../test-data/contact';

const MockResult = 33851.666666666664;

describe('averagePriceBySeller',  () => { 
  it('should return data with average price', async () => {
    expect.assertions(1);
    await expect(averagePriceMostContactedListings(MockLists, MockContacts)).resolves.toEqual(MockResult);  
  });
  
});