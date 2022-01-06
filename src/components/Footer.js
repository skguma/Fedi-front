import React from "react";
import styled, { css } from "styled-components";

const FooterWrapper = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 200px;
      width: 100%;
      background-color: ${colors.bgColor};
    `;
  }}
`;

const Footer = () => {
  return <FooterWrapper>Footer</FooterWrapper>;
};

export default Footer;
