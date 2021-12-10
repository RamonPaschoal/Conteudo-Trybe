import React from 'react';

class Nome extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <label>
        Nome:
        <input 
          name="nome" 
          value={value} 
          onChange={handleChange} 
          type="text" 
        />
      </label>
    )
  }
}

export default Nome;