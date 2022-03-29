import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { theme } from '../style/theme';
import { useTranslation } from 'react-i18next';

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
      <StyledButton onClick={() => navigate('/')}>
        {t('page:research')}
      </StyledButton>
      <StyledButton onClick={() => navigate(`/${destination}`)}>
        {name}
      </StyledButton>
    </PageMoveWrapper>
  );
};

export default PageMove;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  border-radius: 20px;
  cursor: pointer;
  height: 30px;
  border: 1px solid lightgrey;
  background: ${theme.color.white};
  color: black;
  font-size: 13px;
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
  justify-content: space-between;
  height: 50px;
  background-color: ${theme.color.bgColor};
  width: inherit;
`;
