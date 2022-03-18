import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import './reset.scss';

export const GlobalStyle = createGlobalStyle`
    html{
        font-size: 62.5%;
        color: ${theme.color.black};
    }
`;
