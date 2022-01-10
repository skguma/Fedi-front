const margins = {
  sm: ".5rem",
  base: "1rem",
  lg: "2rem",
  xl: "3rem"
};

const paddings = {
  sm: ".5rem",
  base: "1rem",
  lg: "2rem",
  xl: "3rem"
};

const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
    title: `'Merriweather', serif`
  },
  size: {
    sm: "0.8rem",
    base: "1.1rem",
    lg: "2rem",
    xl: "2.5rem",
    title: "6rem"
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700
  }
};

const colors = {
  bgColor: "#F4F6FA",
  blue: "#3C63B0",
  purple: "#8575FF",
  black: "#000000",
  grey: "#A9A9A9",
  white: "#FFFFFF"
};

const size = {
  mobile: "425px",
  tablet: "768px",
  desktop: "1440px"
};

// 미디어 쿼리의 중복 코드를 줄이기 위해 정의된 변수
const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktop: `@media only screen and (max-width: ${size.desktop})`
};

export const theme = {
  margins,
  paddings,
  fonts,
  //device,
  colors
};
