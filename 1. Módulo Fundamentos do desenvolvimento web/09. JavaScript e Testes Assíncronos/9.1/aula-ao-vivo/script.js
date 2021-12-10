const lanche1 = (callback) => {
  setTimeout(() => {
    console.log('1 - Big Mac');
    callback()
  }, Math.random() * 10000)
}
const lanche2 = () => {
  setTimeout(() => {
    console.log('2 - Big Tasty');
  }, Math.random() * 10000)
}

console.log('Pedir Lanches');

lanche1(lanche2);
// lanche2();

console.log('Role no shopping');
