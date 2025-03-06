import Contact from "../Contact/Contact";
import { contacts_list } from "./ContactList.module.css";

function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={contacts_list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            name={name}
            number={number}
            id={id}
            deleteContact={deleteContact}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
