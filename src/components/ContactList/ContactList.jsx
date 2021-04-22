import './ContactList.scss';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className="ContactList">
        {contacts.map(({ id, name, number }) => (
        <li key={id} className="ContactList__item">
            <p className="ContactList__text">{name}: &#x2121; {number}</p>
        <button
            type="button"
            className="ContactList__btn"
            onClick={() => onDeleteContact(id)}>
            &#128465;
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;