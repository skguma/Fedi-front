import React from "react";
import styled, { css } from "styled-components";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import StyledButton from "../style/StyledButton";
const ReportBoard = () => {
  return (
    <Wrapper>
      <ReportAccount>
        <div>
          <AvatarGroup total={24}>
            <Avatar alt="지인능욕" sx={{ width: 70, height: 70 }}>
              지인능욕
            </Avatar>
            <Avatar alt="합성계" sx={{ width: 70, height: 70 }}>
              합성계
            </Avatar>
          </AvatarGroup>
        </div>
      </ReportAccount>
      <ButtonWrapper>
        <StyledButton big>디지털성범죄 지원센터에 신고하기</StyledButton>
        <StyledButton big>트위터 계정 신고하기</StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ReportBoard;

const Wrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 250px;
      width: inherit%;
      background-color: ${colors.bgColor};
    `;
  }}
`;

const ReportAccount = styled.div`
  height: 50%;
  width: inherit;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;
