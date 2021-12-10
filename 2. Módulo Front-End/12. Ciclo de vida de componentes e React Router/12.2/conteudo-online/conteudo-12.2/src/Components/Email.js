import React from 'react';

class Email extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return(
    <label>
      E-mail:
      <input 
        name="email" 
        value={value} 
        onChange={handleChange} 
        type="email" 
      />
    </label>
    )
  }
}

export default Email;