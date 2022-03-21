import React, { ChangeEvent, useState, useRef } from 'react';
import styled from 'styled-components';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { useNavigate } from 'react-router-dom';
import { theme, device, flexCenter } from '../style/theme';
import previewImg from '../assets/previewImg.jpg';

type CameraInputProps = {
  onUpload: () => void;
  onRemove: () => void;
};
const CameraInput = ({ onUpload, onRemove }: CameraInputProps) => {
  // 파일 미리보기를 위해 이미지 데이터(url)를 받을 state
  const [camInput, setCamInput] = useState(previewImg);

  // TODO: useState 사용할 때 상태가 null일수도 있고 아닐 수도 있을 때 Generic 활용하기
  // useSate<Information | null> (null)

  const navigate = useNavigate();
  const imgInput = useRef(null); // useRef를 사용할 때는 generic으로 타입 정의함

  //imgFile의 state가 바뀔때마다 store에 상태 dispatch하기
  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    onUpload(e.target.files[0]);
    setCamInput(URL.createObjectURL(e.target.files[0]));
  };

  const handleImgInputBtnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    imgInput.current.click();
  };

  const handleImgRemove = () => {
    setCamInput(previewImg);
    onRemove();
  };

  const handleImgSubmit = () => {
    console.log('camInput:', camInput);
    navigate('/result');
  };
  return (
    <CameraWrapper>
      <CameraButton onClick={handleImgInputBtnClick}>
        <AddAPhotoOutlinedIcon color={'success'} fontSize={'large'} />
      </CameraButton>
      <input
        ref={imgInput}
        type="file"
        name="image"
        accept="image/*"
        capture="user" // 유저 쪽 카메라로 사진을 찍도록 함
        style={{ display: 'none' }}
        onChange={handleImgChange}
      />
      <Img alt="upload" src={camInput} />
      {camInput !== previewImg && (
        <>
          <StyledButton onClick={handleImgSubmit}>결과보기</StyledButton>
          <StyledButton onClick={handleImgRemove}>삭제하기</StyledButton>
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
  height: 350px;
  width: 100%;
  color: ${theme.color.blue};
  background-color: ${theme.color.bgColor};
`;

const CameraButton = styled.button`
  border: 0;
  outline: 0;
  background-color: white;
  border: 1px solid lightgrey;
  width: 30%;
  height: 20%;
  box-shadow: 5px 5px 20px lightgrey;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background: skyblue;
  }
`;

const Img = styled.img`
  width: 35%;
  height: 160px;

  cursor: pointer;
  box-shadow: 5px 5px 20px lightgrey;
  border-radius: 7px;
  background: lightgrey;
`;
const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  border-radius: 20px;
  cursor: pointer;
  height: 30px;
  border: 1px solid lightgrey;
  background: ${theme.color.white};
  color: black;
  font-size: 10px;
  &:hover {
    background: #d0cfd1;
    color: black;
  }
`;
