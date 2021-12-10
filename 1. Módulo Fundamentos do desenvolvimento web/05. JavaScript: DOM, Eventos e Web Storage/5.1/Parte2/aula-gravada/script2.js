//document.getElementsByClassName('piloto-f1-atual')[0].innerText = 'Lance Stroll'; //Para alterar um determinado texto dentro de uma classe, é necessário informar qual chave do array vai ser trocada. No caso, Lewis Hailton é chave [0], Sebastian Vettel [1] e Lando Norris [2].

let pilotosF1 = document.getElementsByClassName('piloto-f1-atual')

// Abaixo iremos alterar todos os elementos da classe piloto-f1-atual para Lewis Hamilton:
for (let index = 0; index < pilotosF1.length; index += 1) {
    pilotosF1[index].innerHTML = 'Lewis Hamilton';
}