import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#FFF8F3',    // Soft peachy background like sunset sky
            paper: '#FFFFFF',    // White surfaces for contrast
        },
        primary: { main: '#FF6B35' }, // Warm sunset coral/orange
        secondary: { main: '#4A5899' }, // Deep twilight blue
        sunset: {
            warmOrange: '#FF8C42',  // Bright sunset orange
            deepCoral: '#FF6B35',   // Deep coral
            softPeach: '#FFB997',   // Soft peach
            lavender: '#A47BB0',    // Twilight lavender
            deepBlue: '#2D4059',    // Deep water blue
            lightBlue: '#5A7CA1',   // Light water blue
            golden: '#FFD23F',      // Golden hour
        },
    },
    typography: {
        fontFamily: 'var(--font-source-sans-3), "Inter", sans-serif',
        h1: { fontSize: '2.5rem', fontWeight: 700 },
        h2: { fontSize: '2rem', fontWeight: 700 },
        h3: { fontSize: '1.75rem', fontWeight: 600 },
        h4: { fontSize: '1.5rem', fontWeight: 600 },
        h5: { fontSize: '1.25rem', fontWeight: 500 },
        h6: { fontSize: '1rem', fontWeight: 500 },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
        },
        body2: {
            fontSize: '0.875rem',
        },
        button: {
            fontWeight: 600,
            textTransform: 'none',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    fontFamily: 'var(--font-source-sans-3), "Inter", sans-serif',
                },
                '::selection': {
                    backgroundColor: '#FF6B35',
                    color: '#fff',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                },
            },
        },
    },
});

export default theme;