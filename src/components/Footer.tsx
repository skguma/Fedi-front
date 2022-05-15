import React from 'react';
import styled from 'styled-components';
import { theme, flexCenter } from '../style/theme';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation(['page']);

  return (
    <FooterWrapper>
      <Button onClick={() => window.open(`https://d4u.stop.or.kr/`, '_blank')}>
        <Message>{t('page:Footer.center')} </Message>
        {t('page:Footer.shortcut')}
      </Button>
      <Contact>
        Contact <br />
        feditection@gmail.com
      </Contact>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  ${flexCenter}
  bottom: 0;
  flex-direction: column;
  height: 180px;
  width: 100%;
  background-color: #CED9EA;
`;

const Contact = styled.div`
  align-self: flex-start;
  color: grey;
  width: 90%;
  font-size: 13px;
  line-height: 20px;
  padding-bottom: 30px;
  box-sizing: border-box;
  padding-left: 30px;
`;

const Message = styled.div`
  font-size: 12px;
  color: grey;
`;

const Button = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  width: 250px;
  cursor: pointer;
  background-color: white;
  color: black;
  height: 80px;
  font-weight: bold;
  padding: 15px;
  margin-top: 35px;
  font-size: 15px;
  &:hover {
    background: #d0cfd1;
    border: 1px solid #d0cfd1;
  }
`;