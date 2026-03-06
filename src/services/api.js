
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001/v1' // Aponta para o seu backend local
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

const token = localStorage.getItem('authToken');
if (token) {
  setAuthToken(token);
}
