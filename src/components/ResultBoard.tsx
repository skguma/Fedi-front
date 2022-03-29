import React from 'react';
import styled from 'styled-components';
import ResultCard from './ResultCard';
import { theme } from '../style/theme';
import { device } from '../style/theme';

type ResultBoardProps = {
  results: any;
  onSelect: () => void;
  onUnselect: () => void;
  onSuspend: () => void;
};

const ResultBoard = ({
  results,
  onSelect,
  onUnselect,
  onSuspend,
}: ResultBoardProps) => {
  return (
    <Wrapper>
      {results &&
        results.map((results, index) => (
          <ResultCard
            key={results.tweetId}
            tweetId={results.tweetId}
            ranking={index}
            imageUrl={results.imageUrl}
            eyes={results.eyes}
            similarity={results.similarity}
            tweetUrl={results.tweetUrl}
            onSelect={onSelect}
            onUnselect={onUnselect}
            onSuspend={onSuspend}
          />
        ))}
    </Wrapper>
  );
};

export default ResultBoard;

const Wrapper = styled.div`
  display: grid;
  ${device.mobile} {
    justify-content: center;
    grid-template-columns: repeat(2, 150px);
  }
  ${device.tablet} {
    grid-template-columns: repeat(2, 200px);
  }
  grid-gap: 7px;
  background-color: ${theme.color.bgColor};
`;
