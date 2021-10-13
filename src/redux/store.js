// import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import { contactsReduser } from "./contacts/redusers";

// const rootReducer = combineReducers({
//   contacts: contactsReduser,
// });

// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
});

export default store;
