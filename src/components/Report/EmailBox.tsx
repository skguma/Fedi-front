import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { theme } from '../../style/theme';
import { useTranslation } from 'react-i18next';

const EmailBox = ({ tweetId,  onClear }) => {
  const { t } = useTranslation(['page']);
  const [isActive, setActive] = useState(false);
  const [values, setValues] = useState({ email: '' });
  const [reportButtonActive, setReportButtonActive] = useState(true);

  const handleChange = (e: any) => {
    const target = e.target as HTMLInputElement
    const { id, value } = target;
    setValues({ email: value });
  };

  const postServer = async () => {
    const data = {
      email: values.email,
      imageId: tweetId,
    };
    console.log(data);
    await axios
      .post('https://api.fedi.link/networks', data, {
        headers: { 'Content-Type': 'application/json' },
      })
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (reportButtonActive && isActive) {
      postServer();
      alert(t('page:ReportPage.emailAlert'));
      setReportButtonActive(false);
    } else if (!isActive) {
      alert(t('page:ReportPage.validEmailCheck'));
    } else {
      alert(t('page:ReportPage.alreadyReport'));
    }
    onClear();
  };

  const checkValid = () => {
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    values.email.match(regExp) != null ? setActive(true) : setActive(false);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <TextField
            helperText={t('page:ReportPage.helperText')}
            id="email"
            color={isActive ? 'success' : 'error'}
            label="email"
            value={values.email}
            onKeyUp={checkValid}
            onChange={handleChange}
          />
          <StyledButton isActive={isActive} type="submit">
            {t('page:ReportPage.button')}
          </StyledButton>
        </InputWrapper>
      </form>
    </Wrapper>
  );
};

export default React.memo(EmailBox);

const Wrapper = styled.div`
  margin-top: 10px;
  height: 500x;
  padding-bottom: 50px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button<{ isActive: boolean }>`
  border: ${({ isActive }) => (isActive ? '1px solid' : '0px')};
  border-radius: 20px;
  color: ${({ isActive }) =>
    isActive ? theme.color.white : theme.color.white};
  background-color: ${({ isActive }) =>
    isActive ? theme.color.blue : '#D3D3D3'};
  height: 50px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 30px;
  width: 90%;
  font-size: 14px;
  &:hover{
    background-color: ${({ isActive }) =>
    isActive ? '#000080' : '#D3D3D3' };
  }
`;

const InputWrapper = styled.div`
  width: 310px;
  height: 200px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
