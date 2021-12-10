// const array = ['Ana', 'Joana', 'Alberto', 'Joaquim'];

// console.log(array);
// console.log(array[0], array[1], array[2], array[3]);
// console.log(...array); // tem a mesma funcionalidade da linha acima.

//=====================================================================

const assert = require('assert');

const horrorBooks = ['It', 'The Shining'];
const Scifibooks = ['I Robot', 'Caves of Steel', 'The end of Eternity'];

// Utilizando Fot

let awesomeBooks = [];

for(let i = 0; i < horrorBooks.length; i += 1) {
  awesomeBooks.push(horrorBooks[i]);
}

for(let i = 0; i < Scifibooks.length; i += 1) {
  awesomeBooks.push(Scifibooks[i]);
};

// Utilizando o spread Operator

const books = [...horrorBooks, ...Scifibooks];
// console.log(books)

// Testes:

const expectedValue = ['It', 'The Shining', 'I Robot', 'Caves of Steel', 'The end of Eternity'];
assert.deepStrictEqual(books, expectedValue);

//====================================================================================================

const assert = require('assert');

const point = [1.0, 2.2, -6,6];
const otherPoints = [0.1, 3.5, -99,6];

printPointCoordinates = (x, y, z) => `Point coordinates are x = ${x}, y = ${y}, z = ${z}`

console.log(printPointCoordinates(...point))
console.log(printPointCoordinates(...otherPoints))

// Teste

const expectedValuePoint = 'Point coordinates are x = 1, y = 2.2, z = -6.6';
assert.strictEqual(printPointCoordinates(...point), expectedValuePoint);

const expectedValueOtherPoint = 'Point coordinates are x = 0.1, y = 3.5, z = -99.6';
assert.strictEqual(printPointCoordinates(...otherPoints), expectedValueOtherPoint);
