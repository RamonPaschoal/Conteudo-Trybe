let arrayLength = 3, minValue = 7, maxValue = 9;

let numbers = [];

for (let index = 0; index < arrayLength; index += 1) {
    let randonNumber = parseInt(Math.random() * (maxValue - minValue +1) + minValue);
    numbers.push(randonNumber);
}

let somaImpar = 0;

for (indexImpar = 0; indexImpar < arrayLength; indexImpar += 1) {
    if (numbers[indexImpar] % 2 !== 0) {
        somaImpar = numbers[indexImpar] + somaImpar;
    }
}

console.log(numbers);
console.log(somaImpar);