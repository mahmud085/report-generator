import { dateTimeConverter } from "../helpers/dataTimeConverter";
import { ContactType } from '../types/contact';

export function contactParser(row: ContactType) {
  return  {
    listing_id: Number(row.listing_id),
    contact_date: dateTimeConverter(Number(row.contact_date))
  }
}