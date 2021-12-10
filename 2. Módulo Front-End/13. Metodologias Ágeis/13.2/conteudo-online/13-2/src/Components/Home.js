import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link className="jonas" to="/about">About</Link>
        <Link className="jonas" to="/howto">HowTo</Link>
        <Link className="jonas" to="/Profile">Profile</Link>
        <h1>Oi página</h1>
      </div>
    )
  }
}

export default Home; 
