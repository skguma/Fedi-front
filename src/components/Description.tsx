import React from 'react';
import styled from 'styled-components';
import { theme } from '../style/theme';

type DescriptionType = {
  informations: {
    id: string;
    note: string;
  }[];
};

const Description = ({ informations }: DescriptionType) => {
  const [title, ...subtitles] = informations;

  return (
    <DescriptionWrapper>
      <h1>{title.note}</h1>
      <br />
      <br />
      {subtitles.map((subtitle, index) => (
        <>
          <h2 key={index}>{subtitle.note}</h2>
          &nbsp;
        </>
      ))}
    </DescriptionWrapper>
  );
};

export default Description;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 170px;
  width: inherit%;
  padding: 13px;
  font-weight: bold;
  color: ${theme.color.blue};
  background-color: ${theme.color.bgColor};
  h1 {
    font-weight: bold;
    font-size: 14px;
    color: ${theme.color.black};
  }
  h2 {
    font-size: 10px;
    color: ${theme.color.grey};
  }
`;
