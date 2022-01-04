import React, { useState } from "react";
import styled from "styled-components";

function ResultCard({ accountId, accountName, ranking, similarity, tweetURL }) {
  const [resultInfo, setResultInfo] = useState([
    accountId,
    accountName,
    ranking,
    similarity,
    tweetURL
  ]);
  return (
    <Wrapper>
      <Ranking>{ranking}</Ranking>
      <Thumbnail />
      <ResultInfo>
        <Similarity>{similarity}%</Similarity>
        <TweetURL>원본 트윗</TweetURL>
      </ResultInfo>
    </Wrapper>
  );
}

export default ResultCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  pointer: cursor;
  gap: 0.2rem;
  height: 200px;
  font-size: 3px;
  padding: 5px;
  margin: 10px;
`;

const Thumbnail = styled.div`
  height: 80%;
  width: inherit;
  background-color: lightgrey;
`;

const Ranking = styled.div`
  height: 8%;
  font-size: 12px;
  font-weight: bold;
  color: #4a4a4a;
`;

const ResultInfo = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Similarity = styled.div``;

const TweetURL = styled.div`
  color: blue;
`;
