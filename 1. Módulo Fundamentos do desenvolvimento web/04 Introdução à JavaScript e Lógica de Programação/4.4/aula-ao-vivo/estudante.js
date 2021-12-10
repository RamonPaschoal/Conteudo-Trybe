let estudante = {
    name: 'Joana',
    idade: 43,
    hardSkills: 3,
    softSkills: 6,
    carreiraSkills:5
}

estudante.cidade = 'São Paulo'; //dot notation
estudante['comidaFavorita'] = 'Doritos'; // colchetes
estudante['name'] = 'João';
estudante.apelidos = ['apelido1', 'apelido2', 'apelido3'];
estudante.endereco = {
    logradouro: 'Rua Dalvo Trombeta',
    numero: 357
}

// delete estudante.name; // a propriedade name dentro do objeto estudante.

for (let key in estudante) {
    // console.log(estudante[key])
}

//=====================================================================================//
//FUNÇÕES

function trybe(estudanteTrybe) {
    let pessoaDesenvolvedora = estudanteTrybe;

    pessoaDesenvolvedora.hardSkills = 10;
    pessoaDesenvolvedora.softSkills = 10;
    pessoaDesenvolvedora.carreiraSkills= 10;
    pessoaDesenvolvedora.tryber = true;

    return pessoaDesenvolvedora;
};

console.log(trybe(estudante)); //vai usar a função trybe para o objeto estudante e vai alterar as propriedades para o objeto desejado

function soma(num1, num2) {
    return num1 + num2
};

console.log(soma(5, 9));

let = valorSomado = soma(5,9);

console.log(valorSomado);

