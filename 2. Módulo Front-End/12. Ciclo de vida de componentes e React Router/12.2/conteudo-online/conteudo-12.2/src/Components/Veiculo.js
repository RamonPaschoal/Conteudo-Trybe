import React from 'react';

class Veiculo extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return(
      <label>
        Possuí veículo próprio?
        <input 
          name="temCarro" 
          value={value} 
          onChange={handleChange} 
          type="checkbox" 
        /> 
    </label>
    )
  }
}

export default Veiculo;