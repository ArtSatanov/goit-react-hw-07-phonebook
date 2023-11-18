import axios from 'axios';

axios.defaults.baseURL = 'https://6556aa9fbd4bcef8b61188e5.mockapi.io/contacts';

export async function getData() {
  const response = await axios.get('/contacts');
  return response.data;
}

export async function addData(data) {
  const response = await axios.post('/contacts/', data);
  return response.data;
}

export async function deleteData(id) {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
}
