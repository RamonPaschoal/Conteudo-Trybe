const assert = require('assert');



const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error('parameters must be numbers');
  }
  return a + b
}

//=============================================================================

// Exercício 1:

assert.strictEqual(sum(4, 5), 9);

//=============================================================================

// Exercício 2:

assert.strictEqual(sum(0, 0), 0);

// //=============================================================================

// // Exercício 3:

assert.strictEqual(sum(4, '5'), 9);

// //=============================================================================

// // Exercício 4:

assert.throws(() => {
    sum({});
});
