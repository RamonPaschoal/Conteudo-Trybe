const fs = require('fs').promises;

const writeFS = async () => {
  try {
    const readSimpsons = (await fs.readFile('simpsons.json'));
    const readSimpsons2 = JSON.parse(readSimpsons)
      .map(({ id, name }) => `${id} - ${name}`);
    readSimpsons2.forEach(simpson => console.log(simpson))
  } catch (err) {
    console.log(err.message)
  }
}

writeFS()

module.exports = { readFS };