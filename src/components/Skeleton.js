import React from 'react';
import styled from 'styled-components';
import { theme, device } from '../style/theme';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

function FormRow() {
  return (
    <SkeletonWrapper>
      <Skeleton variant="rectangular" width={130} height={140} />
      <div className="info-wrapper">
        <Skeleton variant="text" width={70} height={40} />
        <Skeleton variant="text" width={70} height={40} />
      </div>
    </SkeletonWrapper>
  );
}
const SkeletonUi = () => {
  return (
    <Wrapper>
      <FormRow />
      <FormRow />
      <FormRow />
      <FormRow />
      <FormRow />
      <FormRow />
      <FormRow />
      <FormRow />
    </Wrapper>
  );
};

export default SkeletonUi;

const SkeletonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .info-wrapper {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    flex-direction: row;
  }
`;
const Wrapper = styled.div`
  display: grid;
  ${device.mobile} {
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 170px);
  }
  ${device.tablet} {
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 200px);
  }
  grid-gap: 7px;
  background-color: ${theme.color.bgColor};
`;
