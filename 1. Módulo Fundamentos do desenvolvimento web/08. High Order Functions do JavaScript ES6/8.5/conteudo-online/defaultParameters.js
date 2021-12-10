const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

//===========================================================================

// Exercício para fixação:

const multiply = (number, value = 1) => {
  return number * value;
};
  
console.log(multiply(8));