import React from "react";
import styled from "styled-components";

const CameraWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  border: 1px solid black;
`;

const Camera = () => {
  return <CameraWrapper>Camera</CameraWrapper>;
};

export default Camera;
