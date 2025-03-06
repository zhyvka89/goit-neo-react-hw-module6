import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact(state, {payload}) {
      state.push(payload);
    },
    deleteContact(state, {payload}) {
      state.filter((contact) => contact.id !== payload);
    },
  },
});
export const getContacts = (state) => state.contacts;

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;