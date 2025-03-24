import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#f5f5f5',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '500px',
  backgroundImage: 'url("https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2)
}));

const ExperienceBox = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  bottom: -20,
  left: '50%',
  transform: 'translateX(-50%)',
  padding: theme.spacing(2, 4),
  backgroundColor: '#F15A29',
  color: 'white',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  textAlign: 'center',
  width: '200px'
}));

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}
          >
            A Legacy of Trust Since 1998
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative' }}>
              <ImageBox />
              <ExperienceBox>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  27+
                </Typography>
                <Typography variant="body1">
                  Years of Experience
                </Typography>
              </ExperienceBox>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <StyledPaper elevation={3}>
                  <Typography variant="h5" gutterBottom sx={{ color: '#F15A29', mb: 2 }}>
                    Our Legacy
                  </Typography>
                  <Typography variant="body1">
                    Founded in 1998 by Mr. Shivakumar & Mrs. Lallithamma, we've built
                    our reputation on trust and excellence in real estate for over 27 years.
                    Our journey has been marked by countless successful property transactions
                    and satisfied clients.
                  </Typography>
                </StyledPaper>
              </Grid>

              <Grid item xs={12}>
                <StyledPaper elevation={3}>
                  <Typography variant="h5" gutterBottom sx={{ color: '#F15A29', mb: 2 }}>
                    Our Values
                  </Typography>
                  <Typography variant="body1">
                    Built on the pillars of honesty, transparency, and dedication, we cultivate
                    lasting relationships with our clients through our family-oriented approach.
                    Every transaction is handled with utmost integrity and professionalism.
                  </Typography>
                </StyledPaper>
              </Grid>

              <Grid item xs={12}>
                <StyledPaper elevation={3}>
                  <Typography variant="h5" gutterBottom sx={{ color: '#F15A29', mb: 2 }}>
                    Our Expertise
                  </Typography>
                  <Typography variant="body1">
                    With decades of expertise in residential, commercial, and agricultural properties,
                    we've successfully facilitated countless property transactions. Our deep understanding
                    of the local real estate market sets us apart.
                  </Typography>
                </StyledPaper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default AboutSection;