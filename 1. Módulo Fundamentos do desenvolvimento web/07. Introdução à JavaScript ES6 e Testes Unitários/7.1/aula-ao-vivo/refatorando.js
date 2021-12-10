//Calcula área de um triângulo retângulo
// function calcArea (base, height) {
//   return (base * height) / 2;
// }	

const calcArea = (base, height) => (base * height) / 2;

console.log(calcArea(10, 5));

// ----------------------------------------

//Quebra frase
// function splitSentence(word) {
//   return word.split(' ');
// }	

const splitSentence = word => word.split(' ');

console.log(splitSentence('Hey, Ho, Lets Go'));

// ----------------------------------------

//Conta quantas vezes o maior número se repete
const highestCount = (array) => {
  let hight = array[0];
  let rept = 1;
  for (let index = 1; index < array.length; index += 1){
      if (array[index] > hight){
          hight = array[index];
          rept = 1;
      } else if (array[index] == hight){
           rept += 1;
      }
  }
  return rept;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// ----------------------------------------

// Template Literals - ${}
// ----------------------------------------

let xablau = '=D';
const message = `Essa é a minha 
primeira mensagem. Esta é outra frase. ${2+2}`;

console.log(message);

// Enviar e-mail para um grupo de pessoas
const to = 'Turma 12';
const value = 'R$ 17,90';

const email =
`Olá ${to},
o valor da sua cobrança é ${value}.
Esta é uma mensagem automática.`;

console.log(email);