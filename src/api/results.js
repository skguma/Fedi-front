import axios from 'axios';

export const getResults = async (file) => {
  const form = new FormData();
  form.append('file', file);
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  const result = await axios.post(
    'https://38fa5e0d-5b04-4db0-bb06-d41907bb60ac.mock.pstmn.io/results',
    form,
    config
  );
  return result.data;
};

// https://38fa5e0d-5b04-4db0-bb06-d41907bb60ac.mock.pstmn.io/results

// http://15.165.149.176:8080/results
