import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Description from '../components/Description';
import ImageContainer from '../containers/ImageContainer';
import Footer from '../components/Footer';
import { device, size, WrapperWithHeader } from '../style/theme';
const MainPage = () => {
  const informations: {
    id: string;
    note: string;
  }[] = [
    { id: '0', note: '트위터에 있는 내 사진을 찾아드려요' },
    { id: '1', note: '카메라 버튼을 클릭하여 얼굴을 카메라에 비춰주세요!' },
    { id: '2', note: '정면으로 얼굴을 비춰줄수록 정확도가 높아집니다.' },
  ];
  return (
    <Wrapper>
      <Header />
      <Description informations={informations} />
      <ImageContainer />
      <Footer />
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  ${device.mobile} {
    ${WrapperWithHeader};
  }
  ${device.tablet} {
    ${WrapperWithHeader};
    width: ${size.tablet};
  }
`;
