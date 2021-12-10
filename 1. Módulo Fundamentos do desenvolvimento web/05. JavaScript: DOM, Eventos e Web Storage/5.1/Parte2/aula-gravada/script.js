console.log('Trybe'); // Uma das formas para imprimir um conteúdo JS na página html é esse. Localizado no console.
console.log(document.getElementById('teste').innerHTML); //  .innerHTML vai mostrar todo conteúdo do ID selecionado.
console.log(document.getElementById('teste').innerText); //  .innerText vai mostrar todo conteúdo em texto do iD, ignorando as TAGS.
console.log(document.getElementById('teste2').innerHTML);

document.getElementById('teste').innerText = 'Aprendizado da aula de hoje'; // esse comando sobrescreve a id 'teste' e mostra no navegador o novo conteúdo. Não alterando o arquivo HTML.