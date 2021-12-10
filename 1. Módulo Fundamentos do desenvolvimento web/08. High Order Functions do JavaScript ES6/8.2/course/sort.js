const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort(); //Ordena food em ordem alfabética
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9] Como pode-se perceber, não veio em ordém numérica, e sim alfabética, ou seja, a ordem não vem como desejamos

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]