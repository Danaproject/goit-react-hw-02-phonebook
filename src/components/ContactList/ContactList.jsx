import ContactItem from './ContactItem'
import './ContactList.scss';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="ContactList">
    <ContactItem contacts={contacts} onDeleteContact={onDeleteContact} />
  </ul>
);

export default ContactList;