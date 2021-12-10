import React from 'react';
import ReactStars from 'react-rating-stars-component';

class Avaliation extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      saveEmail: '',
      message: '',
      saveMessage: '',
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ email: '', saveEmail: value });
  }

  changeMessage(value) {
    this.setState({ message: value });
  }

  changeSaveMessage(value) {
    this.setState({ message: '', saveMessage: value });
  }

  render() {
    const { email, saveEmail, message, saveMessage} = this.state;

    return (
      <form className="avaliate">
        <div className="avaliate-div">
          <input
            id="email-input"
            type="email"
            placeholder="E-mail"
            value={ email }
          />
          <ReactStars
            count={ 5 }
            size={ 24 }
            activeColor="#ffd700"
          />
        </div>
        <br />
        <textarea
          data-testid="product-detail-evaluation"
          cols="30"
          rows="10"
          type="text"
          placeholder="Mensagem (Opcional)"
          maxLength="500"
        />
        <br />
        <button type="button" required>Avaliar</button>
      </form>
    );
  }
}

export default Avaliation;