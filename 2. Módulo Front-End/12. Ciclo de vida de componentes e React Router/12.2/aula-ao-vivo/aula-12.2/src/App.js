import React from 'react';
import Input from './Input';
import './App.css';
import Button from './Button';

class App extends React.Component{
  constructor() {
    super();

    this.state ={
      email: '',
      password: '',
      showEmail: false,
      isRequiredInput: true
    }
  }

  handleChange = ({ target }) => { // com arrow function não precisa do bind. Só se usa callback quando precisar manter o valor anterior
    this.setState({
      [target.name]: target.value,
      showEmail: false
    })
  }

  onSubmitForm = (event) => {
    event.preventDefault();
    this.setState({
      showEmail: true
    })
    console.log('clicou')
  }

  render() {
    const { email, password, showEmail, isRequiredInput } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.onSubmitForm}>
        <Input 
        inputName="email" 
        inputLabel='email' 
        inputType="email" 
        inputValue={email} 
        onChangeInput={this.handleChange} />

        <Input 
        inputName="password" 
        inputLabel='password' 
        inputType="password" 
        inputValue={password} 
        isRequired={isRequiredInput}
        onChangeInput={this.handleChange} 
        />

        <Button 
        typeButton="submit" 
        labelButton="Entrar" 
        />
        </form>
        {showEmail ? email : ''}
      </div>
    );
  }
}

export default App;
