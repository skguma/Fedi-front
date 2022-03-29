import styled, { DefaultTheme, css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperWithHeader = css`
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  box-sizing: border-box;
`;

export const WrapperWithHeaderFooter = css`
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

export const size = {
  mobile: '300px',
  tablet: '768px',
};

export const device = {
  mobile: `@media only screen and (min-width: ${size.mobile})`,
  tablet: `@media only screen and (min-width: ${size.tablet})`,
};
