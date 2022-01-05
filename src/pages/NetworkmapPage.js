import React from "react";
import Header from "../components/Header";
import PageMove from "../components/PageMove";
import Description from "../components/Description";
import Networkmap from "../components/Networkmap";
import Footer from "../components/Footer";

const NetworkmapPage = () => {
  return (
    <div className="main-container">
      <Header />
      <Description />
      <Networkmap />
      <PageMove />
      <Footer />
    </div>
  );
};

export default NetworkmapPage;
