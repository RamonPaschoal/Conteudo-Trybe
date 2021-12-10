// function soma (num1, num2) {
//     return num1 + num2;
// }

// console.log(soma(5,7));

// const soma = function (num1, num2) {
//     return num1 + num2;
// }

// console.log(soma(5,7));

// const soma = (num1, num2) => { // => é a arrow function, ou seja, uma forma de declara uma função sem precisar digitar function. mesmo efeito da função acima
//     return num1 + num2;
// }

// console.log(soma(5,7));

const soma = (num1, num2) => num1 + num2; /* conseguimos simplificar ainda mais a função dessa forma*/

console.log(soma(5,7));

const contaPalavras = frase => frase.split(' ').length; // quando a função só tem um parâmetro, não precisa nem dos (), basta digitar o mesmo.

console.log(contaPalavras('Fala tribo, beleza?'))

const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade}); // Para determinar objetos, é necessário utilizar {}, porém a função entender que trata-se do corpo dela. Para isso, é necessário colocar entre parenteses ().

console.log(objetoPessoa('Joaquim', 25))