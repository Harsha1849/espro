import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 'bold' }}
        >
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Send us a message
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone"
                      type="tel"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        backgroundColor: '#F15A29',
                        '&:hover': {
                          backgroundColor: '#d94d1f',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Get in touch
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box 
                  component="a"
                  href="https://maps.app.goo.gl/jr6Dq4XtZv9QXGCc8"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2,
                    textDecoration: 'none',
                    color: 'inherit',
                    '&:hover': {
                      '& .address-text': {
                        color: '#F15A29'
                      }
                    }
                  }}
                >
                  <LocationOnIcon sx={{ color: '#F15A29', fontSize: 30 }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Address
                    </Typography>
                    <Typography variant="body1" className="address-text" sx={{ color: 'text.secondary', transition: 'color 0.3s' }}>
                    Shop No. # 64, 2nd Cross, Sri, 1st Main Rd, Vinayaka Layout, 9 Block, Naagarabhaavi, Bengaluru, Karnataka 560072.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <PhoneIcon sx={{ color: '#F15A29', fontSize: 30 }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Phone
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      +91 98765 43210
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <EmailIcon sx={{ color: '#F15A29', fontSize: 30 }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Email
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      info@sribasaveshwararealestate.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;