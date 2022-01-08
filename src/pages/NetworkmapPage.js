import React from "react";
import Header from "../components/Header";
import PageMove from "../components/PageMove";
import Description from "../components/Description";
import Networkmap from "../components/Networkmap";
import Footer from "../components/Footer";

const NetworkmapPage = () => {
  const information = [
    { id: "0", note: "트위터 네트워크 맵" },
    {
      id: "1",
      note: "신고할 계정들을 클릭한 다음, 하단의 신고하기 버튼을 눌러주세요"
    },
    {
      id: "2",
      note: "원본 트윗 보기 버튼을 누르면 해당 트윗의 url로 이동합니다"
    }
  ];
  const nextPage = { destination: "report", name: "신고하기" };
  return (
    <div className="main-container">
      <Header />
      <Description information={information} />
      <Networkmap />
      <PageMove nextPage={nextPage} />
      <Footer />
    </div>
  );
};

export default NetworkmapPage;
