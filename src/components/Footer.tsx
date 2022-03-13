import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../style/theme';

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
  background-color: ${theme.color.bgColor};
`;

const Footer = () => {
  return <FooterWrapper></FooterWrapper>;
};

export default Footer;
