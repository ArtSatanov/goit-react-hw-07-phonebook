import { createAsyncThunk } from '@reduxjs/toolkit';
import { addData, deleteData, getData } from 'API/api';

export const fetchContacts = createAsyncThunk(
  'fetchContacts',
  async (_, thunkAPI) => {
    try {
      return await getData();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'addcotanct',
  async (data, thunkAPI) => {
    try {
      return await addData(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      return await deleteData(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
