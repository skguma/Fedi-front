import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  border-radius: 20px;
  cursor: pointer;
  height: 23px;
  border: 1px solid lightgrey;
  ${({ theme, active }) => {
    const { fonts, colors } = theme;
    if (active) {
      //활성상태
      return css`
        background: ${colors.white};
        color: black;
        height: ${(props) => props.height};
        font-size: ${(props) => props.fontSize};
        &:hover {
          background: #d0cfd1;
          color: black;
        }
      `;
    } else {
      // 비활성상태
      return css`
        background: ${colors.grey};
        color: white;
        height: ${(props) => props.height};
        font-size: ${(props) => props.fontSize};
        &:hover {
          background: grey;
          color: white;
        }
      `;
    }
  }}
`;
// stateless면 여러개 컴포넌트 있어도 됨
const StyledButton = ({ children, big, active, ...rest }) => {
  return (
    <Wrapper fontSize="10px" {...rest} active={active}>
      {children}
    </Wrapper>
  );
};

export default StyledButton;
