import { ListType } from '../types/list';

export function listParser(row: ListType) {
  return  {
    id: Number(row.id),
    make: row.make,
    price: Number(row.price),
    mileage: Number(row.mileage),
    seller_type: row.seller_type
  }
}