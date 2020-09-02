import { ListType } from '../types/list';

export const getListById = (listings: ListType[], listing_id: any) => 
  listings.find( (list: ListType) => list.id === listing_id );