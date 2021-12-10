const promise = () => {
  new Promise((resolve, reject) => {
    const newArray = Array.from({ length: 10 },
      () => Math.ceil(Math.random() * 50))
      .map(array => array ** 2)
      .reduce((acc, crr) => acc + crr);

      if(newArray > 8000) {
        return reject(newArray)
      } else {
        return resolve(newArray)
      }
  })
  // .then(number => console.log(`Promise resolvida: ${number}`)) -> exercício 2
  // .then(number => console.log([2, 3, 5, 10].map(array => number / array))) -> exercicio 3
  .then(number => console.log(`A soma do array é: ${[2, 3, 5, 10].map(array => number / array).reduce((acc, crr) => acc + crr)}`)) // Exercício 5
  .catch(number => console.log(`Promise rejeitada: ${number}`)); // Exercício 4
}

promise();