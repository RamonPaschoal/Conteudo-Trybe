const pizzas = [
    {sabor: 'Frango com catupiry',pedidos: 99, status: ''},
    {sabor: 'Marguerita',pedidos: 75, status: ''},
    {sabor: 'Gratinada',pedidos: 68, status: ''},
    {sabor: '4 queijos',pedidos: 80, status: ''}
];

const flavorFind = pizzas.find(pizza => pizza.pedidos > 60 && pizza.pedidos < 80);

console.log(flavorFind.sabor);