// Exercício 1:
function verificaPalindrome(string) {
    let palindrome = string.split('').reverse().join('');
    if (palindrome === string) {
        return palindrome = true;
    } else {
        return palindrome = false
    }
}
    
console.log(verificaPalindrome('arara'));

//=======================================================================================
// Exercício 2:
function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 9, 6, 7, 10, 1])); //4