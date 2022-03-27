import React, {
  useState,
  DetailedHTMLProps,
  HTMLAttributes,
  HTMLDivElement,
} from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import '../style/style.css';
import axios from 'axios';
import Fab from '@mui/material/Fab';
import ClearIcon from '@mui/icons-material/Clear';

type ResultCardProps = {
  ranking: number;
  similarity: number;
  tweetUrl: string;
  imageUrl: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  tweetId: string;
  eyes: number[];
  onSelect: (tweetId: number) => any;
  onUnselect: (tweetId: number) => any;
  onSuspend: (suspendTweetId: number) => any;
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
  const { t } = useTranslation(['page']);

  const handleClick = (e: any) => {
    e.preventDefault();
    const tweetId = e.target.id;
    clicked
      ? onUnselect(parseInt(tweetId, 10))
      : onSelect(parseInt(tweetId, 10));
    setClicked(!clicked);
  };

  // TODO: e 타입 뭘로 지정하지?
  const handleSuspendAccount = (e: any) => {
    e.preventDefault();
    const tweetId = e.target.id;
    console.log('suspendtweetId', tweetId);
    // 스토어 정지 트윗 id dispatch 하기
    onSuspend(tweetId);
    // patchSuspendAccount(tweetId);
  };

  console.log(imageUrl);
  return (
    <Wrapper>
      <Ranking>{ranking + 1}</Ranking>
      <Fab
        id={tweetId}
        className="fab"
        color="secondary"
        aria-label="add"
        onClick={handleSuspendAccount}
      >
        <ClearIcon id={tweetId} className="delete-icon" />
      </Fab>
      <Thumbnail id={tweetId} className="thumbnail" onClick={handleClick}>
        <div className="image" id={tweetId} imageurl={imageUrl}>
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
    </Wrapper>
  );
}

export default ResultCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  pointer: cursor;
  position: relative;
  gap: 0.1rem;
  height: 200px;
  font-size: 3px;
  padding: 5px;
  margin: 10px;
  .fab {
    position: absolute;
    width: 33px;
    height: 10px;
    background-color: #f05650;
    right: 10px;
    top: 5px;
    z-index: 50;
    .delete-icon {
      width: 15px;
      height: 15px;
    }
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  width: 17%;
  height: 15%;
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
  font-size: 13px;
  padding: 2px;
  background-color: white;
  border: 1px solid lightgrey;
`;

const TweetURL = styled.div`
  background-color: #00acee;
  border: 1px solid lightgrey;
  padding: 2px;
  display: flex;
  color: white;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  font-size: 13px;
  &:hover {
    background-color: ${(props) => props.theme.color.blue};
    color: white;
  }
  width: 40%;
  height: 100%;
`;
