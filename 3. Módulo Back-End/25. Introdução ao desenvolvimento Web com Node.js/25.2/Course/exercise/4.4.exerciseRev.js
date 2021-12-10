// const { readFS } = require('./4.exerciseRev')
const fs = require('fs').promises;

const writeFS = async () => {
  try {
    const readSimpsons = (await fs.readFile('simpsons.json'));
    const readSimpsons2 = JSON.parse(readSimpsons);
    
    const filteredSimpsons = readSimpsons2.filter((simpson) => ["1", "2", "3", "4"].includes(simpson.id));

    fs.writeFile('./simpsonsFamily.json', JSON.stringify(filteredSimpsons))
  } catch (err) {
    console.log(err.message)
  }
}

writeFS()
