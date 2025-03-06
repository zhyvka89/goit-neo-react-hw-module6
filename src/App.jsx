import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { phonebook_container, title } from "./App.module.css";
import Notification from "./components/Notification/Notification";

function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsData = localStorage.getItem("contacts");

    if (contactsData) return JSON.parse(contactsData);

    return [];
  });
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function addContact(newContact) {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  }

  function deleteContact(id) {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  }

  const foundContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={phonebook_container}>
      <h1 className={title}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={searchValue} searchContact={setSearchValue} />
      {contacts.length || foundContacts.length ? (
        <ContactList contacts={foundContacts} deleteContact={deleteContact} />
      ) : (
        <Notification> Your contacts list is Empty! </Notification>
      )}

      {!foundContacts.length && contacts.length > 0 && (
        <Notification> No found contacts! </Notification>
      )}
    </div>
  );
}

export default App;
