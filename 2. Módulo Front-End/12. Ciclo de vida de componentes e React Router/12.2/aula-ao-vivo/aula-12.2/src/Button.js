import React from 'react';

class Button extends React.Component {
  render() {
    const { typeButton, onClickButton, labelButton } = this.props
    return (
      <label>
        <button 
        type={typeButton}
        onClick={onClickButton} >
          {labelButton}
        </button>
      </label>
    )
  }
}

export default Button;