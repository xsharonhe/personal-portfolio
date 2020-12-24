interface IThemeTemplate {
    font: {
        header: string;
        body: string;
    },
};

interface IMainThemeTemplate extends IThemeTemplate {
    colors: {
        primary: string;
        background: string;
        text: string;
    }, 
};

const baseTheme: IThemeTemplate = {
    font: {
        header: '"itc-avant-garde-gothic-pro", sans-serif',
        body: '"futura-pt", sans-serif',
    },
};

export const lightTheme: IMainThemeTemplate = {
    ...baseTheme,
    colors: {
        primary: '#d4e2d4',
        background: '#fbf7f0',
        text: '#555555',
    },
};

export const darkTheme: IMainThemeTemplate = {
    ...baseTheme,
    colors: {
        primary: '#d4e2d4',
        background: '#555555',
        text: '#fbf7f0',
    },
};