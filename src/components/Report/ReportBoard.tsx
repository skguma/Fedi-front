import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import EmailBox from './EmailBox';
import { theme } from '../../style/theme';

const ReportBoard = ({ tweetUrl, onClear }) => {
  const ex = [
    { accountName: '28', tweetUrl: 'http://www.' },
    { accountName: 'ㅏㅏ', tweetUrl: 'http://www.' },
  ];
  return (
    <Wrapper>
      <ReportAccount>
        <AvatarGroup className="avatar" total={10}>
          {ex &&
            ex.map((account, index) => (
              <Avatar
                key={index}
                alt={account.accountName}
                sx={{ width: 60, height: 60 }}
              >
                {account.accountName}
              </Avatar>
            ))}
        </AvatarGroup>
      </ReportAccount>
      <EmailBox tweetUrl={tweetUrl} onClear={onClear} />
    </Wrapper>
  );
};

export default ReportBoard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: inherit%;
  background-color: ${theme.color.bgColor};
`;

const ReportAccount = styled.div`
  .avatar {
    margin-top: 0;
    margin-bottom: 30px;
  }
  height: 50%;
  width: inherit;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
