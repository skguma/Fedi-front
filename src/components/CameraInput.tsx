import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { theme } from '../style/theme';
import { useTranslation } from 'react-i18next';
import Webcam from 'react-webcam';
import CameraIcon from '@mui/icons-material/Camera';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
type CameraInputProps = {
  onUpload: (file:any) => void;
  onRemove: () => void;
};

const CameraInput = ({ onUpload, onRemove }: CameraInputProps) => {
  const [imageSrc, setImageSrc] = useState<string | null>();
  const [webcamOpen, setWebcamOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File>();
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
  };

  const handleImgSubmit = () => {
    onUpload(file);
    navigate('/result');
  };
  const videoConstraints = {
    width: 1280, // 1280 x 720
    height: 720,
    facingMode: 'user',
  };

  const dataURLtoFile = (dataurl: String, fileName: string) => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let len = bstr.length;
    const u8arr = new Uint8Array(len);
    while (len--) {
      u8arr[len] = bstr.charCodeAt(len);
    }
    return new File([u8arr], fileName, { type: mime });
  };

  return (
    <CameraWrapper>
      {webcamOpen === false && isCapture === false ? (
        <>
          <CameraButton onClick={handleWebcamOpen}>
            <AddAPhotoOutlinedIcon color={'success'} fontSize={'large'} />
          </CameraButton>
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
                  const file = dataURLtoFile(imageSrc, 'test-image.jpeg');
                  setFile(file);
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
