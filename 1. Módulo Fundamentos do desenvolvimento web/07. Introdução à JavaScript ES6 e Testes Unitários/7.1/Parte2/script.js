//Templates literals perimite criar strings complexas de maneira mais fácil do que a que já conhecemos

const myName = "Isabella"
console.log('Hello' + ' ' + myName + '!');
console.log(`Hello ${myName}!`);

// A segunda maneira é muito mais simples e poupa caracter de código

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n') //Dessa maneira, utilizando o \n + ele quebra a linha

console.log('Meu dia na Trybe será de muitos estudos!\n' + 'Porém estarei preparado =)')