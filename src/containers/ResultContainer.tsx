// 결과 페이지 데이터 컨테이너
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ResultBoard from '../components/ResultBoard';
import { select, unselect } from '../modules/reports';
import { suspends } from '../modules/suspends';
import { fetchData } from '../modules/resultsData';
import { getResults } from '../modules/results';
import { imageAPI } from '../api/api';
import axios from 'axios';

function ResultContainer() {
  const dispatch = useDispatch();
  const [stopButtonClicked, setStopButtonClicked] = useState(false);
  const [data, setData] = useState();

  const { file } = useSelector((state) => ({ file: state.images.file }));

  // 정지 계정 신고하면 API 재호출하는 로직
  const { suspendAccount } = useSelector((state) => ({
    suspendAccount: state.suspender.suspendTweetId,
  }));

  // console.log("스토어에서 가져온 값", suspendAccount);

  let completed = false;

  const formData = new FormData();
  formData.append('file', file);

  // http://15.165.149.176:8080/results
  useEffect(() => {
    async function post() {
      const result = await axios({
        method: 'post',
        url: 'https://38fa5e0d-5b04-4db0-bb06-d41907bb60ac.mock.pstmn.io/results',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (!completed) {
        setData(result.data.data);
        console.log('api data', result.data.data);
      }
    }
    post();
    return () => {
      completed = true;
    };
    // stop button 상태가 변할 때 마다 useEffect 실행
  }, []);

  const fetchData = (data) => dispatch(fetchData(data));
  // fetchData(data);

  const onSelect = (tweetId) => dispatch(select(tweetId));
  const onUnselect = (tweetId) => dispatch(unselect(tweetId));
  const onSuspend = (tweetId) => dispatch(suspends(tweetId));

  return (
    <ResultBoard
      results={data}
      onSelect={onSelect}
      onSuspend={onSuspend}
      onUnselect={onUnselect}
    />
  );

  // 각 액션을 dispatch하는 함수
}

export default ResultContainer;
