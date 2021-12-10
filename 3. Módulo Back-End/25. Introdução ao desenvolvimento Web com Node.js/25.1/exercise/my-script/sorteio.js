// Exercício 7
const readline = require('readline-sync');

const choiceNumber = (numero, resposta) => {
  if(numero !== resposta) {
    return console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  }
  return console.log("Parabéns, número correto!");
};

const playGame = () => {
  const numero = Math.ceil(Math.random() * 10);
  const resposta = readline.questionInt('Escolha um número de 1 a 10? ');
  

  choiceNumber(numero, resposta);

  const playAgain = readline.question('Deseja jogar de novo? (Digite s para sim, e qualquer outra coisa para não): ');

  if(playAgain !== 's') {
    return console.log('Ok, até a próxima!');
  }

  playGame();
}

playGame();