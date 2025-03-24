import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  Box,
  Divider,
  Paper,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  IconButton,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const PropertyView = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    viewerName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });

  React.useEffect(() => {
    fetchProperty();
  }, [id]);

  const fetchProperty = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/properties/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProperty(data);
      }
    } catch (error) {
      setError('Failed to fetch property details');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/meetings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          propertyId: id,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setOpenDialog(false);
        setFormData({
          viewerName: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          message: '',
        });
      } else {
        setError('Failed to schedule meeting');
      }
    } catch (error) {
      setError('Failed to schedule meeting');
    } finally {
      setLoading(false);
    }
  };

  if (!property) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Meeting scheduled successfully! We will contact you soon.
        </Alert>
      )}

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={property.image}
              alt={property.title}
              sx={{ objectFit: 'cover' }}
            />
          </Card>

          <Box sx={{ mt: 3 }}>
            <Typography variant="h4" gutterBottom>
              {property.title}
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              ${property.price.toLocaleString()}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOnIcon color="action" sx={{ mr: 1 }} />
              <Typography variant="body1">{property.location}</Typography>
            </Box>

            <Grid container spacing={3} sx={{ mb: 3 }}>
              <Grid item xs={4}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <BedIcon color="action" sx={{ mr: 1 }} />
                  <Typography>{property.beds} Beds</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <BathtubIcon color="action" sx={{ mr: 1 }} />
                  <Typography>{property.baths} Baths</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <SquareFootIcon color="action" sx={{ mr: 1 }} />
                  <Typography>{property.area} sqft</Typography>
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              Property Description
            </Typography>
            <Typography variant="body1" paragraph>
              {property.description || 'No description available.'}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Schedule a Viewing
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Interested in this property? Schedule a viewing with our agent.
            </Typography>
            <Button
              variant="contained"
              fullWidth
              startIcon={<CalendarTodayIcon />}
              onClick={() => setOpenDialog(true)}
            >
              Schedule Meeting
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Schedule a Viewing</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Name"
                  required
                  value={formData.viewerName}
                  onChange={(e) =>
                    setFormData({ ...formData, viewerName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Preferred Date"
                  type="date"
                  required
                  InputLabelProps={{ shrink: true }}
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Preferred Time"
                  type="time"
                  required
                  InputLabelProps={{ shrink: true }}
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message (Optional)"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disabled={loading}
          >
            {loading ? 'Scheduling...' : 'Schedule Viewing'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default PropertyView;