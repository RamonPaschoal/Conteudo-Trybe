function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  // Exercício 1:

  /* O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira. */

/* Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> */

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let selectUl = document.querySelector('#days')

for (let index = 0; index < dezDaysList.length; index += 1) {
    let list = dezDaysList[index];
    let createIl = document.createElement('li');
    createIl.className = 'day';
    createIl.innerHTML = list;
    selectUl.appendChild(createIl);
    if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] ===31) {
    createIl.className += ' holiday';
    }
    if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
        createIl.className += ' friday'
    };
};

// ==========================================================

// Exercício 2:

/*Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

Adicione a este botão a ID "btn-holiday" .

Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */
let btnSelector = document.querySelector('.buttons-container');
let btnHoliday = document.createElement('button')
function botaoFeriados (string) {
    btnHoliday.id = 'btn-holiday';
    btnSelector.appendChild(btnHoliday);
    btnHoliday.innerHTML = string
}

botaoFeriados ('Feriados')

// ==========================================================

// Exercício 3:

/*Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .*/



let holidaySelector = document.getElementsByClassName('holiday');
let getHolidayButton = document.querySelector('#btn-holiday');


getHolidayButton.addEventListener('click', function () {
    for (let index = 0; index < holidaySelector.length; index += 1) {
        if (holidaySelector[index].style.backgroundColor === 'white') {
            holidaySelector[index].style.backgroundColor = 'rgb(238, 238, 238)';
        } else {
            holidaySelector[index].style.backgroundColor = 'white';
        }
    }
})

// ==========================================================

// Exercício 4:

/*Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".


Adicione a este botão o ID "btn-friday" .

Adicione este botão como filho/filha da tag <div> com classe "buttons-container".*/

//let btnSelector = document.querySelector('.buttons-container');

let btnFriday = document.createElement('button')

function botaoSexta (string) {
    btnFriday.id = 'btn-friday';
    btnSelector.appendChild(btnFriday);
    btnFriday.innerHTML = string
}

botaoSexta ('Sexta-feira');

// ==========================================================

// Exercício 5:

/*Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

let getFridayButton = document.querySelector('#btn-friday')
let fridaySelection = document.getElementsByClassName('friday');

getFridayButton.addEventListener('click', function() {
    for(let index = 0; index < fridaySelection.length; index += 1) {
        if(fridaySelection[index].innerHTML === 'Sexta-Feira') {
            fridaySelection[index].innerHTML = fridaySelection[index];
        } else {
            fridaySelection[index].innerHTML = 'Sexta-Feira';
        }
    }
}) 