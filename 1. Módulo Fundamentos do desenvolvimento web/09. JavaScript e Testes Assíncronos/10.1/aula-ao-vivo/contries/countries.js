const countries = [
  { name: 'Senegal', population: 14_799_859, area: 196722 },
  { name: 'Alemanha', population: 81_770_900, area: 357114 },
  { name: 'Guadalupe', population: 400_132, area: 13959 },
  { name: 'Bahamas', population: 378_040, area: 13943 },
  { name: 'Guiana', population: 746_900, area: 214969 },
  { name: 'Irlanda', population: 6_378_000, area: 70273 },
];

const lowestPopulation = (countries) => {
  const sortCountries = countries.sort((a, b) => a.population - b.population);
  const [ lowestCountry ] = sortCountries;
  return lowestCountry.name;
  // return sortCountries[0].name
}

module.exports = {
  lowestPopulation,
  countries
}