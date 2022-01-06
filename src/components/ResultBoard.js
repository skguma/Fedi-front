import React from "react";
import styled, { css } from "styled-components";
import ResultCard from "./ResultCard";

const Wrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      display: grid;
      grid-template-columns: repeat(2, minmax(40px, 100%));
      grid-gap: 7px;
      background-color: ${colors.bgColor};
    `;
  }}
`;

const ex = [
  {
    key: 0,
    accountID: "abcde12",
    accountName: "지인능욕계정",
    ranking: 1,
    similarity: 99.99,
    tweetURL: "http://naver.com"
  },
  {
    key: 1,
    accountID: "abcde12",
    accountName: "지인능욕계정",
    ranking: 2,
    similarity: 99.99,
    tweetURL: "http://naver.com"
  },
  {
    key: 2,
    accountID: "abcde12",
    accountName: "지인능욕계정",
    ranking: 3,
    similarity: 99.99,
    tweetURL: "http://naver.com"
  },
  {
    key: 3,
    accountID: "abcde12",
    accountName: "지인능욕계정",
    ranking: 4,
    similarity: 99.99,
    tweetURL: "http://naver.com"
  },
  {
    key: 4,
    accountID: "abcde12",
    accountName: "지인능욕계정",
    ranking: 5,
    similarity: 99.99,
    tweetURL: "http://naver.com"
  },
  {
    key: 5,
    accountID: "abcde12",
    accountName: "지인능욕계정",
    ranking: 6,
    similarity: 99.99,
    tweetURL: "http://naver.com"
  }
];
const ResultBoard = ({ results }) => {
  return (
    <Wrapper>
      {ex.map((results, index) => (
        <ResultCard
          key={index}
          accountId={results.accountId}
          accountName={results.accountName}
          ranking={results.ranking}
          similarity={results.similarity}
          tweetURL={results.tweetURL}
        />
      ))}
    </Wrapper>
  );
};

export default ResultBoard;
