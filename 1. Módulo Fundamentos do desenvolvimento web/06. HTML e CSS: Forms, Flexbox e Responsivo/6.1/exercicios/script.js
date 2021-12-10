let estados = ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Pará (PA)', 'Paraíba (PB)', 'Paraná (PR)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'São Paulo (SP)', 'Sergipe (SE)', 'Tocantins (TO)'];
let select = document.getElementById('estado');


function estadoBox (array) {
    for(i = 0; i < estados.length; i += 1) {
        let createOption = document.createElement('option');
        select.appendChild(createOption);
        let captureOption = document.getElementsByTagName('option');
        captureOption[i].innerHTML = array[i];
    };
};
estadoBox (estados);


let createButton = document.createElement('input');
let parentSelect = document.getElementsByTagName('fieldset')[1];

function preventD () {
    parentSelect.appendChild(createButton);
    createButton.setAttribute('type', 'submit')
    createButton.addEventListener('click', (event) => {
        event.preventDefault();

        nameValidation ()
        emailValidation ()
        cpfValidation ()
        })
}

preventD();

function nameValidation () {
    let nameSelect = document.querySelector('#exampleInputName1');

    if (nameSelect.value.length > 40) {
        alert ('Campo nome inválido');
    }
    if (nameSelect.value[0] !== nameSelect.value[0].toUpperCase()) {
        alert ('Formato do nome inválido');
    }
} 

function emailValidation () {
    let emailSelect = document.querySelector('#exampleInputName1');

    if (emailSelect.value.length > 50 || emailSelect.value.length < 1) {
        alert ('Campo com mais de 50 caracteres');
    }
    // if (emailSelect.value.includes('com')) {
    //     alert('Formato e-mail inválido')
    // }
}

function cpfValidation () {
    if (exampleInputCPF1.value.lengh > 11) {
        alert ('Campo CPF inválido');
    }
}



// let dateSelect = document.querySelector('#data-inicio');

// function dateValidation () {
//     let regDate = /(3[0-1]|2[0-9|1[0-9]|\d)\/(1[0-2]|[0-1][0-2])\/(\d{4})/;
//     let inputDate = dateSelect.value;

//     console.log(inputDate.match(regDate))
// }


