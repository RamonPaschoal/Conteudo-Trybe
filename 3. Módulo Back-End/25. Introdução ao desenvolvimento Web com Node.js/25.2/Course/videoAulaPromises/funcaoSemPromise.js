const calcularDivisao = (num1, num2) => {
  if (num2 === 0) {
    throw new Error('Não pode ser feito uma divisão por zero')
  }

  const resultado = num1 / num2;

  return resultado
}


// calcularDivisao(2, 0)

try {
  const resultado = calcularDivisao(4, 0);
  console.log("resultado:", resultado)
} catch (e) {
  console.log("error: %s", e.message)
}
