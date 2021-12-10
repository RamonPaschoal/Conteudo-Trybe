// Exercício 1: Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body.

let h1 = document.createElement('h1');
h1.innerHTML = 'Exercício 5.2 - JavaScript DOM'

document.body.appendChild(h1);

//===========================================================

// Exercício 2: Adicione a tag div com a classe main-content como filho da tag body ;

let div = document.createElement('div');
div.className = 'main-content';

document.body.appendChild(div);

//===========================================================

// Exercício 3: Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;

let divFilha = document.createElement('div')
divFilha.className = 'center-content';

let elementoDiv = document.querySelector('.main-content');

elementoDiv.appendChild(divFilha);

//===========================================================

// Exercício 4: Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;

let p = document.createElement('p');
p.innerHTML = 'Texto teste'

// document.querySelectorAll('div')[1].appendChild('p');

let elementoPFilhoCenterContent = document.querySelector('.center-content');

elementoPFilhoCenterContent.appendChild(p);

//===========================================================

// Exercício 5: Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;

let div5 = document.createElement('div');
div5.className = 'left-content';

div.appendChild(div5);

//===========================================================

// Exercício 6: Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;

let div6 = document.createElement('div');
div6.className = 'right-content';

div.appendChild(div6);

//===========================================================

// Exercício 7: Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;

let img = document.createElement('img');
img.className = 'small-image';
img.src = 'https://picsum.photos/200';

div6.appendChild(img);

//===========================================================

// Exercício 8: Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;

// let ulList = document.createElement('ul');

// div6.appendChild(ulList);

// let list = [];

// for (let index = 1; list <= 10; index += 1) {
//     let liList = document.createElement('li');
//     ulList.appendChild(liList);
// };

//===========================================================

// Exercício 9: Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.

for (let index = 1; index <= 3; index += 1) {
h3Exercicio9 = document.createElement('h3');
h3Exercicio9.innerHTML = 'Show ' + index;
div.appendChild(h3Exercicio9);
}