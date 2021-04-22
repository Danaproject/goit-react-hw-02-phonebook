import { Component } from 'react';
import './ContactForm.scss';

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
      <form className="ContactForm" onSubmit={this.handleSubmit}>
        <label className="ContactForm__label">
          Name
        <input
          type="text"
          name="name"
          className="ContactForm__input"
          value={this.state.name}
          onChange={this.handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          />
        </label>
        <label className="ContactForm__label">
          Number
        <input
          type="tel"
          name="number"
          className="ContactForm__input"
          value={this.state.number}
          onChange={this.handleNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          />
        </label>
        <button type="submit" className="ContactForm__button">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;