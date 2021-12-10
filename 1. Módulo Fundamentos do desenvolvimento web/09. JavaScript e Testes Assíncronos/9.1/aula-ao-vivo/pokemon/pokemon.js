const appendPokemon = (pokemon) => {
  console.log(pokemon.sprites.front_default);
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const img = document.createElement('img');

  li.innerHTML = pokemon.name;
  img.src = pokemon.sprites.front_default;
  img.className = 'images';

  ul.appendChild(li);
  li.appendChild(img);
}

const fetchPokemon = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/squirtle').then((response) => {
    response.json().then((pokemon) => {
      appendPokemon(pokemon);
    });
  });
  fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then((response) => {
    response.json().then((pokemon) => {
      appendPokemon(pokemon);
    });
  });
  fetch('https://pokeapi.co/api/v2/pokemon/rattata').then((response) => {
    response.json().then((pokemon) => {
      appendPokemon(pokemon);
    });
  });
  fetch('https://pokeapi.co/api/v2/pokemon/raticate').then((response) => {
    response.json().then((pokemon) => {
      appendPokemon(pokemon);
    });
  });
};

window.onload = () => {
  fetchPokemon();
}