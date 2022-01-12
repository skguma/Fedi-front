import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { upload, remove } from "../modules/images";
import CameraInput from "../components/CameraInput";

function ImageContainer() {
  const { file } = useSelector(state => ({
    file: state.images.file
  }));

  const dispatch = useDispatch();
  const onUpload = file => dispatch(upload(file));
  const onRemove = () => dispatch(remove());

  return <CameraInput onUpload={onUpload} onRemove={onRemove}></CameraInput>;
}

export default ImageContainer;
