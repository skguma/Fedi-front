import React from 'react';
import styled from 'styled-components';
import { theme } from '../style/theme';

const Header = () => {
  return <HeaderWrapper>FEDI</HeaderWrapper>;
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: 14px;
  font-weight: bold;
  color: ${theme.color.blue};
  background-color: ${theme.color.bgColor};
  width: 100%;
`;

export default Header;
