const jonas = require('./script.js')

test('Exercício 1', () => {
  jonas.subtrair = jest.fn();

  jonas.subtrair();

  expect(jonas.subtrair).toHaveBeenCalled();
});

test('Exercício 2', () => {
  jonas.multiplicar = jest.fn()
  .mockReturnValue(10);

  jonas.multiplicar();
  expect(jonas.multiplicar).toHaveBeenCalled();
  expect(jonas.multiplicar()).toBe(10)
});

test('Exercício 3', () => {
  jonas.somar = jest.fn()
  .mockReturnValue(5);

  jonas.somar(2, 3);
  expect(jonas.somar).toHaveBeenCalled();
  expect(jonas.somar).toHaveBeenCalledWith(2, 3);
  expect(jonas.somar(2, 3)).toBe(5)
});

test('Exercício 1', () => {
  jonas.dividir = jest.spyOn()
  .mockReturnValue(15)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(5);

  jonas.dividir()
});