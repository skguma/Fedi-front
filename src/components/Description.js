import React from "react";
import styled, { css } from "styled-components";

// 방법1: title과 subtitle을 props로 받기
// 방법2: React.Children.toArray(children)으로 배열로 받아서 slice해서 사용하기
const Description = ({ informations }) => {
  const [title, ...subtitles] = informations;
  console.log(title.note);
  console.log(subtitles);

  return (
    <DescriptionWrapper>
      <h1>{title.note}</h1>
      <br />
      <br />
      {subtitles.map((subtitle, index) => (
        <>
          <h2 key={index}>{subtitle.note}</h2>
          <br />
        </>
      ))}
    </DescriptionWrapper>
  );
};

export default Description;

const DescriptionWrapper = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 170px;
      width: inherit%;
      padding: 13px;
      font-weight: ${fonts.weight.bold};
      color: ${colors.blue};
      background-color: ${colors.bgColor};
      h1 {
        font-weight: bold;
        font-size: ${fonts.size.base};
        color: ${colors.black};
      }
      h2 {
        font-size: ${fonts.size.sm};
        color: ${colors.grey};
      }
    `;
  }}
`;
