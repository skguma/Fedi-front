import React from 'react';
import styled from 'styled-components';
import { theme, flexCenter } from '../style/theme';

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
      {subtitles.map((subtitle, index) => (
        <>
          <h2 key={index}>{subtitle.note}</h2>
        </>
      ))}
    </DescriptionWrapper>
  );
};

export default Description;

const DescriptionWrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  padding-top: 30px;
  height: 200px;
  width: 100%;
  font-weight: bold;
  color: ${theme.color.blue};
  background-color: ${theme.color.bgColor};
  h1 {
    font-weight: bold;
    font-size: 17px;
    color: ${theme.color.black};
  }
  h2 {
    font-size: 14px;
    color: ${theme.color.grey};
  }
`;
