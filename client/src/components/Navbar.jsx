import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  styled
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(51, 51, 51, 0.95)',
  boxShadow: 'none',
}));

const Logo = styled('img')({
  height: '40px',
  marginRight: '16px',
});

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const JoinNowButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#F15A29',
  color: '#fff',
  padding: '8px 24px',
  '&:hover': {
    backgroundColor: '#d94d1f',
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
    <StyledAppBar position="fixed">
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
    </StyledAppBar>
  );
};

export default Navbar;