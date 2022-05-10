import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReportBoard from '../components/Report/ReportBoard';
import { clear } from '../modules/mailSender';
import { RootState } from '../modules';
import axios from 'axios';

function ReportContainer() {
  const dispatch = useDispatch();
  const [accountName, setAccountName] = useState([]);
  const tweet = useSelector((state: RootState) => ({
    tweet: state.reports.tweet,
  }));
  const onClear = () => dispatch(clear());
  let sendTweetId: Number[] = [];
  for (let i = 0; i < tweet.tweet.length; i++) {
    sendTweetId.push(tweet.tweet[i].tweetId); 
  }
  useEffect(() => {
    async function get() {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };

      // https://38fa5e0d-5b04-4db0-bb06-d41907bb60ac.mock.pstmn.io
      // http://15.165.149.176:8080/tweets/${imageId}/accountInfo
      const imageId = sendTweetId.join();
      const getNetworkData = await axios
        .get(`http://15.165.149.176:8080/tweets/${imageId}/accountInfo`, config)
        .then((res) => {
          setAccountName(res.data.name);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
    get();
  }, []);

  return (
    <ReportBoard
      tweetId={sendTweetId}
      onClear={onClear}
      accountName={accountName}
    />
  );
}

export default ReportContainer;
