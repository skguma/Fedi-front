import React, { useState } from "react";
import styled, { css } from "styled-components";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ReportButtons from "./ReportButtons";
const ReportBoard = () => {
  return (
    <Wrapper>
      <ReportAccount>
        <AvatarGroup total={24}>
          <Avatar alt="지인능욕" sx={{ width: 70, height: 70 }}>
            지인능욕
          </Avatar>
          <Avatar alt="합성계" sx={{ width: 70, height: 70 }}>
            합성계
          </Avatar>
        </AvatarGroup>
      </ReportAccount>
      <ReportButtons />
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
