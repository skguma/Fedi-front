import React from "react";
import styled from "styled-components";

const ImagePreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
  border: 1px solid black;
`;

const ImagePreview = () => {
  return <ImagePreviewWrapper>ImagePreview</ImagePreviewWrapper>;
};

export default ImagePreview;
