import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ResultBoard from '../components/ResultBoard';
import { select, unselect } from '../modules/reports';
import { suspends } from '../modules/suspends';
import { getResults } from '../modules/results';
import PageMove from '../components/PageMove';
import SkeletonUi from '../components/Skeleton';
import EmptyResult from '../components/EmptyResult';
import { useTranslation } from 'react-i18next';

function ResultContainer() {
  const dispatch = useDispatch();
  const { t } = useTranslation(['page']);
  const nextPage: {
    destination: string;
    name: string;
  } = { destination: 'report', name: t('page:NetworkmapPage.nextPage') };
  const { file } = useSelector((state) => ({
    file: state.images.file,
  }));
  const { data, loading, error } = useSelector(
    (state) => state.results.results
  );

  useEffect(() => {
    dispatch(getResults(file));
  }, []);

  const onSelect = (tweetId: number, tweetUrl: string) =>
    dispatch(select(tweetId, tweetUrl));
  const onUnselect = (tweetId: number) => dispatch(unselect(tweetId));
  const onSuspend = (suspendTweetId: number) =>
    dispatch(suspends(suspendTweetId));

  if (loading) return <SkeletonUi />;
  if (error) return <div>에러 발생!</div>;
  if (!data || data.length ===0) return <EmptyResult/>;
  else return (
    <>
    <ResultBoard
      results={data}
      onSelect={onSelect}
      onSuspend={onSuspend}
      onUnselect={onUnselect}
    />
    <PageMove nextPage={nextPage} />
    </>
  );
}

export default ResultContainer;
