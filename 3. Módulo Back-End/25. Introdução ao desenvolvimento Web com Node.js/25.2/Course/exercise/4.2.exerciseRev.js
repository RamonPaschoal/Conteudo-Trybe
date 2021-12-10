// const { readFS } = require('./4.exerciseRev')
const fs = require('fs').promises;

const readFS = async (id) => {
  try {
    const readSimpsons = (await fs.readFile('simpsons.json')).toString();
    const readSimpsons2 = JSON.parse(readSimpsons)

    const chosenSimpson = readSimpsons2.find((simpson) => simpson.id === id);

    if(!chosenSimpson) {
      throw new Error('id não encontrado');
    }

    console.log(chosenSimpson)
  } catch (err) {
    console.log(err.message)
  }
}

readFS("1");
