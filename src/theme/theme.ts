import { DefaultTheme } from 'styled-components';

interface IBaseTemplate extends DefaultTheme {
    font: {
        header: string;
        body: string;
    },
    size: {
        default: string | number;
        small: string | number;
        h1: string | number;
        h2: string | number;
        h3: string | number;
    },
    radius: string | number;
    media: {
        small: string | number;
        mobile: string | number;
        tablet: string | number;
        laptop: string | number;
        desktop: string | number;
    }
};

export interface IMainTemplate extends DefaultTheme, IBaseTemplate {
    colors: {
        primary: string;
        background: string;
        text: string;
    }
};

export const baseTheme: IBaseTemplate = {
    font: {
        header: '"itc-avant-garde-gothic-pro", sans-serif',
        body: '"futura-pt", sans-serif',
    },
    size: {
        default: '1rem',
        small: '0.85rem',
        h1: '2rem',
        h2: '1.75rem',
        h3: '1.55rem',
    },
    radius: '8px',
    media: {
        small: '325px',
        mobile: '414px',
        tablet: '834px',
        laptop: '1080px',
        desktop: '2560px'
    }
};

export const lightTheme: IMainTemplate = {
    ...baseTheme,
    colors: {
        primary: '#d4e2d4',
        background: '#fbf7f0',
        text: '#555555',
    },
};

export const darkTheme: IMainTemplate = {
    ...baseTheme,
    colors: {
        primary: '#d4e2d4',
        background: '#555555',
        text: '#fbf7f0',
    },
};