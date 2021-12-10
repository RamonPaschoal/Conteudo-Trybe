// Exercício 1:

function texto (string) {
document.getElementsByTagName('p')[0].innerHTML = string;

return string;
}

texto ('Empregado')

//===========================================================

// Exercício 2:

function corVerde () {
    let pintarVerde = document.getElementsByClassName('main-content')[0];
    pintarVerde.style.background = 'rgb(76,164,109)';       
    
 }

 corVerde()

//===========================================================

// Exercício 3:
function corBranco () {
    let pintarBranco = document.getElementsByClassName('center-content')[0];
    pintarBranco.style.backgroundColor = 'rgb(255,255,255)';       
    
 }

 corBranco ()

//===========================================================

// Exercício 4:

function textoCorrigido () {
    let textoCorreto = document.getElementsByTagName('h1')[0];
    textoCorreto.innerHTML = 'Exercício 5.1 JavaScript';
}

textoCorrigido();

//===========================================================

// Exercício 5:
function textoP () {
    let letraMaiscula = document.getElementsByTagName('p')[0];
    letraMaiscula.innerHTML = letraMaiscula.innerHTML.toLocaleUpperCase();
}

textoP();

//===========================================================

// Exercício 6:
function conteudoP () {
    let conteudo = document.getElementsByTagName('p');
    for (let index = 0; index < conteudo.lenght; index += 1) {
        console.log(conteudo[index].innerHTML);
    }
}

conteudoP();