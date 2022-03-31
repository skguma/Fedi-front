import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReportBoard from '../components/Report/ReportBoard';
import { clear } from '../modules/mailSender';

function ReportContainer() {
  const dispatch = useDispatch();
  const { tweetUrl } = useSelector((state) => ({
    tweetUrl: state.mailSender.tweetUrl,
  }));
  const onClear = () => dispatch(clear());

  return <ReportBoard tweetUrl={tweetUrl} onClear={onClear} />;
}

export default ReportContainer;
