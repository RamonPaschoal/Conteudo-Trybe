const person = {
    name: 'Heder',
    lastName: 'Epaminondas',
};

// console.table(`Olá, caro ${person.name}!`);
// console.log(`Olá, querido ${person['lastName']}`); // da para fazer pelas duas formas.
// console.log(`Olá querido ${person.name} ${person.lastName}`);

person.age = 78;
person.name = 'Ramon';
person['isBeautiful'] = true;

// console.log(person);

let xablau = [1, 2, 3, 4];
// console.log(typeof(xablau)); // vai acusar que xablau é um objeto, e não uma array, pois array é um objeto. A chave é o index, ou seja, chave 0 = valor 1, chave 1 = valor 2 e assim por diante

console.log(Object.keys(person)); // retornará uma array das chaves do objeto person;
console.log(Object.keys(xablau));
console.log(Object.keys(person).includes('lastName'));

console.log(Object.values(person));
console.log(`Pessoa: ${Object.values(person)}`); // quando coloca em templates literals ele tira do array e traz como se fosse uma string.

console.log(Object.entries(person)); // entries vai trazer as entradas do objeto, ou seja, vai trazer a chave e o valor respectivo em arrays, uma para cada chave;