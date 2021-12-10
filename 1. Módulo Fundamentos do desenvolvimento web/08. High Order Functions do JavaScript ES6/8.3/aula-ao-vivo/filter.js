const cities = [
  { state: 'AM', name: 'Manaus', region: 'N' },
  { state: 'PA', name: 'Belém', region: 'N' },
  { state: 'TO', name: 'Porto Nacional', region: 'N' },
  { state: 'MG', name: 'Nepomuceno', region: 'SE' },
  { state: 'BA', name: 'Cachoeira', region: 'NE' },
  { state: 'PR', name: 'Curitiba', region: 'S' },
  { state: 'SP', name: 'Hortolândia', region: 'SE' },
  { state: 'RN', name: 'Touros', region: 'NE' },
  { state: 'CE', name: 'Jericoacoara', region: 'NE' },
  { state: 'TO', name: 'Três Pedras', region: 'N' },
  { state: 'MG', name: 'João Pinheiro', region: 'SE' }
];

// 1. Encontre todas as cidades da região nordeste (NE)

// console.log('As cidades que ficam na região nordeste são: ');

const citiesNE = cities.filter(city => city.region === 'NE');

// Caso o filter não encontre nenhuma informação ele retorna um array vazio

// console.log(citiesNE);

// console.log('----------------------------------------------------------------------------')

//================================================================================================

// 2. Encontre todas as cidades do estado de Tocantins

const citiesTO = cities.filter(city => city.state === 'TO');

// console.log(citiesTO);

//================================================================================================

// 3. Encontre todas as cidades que começam com a letra C

// const citiesC = cities.filter(city => city.name[0] === 'C');
const citiesC = cities.filter(city => city.name.startsWith('C')); // Mesma coisa porém usando uma função que simplifica
// const citiesC = cities.filter(city => city.name.endsWith('o')); // Também é possível saber qual o último caracter de uma string
//é possivel fazer startsWith em uma array
// console.log(citiesC);

//===================================================================================================


// caso fosse criar o .filter seria assim:

const numbers = [1, 2, 3, 4];

const filter = (array, callback) => {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if(callback(array[index])) {
      newArray.push(array[index]);
    }
  }
  return newArray;
}

console.log(filter(numbers, (number) => number <= 2));