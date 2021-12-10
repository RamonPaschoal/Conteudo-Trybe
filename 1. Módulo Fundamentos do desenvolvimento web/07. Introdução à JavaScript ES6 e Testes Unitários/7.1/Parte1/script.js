// function minhaIdade () {
//     for(var idade = 78; idade <= 100; idade += 1) {
//         console.log (idade);
//     }
//     console.log(idade);// a atribuição var vaza para fora do escopo que ela foi inserida. No caso ela foi inserida na variavel for que foi até 100. Ao dar o console.log fora do for, ela da o primeiro número fora da repetição (101) 
// }
// minhaIdade(); 

// console.log (idade);

// function minhaIdade1 () {
//     for(let idade = 78; idade <= 100; idade += 1) {
//         console.log (idade);
//     }
//     console.log(idade);// com o let, ele funciona o console.log dentro da esturtura for, mas fora dela da erro "idade is not defined", pois o let não vaza para fora do seu escopo
// }
// minhaIdade1 ();

// function minhaIdade2 () {
//     for(const idade = 78; idade <= 100; idade += 1) {
//         console.log (idade);
//     }
//     console.log(idade);// com o const, da erro de "Unexpected end of input", pois a estrutura de repetição vai tentar alterar o valor da const, e isso é impossível de fazer dessa forma. 
// }
// minhaIdade2 ();

// const estudante = {
//   nome: 'Maria',
//   idade: 23
// }

// // estudante = 24; // não da pois para alterar o valor de uma const, é preciso fazer da seguinte forma:
// estudante.idade = 24; // dessa forma é possível alterar o valor de uma const.

// console.log(estudante);

const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React'); // conseguimos adicionar o valor 'React' a technologies com o push
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React', 'DOM']
console.log(technologies); // Se simplesmente tentarmos adicionar conteúdo de uma const, vai dar erro