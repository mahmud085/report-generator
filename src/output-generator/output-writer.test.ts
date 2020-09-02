import { generateOutput } from './output-writer';

const mockResults = [{
  mockId1: 1,
  mockId2: 2
}]

describe('Check Console', () => {
  const log = jest.spyOn(global.console, 'log');
  const table = jest.spyOn(global.console, 'table');
  
  it('should print to console "Mock" and print data in table', () => {
    generateOutput("Mock", mockResults);
    expect(log).toHaveBeenCalledWith('Mock');
    expect(table).toHaveBeenCalledWith(mockResults);
  });
  
  it('should print to console "Sorry! There are no data to show"', () => {
    generateOutput("Mock", []);
    expect(log).toHaveBeenCalledWith('Sorry! There are no data to show');
  });
});