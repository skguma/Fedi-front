import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { theme } from '../style/theme';
import { useTranslation } from 'react-i18next';
import Webcam from 'react-webcam';
import CameraIcon from '@mui/icons-material/Camera';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import FaceIcon from '@mui/icons-material/Face';
import previewImg from '../assets/previewImg.jpg';

type CameraInputProps = {
  onUpload: () => void;
  onRemove: () => void;
};

const CameraInput = ({ onUpload, onRemove }: CameraInputProps) => {
  const [imageSrc, setImageSrc] = useState<string | null>(previewImg);
  const [webcamOpen, setWebcamOpen] = useState<boolean>(false);
  const [isCapture, setIsCapture] = useState<boolean>(false);
  const navigate = useNavigate();

  const { t } = useTranslation(['page']);

  const handleWebcamOpen = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setWebcamOpen(true);
  };

  const handleImgRemove = () => {
    onRemove();
    setIsCapture(false);
    setImageSrc(previewImg);
  };

  const handleImgSubmit = () => {
    onUpload(imageSrc);
    navigate('/result');
  };
  const videoConstraints = {
    width: 1280, // 1280 x 720
    height: 720,
    facingMode: 'user',
  };
  return (
    <CameraWrapper>
      {webcamOpen === false && isCapture === false ? (
        <>
          <CameraButton onClick={handleWebcamOpen}>
            <AddAPhotoOutlinedIcon color={'success'} fontSize={'large'} />
          </CameraButton>
          <FaceIcon className="face-icon" fontSize={'large'} />
        </>
      ) : null}
      {webcamOpen && isCapture === false ? (
        <Webcam
          width={1280}
          height={720}
          className="web-cam"
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        >
          {({ getScreenshot }) => (
            <CameraButton>
              <CameraIcon
                fontSize={'large'}
                onClick={() => {
                  const imageSrc = getScreenshot();
                  setImageSrc(imageSrc);
                  setIsCapture(true);
                  setWebcamOpen(false);
                }}
              />
            </CameraButton>
          )}
        </Webcam>
      ) : null}
      {webcamOpen === false && isCapture === true ? (
        <>
          <Img alt="upload" src={imageSrc} />
          <StyledButton onClick={handleImgSubmit}>
            {t('page:MainButton.result')}
          </StyledButton>
          <StyledButton onClick={handleImgRemove}>
            {t('page:MainButton.delete')}
          </StyledButton>
        </>
      ) : null}
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
  padding-bottom: 50px;
  width: 100%;
  color: ${theme.color.blue};
  background-color: ${theme.color.bgColor};
  .web-cam {
    border: 0;
    outline: 0;
    background-color: black;
    border: 1px solid lightgrey;
    height: 50%;
    width: 50%;
    box-shadow: 5px 5px 20px lightgrey;
    border-radius: 7px;
    cursor: pointer;
  }
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
  width: 50%;
  height: 50%;
  cursor: pointer;
  box-shadow: 5px 5px 20px lightgrey;
  border-radius: 7px;
  background: lightgrey;
`;
const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  border-radius: 20px;
  cursor: pointer;
  height: 30px;
  border: 1px solid lightgrey;
  background: ${theme.color.white};
  color: black;
  font-size: 13px;
  &:hover {
    background: #d0cfd1;
    color: black;
  }
`;
