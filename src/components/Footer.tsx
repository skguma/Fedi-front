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
  height: 200px;
  width: 100%;
  background-color: ${theme.color.blue};
`;

const Contact = styled.div`
  align-self: flex-start;
  color: ${theme.color.white};
  width: 90%;
  font-size: 13px;
  line-height: 20px;
  padding-bottom: 10px;
  padding-top: 20px;
  border-top: 1px solid white;
  box-sizing: border-box;
  margin: 20px;
`;

const Button = styled.button`
  border: 1px solid white;
  border-radius: 50px;
  width: 280px;
  cursor: pointer;
  background-color: white;
  color: black;
  font-weight: bold;
  padding: 18px;
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Message = styled.div`
  font-size: 12px;
  color: grey;
`;
