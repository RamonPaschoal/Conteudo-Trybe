const { sum, encode, decode } = require('./script');

describe('Soma os parâmetros', () => {
  it('Somar 4 + 5 e ter como resultado 9', () => {
    expect(9).toEqual(sum(4, 5))  
  });
  it('Somar 0 + 0 e ter como resultado 0', () => {
    expect(0).toEqual(sum(0, 0))  
  })
  it('Lançar um erro ao tentar somar 4 + "5"', () => {
    expect(() => { // é necessário lançar uma função anônima para que a mensagem de erro seja lançada
      sum(4, '5');
    }).toThrow()  
  })
  it('Lançar um erro ao tentar somar 4 + "5"', () => {
    expect(() => { 
      sum(4, '5');
    }).toThrow('parameters must be numbers')  
  })
})

//Parte 2:

// Exercício 1:

describe('Exercícios', () => {
  it('Verificar se encode e decode são funções', () =>
  expect(typeof encode).toBe('function'));

  it('Encode - Conversão vogal -> número', () => {
    expect(Number(encode('a'))).toBe(1);
    expect(Number(encode('e'))).toBe(2);
    expect(Number(encode('i'))).toBe(3);
    expect(Number(encode('o'))).toBe(4);
    expect(Number(encode('u'))).toBe(5);
  });

  it('Decode - Conversão número -> vogal', () => {
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  });

  it('Encode - Conversão vogal -> número em strings', () => {
    expect(encode('ana')).toEqual('1n1');
  });

})

// Exercício 2: