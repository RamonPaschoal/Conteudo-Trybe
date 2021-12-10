import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  render() {
    const { ship } = this.props.match.params;
    return (
      <div>
        <h2>Meu perfil: {this.props.name}, do navio {ship}</h2>

        <Link className="jonas" to="/">Voltar à Home</Link>
      </div>
    )
  }
}

export default Profile;
