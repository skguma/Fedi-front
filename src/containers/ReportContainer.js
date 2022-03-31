import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReportBoard from '../components/Report/ReportBoard';
import { clear } from '../modules/mailSender';

function ReportContainer() {
  const dispatch = useDispatch();
  const { tweetUrl } = useSelector((state) => ({
    tweetUrl: state.mailSender.tweetUrl,
  }));

  // tweetId에 저장된 tweetUrl들 내려보내기
  const tweet = useSelector((state) => ({
    tweet: state.reports.tweet,
  }));
  console.log('tweet', tweet);
  let sendTweetUrl: string[] = [];
  for (let i = 0; i < tweet.tweet.length; i++) {
    sendTweetUrl = sendTweetUrl.concat(tweet.tweet[i].tweetUrl);
  }
  const onClear = () => dispatch(clear());

  return (
    <ReportBoard
      tweetUrl={tweetUrl}
      serverTweetUrl={sendTweetUrl}
      onClear={onClear}
    />
  );
}

export default ReportContainer;
