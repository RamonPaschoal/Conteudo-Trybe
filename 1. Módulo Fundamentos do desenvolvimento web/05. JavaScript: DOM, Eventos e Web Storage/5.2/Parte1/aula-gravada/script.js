// Exercicio 1: Acesse o elemento elementoOndeVoceEsta.

console.log(document.querySelector('#elementoOndeVoceEsta'));

//===========================================================
// Exercício 2: Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

console.log(document.querySelector('#elementoOndeVoceEsta')
.parentNode.style.color = 'rgb(102,25,200)');

//===========================================================

// Exercício 3: Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

console.log(document.querySelector('#primeiroFilhoDoFilho').innerHTML = 'Olá mundo!');

//===========================================================

// Exercício 4: Acesse o primeiroFilho a partir de pai.

console.log(document.querySelector('#pai').firstElementChild);

//===========================================================

// Exercício 5: Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

//===========================================================

// Exercício 6: Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

console.log(document.querySelector('#elementoOndeVoceEsta').parentNode.childNodes[4]);

//===========================================================

// Exercício 7: Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.


console.log(document.querySelector('#elementoOndeVoceEsta').parentNode.childNodes[5]);

//===========================================================

// Exercício 8: Agora acesse o terceiroFilho a partir de pai.

console.log(document.querySelector('#pai').childNodes[5]);

//===========================================================

// Exercícios da Parte 2 - Criando elementos

// Exercício 1: Crie um irmão para elementoOndeVoceEsta.

let div = document.createElement('div');
let elementoIrmao = document.querySelector('#pai');
elementoIrmao.appendChild(div);

div.innerHTML = 'Exercicio 1 parte 2'

//===========================================================

// Exercício 2: Crie um filho para elementoOndeVoceEsta.


let h2 = document.createElement('h2')

let elementoFilhoDeOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
elementoFilhoDeOndeVoceEsta.appendChild(h2);

h2.innerHTML = 'Exercicio 2 parte 2';

//===========================================================

// Exercício 3: Crie um filho para primeiroFilhoDoFilho.

let p = document.createElement('p');

let elementoFilhoDoPrimeiroFilho = document.querySelector('#primeiroFilhoDoFilho');

elementoFilhoDoPrimeiroFilho.appendChild(p);

p.innerHTML = 'Exercicio 3 parte 2';
p.id = 'filhoDoPrimeiroFilhoDoFilho';

//===========================================================

// Exercício 4: A partir desse filho criado, acesse terceiroFilho.

console.log(document.querySelector('#filhoDoPrimeiroFilhoDoFilho').parentNode.parentNode.nextElementSibling);

//===========================================================

// Exercícios da Parte 3 - Removendo elementos

// Exercício 1: Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.

let remove = document.querySelectorAll('body');

for (let index = 0; index < remove.lenght; index += 1) {
    let removeElement = remove[index];

    if (removeElement !== 'pai' || removeElement !== 'elementoOndeVoceEsta' || removeElement !== 'primeiroFilhoDoFilho')
    remove.removeChild();
}