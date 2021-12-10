// Exercício 1:

// const peso = 68;
// const altura = 1.78;

// function calculaImc() {
//   console.log(`Peso: ${peso}, Altura: ${altura}`);

//   const IMC = (peso / (altura ** 2)).toFixed(2);

//   console.log(`IMC: ${IMC}`)
// }

// calculaImc();

// ========================================================================

// Exercicio 2: é a linha 8 do arquivo package-lock.json

// ========================================================================

// Exercicio 3:

// const readline = require('readline-sync');

// const peso = readline.question('Qual seu peso? ');
// const altura = readline.question('Qual sua altura (Em cm)? ');

// function calculaImc() {
//   console.log(`Peso: ${peso}, Altura: ${altura}`);

//   const IMC = (peso / ((altura / 100) ** 2)).toFixed(2);

//   console.log(`IMC: ${IMC}`)
// }

// calculaImc();

// ========================================================================

// Exercicio 4:


// const readline = require('readline-sync');

// const peso = readline.questionFloat('Qual seu peso? (Em kg) '); // Incluimos o metodo float para números decimais
// const altura = readline.questionInt('Qual sua altura? (Em cm) ');

// function calculaImc() {
//   console.log(`Peso: ${peso}, Altura: ${altura}`);

//   const IMC = (peso / ((altura / 100) ** 2)).toFixed(2);

//   console.log(`IMC: ${IMC}`)
// }

// calculaImc();

// ========================================================================

// Exercicio 5:

const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso? (Em kg) '); // Incluimos o metodo float para números decimais
const altura = readline.questionInt('Qual sua altura? (Em cm) ');

function calculaImc() {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const IMC = (peso / ((altura / 100) ** 2)).toFixed(2);

  if(IMC < 18.5) {
    return console.log('Situação: Abaixo do peso (magreza)');
  } else if(IMC >= 18.5 && IMC < 24.9) {
    return console.log('Situação: Peso normal');
  } else if(IMC >= 25 && IMC < 29.9) {
    return console.log('Situação: Acima do peso (sobrepeso)');
  } else if(IMC >= 30 && IMC < 24.9) {
    return console.log('Situação: Obesidade grau I');
  } else if(IMC >= 35 && IMC < 39.9) {
    return console.log('Situação: Obesidade grau II');
  } else {
    return console.log('Situação: Obesidade grau III e IV')
  }
}

calculaImc();
