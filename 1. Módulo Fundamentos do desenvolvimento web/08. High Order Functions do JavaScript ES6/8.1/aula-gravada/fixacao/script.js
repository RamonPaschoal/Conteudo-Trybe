const acorda = () => 'Acordando!!';

acorda();

const cafe = () => 'Bora tomar café!!';

cafe();

const dormir = () => 'Partiu Dormir!!'

dormir();

// console.log(acorda());
// console.log(cafe());
// console.log(dormir());

const doingThings = (func) => {
    const result = func();
    console.log(result);
};

doingThings(acorda);
doingThings(cafe);
doingThings(dormir);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!