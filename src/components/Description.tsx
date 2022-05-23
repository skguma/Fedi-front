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
      {subtitles.map((subtitle, id) => (
        <h2 key={id}>{subtitle.note}</h2>
      ))}
    </DescriptionWrapper>
  );
};

export default Description;

const DescriptionWrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  padding-top: 30px;
  height: 300px;
  width: 100%;
  font-weight: bold;
  color: ${theme.color.blue};
  background-color: ${theme.color.bgColor};
  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: ${theme.color.black};
  }
  h2 {
    text-align: center;
    font-size: 17px;
    color: ${theme.color.grey};
  }
`;
