const fs = require('fs').promises;

const calc = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (
      typeof num1 !== "number" ||
      typeof num2 !== "number" ||
      typeof num3 !== "number"
      ) {
        return reject ('Informe apenas números')
      }

    const jonas = (num1 + num2) * num3;

    if (jonas < 5000) {
      return reject ('Valor muito baixo')
    }

    return resolve(jonas);
  })
};

const randomNumber = () => {
  return Math.floor(Math.random() * 100 + 1);
}

const jonas = async () => {
  try {
    const result = await calc(randomNumber(), randomNumber(), randomNumber());
    console.log(result)
  } catch (err){
    console.log(err.message)
  }
}

jonas();