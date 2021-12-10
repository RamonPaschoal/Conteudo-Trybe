const axios = require("axios");

const getPokemonId = async (id) => {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
}

const getPokemonInRange = async (n, m) => {
  const pokemons = [];

  for (i = n; i <= m; i++) {
    res = await getPokemonId(i);
    pokemons.push(res.data.name)
  }

  return pokemons;
}

const main = async () => {
  try{
    const pokes = await getPokemonInRange(1, 500)
    console.log(pokes);
  } catch (err) {
    console.log(err.message)
  }
}

main();