import React, {
  useEffect,
  useState
} from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import '../style/style.css';
import Fab from '@mui/material/Fab';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';

type ResultCardProps = {
  ranking: number;
  similarity: number;
  tweetUrl: string;
  imageUrl: string;
  tweetId: string;
  eyes: string;
  size: string;
  onSelect: (tweetId: number, tweetUrl: string) => any;
  onUnselect: (tweetId: number) => any;
  onSuspend: (suspendTweetId: number) => any;
};

function ResultCard({
  ranking,
  similarity,
  tweetUrl,
  imageUrl,
  tweetId,
  eyes,
  size,
  onSelect,
  onUnselect,
  onSuspend,
}: ResultCardProps) {
  const [clicked, setClicked] = useState<boolean>(false);
  const [isSuspend, setIsSuspend] = useState<boolean>(false);
  const [fetchTweetUrl, setTweetUrl] = useState(tweetUrl);
  const { t } = useTranslation(['page']);
  const [eyesLocation, setEyesLocation] = useState<string>();
  const handleClick = (e: any) => {
    e.preventDefault();
    const tweetId = e.target.id;
    console.log('tweetId', tweetId);
    clicked
      ? onUnselect(parseInt(tweetId, 10))
      : onSelect(parseInt(tweetId, 10), fetchTweetUrl); // 인자 두 개 전달
    setClicked(!clicked);
  };

  const handleSuspendAccount = async (e: any) => {
    e.preventDefault();
    const tweetId = e.target.id;
    onSuspend(tweetId);
    setIsSuspend(true);
    alert(t('page:ResultPage.suspendAccountReport'));

    const config = { headers: { 'Content-Type': 'application/json' } };
    await axios
      .patch(`http://15.165.149.176:8080/tweets/${tweetId}/suspend`, config)
      .then((res) => console.log(res.data));
  };

  useEffect(() => modifyEyesLocation(), []);
  const modifyEyesLocation = () => {
    let height = size.split(' ');
    const eyesSplit = eyes.split(' ');
    const eyesLocation = Math.floor(parseInt(eyesSplit[1]));
    const ratio = Math.floor((eyesLocation / parseInt(height[1])) * 100);
    setEyesLocation((2 * ratio - 30) + '');
  };

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
      {isSuspend ? <SuspendAccountBlock>정지 계정 신고 접수</SuspendAccountBlock>: ''}
      <Thumbnail id={tweetId} onClick={handleClick} isSuspend>
        <Img className="image" id={tweetId} src={imageUrl} />
        <EyeBox margin={eyesLocation} id={tweetId} />
        {clicked ? (
          <>
            <Overlay id={tweetId} />
            <CheckButton id={tweetId}>✔</CheckButton>
          </>
        ) : (
          ''
        )}
      </Thumbnail>
      <ResultInfo>
        <Similarity>{similarity.toFixed(2)}%</Similarity>
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

const SuspendAccountBlock = styled.div`
  height: 85%;
  position: absolute;
  width: 100%;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  font-size: 15px;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  z-index: 60;
  color:white;
`;

const Thumbnail = styled.div<{ isSuspend: boolean }>`
  height: 80%;
  width: inherit;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 10px;
  background-color: ${(props) => props.isSuspend? 'black' : null}
  z-index:  ${(props) => props.isSuspend ? 100 : 0}
`;

const Img = styled.img`
  height: 100%;
  width: 70%;
  cursor: pointer;
  box-shadow: 5px 5px 20px grey;
  position: relative;
  border-radius: 7px;
`;
const Overlay = styled.div`
  height: 100%;
  position: absolute;
  width: 70%;
  top: 0;
  left: 15%;
  background-color: #1196c1;
  border: 2px solid blue;
  opacity: 0.2;
  pointer: cursor;
`;

const EyeBox = styled.div<{ margin: string }>`
  margin-top: ${(props) => props.margin}px;
  position: absolute;
  width: 70%;
  height: 15%;
  background-color: black;
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
