import React from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";
import { useNavigate } from "react-router-dom";

const PageMoveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  border: 1px solid black;
`;

const PageMove = () => {
  const navigate = useNavigate();
  return (
    <PageMoveWrapper>
      <StyledButton big onClick={() => navigate("/")}>
        재검색
      </StyledButton>
      <StyledButton big onClick={() => navigate("/report")}>
        신고하기
      </StyledButton>
    </PageMoveWrapper>
  );
};

export default PageMove;
