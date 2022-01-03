import React from "react";
import "../style/style.css";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100%;
  border: 1px solid black;
`;

const Header = () => {
  return <HeaderWrapper>FEDI</HeaderWrapper>;
};

export default Header;
