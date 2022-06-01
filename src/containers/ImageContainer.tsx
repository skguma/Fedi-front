import React from 'react';
import CameraInput from '../components/CameraInput';
import { useDispatch } from 'react-redux';
import { upload, remove } from '../modules/images';

function ImageContainer() {
  const dispatch = useDispatch();
  const onUpload = (file?: string) => dispatch(upload(file));
  const onRemove = () => dispatch(remove());

  return <CameraInput onUpload={onUpload} onRemove={onRemove} />;
}

export default ImageContainer;
