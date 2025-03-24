import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropertyCard from './PropertyCard';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const FeaturedProperties = () => {
  // Sample property data - in a real app, this would come from an API
  const properties = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      price: 1250000,
      location: 'Beverly Hills, CA',
      image: 'https://source.unsplash.com/random/800x600/?luxury,house',
      beds: 5,
      baths: 4,
      area: 4500,
      type: 'For Sale'
    },
    {
      id: 2,
      title: 'Downtown Apartment',
      price: 450000,
      location: 'Manhattan, NY',
      image: 'https://source.unsplash.com/random/800x600/?apartment',
      beds: 2,
      baths: 2,
      area: 1200,
      type: 'For Sale'
    },
    {
      id: 3,
      title: 'Seaside Condo',
      price: 3500,
      location: 'Miami Beach, FL',
      image: 'https://source.unsplash.com/random/800x600/?beach,house',
      beds: 3,
      baths: 2,
      area: 1800,
      type: 'For Rent'
    }
  ];

  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2
            }}
          >
            Featured Properties
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Discover our hand-picked selection of premium properties
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {properties.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <PropertyCard property={property} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default FeaturedProperties;