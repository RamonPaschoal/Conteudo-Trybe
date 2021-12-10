//Média
let num1 = 10;
let num2 = 20;
let num3 = 30; 

// let media = (num1 + num2 + num3) / 3;

// console.log(media);

function media(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
};

console.log(media(10, 20, 30));

//========================================================================
//Nome Completo
let nome = 'Ramon';
let sobrenome = 'Paschoal';

let nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

function fullName(nome, sobrenome) {
    return (nome + ' ' + sobrenome);
}

console.log(fullName('Ramon', 'Paschoal'));

//===========================================
//Gerar array com 100 caracteres iguais
function gerarArray (caracter) {
    let array =[];
    for (let index = 0; index < 100; index += 1) {
        array.push(caracter);
    };
    return array;
};

console.log(gerarArray('*'));

//===========================================
//mega-sena
let firstNumber = randomNumber(60);
let secondNumber = randomNumber(60);
let thirdnumber = randomNumber(60);
let fourthNumber = randomNumber(60);
let fifthNumber = randomNumber(60);
let sixthNumber = randomNumber(60);

function randomNumber (maxValue) {
    return Math.ceil(Math.random() * maxValue);
};

function generateNumbers () {
    let numbers = [];
    for (let index = 0; index < 6; index += 1) {
        numbers.push(randomNumber(60))
    };
    return numbers;
};

console.log([firstNumber, secondNumber, thirdnumber, fourthNumber, fifthNumber, sixthNumber]);
console.log(generateNumbers());