const assert = require('assert');

const players = [
    { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
    { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
    { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
    { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' }
];

const newPlayers = players.reduce((accumulator, currentValue) => {
  accumulator[currentValue.fullName] = currentValue.email;

  return accumulator;
}, {})

console.log(newPlayers)

const expectedValue = {
    'Adriano imperador': 'didico@futebol.br',
    'Ronaldinho Gaúcho': 'bruxo@futebol.br',
    'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
    'Marta Vieira da Silva': 'rainhamarta@futebol.br'
};

// assert.deepStrictEqual(newPlayers, expectedValue);
