// reduce() reduz o array em um único valor. 

const assert = require('assert');

const numbers = [2, 3, 4, 6, 8, 12, 24];

// Somando os números do array usando o for

let sumWithFor = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
    sumWithFor = sumWithFor + numbers[index];
}

console.log(`Valor com for: ${sumWithFor}`);

// Somando os números com o reduce;

const sumWithReduce = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(`Valor com for: ${sumWithReduce}`);
// Teste

const expectedValue = 59;
assert.strictEqual(sumWithReduce, expectedValue);

const sumEvenNumbers = numbers.reduce((previousValue, currentValue) => {
    if(currentValue % 2 === 0) {
        return previousValue + currentValue;
    }
    return previousValue + 0;
}, 0);

console.log(sumEvenNumbers);

const sumEvenWithFilter = numbers
  .filter(number => number % 2 === 0)
  .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sumEvenWithFilter);