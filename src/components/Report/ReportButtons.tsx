import React, { useState } from 'react';
import styled from 'styled-components';
import StyledButton from '../../style/StyledButton';
import EmailBox from './EmailBox';

const ReportButtons = () => {
  const TWITTERTEXT = '트위터 계정 신고하기';
  const CENTERTEXT = '이메일로 신고정보 전송하기';
  const FINISH_MESSAGE = '트위터 신고가 완료되었습니다.';
  const FINISH = 'finish';
  const ONGOING = 'ongoing';
  const INITIAL_STATE = '';

  const [active, setActive] = useState(true);
  const [centerReport, setCenterReport] = useState(INITIAL_STATE);
  const [centerActive, setCenterActive] = useState(true);

  const handleTwitterReport = () => {
    if (active) {
      setActive(false);
      alert(FINISH_MESSAGE);
    } else {
      alert('이미 신고가 완료되었습니다.');
    }
  };
  const changeState = () => {
    setCenterReport(FINISH);
    setCenterActive(false);
  };
  const handleCenterReport = () => {
    if (centerReport === INITIAL_STATE) {
      setCenterActive(true);
      setCenterReport(ONGOING);
    } else {
      alert('이미 신고가 완료되었습니다.');
    }
  };
  return (
    <ButtonWrapper>
      {centerReport === FINISH || centerReport === INITIAL_STATE ? (
        <>
          <StyledButton active={centerActive} onClick={handleCenterReport} big>
            {CENTERTEXT}
          </StyledButton>
          <StyledButton active={active} onClick={handleTwitterReport} big>
            {TWITTERTEXT}
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
