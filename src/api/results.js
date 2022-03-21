import axios from 'axios';

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// 유사도 분석 결과를 가져오는 비동기 함수
export const getResults = async (file) => {
  const form = new FormData();
  console.log('api file:', file);
  form.append('file', file);
  // await sleep(1000); //0.5초 쉬기
  const headers = {
    'Content-Type': 'multipart/form-data',
  };

  const data = [
    {
      imageUrl: 'https://via.placeholder.com/150/771796',
      eyes: '1 1 2 2',
      similarity: 98.5421,
      tweetUrl: 'https://twitter.com/aaa/1',
      tweetId: 1,
    },
    {
      imageUrl: 'https://via.placeholder.com/150/24f355',
      eyes: '3 3 4 4',
      similarity: 95.1234,
      tweetUrl: 'https://twitter.com/bbb/1',
      tweetId: 2,
    },
    {
      imageUrl: 'https://via.placeholder.com/150/24f355',
      eyes: '3 3 4 4',
      similarity: 95.1234,
      tweetUrl: 'https://twitter.com/bbb/1',
      tweetId: 3,
    },
    {
      imageUrl: 'https://via.placeholder.com/150/24f355',
      eyes: '3 3 4 4',
      similarity: 95.1234,
      tweetUrl: 'https://twitter.com/bbb/1',
      tweetId: 4,
    },
    {
      imageUrl: 'https://via.placeholder.com/150/24f355',
      eyes: '3 3 4 4',
      similarity: 95.1234,
      tweetUrl: 'https://twitter.com/bbb/1',
      tweetId: 5,
    },
  ];

  /* POST 요청 
  const response = await axios.post(
    "https://38fa5e0d-5b04-4db0-bb06-d41907bb60ac.mock.pstmn.io/results",
    { file: file },
    {
      headers
    }
  );
  */
  // GET 요청 - 테스트용
  //const response = await axios.get("http://localhost:4000/data");
  //console.log("results api data:", response.data);

  // 결과를 디스패치해야 함
  return data;
  // return response.data;
};
