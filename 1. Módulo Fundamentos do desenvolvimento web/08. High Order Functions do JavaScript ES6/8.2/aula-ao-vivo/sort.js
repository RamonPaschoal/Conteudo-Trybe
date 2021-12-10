const numbers = [3, 4, 5, 8, 6, 9, 2, 1, 7, 12, 289, 43, 90];

numbers.sort((a, b) => a - b);
// Caso queira colocar em ordem decrescente, basta inverter os parametros: numbers.sort((a, b) => b - a);
console.log(numbers);

console.log(numbers[0]); // Para trazer o menor valor, basta selecionar o primeiro valor, pois está em ordem crescente. Para trazer o maior valor, inverte a ordem e traz o primeiro valor novamente.

const games = ['PES', 'Age of Empires', 'CS:GO', 'Worms'];

console.log(games.sort().reverse());
// console.log(games.reverse());
