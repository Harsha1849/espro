import React, { useEffect } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VideoBackground from './VideoBackground';
import Typewriter from 'typewriter-effect';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
`;

const HeroWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100%',
  margin: 0,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  position: 'relative',
  textAlign: 'center',
  overflow: 'hidden'
}));

const ScrollIndicator = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(4),
  left: '50%',
  transform: 'translateX(-50%)',
  color: 'white',
  animation: `${bounce} 2s infinite`,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  }
}));

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <HeroWrapper>
      <VideoBackground />
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
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
              component={motion.h1}
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 600,
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '-0.02em',
                fontFamily: '"Playfair Display", serif'
              }}
            >
              Sri Basaveshwara Real Estate
            </Typography>
            <Box sx={{ mb: 4, height: '3rem' }}>
              <Typewriter
                options={{
                  strings: ['Luxury Living', 'Premium Properties', 'Trusted since 1998'],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'typewriter-text',
                  cursorClassName: 'typewriter-cursor'
                }}
              />
            </Box>
          </Box>
        </motion.div>
      </Container>
      <ScrollIndicator onClick={scrollToContent}>
        <KeyboardArrowDownIcon fontSize="large" />
      </ScrollIndicator>
    </HeroWrapper>
  );
};

export default HeroSection;