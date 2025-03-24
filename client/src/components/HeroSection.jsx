import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroWrapper = styled(Box)(({ theme }) => ({
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  width: '100%',
  margin: 0,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  position: 'relative',
  textAlign: 'center'
}));

const HeroSection = () => {
  return (
    <HeroWrapper>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 1
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 400,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '-0.02em'
            }}
          >
            Sri Basaveshwara Real Estate
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              fontWeight: 400,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Trusted since 1998
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              fontWeight: 800,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
        
          </Typography>
        </Box>
      </Container>
    </HeroWrapper>
  );
};

export default HeroSection;