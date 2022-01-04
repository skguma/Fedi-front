import React from "react";
import Header from "../components/Header";
import Description from "../components/Description";
import ReportBoard from "../components/ReportBoard";
import Footer from "../components/Footer";

const ReportPage = () => {
  return (
    <div className="main-container">
      <Header />
      <Description />
      <ReportBoard />
      <Footer />
    </div>
  );
};

export default ReportPage;
