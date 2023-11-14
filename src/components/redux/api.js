

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL ="https://654d327777200d6ba85a2088.mockapi.io"

 const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_ , thunkAPI) => {
  try {
     const response = await axios.get("/contacts");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
    
  });

  const addContact = createAsyncThunk("contacts/addContact", async (contact) => {
    try {
      const response = await axios.post("/contacts",contact);
   return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    
 });

const deleteContact = createAsyncThunk("contacts/deleteContact", async (id) => {
  try {
     const response = await axios.delete(`/contacts/${id}`);
   return response.data;
  } catch (error) {
     return thunkAPI.rejectWithValue(error.message);
  }
     
 });
export {fetchContacts, addContact,deleteContact};