// for é usado para estruturas de repetição, ou seja, não vai precisar digitar várias vezes o mesmo comando. Exemplo, para fazer a tabuada do 7:

let numero = 7;

for(let contador = 1; contador <= 9; contador += 1) { // A primeira coisa dentro de for (Declaração do contador; tamanho; incremento do índice)
    //console.log('*'); //para adicionar algo entre as linhas
    console.log(numero * contador);
}

// resumidamente, neste caso nós definimos um contador, que vai pular para o próximo parâmetro. Nós definimos que contador vale 1 e deve ir até 9. E por último adicionamos o contador ++ que vai adicionar 1 valor para contador, ou seja, de 1 adiciona 1 e vai pra 2, que adicona 1 e vai para 3 e assim por diante.

let = listaNomes = ['Joana', 'Maria', 'Lucas'];

for(let index = 0; index < listaNomes.length; index += 1) {
    let mensagem = 'Bem vindo, ' + listaNomes[index] + '!';
    console.log(mensagem)
}