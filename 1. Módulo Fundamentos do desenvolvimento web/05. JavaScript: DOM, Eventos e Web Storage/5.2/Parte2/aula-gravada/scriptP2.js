let ingredientItens = [
    '500g de feijão carioquinha cizido',
    '200g de toucinho',
    '1 concha de óleo',
    '1 cebola média picada',
    '4 dentes de alho',
    '5 ovos',
    '1 colher de sopa de sal com alho',
    'Cheiro verde a gosto',
    '200g de farinha de mandioca'    
];

let ingredientList = document.querySelector('.ingredients-list');

for (let index = 0; index < ingredientItens.length; index += 1) {
    let ingredient = ingredientItens[index];

    let ingredientListItem = document.createElement('li');
    ingredientListItem.innerHTML = ingredient;

    ingredientList.appendChild(ingredientListItem);
}