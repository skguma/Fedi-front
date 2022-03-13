import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import StyledButton from '../../style/StyledButton';
import EmailBox from '../EmailBox';

const ReportButtons = () => {
  const [twitterText, setTwitterText] = useState('트위터 계정 신고하기');
  const [centerText, setCenterText] = useState('이메일로 신고정보 전송하기');
  const FINISH_MESSAGE = '트위터 신고가 완료되었습니다.';
  const FINISH = 'finish';
  const ONGOING = 'ongoing';
  const INITIAL_STATE = '';

  // 트위터 버튼 한번 클릭됐는지 값 관리
  const [active, setActive] = useState(true);

  // 이메일 박스 전환 담당
  const [centerReport, setCenterReport] = useState(INITIAL_STATE);
  // 센터 버튼 한번 클릭됐는지 값 관리(처음엔 클릭 가능)
  const [centerActive, setCenterActive] = useState(true);

  const handleTwitterReport = () => {
    // TODO: 트위터 계정 신고하는 로직 짜기
    if (active) {
      setActive(false); // 비활성화 상태로 변경
      alert(FINISH_MESSAGE); // 트위터 신고가 완료되었다는 alert 메시지 출력
    } else {
      alert('이미 신고가 완료되었습니다.');
    }
  };
  const changeState = () => {
    setCenterReport(FINISH); // 이메일 박스 -> 원래 버튼으로 화면 전환
    setCenterActive(false); // 버튼 disable하게 하기
  };
  const handleCenterReport = () => {
    if (centerReport === INITIAL_STATE) {
      // 아직 누르지 않은 상태면 누르기
      setCenterActive(true);
      setCenterReport(ONGOING); // 이메일박스 나오게 하기
    } else {
      alert('이미 신고가 완료되었습니다.');
    }
  };
  return (
    <ButtonWrapper>
      {centerReport === FINISH || centerReport === INITIAL_STATE ? (
        <>
          <StyledButton active={centerActive} onClick={handleCenterReport} big>
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
