import React from "react";
import s from "./ContactList.module.css";
// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/actions";

const ContactList = () => {
  const contactsList = useSelector(({ contacts: { items, filter } }) => {
    if (filter) {
      return items.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else return items;
  });
  const dispatch = useDispatch();
  return (
    <ul className={s.menu}>
      {contactsList &&
        contactsList.map((contact) => (
          <li key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>
            <button
              className={s.btn}
              type="button"
              id={contact.id}
              onClick={() => dispatch(removeContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
