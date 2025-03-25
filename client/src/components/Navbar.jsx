import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Toolbar,
  Typography,
  Button,
  Box,
  Container
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { GlassNavbar, Logo } from './styles';

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  fontWeight: 500,
  textTransform: 'none',
  letterSpacing: '1px',
  padding: theme.spacing(1, 2),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <GlassNavbar position="fixed">
      <Container>
        <Toolbar disableGutters>
          <RouterLink to="/">
            <Logo src="/all-city-logo.svg" alt="Sri Basaveshwara Real Estate" />
          </RouterLink>
          <Box sx={{ flexGrow: 1, display: 'flex', gap: 3, ml: 4 }}>
            <NavButton component={RouterLink} to="/">
              HOME
            </NavButton>
            <NavButton component={RouterLink} to="/properties">
              PROPERTIES
            </NavButton>
            <NavButton onClick={scrollToAbout}>
              ABOUT US
            </NavButton>
            <NavButton component={RouterLink} to="/contact">
              CONTACT US
            </NavButton>
            {currentUser ? (
              <>
                <NavButton component={RouterLink} to="/dashboard">
                  DASHBOARD
                </NavButton>
                <NavButton onClick={logout}>
                  LOGOUT
                </NavButton>
              </>
            ) : (
              <NavButton component={RouterLink} to="/login">
                LOGIN
              </NavButton>
            )}
          </Box>
        </Toolbar>
      </Container>
    </GlassNavbar>
  );
};

export default Navbar;