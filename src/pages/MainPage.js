import React from "react";
import Header from "../components/Header";
import Description from "../components/Description";
import CameraInput from "../components/CameraInput";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div className="main-container">
      <Header />
      <Description />
      <CameraInput />
      <Footer />
    </div>
  );
};

export default MainPage;
