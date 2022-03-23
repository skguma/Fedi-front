import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Description from '../components/Description';
import ReportBoard from '../components/Report/ReportBoard';
import Footer from '../components/Footer';
import { device, size, WrapperWithHeader } from '../style/theme';
import { useTranslation } from 'react-i18next';

const ReportPage = () => {
  const { t } = useTranslation(['page']);
  const informations = [
    { id: '0', note: t('page:ReportPage.title') },
    { id: '1', note: t('page:ReportPage.subtitle1') },
    { id: '2', note: t('page:ReportPage.subtitle2') },
  ];

  return (
    <Wrapper>
      <Header />
      <Description informations={informations} />
      <ReportBoard />
      <Footer />
    </Wrapper>
  );
};

export default ReportPage;

const Wrapper = styled.div`
  ${device.mobile} {
    ${WrapperWithHeader};
  }
  ${device.tablet} {
    ${WrapperWithHeader};
    width: ${size.tablet};
  }
`;
