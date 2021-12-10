const { calc } = require('./1.exerciseRev')

const randomNumber = () => {
  return Math.floor(Math.random() * 100 + 1);
}

// calc(randomNumber(), randomNumber(), randomNumber())
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// Gabarito realizou da forma abaixo:

const callRandomNumber = () => {
  const randomNumbers = Array.from({ length: 3 }).map(randomNumber);

  calc(...randomNumbers)
  .then(result => console.log(result))
  .catch(err => console.log(err));
}

callRandomNumber();