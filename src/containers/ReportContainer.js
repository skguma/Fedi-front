import React from 'react';
import { useSelector } from 'react-redux';
import ReportBoard from '../components/Report/ReportBoard';

function ReportContainer() {
  const { tweetUrl } = useSelector((state) => ({
    tweetUrl: state.mailSender.tweetUrl,
  }));

  // TODO: 계정 리스트 두개랑 전체 사이즈 내려보내기
  return <ReportBoard tweetUrl={tweetUrl} />;
}

export default ReportContainer;
