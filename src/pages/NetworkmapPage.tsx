import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import PageMove from '../components/PageMove';
import Description from '../components/Description';
import NetworkmapContainer from '../containers/NetworkmapContainer';
import Footer from '../components/Footer';
import { device, size, WrapperWithHeader } from '../style/theme';
const NetworkmapPage = () => {
  const informations = [
    { id: '0', note: '트위터 네트워크 맵' },
    {
      id: '1',
      note: '원본 트윗에 좋아요를 누르거나 리트윗을 한 계정입니다.',
    },
    {
      id: '2',
      note: '원본 트윗 보기 버튼을 누르면 해당 트윗의 url로 이동합니다',
    },
  ];
  const nextPage = { destination: 'report', name: '신고하기' };
  return (
    <Wrapper>
      <Header />
      <Description informations={informations} />
      <NetworkmapContainer />
      <PageMove nextPage={nextPage} />
      <Footer />
    </Wrapper>
  );
};

export default NetworkmapPage;

const Wrapper = styled.div`
  ${device.mobile} {
    ${WrapperWithHeader};
  }
  ${device.tablet} {
    ${WrapperWithHeader};
    width: ${size.tablet};
  }
`;
