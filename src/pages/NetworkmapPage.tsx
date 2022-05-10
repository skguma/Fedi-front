import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Description from '../components/Description';
import NetworkmapContainer from '../containers/NetworkmapContainer';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import { device, size, WrapperWithHeader } from '../style/theme';

const NetworkmapPage = () => {
  const { t } = useTranslation(['page']);
  const informations = [
    { id: '0', note: t('page:NetworkmapPage.title') },
    {
      id: '1',
      note: t('page:NetworkmapPage.subtitle1'),
    },
    {
      id: '2',
      note: t('page:NetworkmapPage.subtitle2'),
    },
  ];
  const nextPage = {
    destination: 'report',
    name: t('page:NetworkmapPage.nextPage'),
  };
  return (
    <Wrapper>
      <Header />
      <Description informations={informations} />
      <NetworkmapContainer />
    {/*  <PageMove nextPage={nextPage} />*/}
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
