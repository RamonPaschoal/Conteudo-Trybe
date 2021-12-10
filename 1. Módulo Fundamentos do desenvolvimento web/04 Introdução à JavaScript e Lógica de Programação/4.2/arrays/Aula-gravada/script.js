// Dentro de arrays o primeiro valor é o 0. 4 queijos é posição 0, frango 1, marguerita 2, palmito 3 e chocolate 4.
let pizzas = ['4 Queijos', 'Frango com Catupiry', 'Marguerita', 'Palmito', 'Chocolate'];

// Para adicionar itens dentro de uma array, colocar a variável, o número do próximo valor, entre colchetes, da variável pizza. Terminava em 4, logo a próxima posição é 5.
pizzas [5] = 'Peito de peru'

// Caso tente colocar um valor que já exista, ele irá subescrever o anterior. então se eu fizer pzza [5] = 'Peito de peru', a posição 4 que era chocolate, vira peito de peru.
// Outra forma de adicionar um valor a variável é com o comando:

pizzas.push ('Portuguesa', 'Calabresa');
pizzas.unshift('Brócolis'); //Adiciona um valor na posição 0
pizzas.pop() //remove o último valor
pizzas.shift(); // remove o primeiro valor;

// Uma ou mais novas posições foi feita dentro da variável.

console.log('Menu de sabores: ' + pizzas);

// para saber o tamanho de uma array, comando length:

console.log(pizzas.length);

// é possível colocar em ordem alfabética com o comando sort:

// console.log(pizzas.sort());

// dentro de uma array, é possível trazer um único elemento de, através da posição da variável:

console.log(pizzas[3]); // posição 3 é Palmito. Porém como tem um comando sorte acima, ele traz a 3 posição do pizzas.sort

// caso precise trazer valores individuais, e não da array inteira:

for (let index = 0; index < pizzas.length; index += 1) {
    console.log(pizzas[index]);
}

let indexPizzas = pizzas.indexOf('Palmito');
console.log(indexPizzas);