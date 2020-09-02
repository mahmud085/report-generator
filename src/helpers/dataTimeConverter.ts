export function dateTimeConverter(dateInTimestamp: number) {
  let date = new Date(dateInTimestamp);
  return date.toLocaleDateString('en-GB');
}