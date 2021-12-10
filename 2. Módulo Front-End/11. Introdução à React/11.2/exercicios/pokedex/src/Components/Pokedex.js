import React from 'react';
import PokeCard from './PokeCard'

class Pokedex extends React.Component {
  render() {
    const { pokemons  } = this.props;
    return (
      <section className='pokedex'>
        {
          pokemons.map(pokemon => <PokeCard key={ pokemon.name } card={ pokemon } />)
        }
      </section>)
  }
}

export default Pokedex;