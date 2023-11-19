

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL ="https://connections-api.herokuapp.com";
const setContactsHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


 const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_ , thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    // If there is no token, exit without performing any request
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setContactsHeader(persistedToken);
     const response = await axios.get("/contacts");
    //  console.log('response', response)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
    
  });

  const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;


    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setContactsHeader(persistedToken);

      const response = await axios.post("/contacts",contact);
  
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    
 });

const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
  try {
     const response = await axios.delete(`/contacts/${id}`);
   return response.data;
  } catch (error) {
     return thunkAPI.rejectWithValue(error.message);
  }
     
 });
export {fetchContacts, addContact,deleteContact};