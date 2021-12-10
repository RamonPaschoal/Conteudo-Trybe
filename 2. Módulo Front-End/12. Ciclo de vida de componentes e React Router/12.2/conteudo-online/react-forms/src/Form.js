import React from 'react';
import './Form.css'

class Form extends React.Component {
  constructor() {
    super()

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: ''
    }
  }
  handleTextAreaChange(event) {
    this.setState({ estadoFavorito: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Estados e React: ferramenta incrível ou reagindo a regionalismo</h1>
        <form className="form">
          <label>
            Diga qual é o seu estado favorito! Do prasil ou do React, você quem sabe!
            <textarea 
            name="estadoFavorito" 
            value={this.state.estadoFavorito} 
            onChange={this.handleTextAreaChange} 
            />
          </label>

          <label>
            Email
            <input 
            name="email" 
            type="email" 
            />
          </label>

          <label>
            Nome
            <input 
            name="nome" 
            type="text" 
            />
          </label>
        </form>

        <label>
          Idade
          <input 
          nome="idade" 
          type="number" 
          />
        </label>
        
        <label>
          Vai comparecer à conferência?
          <input 
          type="checkbox" 
          name="vaiComparecer" 
          />
        </label>

        <label>
          Escolha sua palavra-chave favorita:
          <select name="palavraChaveFavorita">
            <option value="estado">Estado</option>
            <option value="evento">Evento</option>
            <option value="props">Props</option>
            <option value="hooks">Hooks</option>
          </select>
        </label>
      </div>
    )
  }
}

export default Form;
