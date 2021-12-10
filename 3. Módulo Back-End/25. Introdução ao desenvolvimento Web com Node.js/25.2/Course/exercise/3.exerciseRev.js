const { calc } = require('./1.exerciseRev')

const randomNumber = () => {
  return Math.floor(Math.random() * 100 + 1);
}

const callRandomNumber = async () => {
  const randomNumbers = Array.from({ length: 3 }).map(randomNumber);

  try {
    const result = await calc(...randomNumbers)
    console.log(result)
  } catch (err) {
    console.log(err.message)
  }
}

callRandomNumber();