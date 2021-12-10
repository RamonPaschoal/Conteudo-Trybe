db.carros.insertMany([
  {
    "_id": 1,
    "nome": "Gol",
    "preco": 15000,
    "portas": 4,
    "status": "usado"
  },
  {
    "_id": 2,
    "nome": "Onix",
    "preco": 25000,
    "portas": 4,
    "status": "semi-novo"
  },
  {
    "_id": 1,
    "nome": "Gol",
    "preco": 15000,
    "portas": 4,
    "status": "usado"
  },
  {
    "_id": 3,
    "nome": "Marea",
    "preco": 1000,
    "portas": 4,
    "status": "usado"
  },
  {
    "_id": 4,
    "nome": "Kombi",
    "preco": 10000,
    "portas": 2,
    "status": "semi-novo"
  },
  {
    "_id": 5,
    "nome": "Compass",
    "preco": 100000,
    "portas": 4,
    "status": "novo"
  },
], {ordered: false});

db.carros.insertMany([
  {
    "productName": "Lápis",
    "stock": 10,
    "price": 20,
    "status": "A"
  },
  {
    "productName": "Tesoura",
    "stock": 5,
    "status": "B"
  },
  {
    "productName": "Borracha",
    "price": 15,
    "status": "A"
  }
], {ordered: false});