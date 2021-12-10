const { getPokemonInRange } = require('./pokemon.js')

const main = async () => {
  try{
    const pokes = await getPokemonInRange(1, 20)
    console.log(pokes);
  } catch (err) {
    console.log(err.message)
  }
}

main();