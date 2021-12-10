import React from 'react';
import { Link } from 'react-router-dom';

class HowTo extends React.Component {
  render() {
    return (
      <div>
        <h2>Como navegar? Na internet ou nos mares do caribe, saiba tudo aqui!</h2>
  
        <Link className="jonas" to="/">Voltar à Home</Link>
      </div>
    )
  }
}

export default HowTo;
