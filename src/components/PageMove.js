import React from "react";
import styled from "styled-components";

const PageMoveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  border: 1px solid black;
`;

const PageMove = () => {
  return <PageMoveWrapper>PageMove</PageMoveWrapper>;
};

export default PageMove;
