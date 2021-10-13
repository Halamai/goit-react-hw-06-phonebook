import { createAction } from "@reduxjs/toolkit";
export const addNewContact = createAction("contacts/addNewContact");

// export const addNewContact = (contact) => {
//   return {
//     type: "contacts/addNewContact",
//     payload: contact,
//   };
// };
export const getAllContacts = createAction("contacts/getContacts");
// export const getAllContacts = (contacts) => {
//   return {
//     type: "contacts/getContacts",
//     payload: contacts,
//   };
// };

export const removeContact = createAction("contacts/removeContact");
// export const removeContact = (id) => {
//   return {
//     type: "contacts/removeContact",
//     payload: id,
//   };
// };
export const setFilter = createAction("contacts/setFilter");
// export const setFilter = (filter) => {
//   return {
//     type: "contacts/setFilter",
//     payload: filter,
//   };
// };
