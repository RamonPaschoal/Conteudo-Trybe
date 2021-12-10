import React from 'react';
import TvShow from './TvShow';
import catalog from '../Data';
import propTypes from 'prop-types'

class TvShowsList extends React.Component {
  render() {
    return (
      <section>
        {
          catalog.map(tvShow => <TvShow key={tvShow.id} tvShow={tvShow} />)
        }
      </section>
    )
  }
}

TvShow.propTypes = {
  tvShow: propTypes.shape({
    name: propTypes.string,
    image: propTypes.string,
    genre: propTypes.string,
  })
};

export default TvShowsList