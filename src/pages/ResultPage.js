import React from "react";
import Header from "../components/Header";
import PageMove from "../components/PageMove";
import Description from "../components/Description";
import ResultContainer from "../containers/ResultContainer";
import Footer from "../components/Footer";

const ResultPage = () => {
  const informations = [
    { id: "0", note: "얼굴 인식 결과, 12개의 사진이 의심됩니다." },
    { id: "1", note: "원본 트윗 버튼을 클릭하면 원본 url로 연결됩니다." },
    { id: "2", note: "확인 후, 자신의 사진이 확실한 것만 클릭해주세요!" }
  ];
  const nextPage = { destination: "networkmap", name: "네트워크맵 보기" };
  return (
    <div className="main-container">
      <Header />
      <Description informations={informations} />
      <ResultContainer />
      <PageMove nextPage={nextPage} />
      <Footer />
    </div>
  );
};

export default ResultPage;
