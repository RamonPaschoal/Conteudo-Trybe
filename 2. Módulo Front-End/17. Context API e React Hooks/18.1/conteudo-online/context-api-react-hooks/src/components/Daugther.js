import React from 'react';
import MyContext from './MyContext';

class Daugther extends React.Component {
  render() {
    return (
      <div>
        <h4>Eu sou a Filha</h4>
        <MyContext.Consumer>
          {
            // value => console.log(value) // Value recebe o objeto declardo em GreatGrandmother (contextValue) e fornecido pelo provider. E todos os elementos envoltos dentro do Consumer tem acesso a essas informações. O COMPONENTE CONSUMER SEMPRE RECEBE UMA FUNÇÃO COMO FILHO, e recebe o value do provider como parâmetro
            value => (
              <div>
                <p>{ `Eu tenho ${ value.money } pra gastar` }</p>
                <button onClick={ value.spendMoney }>Pedir iFood</button>
              </div>
            )
          }
        </MyContext.Consumer>
        {/* <p>{ `Eu tenho ${ this.props.money } pra gastar` }</p>
        <button onClick={ this.props.spendMoney }>Pedir iFood</button> */}
      </div>
    )
  }
}

export default Daugther;