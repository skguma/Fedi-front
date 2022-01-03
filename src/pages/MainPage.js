import React from "react";
import Header from "../components/Header";
import PageMove from "../components/PageMove";
import Description from "../components/Description";
import Camera from "../components/Camera";
import ImagePreview from "../components/ImagePreview";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div className="main-container">
      <Header />
      <PageMove />
      <Description />
      <Camera />
      <ImagePreview />
      <Footer />
    </div>
  );
};

export default MainPage;
