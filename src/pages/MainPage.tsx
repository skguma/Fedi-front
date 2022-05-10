import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Description from '../components/Description';
import ImageContainer from '../containers/ImageContainer';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import { device, size, WrapperWithHeader } from '../style/theme';

const MainPage = () => {
  const { t } = useTranslation(['page']);

  const informations: {
    id: string;
    note: string;
  }[] = [
    { id: '0', note: t('page:MainPage.title') },
    { id: '1', note: t('page:MainPage.subtitle1') },
    { id: '2', note: t('page:MainPage.subtitle2') },
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
