import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import EmailBox from './EmailBox';
import { theme } from '../../style/theme';

const stringToColor = (string) => {
  let hash = 0, i = 0;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 5)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

const stringAvatar = (name) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name}`,
  };
}

const ReportBoard = ({ onClear, tweetId, accountName }) => {
  accountName.map((account) => console.log(account));
  return (
    <Wrapper>
      <ReportAccount>
        <AvatarGroup className="avatar" total={accountName.length}>
          {accountName &&
            accountName.map((account, index) => (
              <Avatar
              {...stringAvatar(account)} 
                key={index}
                alt={account}
               />
            ))}
        </AvatarGroup>
      </ReportAccount>
      <EmailBox
       tweetId={tweetId}
        onClear={onClear}
      />
    </Wrapper>
  );
};

export default ReportBoard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 330px;
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
