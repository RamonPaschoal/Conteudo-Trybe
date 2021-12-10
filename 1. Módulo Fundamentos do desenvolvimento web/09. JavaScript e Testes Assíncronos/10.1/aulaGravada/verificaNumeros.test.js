const numeros = require('./verificaNumeros');

describe('Requisito 1', () => { //describe é um grupo de testes.
  it('A função recebe [1, 2, 3, 4, 5] e retorna true', () => { //it representam os testes
    expect(true).toEqual(numeros([1, 2, 3, 4, 5]));
  });
});

describe('Requisito 2', () => {
  it('A função recebe [1, 2, 3, 4, 5] e retorna false', () => {
    expect(false).toEqual(numeros([1, 2, '3', 4, 5]));
  });
});

describe('Requisito 3', () => {
  it('A função recebe [1, 2, 3, 4, 5] e retorna false', () => {
    expect(false).toEqual(numeros([' ']));
  });
});