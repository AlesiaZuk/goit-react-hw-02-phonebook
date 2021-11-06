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
                    <p>
                      {contact.name}: {contact.number}
                    </p>
                    <button
                      key={contact.id}
                      type="button"
                      onClick={handleDeleteContact}
                    >
                      Delete
                    </button>
                  </li>
                ))
            : contacts.map((contact) => (
                <li key={contact.id}>
                  <p>
                    {contact.name}: {contact.number}
                  </p>
                  <button
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
