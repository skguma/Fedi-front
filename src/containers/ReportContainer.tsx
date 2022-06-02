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
      const imageId = sendTweetId.join();
      const getNetworkData = await axios
        .get(`https://api.fedi.link/tweets/${imageId}/accountInfo`, config)
        .then((res) => {
          setAccountName(res.data.name);
        })
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
