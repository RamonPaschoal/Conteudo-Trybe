import React from 'react';

class PokeCard extends React.Component {
  render() {
    const { card } = this.props;
    return (
      <section className='pokemon'>
        <p>{ card.name } - { card.id }</p>
        <img className='pokemonImg' src={ card.image } alr={ card.name } />
        <p>{ card.type }</p>
        <p>{ card.averageWeight.value } { card.averageWeight.measurementUnit }</p>
      </section>
      )
  }
}

export default PokeCard;
