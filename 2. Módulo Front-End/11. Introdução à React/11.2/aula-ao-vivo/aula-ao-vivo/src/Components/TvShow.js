import React from 'react';

class TvShow extends React.Component {
  render() {
    const { tvShow } = this.props;
    
    return(
      <div>
        <h2>{tvShow.name}</h2>
        <img src={tvShow.image} alt={tvShow.name}></img>
        <p>Gênero: {tvShow.genre}</p>
      </div>
    )
  }
}

export default TvShow