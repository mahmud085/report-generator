import index from './index';

it('should return string `Hello world`', () => {
  const result = index();

  expect(result).toBe('Hello world');
});
