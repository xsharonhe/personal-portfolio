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
        large: string | number;
    },
    radius: {
        default: string;
        border: string;
    };
    media: {
        [key: string]: number | string;
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
        large: '2.5rem',
    },
    radius: {
        default: '8px',
        border: '20px',
    },
    media: {
        small: '325',
        mobile: '414',
        tablet: '834',
        laptop: '1480',
        desktop: '2560'
    }
};

export const lightTheme: IMainTemplate = {
    ...baseTheme,
    colors: {
        primary: '#79a3b1',
        background: '#f4eeed',
        text: '#393e46',
    },
};

export const darkTheme: IMainTemplate = {
    ...baseTheme,
    colors: {
        primary: '#79a3b1',
        background: '#41444b',
        text: '#f4eeed',
    },
};