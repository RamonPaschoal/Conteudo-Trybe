const person = {
  name: 'Carol',
  lastName: 'Santos',
};


// greetingPeople(person);

person.greet = (callback) => {
  return callback();
};

// console.log(person);

//cumprimento formal
const formalGreeting = () => {
  console.log('Boas vindas, sinta-se à vontade em nosso recinto.')
};

// person.greet(formalGreeting);

//cumprimento mau-humorado
const badMoodGreeting = () => {
  console.log('Não fale comigo.')
};

// person.greet(badMoodGreeting);

const greetingPeople = (person, mood) => {
    console.log(`Olá ${person.name}, como vai você?`);

    if (mood === 'formal') {
        person.greet(formalGreeting);
    } else {
        person.greet(badMoodGreeting);
    }
  };

  greetingPeople(person, 'jonas');