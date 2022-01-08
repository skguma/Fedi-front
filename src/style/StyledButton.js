import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  border-radius: 20px;
  cursor: pointer;
  height: 20px;
  ${({ theme, active }) => {
    const { fonts, colors } = theme;
    return css`
      background: ${colors.purple};
      color: white;
      height: ${props => props.height};
      font-size: ${props => props.fontSize};
      ${props =>
        props.big &&
        `
  font-size: 2rem;
  padding: 10px;
`}
      &:hover {
        background: #8b00ff;
        color: white;
      }
    `;
  }}
`;
// stateless면 여러개 컴포넌트 있어도 됨
const StyledButton = ({ children, big, active, ...rest }) => {
  console.log("active:", active);
  return (
    <Wrapper fontSize="10px" {...rest}>
      {children}
    </Wrapper>
  );
};

export default StyledButton;
