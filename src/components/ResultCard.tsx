import React, { useState, DetailedHTMLProps } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import '../style/style.css';
import axios from 'axios';

type ResultCardProps = {
  ranking: number;
  similarity: number;
  tweetUrl: string;
  imageUrl: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  tweetId: string;
  eyes: number[];
  onSelect: (tweetId: string) => void;
  onUnselect: (tweetId: string) => void;
  onSuspend: (tweetId: string) => void;
};

// tweetID는 key값임
function ResultCard({
  ranking,
  similarity,
  tweetUrl,
  imageUrl,
  tweetId,
  eyes,
  onSelect,
  onUnselect,
  onSuspend,
}: ResultCardProps) {
  const [clicked, setClicked] = useState(false);
  const [suspendId, setSuspendId] = useState();
  const { t } = useTranslation(['page']);
  const handleClick = (e: any) => {
    e.preventDefault();
    const tweetId = e.target.id;

    // 스토어에 디스패치
    clicked
      ? onUnselect(parseInt(tweetId, 10))
      : onSelect(parseInt(tweetId, 10));

    setClicked(!clicked);
  };

  // 새로고침 되는지 확인해야 함
  // GET: http://15.165.149.176:8080/results/view
  const patchSuspendAccount = async (tweetId: number) => {
    await axios
      .get('http://15.165.149.176:8080/results/view', { tweetId: tweetId })
      .then((res) => {
        console.log(res.data);
      });
  };

  const handleSuspendAccount = (e) => {
    e.preventDefault();
    const tweetId = e.target.id;
    // console.log('정지', tweetId);
    // 스토어 정지 dispatch 하기
    onSuspend(tweetId);
    setSuspendId(tweetId);
    patchSuspendAccount(tweetId);

    // patch api call 하기 나중에 network 통신 conatiner에서 관리하기
  };

  console.log(imageUrl);
  return (
    <Wrapper>
      <Ranking>{ranking + 1}</Ranking>
      <Thumbnail id={tweetId} className="thumbnail" onClick={handleClick}>
        <div className="image" imageurl={imageUrl}>
          {clicked ? (
            <>
              <Overlay id={tweetId} />
              <CheckButton id={tweetId}>✔</CheckButton>
            </>
          ) : (
            ''
          )}
          <div className="eye-box"></div>
        </div>
      </Thumbnail>

      <ResultInfo>
        <Similarity>{similarity}%</Similarity>
        <TweetURL onClick={() => window.open(`${tweetUrl}`, '_blank')}>
          {t('page:ResultPage.tweet')}
        </TweetURL>
      </ResultInfo>
      <SuspendAccountReportButton id={tweetId} onClick={handleSuspendAccount}>
        {t('page:ResultPage.suspend')}
      </SuspendAccountReportButton>
    </Wrapper>
  );
}

export default ResultCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  pointer: cursor;
  gap: 0.1rem;
  height: 200px;
  font-size: 3px;
  padding: 5px;
  margin: 10px;
`;

const Thumbnail = styled.div`
  height: 80%;
  width: inherit;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 10px;
  .image {
    background-image: url('https://www.newsinside.kr/news/photo/202006/1077848_762939_4052.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 70%;
    cursor: pointer;
    box-shadow: 5px 5px 20px grey;
    position: relative;
    border-radius: 7px;
    .eye-box {
      margin-top: 20px;
      position: absolute;
      width: 100%;
      height: 10%;
      background-color: black;
    }
  }
`;
const CheckButton = styled.div`
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  width: 15%;
  top: 40%;
  left: 40%;
  border-radius: 50%;
  background-color: #00aaff;
  pointer: cursor;
`;
const Overlay = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #1196c1;
  border: 2px solid blue;
  opacity: 0.2;
  pointer: cursor;
`;
const Img = styled.div`
  height: 90%;
  width: inherit;
  cursor: pointer;
  box-shadow: 5px 5px 20px grey;
  border-radius: 7px;
`;

const Ranking = styled.div`
  height: 8%;
  font-size: 12px;
  font-weight: bold;
  color: #4a4a4a;
`;

const ResultInfo = styled.div`
  height: 10%;
  display: flex;
  padding-top: 5px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: space-between;
`;

const Similarity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 100%;
  width: 50%;
  background-color: white;
  border: 1px solid lightgrey;
`;

const SuspendAccountReportButton = styled.div`
  background-color: white;
  border: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  height: 10%;
`;
const TweetURL = styled.div`
  background-color: white;
  border: 1px solid lightgrey;
  display: flex;
  color: ${(props) => props.theme.color.blue};
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 40%;
  height: 100%;
`;
