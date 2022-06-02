import axios from 'axios';

export const getResults = async (file) => {
  const form = new FormData();
  form.append('file', file);
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  const result = await axios.post(
    'https://api.fedi.link/results',
    form,
    config
  );
  return result.data;
};
