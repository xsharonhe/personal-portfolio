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
        }
        body {
            background-color: ${theme.colors.background};
            color: ${theme.colors.text};
            font-family: ${theme.font.body};
            overflow-x: hidden;
            overflow-y: scroll;
        }
    `};
`;