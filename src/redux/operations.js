import { createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from 'API/api';

const controller = new AbortController();

export const fetchContacts = createAsyncThunk(
  'fetchContacts',
  async (_, thunkAPI) => {
    try {
      return await getData(controller.signal);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactAPI = createAsyncThunk('addContact', async data => {
  const response = await axios.post(`/contacts${data}`);
  return response.data;
});

export const deleteContactAPI = createAsyncThunk('deleteContact', async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
});
