import styled, { css } from "styled-components";

const HeaderWrapper = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      font-size: ${fonts.size.base};
      font-weight: ${fonts.weight.bold};
      color: ${colors.blue};
      background-color: ${colors.bgColor};
      width: 100%;
    `;
  }}
`;

const StyledHeader = { HeaderWrapper };

export default StyledHeader;
