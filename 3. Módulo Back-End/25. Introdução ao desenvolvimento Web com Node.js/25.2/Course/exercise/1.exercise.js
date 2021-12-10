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

    if (jonas < 50) {
      return reject ('Valor muito baixo')
    }

    return resolve(jonas);
  })
};

calc(2, 5, 'jonas')
  .then((result) => console.log(result))
  .catch((err) => {console.log(err)});

calc(2, 5, 3)
.then((result) => console.log(result))
.catch((err) => {console.log(err)});

calc(2, 5, 30)
.then((result) => console.log(result))
.catch((err) => {console.log(err)});