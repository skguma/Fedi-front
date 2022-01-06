import React from "react";
import styled, { css } from "styled-components";
import StyledButton from "../style/StyledButton";
import { useNavigate } from "react-router-dom";

const PageMoveWrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      background-color: ${colors.bgColor};
      width: inherit%;
    `;
  }}
`;

const PageMove = () => {
  const navigate = useNavigate();
  return (
    <PageMoveWrapper>
      <StyledButton big onClick={() => navigate("/")}>
        재검색
      </StyledButton>
      <StyledButton big onClick={() => navigate("/networkmap")}>
        네트워크맵 보기
      </StyledButton>
    </PageMoveWrapper>
  );
};

export default PageMove;
