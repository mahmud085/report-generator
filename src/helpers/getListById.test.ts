import { getListById } from './getListById';

const mockData1 = {
  id: 1,
  make: "BMW",
  price: 1221,
  mileage: 321,
  seller_type: "private"
};

const mockData2 =   {
  id: 2,
  make: "Audi",
  price: 1221,
  mileage: 321,
  seller_type: "dealer"
};
const mockList = [mockData1,mockData2];

describe('getListById', () => {
  
  it('should return data with id 1', () => {
    let result = getListById(mockList, 1);
    expect(result).toBe(mockData1);
  });
  
  it('should return data with id 2', () => {
    let result = getListById(mockList, 2);
    expect(result).toBe(mockData2);
  });
});