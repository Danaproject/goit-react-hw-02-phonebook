import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };
    
  handleNumberChange = e => {
    this.setState({ number: e.currentTarget.value });
  };
  
  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className="InputForm" onSubmit={this.handleSubmit}>
        <label className="Input__label">
          Name
        <input
          type="text"
          name="name"
          className="InputForm__input"
          value={this.state.name}
          onChange={this.handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          />
        </label>
        <label className="Input__label">
          Number
        <input
          type="tel"
          name="number"
          className="InputForm__input"
          value={this.state.number}
          onChange={this.handleNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          />
        </label>
        <button type="submit" className="InputForm__button">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;