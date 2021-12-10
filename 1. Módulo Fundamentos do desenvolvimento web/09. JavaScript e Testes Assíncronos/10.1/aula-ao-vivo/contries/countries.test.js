const { lowestPopulation, countries } = require('./countries');

test('Função lowestPopulation', () => {
  expect(typeof lowestPopulation).toBe('function');
  const contry = lowestPopulation(countries);
  expect(contry).toBe('Bahamas')
})