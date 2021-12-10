import React from 'react';
import Nome from './Components/Nome';
import Email from './Components/Email';
import Estado from './Components/Estado';
import Piada from './Components/Piada';
import Veiculo from './Components/Veiculo';

class Component extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state ={
      nome: '',
      email: '',
      estado: '',
      conteUmaPiada: '',
      temCarro: false
    };
  }

  handleChange({ target }) {
    // console.log(target.value) 
    // Aqui estamos tirando desestruturando o target de event e depois, na linha 22, desestruturando suas duas variáveis. name e value. name, é a chave nome e value é o que for digitado no campo. 
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value //Pare este caso, a última opção temCarro é um checkbox, logo o value está localizado no checked e não no value. Nesse caso é necessário alterar de target.value para target.checked.

    this.setState({
      [name]: value
      //[name] é o nome da chave declarada no this.state, na linha 12. 
    });
  }

  render() {
    return (
      <form>
        <Nome 
          value={this.state.name} 
          handleChange={this.handleChange} 
        />

        <br />

        <Email 
          value={this.state.email} 
          handleChange={this.handleChange} 
        />

        <br />

        <Estado 
          value={this.state.estado} 
          handleChange={this.handleChange} 
        />

        <br />

        <Piada 
          value={this.state.conteUmaPiada} 
          handleChange={this.handleChange} 
        />

        <br />

        <Veiculo 
          value={this.state.temCarro} 
          handleChange={this.handleChange} 
        />
      </form>
    )
  }
}

export default Component;
