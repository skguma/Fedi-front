import React from 'react';
import styled from 'styled-components';
import { theme, flexCenter } from '../style/theme';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const EmptyResult = () => {
  const { t } = useTranslation(['page']);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="alert-message">
      {t('page:EmptyResult.message1')}
         <br/>{t('page:EmptyResult.message2')}
        <StyledButton onClick={() => navigate('/')}>
        {t('page:research')}
      </StyledButton>
      </div>
    </Wrapper>
  );
};

export default EmptyResult;

const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  height: 400px;
  width: 100%;
  background-color: ${theme.color.bgColor};
  .alert-message{
    flex-direction: column;
    text-align: center;
    ${flexCenter}
    line-height: 35px;
    font-size: 20px;
  }
`;

const StyledButton = styled.div`
  ${flexCenter}
  width: 120px;
  border-radius: 20px;
  cursor: pointer;
  height: 40px;
  margin-top: 20px;
  border: 1px solid lightgrey;
  background: ${theme.color.blue};
  color: white;
  font-size: 13px;
  &:hover {
    background: #d0cfd1;
    color: black;
  }
`;