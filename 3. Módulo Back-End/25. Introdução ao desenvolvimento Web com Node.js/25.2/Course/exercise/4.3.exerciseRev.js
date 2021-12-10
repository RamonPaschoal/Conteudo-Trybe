// const { readFS } = require('./4.exerciseRev')
const fs = require('fs').promises;

const filterSimpsons = async () => {
  try {
    const readSimpsons = (await fs.readFile('simpsons.json')).toString();
    const readSimpsons2 = JSON.parse(readSimpsons)

    const filteredSimpsons = readSimpsons2.filter((simpson) => simpson.id !== "6" && simpson.id !== "10");

    console.log(filteredSimpsons)
  } catch (err) {
    console.log(err.message)
  }
}

filterSimpsons();
