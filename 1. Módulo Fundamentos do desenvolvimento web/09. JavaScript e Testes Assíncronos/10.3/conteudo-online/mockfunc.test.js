const service = require('./mockfunc');

test("#randomRgbColor", () => {
  // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Queremos saber se ela foi chamada e ponto final.
  service.randomRgbColor = jest.fn(); // Simula a chamada ad função randomRgbColor. É necessário para que a função ad linha 8 'toHaveBeenCalled()' funcione.

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});

//==============================================================================

test("#randomRgbColor", () => {
  // testando se a função foi chamada e qual seu retorno
  service.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)"); // A função mockReturnValue retorna a simulação de um resultado desejado. mockReturnValueOnce() retorna o valor desejado uma vez, depois retorna aleatório novamente (como especificado na função)

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
  expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
});

//===============================================================================

test("#randomRgbColor", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  service.randomRgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(service.randomRgbColor()).toBe("first call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(service.randomRgbColor()).toBe("second call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(service.randomRgbColor()).toBe("default value");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
});