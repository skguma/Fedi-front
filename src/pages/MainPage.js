import React from "react";
import Header from "../components/Header";
import Description from "../components/Description";
import CameraInput from "../components/CameraInput";
import Footer from "../components/Footer";

const MainPage = () => {
  const information = [
    { id: "0", note: "트위터에 있는 내 사진을 찾아드려요" },
    { id: "1", note: "카메라 버튼을 클릭하여 얼굴을 카메라에 비춰주세요!" },
    { id: "2", note: "정면으로 얼굴을 비춰줄수록 정확도가 높아집니다." }
  ];
  return (
    <div className="main-container">
      <Header />
      <Description information={information} />
      <CameraInput />
      <Footer />
    </div>
  );
};

export default MainPage;
