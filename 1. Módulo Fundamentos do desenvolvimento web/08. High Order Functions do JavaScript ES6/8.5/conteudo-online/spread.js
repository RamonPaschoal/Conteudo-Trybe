// A ferramenta spread serve para juntar ou adicionar elementos em um objeto ou array. É definido por ...'array/Objeto/string'


const carros = ['Gol', 'HB20', 'Focus'];
const motos = ['Biz', 'R1'];

const veiculos = [...carros, ...motos];
const veiculos1 = ['f40', ...motos, 'Uno', ...carros, 'Fit'];

// console.log(veiculos);
console.log(veiculos1);

//=====================================================================

const pessoa = {
    nome: 'Nádia',
    idade: 28,
    cidade: 'Belo Horizonte'
};

const conhecimentosTrybe = {
    softSkills: true,
    hardSkills: true,
    trabalho: true
};

const pessoaTryber = {
    ...pessoa,
    ...conhecimentosTrybe
};

console.log(pessoaTryber);

//=====================================================================

// É possível aplicar esse conceito em funções prontas do Javascript que recebem múltiplos parâmetros, como as funções Math.max e Math.min.

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

// Ou exectuar ele para uma determinada função, como:

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76


//=====================================================================

// Exercícios para fixação:

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Abacaxi', 'Maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Aveia', 'Nutella'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));