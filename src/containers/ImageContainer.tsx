import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { upload, remove } from '../modules/images';
import CameraInput from '../components/CameraInput';

function ImageContainer() {
  // 상태를 조회할 때는 state의 타입을 RootState로 지정해야 함
  // const file = useSelector((state: RootState) => state.images.file);

  const dispatch = useDispatch();

  // TODO: 비어있거나 url to string이었던거같음
  const onUpload = (file?: string) => dispatch(upload(file));
  const onRemove = () => dispatch(remove());

  return <CameraInput onUpload={onUpload} onRemove={onRemove} />;
}

export default ImageContainer;
