import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { theme } from '../../style/theme';

type jsonDataType = {
  grant_type: string;
  client_id: string;
  refresh_token: string;
};
const EmailBox = () => {
  const [isActive, setActive] = useState(false);
  const [values, setValues] = useState({ email: '' });
  const [authorization, setAuthorization] = useState();
  const [headers, setHeaders] = useState(null);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ [name]: value });
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

    if (isActive) {
      //postServer();
      alert('이메일로 발송되었습니다.');

      postRPA();
    } else {
      alert('이메일에 @를 포함해서 입력해주세요.');
    }
  };

  const checkValid = () => {
    values.email.includes('@') ? setActive(true) : setActive(false);
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <StyledInput
            value={values.email}
            name="email"
            placeholder="신고 접수 후, 평균 24시간 이내 발송됩니다"
            onKeyUp={checkValid}
            onChange={handleChange}
          />
          <StyledButton
            className={isActive ? 'activebtn' : 'unactivebtn'}
            type="submit"
          >
            전송
          </StyledButton>
        </InputWrapper>
      </form>
    </Wrapper>
  );
};

export default EmailBox;

const Wrapper = styled.div``;

const StyledInput = styled.input`
  width: 80%;
  border: 0px;
  border-radius: 20px;
  height: 30px;
  background-color: ${theme.color.lightgrey};
`;
const StyledButton = styled.button`
  border: 0px;
  border-radius: 10px;
  color: black;
  height: 30px;
  width: 40px;
  background-color: #d9d5d4;
  .activebtn {
    background-color: #0095f6;
  }
  .unactivebtn {
    background-color: #b2dffc;
  }
`;

const InputWrapper = styled.div`
  width: 310px;
  height: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`;
