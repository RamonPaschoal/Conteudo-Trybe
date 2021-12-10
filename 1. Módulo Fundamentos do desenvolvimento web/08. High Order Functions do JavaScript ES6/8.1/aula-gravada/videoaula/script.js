const sum = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

const mult = (num1, num2) => num1 * num2;

const div = (num1, num2) => num1 / num2;

// console.log(sum(10, 5));
// console.log(sub(10, 5));

const calculator = (func) => func(10, 5); // função que tem como parâmetro uma outra função. Não precisaria ficar digitando 10 e 5 para cada console.log.


console.log(calculator(sum));
console.log(calculator(sub));
console.log(calculator(mult));
console.log(calculator(div));
