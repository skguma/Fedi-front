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

  const { suspendTweetId } = useSelector((state) => ({
    suspendTweetId: state.suspender.suspendTweetId,
  }));

  let RESULT_FETCH_COMPLETE_FLAG = false;
  let SUSPEND_FETCH_COMPLETE_FLAG = false;
  const formData = new FormData();
  formData.append('file', file);
  console.log('file', file);

  useEffect(() => {
    async function post() {
      const result = await axios({
        method: 'post',
        url: 'http://15.165.149.176:8080/results',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (!RESULT_FETCH_COMPLETE_FLAG) {
        setData(result.data.data);
      }
    }
    async function suspend() {
      const tweetId = suspendTweetId;
      const result = await axios({
        method: 'patch',
        url: `http://15.165.149.176:8080/tweets/${tweetId}/suspend`,
        headers: { 'Content-Type': 'application/json' },
      });
      if (!SUSPEND_FETCH_COMPLETE_FLAG) {
        setData(result.data.data);
        console.log('suspend api data', result.data.data);
      }
    }
    if (suspendTweetId === null) {
      post();
      return () => {
        RESULT_FETCH_COMPLETE_FLAG = true;
      };
    } else {
      suspend();
      return () => {
        SUSPEND_FETCH_COMPLETE_FLAG = true;
      };
    }
  }, [suspendTweetId]);

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
