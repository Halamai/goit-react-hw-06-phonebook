import { createAction } from "@reduxjs/toolkit";
export const addNewContact = createAction("contacts/addNewContact");
export const getAllContacts = createAction("contacts/getContacts");
export const removeContact = createAction("contacts/removeContact");
export const setFilter = createAction("contacts/setFilter");
