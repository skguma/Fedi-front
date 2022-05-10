import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import PageMove from '../components/PageMove';
import Description from '../components/Description';
import ResultContainer from '../containers/ResultContainer';
import Footer from '../components/Footer';
import { device, size, WrapperWithHeader } from '../style/theme';
import { useTranslation } from 'react-i18next';

const ResultPage = () => {
  const { t } = useTranslation(['page']);
  const informations: {
    id: string;
    note: string;
  }[] = [
    { id: '0', note: t('page:ResultPage.title') },
    { id: '1', note: t('page:ResultPage.subtitle1') },
    { id: '2', note: t('page:ResultPage.subtitle2') },
  ];
;
  const nextPage: {
    destination: string;
    name: string;
  } = { destination: 'report', name: t('page:NetworkmapPage.nextPage') };
  return (
    <Wrapper>
      <Header />
      <Description informations={informations} />
      <ResultContainer />
      <Footer />
    </Wrapper>
  );
};

export default ResultPage;

const Wrapper = styled.div`
  ${device.mobile} {
    ${WrapperWithHeader};
  }
  ${device.tablet} {
    ${WrapperWithHeader};
    width: ${size.tablet};
  }
`;
