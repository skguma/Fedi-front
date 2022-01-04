import React from "react";
import MainPhrase from "./MainPhrase.js";
import SubPhrase from "./SubPhrase.js";
import styled from "styled-components";

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
  border: 1px solid black;
`;

const Description = () => {
  return (
    <DescriptionWrapper>
      <MainPhrase />
      <SubPhrase />
    </DescriptionWrapper>
  );
};

export default Description;
