const baseTheme = {
    font: {
        header: '"itc-avant-garde-gothic-pro", sans-serif',
        body: '"futura-pt", sans-serif',
    },
};

const lightTheme = {
    ...baseTheme,
    colors: {
        primary: '#d4e2d4',
        background: '#fbf7f0',
        text: '#555555',
    },
};

const darkTheme = {
    ...baseTheme,
    colors: {
        primary: '#d4e2d4',
        background: '#555555',
        text: '#fbf7f0',
    },
};

module.exports = {
    lightTheme: lightTheme,
    darkTheme: darkTheme
};