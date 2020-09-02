import { totalAmountOfContacts } from './totalAmountOfContacts';

const mockList = [
  {  
    listing_id: 1,
    contact_date: 1578249098000
  },
  {  
    listing_id: 2,
    contact_date: 1578249098000
  },  {  
    listing_id: 1,
    contact_date: 1578249098000
  },
  {  
    listing_id: 1,
    contact_date: 1578249098000
  },  {  
    listing_id: 2,
    contact_date: 1578249098000
  },
  {  
    listing_id: 4,
    contact_date: 1578249098000
  }
];

describe('totalAmountOfContacts', () => {
  
  it('should return number of contacts = 3 with id 1', () => {
    let result = totalAmountOfContacts(mockList, 1);
    expect(result).toBe(3);
  });
  
  it('should return number of contacts = 2 with id 2', () => {
    let result = totalAmountOfContacts(mockList, 2);
    expect(result).toBe(2);
  });
  it('should return number of contacts = 0 with id 3', () => {
    let result = totalAmountOfContacts(mockList, 3);
    expect(result).toBe(0);
  });
});