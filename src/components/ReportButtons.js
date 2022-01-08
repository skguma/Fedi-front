import React, { useState } from "react";
import styled, { css } from "styled-components";
import StyledButton from "../style/StyledButton";
import EmailBox from "./EmailBox";
const ReportButtons = () => {
  const FINISH_MESSAGE = "트위터 신고가 완료되었습니다.";
  const [active, setActive] = useState(true);
  const [twitterText, setTwitterText] = useState("트위터 계정 신고하기");
  const [centerText, setCenterText] =
    useState("디지털성범죄 지원센터에 신고하기");
  const [centerReport, setCenterReport] = useState("");
  const changeText = () => {
    setTwitterText(FINISH_MESSAGE);
  };
  const handleTwitterReport = () => {
    // TODO: 트위터 계정 신고하는 로직 짜기
    changeText();
    setActive(true);
    alert(FINISH_MESSAGE);
  };
  const changeState = () => {
    setCenterReport("FINISH");
  };
  const handleCenterReport = () => {
    setCenterReport(true);
  };
  return (
    <ButtonWrapper>
      {centerReport === "FINISH" ? (
        <>
          <StyledButton active={active} onClick={handleCenterReport} big>
            {centerText}
          </StyledButton>
          <StyledButton active={active} onClick={handleTwitterReport} big>
            {twitterText}
          </StyledButton>
        </>
      ) : (
        <EmailBox changeState={changeState} />
      )}
    </ButtonWrapper>
  );
};

export default ReportButtons;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;
