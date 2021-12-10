const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };

// person.nationality = 'Brazilian'
// const { nationality } = person; // Para atribuir o valor em uma chave inexistente no objeto, usar:
const {nationality = 'Brazilian'} = person;
console.log(person); // COmo pode-se ver a chave nationality não existe dentro do objeto. Nós criamos uma variável com esse conteúdo. Para adicionar essa nacionalidade no objeto: person.nationality = "Brazilian"
console.log(nationality);

//===================================================================================

// Exercício para fixação:

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));