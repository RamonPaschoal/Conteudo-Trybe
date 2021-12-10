// const { readFS } = require('./4.exerciseRev')
const fs = require('fs').promises;

const writeFS = async () => {
  try {
    const readSimpsons = (await fs.readFile('./simpsonsFamily.json', 'utf-8'));
    const readSimpsons2 = JSON.parse(readSimpsons);
    
    readSimpsons2.push({ "id": "5","name": "Nelson Muntz" });

    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(readSimpsons2))
  } catch (err) {
    console.log(err.message)
  }
}

writeFS()
