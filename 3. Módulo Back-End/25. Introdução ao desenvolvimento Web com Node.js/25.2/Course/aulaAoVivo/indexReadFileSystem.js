const fs = require('fs')

const main = async () => {
  try{
    const pokemons = await fs.promises.readFile('pokemon.txt');
    console.log(pokemons.toString());
  } catch (err) {
    console.log(err.message)
  }
}

main();