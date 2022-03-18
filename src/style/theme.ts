// 공유 스타일 작성, ex. box-sizing

import styled, { DefaultTheme, css } from 'styled-components';

// 자주 사용하는 css를 변수로 선언함
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperWithHeader = css`
  width: 100%;
  height: 100vh;
`;
const margins = {
  sm: '.5rem',
  base: '1rem',
  lg: '2rem',
  xl: '3rem',
};

const paddings = {
  sm: '.5rem',
  base: '1rem',
  lg: '2rem',
  xl: '3rem',
};

export const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
    title: `'Merriweather', serif`,
  },
  size: {
    sm: '0.8rem',
    base: '1.1rem',
    lg: '2rem',
    xl: '2.5rem',
    title: '6rem',
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
};

const calculateMargin = (
  gap: string,
  direction: 'row' | 'column' | 'column-reverse'
) => {
  if (direction === 'row') return `margin-left: ${gap}`;
  if (direction === 'column') return `margin-top: ${gap}`;
  if (direction === 'column-reverse') return `margin-bottom: ${gap}`;
  return '';
};
export const gap = (
  gapLength: string,
  direction: 'row' | 'column' | 'column-reverse' = 'row'
) => {
  return css`
    & > * + * {
      ${calculateMargin(gapLength, direction)}
    }
  `;
};

export const theme: DefaultTheme = {
  color: {
    bgColor: '#F4F6FA',
    blue: '#3C63B0',
    purple: '#8575FF',
    black: '#000000',
    grey: '#A9A9A9',
    lightgrey: '#F2F4F8',
    white: '#FFFFFF',
  },
};

const size = {
  mobile: '425px',
  tablet: '768px',
  desktop: '1440px',
};

// 미디어 쿼리의 중복 코드를 줄이기 위해 정의된 변수
const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktop: `@media only screen and (max-width: ${size.desktop})`,
};
