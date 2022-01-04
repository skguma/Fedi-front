import React from "react";
import styled from "styled-components";

const CameraWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;
  border: 1px solid black;
`;

const CameraInput = () => {
  return (
    <CameraWrapper>
      <input
        type="file"
        id="camera"
        name="camera"
        capture="camera"
        accept="image/*"
      ></input>
    </CameraWrapper>
  );
};

export default CameraInput;
