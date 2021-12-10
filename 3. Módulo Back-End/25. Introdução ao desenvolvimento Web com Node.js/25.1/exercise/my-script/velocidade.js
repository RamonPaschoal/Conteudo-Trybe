// ========================================================================

// Exercicio 6:

const readline = require('readline-sync');

const distancia = readline.question('Qual a distancia percorrida? (Em m) ');
const tempo = readline.questionInt('Tempo gasto? (Em s) ');

const velMedia = () => {
  const velMedia = (distancia / tempo) * 3.6;

  console.log(`A velocidade média do carro é de ${velMedia} k/h`);
}

velMedia();