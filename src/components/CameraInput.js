import React, { useState, useRef } from "react";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import StyledButton from "../style/StyledButton";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import previewImg from "../img/previewImg.jpg";

const CameraInput = ({ onUpload, onRemove }) => {
  // 파일 미리보기를 위해 이미지 데이터(url)를 받을 state
  const [camInput, setCamInput] = useState(previewImg);
  const [active, setActive] = useState(true);

  const navigate = useNavigate();
  const imgInput = useRef();

  //imgFile의 state가 바뀔때마다 store에 상태 dispatch하기
  const handleImgChange = e => {
    onUpload(e.target.files[0]);
    setCamInput(URL.createObjectURL(e.target.files[0]));
  };

  const handleImgInputBtnClick = e => {
    e.preventDefault();
    imgInput.current.click();
  };

  const handleImgRemove = e => {
    setCamInput(previewImg);
    onRemove();
  };

  const handleImgSubmit = e => {
    console.log("camInput:", camInput);

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
        style={{ background: "lightgrey", width: "45%", height: "180px" }}
      />
      {camInput !== previewImg && (
        <>
          <StyledButton big active={active} onClick={handleImgSubmit}>
            결과보기
          </StyledButton>
          <StyledButton big active={active} onClick={handleImgRemove}>
            삭제하기
          </StyledButton>
        </>
      )}
    </CameraWrapper>
  );
};

export default CameraInput;

const CameraWrapper = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      height: 350px;
      width: 100%;
      color: ${colors.blue};
      background-color: ${colors.bgColor};
    `;
  }}
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
