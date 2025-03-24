import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturedProperties from '../components/FeaturedProperties';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <HeroSection />
      <AboutSection />
      <FeaturedProperties />
      <ContactSection />
    </Box>
  );
};

export default Home;