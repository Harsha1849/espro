import React from 'react';
import { Typography, Box, Paper, Stack } from '@mui/material';

const About = () => {
  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Our Legacy
      </Typography>
      <Typography variant="body1" paragraph>
        Sri Basaveshwara Real Estate has been a cornerstone of trust in the real estate market for nearly 3 decades.
        Our journey began in 1998 when Mr. Shivakumar & Mrs. Lallithamma laid the foundation of what would become
        one of the most trusted names in property dealings.
      </Typography>
      
      <Stack spacing={3} sx={{ mt: 4 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Our Values
          </Typography>
          <Typography variant="body1">
            Built on the pillars of honesty, transparency, and dedication, we have cultivated lasting relationships
            with our clients. Our family-oriented approach ensures that every property transaction is handled with
            the utmost care and integrity.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Our Commitment
          </Typography>
          <Typography variant="body1">
            For 27 years, we have been serving our community with unwavering dedication. Our deep understanding
            of the local real estate market, combined with our commitment to ethical business practices, has made
            us the preferred choice for property dealings in the region.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Our Experience
          </Typography>
          <Typography variant="body1">
            With over two decades of experience, we have successfully facilitated countless property transactions,
            helping families find their dream homes and investors secure valuable properties. Our expertise spans
            residential, commercial, and agricultural properties.
          </Typography>
        </Paper>
      </Stack>
    </Box>
  );
};

export default About;