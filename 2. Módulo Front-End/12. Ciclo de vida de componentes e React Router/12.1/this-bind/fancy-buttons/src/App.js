import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0
    }
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
  }
  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
  }
  handleClick3() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))
  }

  render() {
    console.log(this)
    return (
      <div>
        <button className='candidato primeiro' onClick={this.handleClick}>Botão 1: {this.state.numeroDeCliques1}</button>
        <button className='candidato segundo' onClick={this.handleClick2}>Botão 2: {this.state.numeroDeCliques2}</button>
        <button className='candidato terceiro' onClick={this.handleClick3}>Botão 3: {this.state.numeroDeCliques3}</button>
      </div>
    )
  }
}

export default App;
