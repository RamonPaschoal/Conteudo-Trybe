//Exercício 1:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers)

//==========================================================

//Exercício 2:
let soma = 0;

for (let sum = 0; sum < numbers.length; sum += 1) {
    soma = numbers[sum] + soma;
}

console.log (soma)

//==========================================================

//Exercício 3:
let media = 0

for (let sum = 0; sum < numbers.length; sum += 1) {
    media = soma / numbers.length;
}

console.log (media)

//==========================================================

//Exercício 4:
if (media >= 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor que 20')
}

//==========================================================

//Exercício 5:
let maior = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maior) {
        maior = numbers[index];
    };
};

console.log(maior);

//==========================================================

//Exercício 6:
let impar = 0;

for (ind = 0; ind < numbers.length; ind += 1) {
    if (numbers[ind] % 2 !== 0) {
        impar += 1;
    }
}
if (impar ===0) {
    console.log('Nenhum valor impar encontrado');
} else {
    console.log(impar);
}

//==========================================================

//Exercício 7:
let menor = 100;

for (idx = 0; idx < numbers.length; idx += 1) {
    if (numbers[idx] < menor) {
        menor = numbers[idx];
    }
}

console.log(menor);

//==========================================================

//Exercício 8:
let array = [];

for (index = 1; index <= 25; index +=1) {
    array.push(index);
}
console.log(array);

//==========================================================

//Exercício 9:
for (index = 0; index < array.length; index += 1) {
    console.log(array[index] / 2)
}