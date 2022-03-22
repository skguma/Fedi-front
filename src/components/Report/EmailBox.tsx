import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { theme } from '../../style/theme';
import { useTranslation } from 'react-i18next';

type jsonDataType = {
  grant_type: string;
  client_id: string;
  refresh_token: string;
};
const EmailBox = () => {
  const { t } = useTranslation(['page']);
  const [isActive, setActive] = useState(false);
  const [values, setValues] = useState({ email: '' });
  const [authorization, setAuthorization] = useState();
  const [reportButtonActive, setReportButtonActive] = useState(true);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setValues({ [id]: value });
  };

  const postRPA = async () => {
    // 1. Authorization
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'X-UIPATH-TenantName': 'DefaultTenant',
      },
    };

    const jsonData: jsonDataType = {
      grant_type: 'refresh_token',
      client_id: '8DEv1AMNXczW3y4U15LL3jYf62jK93n5',
      refresh_token: 'UfW4urKZuEDGQjsBPhI-95NSvs-EvmYBonBuChXNHapVt',
    };
    const stringJsonData = JSON.stringify(jsonData);

    // 최초 한번에 한해 필요하고 다음부터는 24시간마자 갱신
    await axios.post('/oauth/token', stringJsonData, config).then((res) => {
      console.log(res.data.access_token);
      setAuthorization(res.data.access_token); // access_token 얻기
      startJobs();
    });
  };

  const startJobs = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'X-UIPATH-TenantName': 'DefaultTenant',
        'X-UIPATH-OrganizationUnitId': '2917894',
        Authorization: `Bearer ${authorization}`,
      },
    };

    const JsonData = {
      startInfo: {
        ReleaseKey: '29779fb0-cfe8-4dd7-9a24-bec908fff5ff',
        Strategy: 'ModernJobsCount',
        JobsCount: 1,
        // TODO: 이메일용으로 바꾸기
        InputArguments:
          '{"InputArguments":[{"tweetUrl":"https://twitter.com/chimdaewiyasu/status/1497145210891304966"},{"tweetUrl":"https://twitter.com/asdasd19632707/status/1497139763899695106"}]}',
      },
    };
    const jsonString = JSON.stringify(JsonData);
    await axios
      .post(
        '/Jobs/UiPath.Server.Configuration.OData.StartJobs',
        jsonString,
        config
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  const postServer = async () => {
    await axios
      .post(
        // TODO: RPA 주소로 연결
        'http://15.165.149.176:8080/mail',
        { recipient: values.email } // TODO: tweetUrl 추가하기
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values.email);
    if (reportButtonActive && isActive) {
      //postServer();
      alert(t('page:ReportPage.emailAlert')); // t('page:ResultPage.title')
      setReportButtonActive(false);
      // postRPA();
    } else if (!isActive) {
      alert(t('page:ReportPage.validEmailCheck'));
    } else {
      alert(t('page:ReportPage.alreadyReport'));
    }
  };

  const checkValid = () => {
    values.email.includes('@') ? setActive(true) : setActive(false);
    console.log('Active: ', isActive);
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

export default EmailBox;

const Wrapper = styled.div`
  margin-top: 10px;
  height: 300x;
  padding-bottom: 50px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button<{ isActive: boolean }>`
  border: ${({ isActive }) => (isActive ? '1px solid grey' : '0px')};
  border-radius: 10px;
  color: ${({ isActive }) =>
    isActive ? theme.color.black : theme.color.white};
  background-color: ${({ isActive }) =>
    isActive ? theme.color.white : '#D3D3D3'};
  height: 30px;
  cursor: pointer;
  margin-top: 15px;
  width: 75%;
`;

const InputWrapper = styled.div`
  width: 310px;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
