import logo from '../logo.svg';
import React from 'react'

// const LogoReact = () => {
//   return <img src={logo} className="App-logo" alt="logo" />
// }

class LogoReact extends React.Component {
  render() {
    return <img src={logo} className="App-logo" alt="logo" />
  }
}

export default LogoReact