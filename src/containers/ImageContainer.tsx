import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { upload, remove } from '../modules/images';
import CameraInput from '../components/CameraInput';

function ImageContainer() {
  const dispatch = useDispatch();
  const onUpload = (file?: string) => dispatch(upload(file));
  const onRemove = () => dispatch(remove());

  return <CameraInput onUpload={onUpload} onRemove={onRemove} />;
}

export default ImageContainer;
