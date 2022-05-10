import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://15.165.149.176:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const imageAPI = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
