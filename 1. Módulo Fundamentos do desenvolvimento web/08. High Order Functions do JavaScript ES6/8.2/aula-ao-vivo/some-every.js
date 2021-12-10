// some()
// Saber se existe alguma pizza com sabor 4 queijos

const pizzas = [
    {sabor: 'Frango com catupiry',pedidos: 99, status: ''},
    {sabor: 'Marguerita',pedidos: 75, status: ''},
    {sabor: 'Gratinada',pedidos: 68, status: ''},
    {sabor: '4 queijos',pedidos: 80, status: ''}
];

const flavorSome = pizzas.some(pizza => pizza.sabor === '4 Queijos');

// console.log(flavorSome);

// Every()

const flavorEvery = pizzas.every(pizza => pizza.pedidos < 100);

console.log(flavorEvery);

// Funções some() e every() sempre vão retornar apenas valores booleanos.
