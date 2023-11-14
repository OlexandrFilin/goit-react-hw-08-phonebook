import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './api';


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

  // extraReducers: {
  //   [fetchContacts.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contactsUser = action.payload;
  //   },
  //   [fetchContacts.rejected](state, action) {
  //     console.log('state', state)
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   [addContact.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [addContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contactsUser = [...state.contactsUser, action.payload];
  //   },
  //   [addContact.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },

  //   [deleteContact.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [deleteContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.contactsUser.findIndex(
  //       contact => contact.id === action.payload.id
  //     );
  //     state.contactsUser.splice(index, 1);
      
  //   },
  //   [deleteContact.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },


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
      state.contactsUser = action.payload;
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
  // extraReducers: builder => {
  //   builder.addCase(fetchContacts.pending, (state) => {
  //     state.isLoading = true;
  //   }),
  //     builder.addCase(fetchContacts.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.contactsUser = action.payload;
  //     }),
  //     builder.addCase(fetchContacts.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  //     builder.addCase(addContact.pending, (state) => {
  //       state.isLoading = true;
  //     }),
  //       builder.addCase(addContact.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //         state.error = null;
  //         state.contactsUser = action.payload;
  //       }),
  //       builder.addCase(addContact.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.error = action.payload;
  //       });
  //       builder.addCase(deleteContact.pending, (state) => {
  //         state.isLoading = true;
  //       }),
  //         builder.addCase(deleteContact.fulfilled, (state, action) => {
  //           state.isLoading = false;
  //           state.error = null;
  //           const index = state.contactsUser.findIndex(
  //             contact => contact.id === action.payload.id
  //           );
  //           state.contactsUser.splice(index, 1);
  //         }),
  //         builder.addCase(deleteContact.rejected, (state, action) => {
  //           state.isLoading = false;
  //           state.error = action.payload;
  //         });
  // },
 });

export const getConactFromState = state => state.contactsUser;
