import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

const PropertyCard = ({ property }) => {
  const { title, price, location, image, beds, baths, area, type } = property;

  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ mb: 1 }}>
          <Chip
            label={type}
            size="small"
            color="primary"
            sx={{ mb: 1 }}
          />
        </Box>
        <Typography variant="h6" gutterBottom noWrap>
          {title}
        </Typography>
        <Typography variant="h5" color="primary" gutterBottom>
          ${price.toLocaleString()}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LocationOnIcon color="action" sx={{ mr: 1 }} fontSize="small" />
          <Typography variant="body2" color="text.secondary" noWrap>
            {location}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <BedIcon color="action" sx={{ mr: 0.5 }} fontSize="small" />
            <Typography variant="body2">{beds} Beds</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <BathtubIcon color="action" sx={{ mr: 0.5 }} fontSize="small" />
            <Typography variant="body2">{baths} Baths</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SquareFootIcon color="action" sx={{ mr: 0.5 }} fontSize="small" />
            <Typography variant="body2">{area} sqft</Typography>
          </Box>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default PropertyCard;