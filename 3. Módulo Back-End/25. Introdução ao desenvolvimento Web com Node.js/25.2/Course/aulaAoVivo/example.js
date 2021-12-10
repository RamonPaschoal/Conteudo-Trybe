function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.log("Hello world");
}

async function setTimeoutPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Time passed!");
    resolve()}, 3000)
  });
}

async function main() {
  two();

  await setTimeoutPromise();

  one();
}

main();
// setTimeoutPromise();