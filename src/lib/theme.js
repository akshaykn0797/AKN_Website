import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#FFFFFF',    // <-- your page background
            paper: '#FFFFFF',    // <-- surfaces (Paper, Card, etc.)
        },
        primary: { main: '#1976d2' },
        secondary: { main: '#9c27b0' },
    },
    typography: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        h1: { fontSize: '2.5rem', fontWeight: 600 },
    },
});

export default theme;
