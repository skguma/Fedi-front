import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { device, size, theme, flexCenter } from '../style/theme';
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
  const { t } = useTranslation(['page']);
  const webcamRef = useRef(null);
  const navigate = useNavigate();

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
    width: 1280,
    height: 720,
    facingMode: 'user',
  };

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const file = dataURLtoFile(imageSrc, 'test-image.jpeg');
    setFile(file);
    setImageSrc(imageSrc);
    setIsCapture(true);
    setWebcamOpen(false);
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
        <>
        <Webcam
          width={540}
          height={360}
          ref={webcamRef}
          className="web-cam"
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
            <CameraButton onClick={handleCapture}>
              <CameraIcon
                fontSize={'large'} />
            </CameraButton>
      </>) : null}
      {webcamOpen === false && isCapture === true ? (
        <>
          <Img alt="upload" src={imageSrc} />
          <StyledButton color="white" onClick={handleImgRemove}>
            {t('page:MainButton.delete')}
          </StyledButton>
          <StyledButton color={theme.color.blue} onClick={handleImgSubmit}>
            {t('page:MainButton.result')}
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
    ${device.mobile}{
      height: 40%;
      width: 50%;
    }
    ${device.tablet}{
      width: 400px;
      height: 250px;
    }
    height: 40%;
    width: 50%;
    background-color: black;
    border: 1px solid lightgrey;
    box-shadow: 5px 5px 20px lightgrey;
    border-radius: 7px;
  }
`;

const CameraButton = styled.div`
  border: 0;
  outline: 0;
  background-color: white;
  border: 1px solid lightgrey;
  width:  200px;
  height: 100px;
  ${flexCenter}
  box-shadow: 5px 5px 20px lightgrey;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background: skyblue;
  }
`;

const Img = styled.img`
${device.mobile}{
  width: 240px;
  height: 150px;
}
${device.tablet}{
  width: 350px;
  height: 200px;
}
  cursor: pointer;
  box-shadow: 5px 5px 20px lightgrey;
  border-radius: 7px;
  background: lightgrey;
`;
const StyledButton = styled.div<{ color: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${device.mobile}{
    width: 200px;
  }
  ${device.tablet}{
    width: 300px;
  }
  border-radius: 20px;
  cursor: pointer;
  height: 40px;
  border: 1px solid lightgrey;
  background: ${(props) => props.color};
  color: ${(props) => props.color === 'white' ? 'black' : 'white' };
  font-size: 15px;
  font-weight: bold;
  &:hover {
    background: #d0cfd1;
    color: black;
  }
`;
