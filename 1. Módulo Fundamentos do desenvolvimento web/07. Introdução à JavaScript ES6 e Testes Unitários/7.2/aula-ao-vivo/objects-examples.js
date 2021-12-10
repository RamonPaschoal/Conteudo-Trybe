const books = {
  collection: 'The Lord of the Rings',
  book1: 'The Fellowship',
  book2: 'Two Towers',
  book3: 'Return of the King',
};

const bookAuthor = {
  authorName: 'J. R. R. Tolkien',
  address: 'Rua Colombina',
  collection: 'The Lord of the semi-infinite', //sempre tomar cuidado para ver se não tem chaves iguais, se não a nova irá sobrescrever;
};

// console.log(books);

// Object.assign(books, bookAuthor); // Vai juntar os dois objetos. Os valores de assign recebem primeiro o objeto destino, e o segundo de onde vão vir as informações adicionais.

// console.log(books);

const booksClone = Object.assign({}, books, bookAuthor);

console.log(booksClone);