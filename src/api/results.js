import axios from "axios";

const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// 유사도 분석 결과를 가져오는 비동기 함수
export const getResults = async file => {
  const form = new FormData();
  form.append("file", file);
  // await sleep(1000); //0.5초 쉬기
  const response = await axios.post("http://localhost:3001/results", form);

  console.log("results api data:", response.data);

  return response.data; // data 배열 반환
};
