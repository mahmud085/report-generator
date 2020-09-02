import { averagePriceBySeller } from './averagePriceBySeller';
import MockLists from '../../test-data/list';

const MockResult = [{
  'Seller Type': 'private',
  'Average In Euro': '€ 33479.6,-'
},{
  'Seller Type': 'dealer',
  'Average In Euro': '€ 24524.8,-'
},{
  'Seller Type': 'other',
  'Average In Euro': '€ 35199.2,-'
}];

describe('averagePriceBySeller', () => { 
  it('should return data with average price', async () => {
      expect.assertions(1);
      await expect( averagePriceBySeller(MockLists)).resolves.toEqual(MockResult);
  });
  
});