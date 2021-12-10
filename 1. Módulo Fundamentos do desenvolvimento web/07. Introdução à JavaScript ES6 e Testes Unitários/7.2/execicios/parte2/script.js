const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//===========================================================================

// Exercício 1:

// const addTurno = (obj, key, valor) => {
//     lesson2.turno = valor;
// }

// addTurno(lesson2, 'turno', 'manhã');
// console.log(lesson2);

//===========================================================================

// Exercício 2:

// const keyList = (obj) => {
//   console.log(Object.keys(obj))
// }

// keyList(lesson1);

//===========================================================================

// Exercício 3:

// const objLength = (obj) => Object.keys(obj).length;

// console.log(objLength(lesson1))

//===========================================================================

// Exercício 4:

// const objValues = (obj) => Object.values(obj);

// console.log(objValues(lesson1));

//===========================================================================

// Exercício 5:

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3}); // fazendo isso junta todos os objetos em um novo objeto, sem sobrescrever. Vai ser um novo objeto com os 3 objetos intocáveis.

console.log(allLessons);

//===========================================================================

// Exercício 6:

// const sumStudents = (obj) => {
//     // const obj1 = allLessons.lesson1.numeroEstudantes;
//     // const obj2 = allLessons.lesson2.numeroEstudantes;
//     // const obj3 = allLessons.lesson3.numeroEstudantes;

//     // const sumObjs = obj1 + obj2 + obj3;

//     // console.log(sumObjs);
//     let total = 0;
//     const array = Object.keys(obj)

//     for (i = 0; i < array.length; i += 1) {
//         total += obj[array[i]].numeroEstudantes
//     }
//     return total
// }


// console.log(sumStudents(allLessons));

//===========================================================================

// Exercício 7:

const getValueByNumber = (key, valor) => {
    
}