// 결과 페이지 데이터 컨테이너
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ResultBoard from "../components/ResultBoard";
import { select, unselect } from "../modules/reports";
import { getResults } from "../modules/results";

function ResultContainer() {
  const { data, loading, error } = useSelector(state => state.results.results);
  const dispatch = useDispatch();

  // 1. store에서 얼굴 사진 가져옴 (구독)
  const { file } = useSelector(state => state.images.file);
  console.log("file", file);
  // 2. 얼굴 사진을 file 변수에 넣어서 /result로 POST 요청함
  useEffect(() => {
    // 3. response를 store에 저장함
    dispatch(getResults(file)); // 파일 어떻게 보내지..?
    console.log("data2:", data);
  }, [dispatch]);

  console.log("data1:", data);

  // 4. 데이터를 ResultCard에 내려보냄

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return <ResultBoard results={data} />;

  // 각 액션을 dispatch하는 함수
  // const onSelect = () => dispatch(select());
  // const onUnselect = () => dispatch(unselect());
}

export default ResultContainer;
