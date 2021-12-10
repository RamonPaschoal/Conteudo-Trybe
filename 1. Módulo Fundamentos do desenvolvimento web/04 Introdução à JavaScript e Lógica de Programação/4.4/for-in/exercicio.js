// Usando o objeto abaixo, utilize For/in e imprima um console log 'Olá xxxxx' para cada nome no objeto.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
  };

for (key in names) {
    console.log('Olá ' + names[key]);
}

// Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e seu valor 'modelo: A3 Sedan, marca: Audi, ano:2020' .
let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  }

  for (key in carro) {   
    console.log('modelo: ' + carro.model + ', marca:' + carro.manufacturer + ', ano: ' + carro.year);
}