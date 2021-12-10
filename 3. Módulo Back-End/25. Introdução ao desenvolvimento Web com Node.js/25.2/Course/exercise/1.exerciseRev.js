const calc = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {
      return reject("Informe apenas números");
    };

    const calculate = (num1 + num2) * num3;

    if (calculate < 50) {
      reject("Valor muito baixo")
    }

    resolve(calculate)
  })
}

// calc(5, 5, 10)
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// calc(2, 2, 6)
// .then(result => console.log(result))
// .catch(err => console.log(err));

// calc(2, 2, "jonas")
// .then(result => console.log(result))
// .catch(err => console.log(err));

module.exports = { calc };