const { strictEqual } = require('assert');
const assert = require('assert');

// PARANETRI REST: Permite que a passagem de parâmetro seja feita em um único parâmetro;

// Com array
const sumAll = (values) => {
    let sum = 0;
    values.foreach(value => {
        sum += value;
    })
    return sum;
}

// Rest
const sumAllValues = (...values) => {
  return values.reduce((acc , crr) => acc + crr)
}

console.log(sumAllValues(1, 2, 3)); // Os parâmetros passam a ser dinâmicos, não precisa alterar nada na função para inserir novos parâmetros

// Testes

assert,strictEqual(sumAllValues(1, 2), 3);
assert,strictEqual(sumAllValues(1, 2, 3), 6);
assert,strictEqual(sumAllValues(1, 2, 3, 4, 5), 15);

//===========================================================================================

// Parte 2

const assert = require('assert');

const formatDate = (year, month, day, hour, minute, second) => {
    return `${day}/${month}/${year} - ${hour}:${minute}:${second}`;
};

const formatDate1 = (year, month, day, ...rest) => {
    return `${day}/${month}/${year} - ${rest}`;
};

const dateInfo = ['1981', '7', '31', '22', '47', '12'];

console.log(formatDate1(...dateInfo)) // Nesse caso, não ficaria da forma como queremos pois os : não serão passados.

// Teste

const expectedValue = '31/7/1981 - 22:47:12';
assert.strictEqual(formatDate(...dateInfo), expectedValue);
