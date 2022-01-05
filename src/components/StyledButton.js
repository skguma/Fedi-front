import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  border-radius: 20px;
  background: #8575ff;
  color: white;
  height: ${props => props.height};
  cursor: pointer;
  font-size: ${props => props.fontSize};
  ${props =>
    props.big &&
    `
  font-size: 2rem;
  padding: 10px;
`}
  &:hover {
    background: purple;
    color: white;
  }
`;

const StyledButton = ({ children, big, ...rest }) => {
  return (
    <Wrapper fontSize="10px" {...rest}>
      {children}
    </Wrapper>
  );
};

export default StyledButton;
