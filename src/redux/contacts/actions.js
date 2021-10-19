import { createAction, nanoid } from "@reduxjs/toolkit";
export const addNewContact = createAction(
  "contacts/addNewContact",
  (contact) => {
    return { payload: { ...contact, id: nanoid() } };
  }
);
export const getAllContacts = createAction("contacts/getContacts");
export const removeContact = createAction("contacts/removeContact");
export const setFilter = createAction("contacts/setFilter");
