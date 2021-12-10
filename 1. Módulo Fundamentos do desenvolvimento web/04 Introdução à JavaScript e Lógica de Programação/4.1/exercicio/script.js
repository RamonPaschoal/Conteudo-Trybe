// 1:
let a = 5;
let b = 7;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//======================================================================

// 2:
let a = 5;
let b = 7;

if (a > b) {
    console.log('a é maior que b')
} else {
    console.log ('b é maior que a')
}

//======================================================================

// 3:
let a = 200;
let b = 15;
let c = 7;

if (a > b && a > c) {
    console.log('O maior número é o a: '+ a)
} else if (b > a && b > c) {
    console.log('O maior número é o b: '+ b)
} else {
    console.log('O maior número é o c: '+ c)
}

//======================================================================

//4:
let number = -50;

if (number > 0) {
    console.log('positive')
} else if (number <0) {
    console.log('negative')
} else {
    console.log('zero')
}

// 5:
let a = 80;
let b = 70;
let c = 30;

let somaAngulos = a + b + c;

let angulosPositivo = a > 0 && b > 0 && c > 0;

if (angulosPositivo) {
    if (somaAngulos === 180) {
        console.log(true)
    } else {
        console.log(false);
    };
} else {
    console.log('Erro: ângulo invalido')
}

//======================================================================

// 6:
let pecaXadrez = 'BIsPo';
let pecaMinusculo = pecaXadrez.toLowerCase()

if (pecaMinusculo === 'rei') {
    console.log('Apenas uma casa para: Frente, diagonal, lado');
} else if (pecaMinusculo === 'rainha') {
    console.log('Frente, diagonal, lado');
} else if  (pecaMinusculo === 'torre') {
    console.log('Frente e lado');
} else if (pecaMinusculo === 'bispo') {
    console.log('Diagonais');
} else if (pecaMinusculo === 'cavalo') {
    console.log('Apenas em L');
} else if (pecaMinusculo === 'peão') {
    console.log('Apenas uma casa para frente. Primeiro movimento pode andar duas casas para frente. Come apenas na diagonal');
} else {
    console.log('Peça inválida')
}

//======================================================================

// 7:
let nota = 80;

if (nota >= 90 && nota <= 100) {
    console.log('A')
} else if (nota >= 80 && nota < 90) {
    console.log('B')
} else if (nota >= 70 && nota < 80) {
    console.log('C')
} else if (nota >= 60 && nota < 70) {
    console.log('D')
} else if (nota >= 50 && nota < 60) {
    console.log('E')
} else if (nota >= 0 && nota < 50) {
    console.log('F')
 } else {
     console.log('Erro: Nota inválida')
 }

// 8:
let a = 1;
let b = 5;
let c = 3;

let soma = false;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    soma = true;
};

console.log(soma)

//======================================================================

// 9:
let a = 7;
let b = 5;
let c = 3;

let soma = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
    soma = true;
};

console.log(soma)

//======================================================================

// 10:
let custo = 14;
let venda = 15;
let imposto = 0.2; 

let resultado = (venda - (custo + (custo * imposto))) * 1000

if (custo >= 0 && venda >= 0) {
    console.log(resultado)
} else {
    console.log('Erro: Prejuízo')
}

//======================================================================

// 11:
let salarioBruto = 50000;

if (salarioBruto <= 1556.94){
    salarioBase = salarioBruto - (salarioBruto * 0.08);
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - (salarioBruto * 0.09);
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - (salarioBruto * 0.11);
} else if (salarioBruto > 5189.92) {
    salarioBase = salarioBruto - 570.88;
} else {
    console.log('Erro')
}

console.log(salarioBase)

if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase
} else if (salarioBase >1903.98 && salarioBase <= 2826.65) {
    salarioLiquido = salarioBase - ((salarioBase * 0.075) - 142.8);
} else if (salarioBase > 2826.64 && salarioBase <= 3751.05) {
    salarioLiquido = salarioBase - ((salarioBase * 0.15) - 354.8);
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    salarioLiquido = salarioBase - ((salarioBase * 0.225) - 636.13);
} else if (salarioBase > 4664.68) {
    salarioLiquido = salarioBase - ((salarioBase * 0.275) - 869.36);
}

console.log(salarioLiquido)