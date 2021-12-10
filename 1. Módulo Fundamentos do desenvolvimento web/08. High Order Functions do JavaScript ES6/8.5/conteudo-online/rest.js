function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
  console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

//==========================================================

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

//==========================================================

//Os parâmetros rest, nada mais é do que você definir uma quantidade variável de parâmetros para uma função. Exemplo:

const soma = (...num) => {
  let res = 0;
  let qtde = num.length;
  for(let i = 0; i < qtde; i += 1) {
    res += num[i];
  }
  return res;
};

console.log(soma(3, 2, 1, 6, 8)) // Pode adicionar quantos parâmetros quiser.