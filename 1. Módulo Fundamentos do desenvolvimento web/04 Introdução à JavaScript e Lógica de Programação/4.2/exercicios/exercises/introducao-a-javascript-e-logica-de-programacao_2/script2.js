//Exercício 1:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

//==========================================================

//Exercício 2:
let soma = 0;

for (let indexSoma = 0; indexSoma < numbers.length; indexSoma += 1) {
    soma = numbers[indexSoma] + soma;
}

console.log(soma);

//==========================================================

//Exercício 3:
let media = 0;

for (let indexMedia = 0; indexMedia < numbers.length; indexMedia += 1) {
    media = soma / numbers.length;
}

console.log(media);

//==========================================================

//Exercício 4:
for (let indexMedia = 0; indexMedia < numbers.length; indexMedia += 1) {
    media = soma / numbers.length;
 }
 if (media > 20) {
    console.log ('valor maior que 20');
} else {
    console.log('valor menor que 20')
}

//==========================================================

//Exercício 5:
let maior = 0;

for (let indexMaior = 0; indexMaior < numbers.length; indexMaior += 1) {
    if (numbers[indexMaior] > maior) {
        maior = numbers[indexMaior];
    }
}

console.log(maior)

//==========================================================

//Exercício 6:
let impar = 0;
for (let indexImpar = 0; indexImpar < numbers.length; indexImpar +=1) {
    if (numbers[indexImpar] % 2 !== 0) {
        impar += 1;
    }
}
if (impar > 0) {
console.log(impar);
} else {
    console.log('nenhum valor impar encontrado');
}
//==========================================================

//Exercício 7:
let menor = numbers[0];

for (let indexMenor = 0; indexMenor < numbers.length; indexMenor += 1) {
    if (numbers[indexMenor] < menor) {
        menor = numbers[indexMenor];
    }
}

console.log(menor);

//==========================================================

//Exercício 8:
let array = [];

for (let indexArray = 1; indexArray <= 25; indexArray +=1) {
    array.push(indexArray)
}

console.log(array);
//==========================================================

//Exercício 9:
let divisao = 0;
for (let indexDiv = 0; indexDiv < array.length; indexDiv+= 1) {
    divisao = array[indexDiv] / 2
    console.log(divisao);
}