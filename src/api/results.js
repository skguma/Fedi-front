import axios from 'axios';

export const getResults = async (file) => {
  const form = new FormData();
  form.append('file', file);
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  const result = await axios.post(
    'http://15.165.149.176:8080/results',
    form,
    config
  );
  console.log('result.data ', result.data);
  return result.data;
};
