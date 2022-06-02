import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://api.fedi.link',
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
