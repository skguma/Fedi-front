import React, { useState, useRef } from "react";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import StyledButton from "./StyledButton";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CameraInput = () => {
  // 파일 미리볼 url을 저장할 state
  const [camInput, setCamInput] = useState();
  const imgInput = useRef();
  const navigate = useNavigate();

  // 업로드 된 사진을 미리보기에 올리는 함수
  const handleImgChange = e => {
    // TODO: 로딩 스피너 적용하기
    setCamInput(URL.createObjectURL(e.target.files[0]));
  };

  const handleImgInputBtnClick = e => {
    e.preventDefault();
    imgInput.current.click();
  };

  const handleImgRemove = e => {
    setCamInput();
  };

  const handleImgSubmit = e => {
    //

    navigate("/result");
  };
  return (
    <CameraWrapper>
      <CameraButton onClick={handleImgInputBtnClick}>
        <AddAPhotoOutlinedIcon color={"success"} fontSize={"large"} />
      </CameraButton>
      <input
        ref={imgInput} // ref를 달아서 image upload button에 연결시키기
        type="file"
        name="image"
        accept="image/*"
        capture="user" // 유저 쪽 카메라로 사진을 찍도록 함
        style={{ display: "none" }}
        onChange={handleImgChange}
      />

      <img
        alt="upload"
        src={camInput}
        style={{ background: "lightgrey", width: "45%", height: "200px" }}
      />
      {camInput && (
        <>
          <StyledButton big onClick={handleImgSubmit}>
            결과보기
          </StyledButton>
          <StyledButton big onClick={handleImgRemove}>
            삭제하기
          </StyledButton>
        </>
      )}
    </CameraWrapper>
  );
};

export default CameraInput;

const CameraWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 400px;
  width: 100%;
  border: 1px solid black;
`;

const CameraButton = styled.button`
  border: 0;
  outline: 0;
  background-color: white;
  border: 1px solid lightgrey;
  width: 30%;
  height: 20%;
  cursor: pointer;
  &:hover {
    background: skyblue;
  }
`;
