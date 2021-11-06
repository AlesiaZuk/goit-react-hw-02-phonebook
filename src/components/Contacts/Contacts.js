import { Component } from "react";
import s from "./Contacts.module.css";

class Contacts extends Component {
  render() {
    const { contacts, filter, handleDeleteContact } = this.props;

    return (
      <>
        <ul>
          {filter
            ? contacts
                .filter((contact) =>
                  contact.name.toLowerCase().includes(filter.toLowerCase())
                )
                .map((contact) => (
                  <li key={contact.id}>
                    <p className={s.contacts_text}>
                      {contact.name}: {contact.number}
                    </p>
                    <button
                      className={s.contacts_button}
                      key={contact.id}
                      type="button"
                      onClick={handleDeleteContact}
                    >
                      Delete
                    </button>
                  </li>
                ))
            : contacts.map((contact) => (
                <li className={s.contacts_item} key={contact.id}>
                  <p className={s.contacts_text}>
                    {contact.name}: {contact.number}
                  </p>
                  <button
                    className={s.contacts_button}
                    key={contact.id}
                    type="button"
                    onClick={handleDeleteContact}
                  >
                    Delete
                  </button>
                </li>
              ))}
        </ul>
      </>
    );
  }
}
export default Contacts;
