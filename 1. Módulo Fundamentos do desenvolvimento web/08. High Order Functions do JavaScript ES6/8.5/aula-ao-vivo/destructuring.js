const assert = require('assert');

const bestGuyInTheWorld = {
    name: 'Rodrigo Hilbert', 
    birthplace: 'Orleans, Santa Catarina',
    city: 'São Paulo',
    jobs: ['Ator', 'Modelo', 'Cozinheiro', 'Caçador', 'Sniper', 'Piloto de caça']
};

// const name = bestGuyInTheWorld.name;
// const birthplace = bestGuyInTheWorld.birthplace;

const { name: bestGuy, birthplace } = bestGuyInTheWorld;
const [job1, job2, job3, ...rest] = bestGuyInTheWorld.jobs;

// console.log(name, birthplace)

console.log(job3, job1, job2, rest);

// Teste

const expectedValue = 'Rodrigo Hilbert de Orleans, Santa Catarina';
assert.strictEqual(`${bestGuy} de ${birthplace}`, expectedValue)

console.log(bestGuyInTheWorld);

//======================================================================

// Parte 2:

const assert = require('assert');

const lion = {
    name: 'Panthera leo',
    commonName: 'Lion',
    weightRange: {
      min: 186.55,
      max: 225,
      measurementUnit: 'kg',
    },
    kingdon: 'Animalia',
    family: 'Felidae',
  };
  
  const blueWhale = {
    name: 'Balaenoptera musculus',
    commonName: 'Blue whale',
    weightRange: {
      min: 45,
      max: 173,
      measurementUnit: 't',
    },
    kingdon: 'Animalia',
    family: 'Balaenopteridae',
  };
  
  const polarBear = {
    name: 'Ursus maritimus',
    commonName: 'Polar Bear',
    weightRange: {
      min: 350,
      max: 700,
    },
    kingdon: 'Animalia',
    family: 'Ursidae',
  };
  
  const animalDescription = ({ name, commonName, weightRange }) => {
    const { min, max, measurementUnit = 'kg' /* Definimos um padrão para o measurementUnit. Caso esse padrão já exista no objeto, essa informação será ignorada, mantendo a originak*/ } = weightRange;
    return `${commonName} (${name}) weighs around ${min}-${max} ${measurementUnit}`;
  };

  console.log(animalDescription(lion));
  
  const expectedValueLion = 'Lion (Panthera leo) weighs around 186.55-225 kg';
  assert.strictEqual(animalDescription(lion), expectedValueLion);
  
  const expectedValueBlueWhale = 'Blue whale (Balaenoptera musculus) weighs around 45-173 t';
  assert.strictEqual(animalDescription(blueWhale), expectedValueBlueWhale);
  
  const expectedValuePolarBear = 'Polar Bear (Ursus maritimus) weighs around 350-700 kg';
  assert.strictEqual(animalDescription(polarBear), expectedValuePolarBear);