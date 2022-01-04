import React from "react";
import Header from "../components/Header";
import PageMove from "../components/PageMove";
import Description from "../components/Description";
import ResultBoard from "../components/ResultBoard";
import Footer from "../components/Footer";

const ResultPage = () => {
  return (
    <div className="main-container">
      <Header />
      <PageMove />
      <Description />
      <ResultBoard />
      <Footer />
    </div>
  );
};

export default ResultPage;
