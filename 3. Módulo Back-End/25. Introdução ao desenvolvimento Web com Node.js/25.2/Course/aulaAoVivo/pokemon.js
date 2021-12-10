const axios = require("axios");

const getPokemonId = async (id) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
}

const getPokemonInRange = async (n, m) => {
  const promises = [];
  
  for (i = n; i <= m; i++) {
    pokePromise = getPokemonId(i);
    promises.push(pokePromise)
  }
  
  const results = await Promise.all(promises);
  
  const pokemons = [];
  results.forEach(result => pokemons.push(result.data.name))

  return pokemons;
}

module.exports = { getPokemonInRange };