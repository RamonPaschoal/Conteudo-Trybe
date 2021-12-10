const enviarEmail = (pessoaAprovada) => {
  const parte1 = `${pessoaAprovada.email}: Parabéns ${pessoaAprovada.nome}`;
  const mensagem = `${parte1} sua nota foi ${pessoaAprovada.nota}`;
  console.log(mensagem);
};

const listaDePessoas = [
  {nome: 'Jerry Mors', email: 'jerry@example.com', nota: 51},
  {nome: 'Rabbit Jessica', email: 'jessica@example.com', nota: 101},
  {nome: 'Ada Lovelace', email: 'ada.lovelace@example.com', nota: 150},
  {nome: 'Bruno Gomes', email: 'bruno@example.com', nota: 0},
  {nome: 'Augustina Vega', email: 'augustina@example.com', nota: 101},
  {nome: 'Daniel Soto', email: 'daniel@example.com', nota: 50},
  {nome: 'Emiliano Domingues', email: 'emiliano@example.com', nota: 150},
  {nome: 'Carla Neta', email: 'carla@example.com', nota: 100}
];

const pessoasAprovadas = listaDePessoas.filter((person) => person.nota >= 100);

pessoasAprovadas.forEach((person) => enviarEmail(person));

//======================================================================================

const numbers = [19, 21, 30, 3, 45, 22, 15];

const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2); // [ 30, 22 ]

//======================================================================================

const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];
  
  const verifyAgeDrive = (arrayOfPeople) => (
    arrayOfPeople.filter((people) => (people.age < 18))
  );
  
  console.log(verifyAgeDrive(objPeople));
  // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

//======================================================================================

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]