const appendPokemon = (pokemon) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const img = document.createElement('img');

  li.innerHTML = `${pokemon.id} - ${pokemon.name}`;
  img.src = pokemon.sprites.front_default;
  img.className = 'images';

  ul.appendChild(li);
  li.appendChild(img);
}
const getId = () => {
  let arrayId = [];
  for (let i = 1; i <= 151; i += 1){
    arrayId.push(i);
  }
  return arrayId;
}

const getPokemonPromise = (pokemonId) => {
  return new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((response) => {
      response.json().then((pokemon) => {

        resolve(pokemon);
        })
      })
    } 
  );
}

const fetchPokemon = () => {
  const jonas = getId();
  Promise.all(jonas.map( (id) => getPokemonPromise(id))).then(arrayPokemon => arrayPokemon.forEach(pokemon => appendPokemon(pokemon)));
}

window.onload = () => {
  fetchPokemon();
}