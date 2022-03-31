import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ResultBoard from '../components/ResultBoard';
import { select, unselect } from '../modules/reports';
import { suspends } from '../modules/suspends';
import axios from 'axios';

function ResultContainer() {
  const dispatch = useDispatch();
  const [data, setData] = useState();

  const { file } = useSelector((state) => ({
    file: state.images.file,
  }));

  let RESULT_FETCH_COMPLETE_FLAG = false;
  // http://15.165.149.176:8080/results
  // https://38fa5e0d-5b04-4db0-bb06-d41907bb60ac.mock.pstmn.io/results
  useEffect(() => {
    async function post() {
      const formData = new FormData();
      formData.append('file', file);
      const result = await axios({
        method: 'post',
        url: 'http://15.165.149.176:8080/results',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (!RESULT_FETCH_COMPLETE_FLAG) {
        console.log('api result data: ', result.data);
        setData(result.data);
      }
    }
    post();
    return () => {
      RESULT_FETCH_COMPLETE_FLAG = true;
    };
  }, []);

  const onSelect = (tweetId: number) => dispatch(select(tweetId));
  const onUnselect = (tweetId: number) => dispatch(unselect(tweetId));
  const onSuspend = (suspendTweetId: number) =>
    dispatch(suspends(suspendTweetId));

  return (
    <ResultBoard
      results={data}
      onSelect={onSelect}
      onSuspend={onSuspend}
      onUnselect={onUnselect}
    />
  );
}

export default ResultContainer;
