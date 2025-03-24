import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#1a1a1a',
  color: 'white',
  padding: theme.spacing(6, 0),
  marginTop: 'auto'
}));

const FooterLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    color: '#F15A29',
    textDecoration: 'none'
  }
});

const SocialButton = styled(IconButton)({
  color: 'white',
  '&:hover': {
    color: '#F15A29'
  },
  marginRight: '8px'
});

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: '#F15A29' }}>
              Sri Basaveshwara Real Estate
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Your trusted partner in real estate since 1998.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: '#F15A29' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/properties">Properties</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: '#F15A29' }}>
              Contact Info
            </Typography>
            <Typography variant="body2" paragraph>
              123 Real Estate Street
              <br />
              Bangalore, Karnataka 560001
            </Typography>
            <Typography variant="body2" paragraph>
              Phone: +91 98765 43210
              <br />
              Email: info@sribasaveshwara.com
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: '#F15A29' }}>
              Follow Us
            </Typography>
            <Box>
              <SocialButton aria-label="facebook">
                <FacebookIcon />
              </SocialButton>
              <SocialButton aria-label="instagram">
                <InstagramIcon />
              </SocialButton>
              <SocialButton aria-label="twitter">
                <TwitterIcon />
              </SocialButton>
              <SocialButton aria-label="linkedin">
                <LinkedInIcon />
              </SocialButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', mt: 4, pt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.6)">
            © {new Date().getFullYear()} Sri Basaveshwara Real Estate. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;