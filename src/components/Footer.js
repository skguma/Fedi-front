import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;
  border: 1px solid black;
`;

const Footer = () => {
  return <FooterWrapper>Footer</FooterWrapper>;
};

export default Footer;
