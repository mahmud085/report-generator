import { availableCardistribution } from './availableCarDistribution';

const mockList = [{
  id: 1,
  make: "BMW",
  price: 1220,
  mileage: 321,
  seller_type: "other"
}, {
  id: 2,
  make: "Audi",
  price: 6000,
  mileage: 321,
  seller_type: "dealer"
},
{
  id: 3,
  make: "BMW",
  price: 1000,
  mileage: 321,
  seller_type: "private"
}, {
  id: 4,
  make: "Audi",
  price: 5000,
  mileage: 321,
  seller_type: "dealer"
},{
  id: 5,
  make: "VW",
  price: 5000,
  mileage: 321,
  seller_type: "private"
}, {
  id: 6,
  make: "Fiat",
  price: 4000,
  mileage: 321,
  seller_type: "dealer"
}];

const MockResult = [{
  'Make': 'BMW',
  'Distribution': "33.33%"
},{
  'Make': 'Audi',
  'Distribution': "33.33%"
},
{
  'Make': 'VW',
  'Distribution': "16.67%"
},
{
  'Make': 'Fiat',
  'Distribution': "16.67%"
}];

describe('availableCardistribution', () => { 
  it('should return data with percentage of distribution', async () => {
    expect.assertions(1);
    await expect(availableCardistribution(mockList)).resolves.toEqual(MockResult);
  });  
});