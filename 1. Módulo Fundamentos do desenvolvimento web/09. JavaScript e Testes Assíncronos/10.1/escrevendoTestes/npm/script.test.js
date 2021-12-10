// sum.js
const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

// é necessário que o arquivo contenha o sufixe .test. Pois o npm irá procurar arquivos com nome 'test'.