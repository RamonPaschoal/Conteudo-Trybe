// Exercício 1:
const jonas = (name) => {
  const info = {
    nomeCompleto: name,
    email: `${name.replace(' ','_').toLowerCase()}@trybe.com.br`,
  }
  return info;
};

const newEmployees = (callback) => {
  const funcionario = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return funcionario;
};

  console.log(newEmployees(jonas));

//================================================================================

// Exercício 2:

const numberGenerator = () => {
  const number = Math.ceil(Math.random() * 5);

  return number;
}

const choiceNumber = (number, funcNumber) => {
  if (number === funcNumber()) {
    return 'Parabéns você ganhou!';
  } else {
    return 'Tente novamente'
  }
};

console.log(choiceNumber(4, numberGenerator));

//================================================================================

// Exercício 3:
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let pontuacao = 0;

const checkAnswers = (rightAnswers, studentAnswers) => {
  for(i = 0; i < rightAnswers.length; i += 1) {
    if(studentAnswers[i] === rightAnswers[i]) {
      pontuacao += 1;
    }
    else if (studentAnswers[i] === 'N.A'){
      pontuacao = pontuacao;
    }
    else {
      pontuacao = pontuacao - 0.5;
    }
  }
  return `A pontuação final do estudante foi de ${pontuacao} pontos.`;
}

console.log(checkAnswers(rightAnswers, studentAnswers));