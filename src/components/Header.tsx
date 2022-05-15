import React, { useState } from 'react';
import styled from 'styled-components';
import { theme, flexCenter } from '../style/theme';
import { useNavigate } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import i18n from 'i18next';
import Logo from '../img/logo.png';

const Header = () => {
  const KOREAN = 'ko';
  const ENGLISH = 'en';
  const [language, setLanguage] = useState('en');
  const onChangeLang = () => {
    if (language === KOREAN) {
      i18n.changeLanguage(ENGLISH);
      setLanguage(ENGLISH);
    } else {
      i18n.changeLanguage(KOREAN);
      setLanguage(KOREAN);
    }
  };
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <div className="blank" />
      <div className="logo" onClick={() => navigate('/')}>
        <img className="logo-img" src={Logo} />
      </div>
      <Translate className="translate">
        <div>Translate</div>
        <Switch onClick={onChangeLang} defaultChecked />
      </Translate>
    </HeaderWrapper>
  );
};

const Translate = styled.div`
  align-items: center;
  font-weight: bold;
  display: flex;
  margin-right: 10px;
  justify-content: flex-end;

`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  top: 0;
  cursor: pointer;
  z-index: 100;
  background-color: ${theme.color.white};
  .blank {
    width: 30%;
  }
  .logo {
    ${flexCenter}
    width: 30%;
    font-size: 20px;
    font-weight: bold;
    color: ${theme.color.blue};
    .logo-img {
      width: 80px;
      height: 25px;
    }
  }
  .translate {
    width: 30%;
  }
`;

export default Header;
