import React from 'react';
import colors from './data';
// import Input from './input'
import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value })
  }
  render() {
    const { inputValue } = this.state;

    return (
      <div>
        <input type='text' onChange={this.handleChange} />
        {/* <Input tipoDoInput='text' onChangeDoInput={this.handleChange} /> */}
        <ul>
          {
            colors
            .filter(clr => clr.color.includes(inputValue) || clr.value.includes(inputValue))
            .map((color) => 
              <li key={color.value}>
                <div style={{background: color.value}}
                     className='color-container'/>
                {color.color} - {color.value}
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default App;
