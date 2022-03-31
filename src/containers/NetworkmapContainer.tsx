import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Networkmap from '../components/NetworkGraph/Networkmap';
import { send } from '../modules/mailSender';
import axios from 'axios';

function NetworkmapContainer() {
  const [data, setData] = useState();

  const dispatch = useDispatch();
  const getEmail = (data: any) => {
    let email: any[] = [];
    for (let i = 0; i < data.length; i++) {
      email = email.concat({ tweetUrl: data[i].url });
    }
  };
  const getTweetUrl = (data: object[]) => {
    let tweetUrl: string[] = [];
    for (let i = 0; i < data.length; i++) {
      tweetUrl = tweetUrl.concat(data[i].url);
    }

    dispatch(send(tweetUrl));
  };
  const tweet = useSelector((state) => ({
    tweet: state.reports.tweet,
  }));

  useEffect(() => {
    console.log('tweet', tweet);
    let sendTweetUrl: string[] = [];
    for (let i = 0; i < tweet.tweet.length; i++) {
      sendTweetUrl = sendTweetUrl.concat(tweet.tweet[i].tweetId);
    }
    const param = sendTweetUrl.join(',');

    async function get() {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const getNetworkData = await axios
        .get(`http://15.165.149.176:8080/retweets/${param}`, config)
        .then((res) => {
          setData(res.data);
          getTweetUrl(res.data.nodes);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
    get();
  }, []);

  return <Networkmap data={data} />;
}

export default NetworkmapContainer;
