const assert = require('assert');

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

// Adicione o código do exercício aqui:

// Exercício 1: 
function authorBornIn1947() {
  // escreva aqui o seu código
  const author1945 = books.find(book => book.author.birthYear === 1947)

  return author1945.author.name;
}
assert.strictEqual(authorBornIn1947(), 'Stephen King');

//======================================================================

// Exercício 2:

function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  nameBook = books[0].name;
  books.forEach(book => {
    if(nameBook.length > book.name.length) {
      nameBook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');

//======================================================================

// Exercício 3:

const expectedResult3 = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
  return books.find(book => book.name.length === 26);
}

assert.deepStrictEqual(getNamedBook(), expectedResult3);

//======================================================================

// Exercício 4:

const expectedResult4 = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((a, b) => b.releaseYear - a.releaseYear)
}

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult4);

//======================================================================

// Exercício 5:

const expectedResult5 = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every(book => book.author.birthYear >= 1900 && book.author.birthYear < 2000);
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult5);

//======================================================================

// Exercício 6:

const expectedResult6 = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some(book => book.releaseYear >= 1980 && book.releaseYear < 1990)
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult6);

//======================================================================

// Exercício 7:

const expectedResult7 = false;

function authorUnique() {
  // escreva seu código aqui
  return books.every(book => books.some(someBook => {
    if(book.author.birthYear === someBook.author.birthYear && book.author.name !== someBook.author.name) {
      return true;
    }
  }))
}

assert.strictEqual(authorUnique(), expectedResult7);