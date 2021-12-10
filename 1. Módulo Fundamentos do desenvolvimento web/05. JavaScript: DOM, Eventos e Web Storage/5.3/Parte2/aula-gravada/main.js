const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

// Exercício 1: 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado; 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function classTech (param) {
    let elementoTech = document.querySelector('.tech');
    elementoTech.classList.remove('tech');
    event.target.classList.add('tech');
    
}

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.