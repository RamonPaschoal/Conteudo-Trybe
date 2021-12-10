import React, { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10);

  const handleMorePokemons = () => {
    setLimit(limit + 10)
    console.log(limit)
  }

  //didMount, didUpdate, willUnmount
  useEffect(() => {
    const getPokemons = async () => {
      const END_POINT = `https://pokeapi.co/api/v2/pokemon?offset=151&limit=${limit}`;
      const { results } = await fetch(END_POINT).then(data => data.json());
      setPokemons(results)
      console.log(results)
    }

    getPokemons();
  }, [limit])

  // useEffect(() => {
  //   alert('unmount')
  // }, [])

  return (
    <div>
      <h1>Trybe Go</h1>
      <button type="button" onClick={ handleMorePokemons }>Buscar +10</button>
      <ul>
        {
          pokemons.map((pokemon) => <li key={ pokemon.name }>{pokemon.name}</li>) 
        }
      </ul>
    </div>
  );
}

export default App;
