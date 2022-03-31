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

const EmailBox = ({ tweetUrl, onClear }) => {
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
    // TODO: 1. Authorization
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

    // 최초 한 번에 한해 필요함 이후 24시간마다 갱신
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
    const data = {
      recipient: values.email,
      tweetUrls: tweetUrl,
    };
    await axios
      .post('http://15.165.149.176:8080/mail', data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  const handleSubmit = async (e: React.FormEventHandler<HTMLFormElement>) => {
    e.preventDefault();
    if (reportButtonActive && isActive) {
      // TODO: RPA와 서버 동시에 요청하기
      postServer();
      alert(t('page:ReportPage.emailAlert'));
      setReportButtonActive(false);
      // postRPA();
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
