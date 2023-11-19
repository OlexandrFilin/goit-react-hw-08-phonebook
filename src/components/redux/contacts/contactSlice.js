import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contacts_operations';


const initialState = {
  contactsUser: [],
  isLoading: false,
  error: null,
};
const handlePending=(state)=>{
  state.isLoading = true;
}
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,

  


extraReducers: (builder) => {
  builder
    .addCase(fetchContacts.pending,handlePending)
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contactsUser = action.payload;
    })
    .addCase(fetchContacts.rejected, handleRejected)
    .addCase(addContact.pending, handlePending)
    .addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contactsUser = [...state.contactsUser,action.payload];
    })
    .addCase(addContact.rejected, handleRejected)
    .addCase(deleteContact.pending, handlePending)
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.contactsUser.findIndex(
        (contact) => contact.id === action.payload.id
      );
      state.contactsUser.splice(index, 1);
    })
    .addCase(deleteContact.rejected, handleRejected);
},
  
 });

export const getConactFromState = state => state.contactsUser;
