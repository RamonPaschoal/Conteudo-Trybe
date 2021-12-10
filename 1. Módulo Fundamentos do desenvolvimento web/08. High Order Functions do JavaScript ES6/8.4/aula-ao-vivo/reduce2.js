const assert = require('assert');

const epic = ['The', 'Winter', 'is', 'comming'];

const epicPhrase = epic.reduce((accumulator, currentValue) => {
    return `${accumulator} ${currentValue}`;
});

const expectedValue = 'The Winter is comming'

console.log(epicPhrase);

assert.strictEqual(epicPhrase, expectedValue);

