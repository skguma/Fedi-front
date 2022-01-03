import React from "react";
import styled from "styled-components";

const StyledSubPhrase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubPhrase = () => {
  return (
    <div>
      <div>카메라 버튼을 클릭하여 얼굴을 카메라에 비춰주세요!</div>
      <div>정면으로 얼굴을 비춰줄수록 정확도가 높아집니다.</div>
    </div>
  );
};

export default SubPhrase;
