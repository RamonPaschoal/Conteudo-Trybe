const fs = require('fs')
const { getPokemonInRange } = require('./pokemon.js')

const main = async () => {
  try{
    const pokes = await getPokemonInRange(1, 10);

    pokes.forEach(poke => fs.promises.appendFile('pokemon.txt', `${poke}\n`))

    console.log(pokes);
  } catch (err) {
    console.log(err.message)
  }
}

main();