import React from 'react';
import styled from 'styled-components';
import { theme, flexCenter } from '../style/theme';

const Header = () => {
  return <HeaderWrapper>FEDI</HeaderWrapper>;
};

const HeaderWrapper = styled.div`
  ${flexCenter}
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 50px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  font-size: 14px;
  font-weight: bold;
  color: ${theme.color.blue};
  background-color: ${theme.color.white};
`;

export default Header;
