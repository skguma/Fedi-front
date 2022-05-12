import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { theme } from '../style/theme';
import { useTranslation } from 'react-i18next';
import ReplayIcon from '@mui/icons-material/Replay';

type PageMoveProps = {
  nextPage: {
    destination: string;
    name: string;
  };
};
const PageMove = ({ nextPage }: PageMoveProps) => {
  const { t } = useTranslation(['page']);
  const { destination, name } = nextPage;
  const navigate = useNavigate();
  return (
    <PageMoveWrapper>
      <RetryButton color="white" onClick={() => navigate('/')}>
        <ReplayIcon/>
        {t('page:research')}
      </RetryButton>
      <StyledButton color={theme.color.blue} onClick={() => navigate(`/${destination}`)}>
        {name}
      </StyledButton>
    </PageMoveWrapper>
  );
};

export default PageMove;

const RetryButton = styled.div<{color: string}>`
display: flex;
justify-content: center;
align-items: center;
width: 25%;
border-radius: 20px;
cursor: pointer;
font-weight: bold;
height: 40px;
border: 1px solid lightgrey;
background: ${props => props.color};
color: black;
font-size: 15px;
&:hover {
  background: #d0cfd1;
  color: black;
}
`;
const StyledButton = styled.div<{color: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  height: 40px;
  border: 1px solid lightgrey;
  background: ${props => props.color};
  color: white;
  font-size: 15px;
  &:hover {
    background: #d0cfd1;
    color: black;
  }
`;

const PageMoveWrapper = styled.div`
  box-sizing: border-box;
  padding: 70px 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 100px;
  background-color: ${theme.color.bgColor};
  width: inherit;
`;
