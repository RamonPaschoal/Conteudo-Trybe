import React from 'react';

class Input extends React.Component {
  render () {
    return (
      <input type={this.props.tipoDoInput} onChange={this.onChangeDoInput} /> 
    )
  }
}

export default Input