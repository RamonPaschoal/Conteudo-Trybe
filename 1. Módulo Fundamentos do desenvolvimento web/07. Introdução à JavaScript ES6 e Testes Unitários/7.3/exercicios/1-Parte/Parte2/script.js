const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

//================================================================================

// Exercício 1:
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

//================================================================================

// Exercício 2:

assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

//================================================================================

// Exercício 3:

const array = [10, 11, 12, 13];

myRemove(array, 11);

assert.deepStrictEqual(array, [10, 11, 12, 13]);

//================================================================================

// Exercício 4:

myRemove([1, 2, 3, 4], 5);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
