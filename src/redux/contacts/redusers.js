import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

const ADDNEWCONTACT = "contacts/addNewContact";
const GETCONTACTS = "contacts/getContacts";
const REMOWECONTACT = "contacts/removeContact";

const SETFILTER = "contacts/setFilter";

export { ADDNEWCONTACT, GETCONTACTS, REMOWECONTACT, SETFILTER };

const itemsRedusers = createReducer([], {
  [ADDNEWCONTACT]: (state, action) => [...state, action.payload],
  [GETCONTACTS]: (_, action) => action.payload,
  [REMOWECONTACT]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

// const itemsRedusers = (state = [], action) => {
//   switch (action.type) {
//     case types.ADDNEWCONTACT:
//       return [...state, action.payload];
//     case types.GETCONTACTS:
//       return action.payload;
//     case types.REMOWECONTACT:
//       return state.filter((contact) => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };
const filterReduser = createReducer("", {
  [SETFILTER]: (_, action) => action.payload,
});
// const filterReduser = (state = "", action) => {
//   switch (action.type) {
//     case SETFILTER:
//       return action.payload;
//     default:
//       return state;
//   }
// };

export const contactsReduser = combineReducers({
  items: itemsRedusers,
  filter: filterReduser,
});
