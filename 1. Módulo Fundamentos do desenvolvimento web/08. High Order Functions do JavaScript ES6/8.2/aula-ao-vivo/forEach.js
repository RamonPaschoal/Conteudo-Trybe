//Status para saber se a pizza é TOP ou não
const pizzas = [
  {sabor: 'Frango com catupiry',pedidos: 99, status: ''},
  {sabor: 'Marguerita',pedidos: 75, status: ''},
  {sabor: 'Gratinada',pedidos: 68, status: ''},
  {sabor: '4 queijos',pedidos: 80, status: ''}
];

// const verificaPizza = pizza => {
//   if (pizza.pedidos >= 75) {
//     pizza.status = 'TOP';;
//   } else {
//     pizza.status = 'Não é top';
//   };
// };

// pizzas.forEach(verificaPizza);

pizzas.forEach(pizza => {
    if (pizza.pedidos >= 75) {
      pizza.status = 'TOP';;
    } else {
      pizza.status = 'Não é top';
    };
  }); // é possível fazer das duas formas.

console.log(pizzas);

//=====================================================================

//Dado uma array de 1 a 10, aplique uma multiplicação por 3 para cada elemento.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiply = numbers => {
  const arr = [];

  numbers.forEach(number => arr.push(number * 3));
//   for (let index = 0; index < numbers.length; index += 1) {
//     arr.push(numbers[index] * 3)
//   }
  return arr;
};



console.log(multiply(numbers));