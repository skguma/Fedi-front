import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { theme } from '../style/theme';

type PageMoveProps = {
  nextPage: {
    destination: string;
    name: string;
  };
};
const PageMove = ({ nextPage }: PageMoveProps) => {
  const { destination, name } = nextPage;
  const navigate = useNavigate();
  return (
    <PageMoveWrapper>
      <StyledButton onClick={() => navigate('/')}>재검색</StyledButton>
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
  height: 23px;
  border: 1px solid lightgrey;
  background: ${theme.color.white};
  color: black;
  height: 15px;
  font-size: 10px;
  &:hover {
    background: #d0cfd1;
    color: black;
  }
`;

const PageMoveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: ${theme.color.bgColor};
  width: inherit;
`;
