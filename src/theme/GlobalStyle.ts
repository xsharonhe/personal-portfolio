import { createGlobalStyle } from 'styled-components';
import { IMainTemplate } from './theme';

export const GlobalStyle = createGlobalStyle<{theme: IMainTemplate}>`
    ${({ theme }) => `
        *,
        *::before,
        *::after {
            box-sizing: inherit;
        }
        html, body {
            height: 100%;
            box-sizing: inherit;
        }
        body {
            background-color: ${theme.colors.background};
            color: ${theme.colors.text};
            font-family: ${theme.font.body};
            overflow-x: hidden;
            overflow-y: scroll;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            width: 100%;
            padding: 40px 50px;
        }
        a {
            text-decoration: none;
            color: ${theme.colors.text};
        }
    `};
`;