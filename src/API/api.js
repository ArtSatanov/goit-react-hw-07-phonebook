import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6556aa9fbd4bcef8b61188e5.mockapi.io';

export async function getData(signal) {
  const response = await axios.get('/contacts', { signal });
  return response.data;
}

export const addData = createAsyncThunk('addContact', async data => {
  const response = await axios.post(`/contacts${data}`);
  return response.data;
});

export const deleteData = createAsyncThunk('deleteContact', async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
});
