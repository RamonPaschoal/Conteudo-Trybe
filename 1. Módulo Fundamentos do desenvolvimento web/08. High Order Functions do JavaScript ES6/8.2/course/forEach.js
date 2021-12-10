const listaDePessoasAprovadas = [
    'ada.lovelace@example.com',
    'marie.curi@example.com',
    'margaret.hamilton@example.com',
    'alan.turing@example.com'
];

const eviarEmail = (email) => {
  console.log(`Email para ${email} foi enviado com sucesso!`);
};

listaDePessoasAprovadas.forEach((item, posicao, array) => {
  eviarEmail(item);
  console.log(`Sua posição é a de: ${posicao}`);
  console.log(`A quantidade de pessoas no processo seletivo é: ${array.length}`);
});

//===========================================================================================

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

//===========================================================================================

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

//===========================================================================================

// Exercício de fixação

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
emailListInData.forEach(showEmailList);