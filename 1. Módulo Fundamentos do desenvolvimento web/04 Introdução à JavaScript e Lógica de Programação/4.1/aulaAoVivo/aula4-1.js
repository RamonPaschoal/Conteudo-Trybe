let num1 = 5;
let num2 = 10;
let num3 = 15;

// Soma
let soma = num1 + num2;

// Subtração 
let subtracao = num1 - num2;

// Divisão
let divisao = num1 / num2;

// Multiplicação
let multiplicacao = num1 * num2;

// Comparação
let comparacao = num1 > num2;

// Concicional
if(num1 > num2) {
    console.log('num1 wins');
} else {
    console.log('num2 wins');
}

// Como saber se num 1 + num2 é par
let isEven = ((num1 + num2) % 2) == 0;

console.log(isEven);

// E o num1 + num2 + num3?
isEven = ((num1 + num2 + num3) % 2) == 0;

console.log(isEven);

// um = é atribuição. dois == valor (Ou seja 10 e '10' são iguais). três === valor e tipo (ou seja, 10 e '10' são diferentes, pois o tipo é diferente).

// Switch
let weekDay =4;

switch(weekDay) {
    case 1:
        console.log("Domingo");
        break;       
    case 2:
        console.log('Segunda-feira');
        break;   
    case 3:
        console.log("Terã-feira");
        break;       
    case 4:
        console.log('Quarta-feira');
        break;
    case 5:
        console.log("Quinta-feira");
        break;        
    case 6:
        console.log('Sexta-feira');
        break;
    case 7:
        console.log("Sabado");
        break;
    default:
        console.log('Não existe esse dia, ainda!')
}