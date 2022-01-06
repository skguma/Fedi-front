import React from "react";
import "../style/style.css";
import StyledHeader from "../style/StyledHeader";
import styled, { css } from "styled-components";

const { HeaderWrapper } = StyledHeader;

const Header = () => {
  return <HeaderWrapper>FEDI</HeaderWrapper>;
};

export default Header;
