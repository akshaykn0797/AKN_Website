import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#FFFFFF',    // <-- your page background
            paper: '#FFFFFF',    // <-- surfaces (Paper, Card, etc.)
        },
        primary: { main: '#ff9800' }, // Changed to orange to match your links
        secondary: { main: '#9c27b0' },
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
                    backgroundColor: '#ff9800',
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