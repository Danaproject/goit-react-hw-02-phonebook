import './ContactList.scss';
import PropTypes from 'prop-types';

const ContactItem = ({ contacts, onDeleteContact }) => (
  contacts.map(({ id, name, number }) => (
    <li key={id} className="ContactList__item">
      <p className="ContactList__text">{name}: &#x2121; {number}</p>
      <button
        type="button"
        className="ContactList__btn"
        onClick={() => onDeleteContact(id)}>
        &#128465;
    </button>
    </li>
  ))
);

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    })
    ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;