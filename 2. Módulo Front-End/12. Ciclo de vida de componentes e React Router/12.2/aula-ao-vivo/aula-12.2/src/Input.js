import React from 'react';

class Input extends React.Component {
  render() {
    const { inputType, inputLabel, inputName, onChangeInput, inputValue, isRequired } = this.props
    return (
      <label>
        {inputLabel}
        <input 
        type={inputType} 
        name={inputName} 
        onChange={onChangeInput} 
        value={inputValue} 
        label={inputLabel}
        required={isRequired} />
      </label>
    )
  }
}

export default Input;