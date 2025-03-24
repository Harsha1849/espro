import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0'
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2'
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff'
    }
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '2.75rem',
      fontWeight: 600,
      letterSpacing: '-0.02em'
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '2.25rem',
      fontWeight: 600,
      letterSpacing: '-0.01em'
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '1.875rem',
      fontWeight: 500,
      letterSpacing: '-0.01em'
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '1.5rem',
      fontWeight: 500
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      letterSpacing: '0.02em'
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em'
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em'
    },
    button: {
      fontWeight: 500,
      letterSpacing: '0.02em'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }
      }
    }
  }
});

export default theme;