// Exercício 1:

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue));
};

// console.log(flatten(arrays))

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

//===============================================================================

// Exercício 2, 3 e 4:

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Exercício 2:

const expectedResult2 = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
    const names = books.reduce((acc, book, index, array) => {
      if (index === array.length - 1) return `${acc} ${book.author.name}.`;
      return `${acc} ${book.author.name},`;
    }, '');
    return names.trim();
  }
  
// console.log(reduceNames(books));

assert.strictEqual(reduceNames(), expectedResult2);

//=============================================================================

// Exercício 3:

const expectedResult3 = 43;

function averageAge() {
  const averageLength = books.map(book => book.releaseYear - book.author.birthYear).length;
  const average = books.map(book => book.releaseYear - book.author.birthYear)
  .reduce((acc, crr) => (acc + crr));

  return average / averageLength;
}

// console.log(averageAge(books));

assert.strictEqual(averageAge(), expectedResult3);

//=============================================================================

// Exercício 4:

const expectedResult4 = 'As Crônicas de Gelo e Fogo';

function longestNamedBook() {
  const bookLength = books.map(book => book.name)
  .reduce((acc, crr) => {
      if(acc.length > crr.length) {
          return acc
      }
    return crr
  })

  return bookLength
}
  
// console.log(longestNamedBook(books)
assert.deepStrictEqual(longestNamedBook(), expectedResult4);

//=============================================================================

// Exercício 5:

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, crr) => acc + crr.split('').reduce((acc, crr) =>{
    if (crr === 'a' || crr === 'A') return acc +1;

  }
  ,0),0)
}

assert.deepStrictEqual(containsA(), 20);

//=============================================================================

// Exercício 6:

// const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
// const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// function studentAverage() {
//   // escreva seu código aqui
// }

// const expected5 = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];

// assert.deepStrictEqual(studentAverage(), expected5);