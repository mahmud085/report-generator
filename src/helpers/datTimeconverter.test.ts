import { dateTimeConverter } from './dataTimeConverter';

describe('Check Date Conversion', () => {
  const mockTimestamp = 1578249098000;
  const mockResult = "1/5/2020";
  
  it('should convert date from timestaps and return a string', () => {
    let result = dateTimeConverter(mockTimestamp);
    expect(result).toBe(mockResult);
  });
});