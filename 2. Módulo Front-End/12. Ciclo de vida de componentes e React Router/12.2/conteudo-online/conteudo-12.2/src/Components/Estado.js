import React from 'react';

class Estado extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <label>
        Estado:
        <select 
          name="estado" 
          value={value} 
          onChange={handleChange} 
          required
        >
          <option value=''></option>
          <option>São Paulo</option>
          <option>Minas Gerais</option>
          <option>Rio de Janeiro</option>
          <option>Paraná</option>
        </select>
      </label>
    )
  }
}

export default Estado;