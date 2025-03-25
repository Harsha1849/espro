import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

export const GlassNavbar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  '& .MuiToolbar-root': {
    padding: theme.spacing(1.5, 3),
  },
  '& .MuiButton-root': {
    color: '#fff',
    fontSize: '0.9rem',
    letterSpacing: '1px',
    margin: theme.spacing(0, 1),
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.1)',
    },
  },
}));

export const Logo = styled('img')({
  height: '40px',
  filter: 'brightness(0) invert(1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));