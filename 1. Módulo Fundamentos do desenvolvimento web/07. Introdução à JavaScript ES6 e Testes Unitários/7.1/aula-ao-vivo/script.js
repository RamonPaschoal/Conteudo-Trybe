let x = 3;
x = 10;

console.log(x);

function class12 (bool) {
  if (bool) {
    const x = 48;
  };
  return x;
};

console.log(class12(true));
console.log(class12(false));

// Arrow Functions => s2
// ----------------------------------------

function nomeFuncao () {
  //código da funcao
};

botao.addEventListener('click', function () {
  //codigo da funcao
});

const nomeFuncao = () => {
  //codigo da funcao
};

botao.addEventListener('click', () => {
  //codigo da funcao
});

// ----------------------------------------
//Arrow Function
// ----------------------------------------
//1. Ela é uma função anônima
//2. Não precisamos utilizar a palavra reservada function
//3. Ela possui uma seta entre os parâmetros e o corpo da função
//4. Return é implícito
//5. Quando tenho uma única linha, não precisamos utilizar {}
//6. Sem parâmetros = () ou _
//7. Quando tivermos um único parâmetro podemos usar () ou não
// ----------------------------------------


const soma = (num1, num2) => num1 + num2;

console.log(soma(8, 2));

const funcao = (word) => console.log(word);

funcao('Olá');
