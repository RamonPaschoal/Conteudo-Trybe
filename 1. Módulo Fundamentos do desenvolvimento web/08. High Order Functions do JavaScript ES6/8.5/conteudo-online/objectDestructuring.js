// Object Destructuring - Para utilizar, basta ultilizar: cosnt {chave1, chave2, ...} = objeto.

const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};

// console.log(product.name); // Essa é a forma padrão de comos pegamos um valor dentro de um objeto.

// const {name} = product; // Dessa forma conseguimos pegar apenas a chave que desejamos de um determinado objeto. Ambas as formas realizam a mesma coisa. Mas para estruturas mais complexas, essa é mais eficaz.

const {name, seller} = product; // Dessa forma conseguimos pegar mais de uma chave dentro de um determinado objeto.

console.log(name);
console.log(seller);

//===============================================================================================

// Podemos reatribuir o nome da propriedade que deseja acessar ao declará-la como uma variável

const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
  const { a: name, b: classAssigned, c: subject } = student;
  
  console.log(name); // Maria
  console.log(classAssigned); // Turma B
  console.log(subject); // Matemática

// Dessa forma, conseguimos utilizar elementos dentro de um objeto como parâmetro dentro de uma função.

const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  
  const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
  };
  
  printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas