import React from "react";
import Header from "../components/Header";
import Description from "../components/Description";
import ReportBoard from "../components/ReportBoard";
import Footer from "../components/Footer";

const ReportPage = () => {
  const information = [
    { id: "0", note: "2가지 신고 타입 중 원하는 타입을 선택해주세요" },
    { id: "1", note: "허위 신고는 중범죄에 해당합니다" },
    { id: "2", note: "내 사진이 확실한 것만 신고해주세요" }
  ];
  return (
    <div className="main-container">
      <Header />
      <Description information={information} />
      <ReportBoard />
      <Footer />
    </div>
  );
};

export default ReportPage;
