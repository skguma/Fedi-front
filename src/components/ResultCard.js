import React, { useState } from "react";
import styled from "styled-components";
import thumbnail from "../img/001.jpeg";
import "../style/style.css";

function ResultCard({ accountId, accountName, ranking, similarity, tweetURL }) {
  const [resultInfo, setResultInfo] = useState([
    accountId,
    accountName,
    ranking,
    similarity,
    tweetURL
  ]);
  const [clicked, setClicked] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setClicked(!clicked);
  };
  return (
    <Wrapper>
      <Ranking>{ranking}</Ranking>
      <Thumbnail onClick={handleClick}>
        <Img src={thumbnail} />
        {clicked ? (
          <>
            <Overlay />
            <CheckButton>✔</CheckButton>
          </>
        ) : (
          ""
        )}
      </Thumbnail>
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
  position: relative;
`;
const CheckButton = styled.div`
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  width: 15%;
  top: 40%;
  left: 40%;
  border-radius: 50%;
  background-color: #00aaff;
  pointer: cursor;
`;
const Overlay = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #1196c1;
  border: 2px solid blue;
  opacity: 0.2;
  pointer: cursor;
`;
const Img = styled.img`
  height: 100%;
  width: inherit;
  cursor: pointer;
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
