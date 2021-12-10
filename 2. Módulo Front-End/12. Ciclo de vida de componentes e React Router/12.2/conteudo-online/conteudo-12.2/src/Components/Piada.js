import React from 'react';

class Piada extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value.length > 50) error = 'Piada é ruim!';

    
    return(
      <label>
        Conte uma piada:
        <textarea 
          name="conteUmaPiada" 
          value={value} 
          onChange={handleChange} 
          maxLength='100'
        />
        {error !== undefined ? error : ''}
    </label>
    )
  }
}

export default Piada;