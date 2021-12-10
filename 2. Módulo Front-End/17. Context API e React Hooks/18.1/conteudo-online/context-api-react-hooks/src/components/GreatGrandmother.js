import React from 'react';
import Granmother from './Granmother';
import MyContext from './MyContext';

class GreatGrandmother extends React.Component {
  
  constructor(props) {
    super(props)

    this.state={
      money: 1000000000
    }

    this.handleSpendMoney = this.handleSpendMoney.bind(this);
  }

  handleSpendMoney() {
    this.setState((prevState) => ({ money:prevState.money - 100 }))
  }

  render() {
    const contextValue = {
      money: this.state.money,
      spendMoney: this.handleSpendMoney,
    }
    return (
      <MyContext.Provider value={ contextValue }>
        <div>
          <h1>Eu sou a bisavó</h1>
          {/* <Granmother money={ this.state.money } spendMoney={ this.handleSpendMoney } /> */}
          <Granmother />
        </div>
      </MyContext.Provider> // Não é mais necssário passar props para os components. Pois o provider distribui essas informações para os elementos que utilizam o consumer
    )
  }
}

export default GreatGrandmother;