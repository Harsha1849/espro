import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [properties, setProperties] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    beds: '',
    baths: '',
    area: '',
    type: '',
    image: '',
  });

  useEffect(() => {
    fetchProperties();
    fetchMeetings();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/properties', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setProperties(data);
      }
    } catch (error) {
      setError('Failed to fetch properties');
    }
  };

  const fetchMeetings = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/meetings', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setMeetings(data);
      }
    } catch (error) {
      setError('Failed to fetch meetings');
    }
  };

  const handleAddProperty = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setOpenDialog(false);
        fetchProperties();
        setFormData({
          title: '',
          price: '',
          location: '',
          beds: '',
          baths: '',
          area: '',
          type: '',
          image: '',
        });
      } else {
        setError('Failed to add property');
      }
    } catch (error) {
      setError('Failed to add property');
    }
  };

  const handleEditProperty = async (property) => {
    setSelectedProperty(property);
    setFormData(property);
    setOpenDialog(true);
  };

  const handleUpdateProperty = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/properties/${selectedProperty._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setOpenDialog(false);
        fetchProperties();
        setSelectedProperty(null);
        setFormData({
          title: '',
          price: '',
          location: '',
          beds: '',
          baths: '',
          area: '',
          type: '',
          image: '',
        });
      } else {
        setError('Failed to update property');
      }
    } catch (error) {
      setError('Failed to update property');
    }
  };

  const handleDeleteProperty = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/properties/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        fetchProperties();
      } else {
        setError('Failed to delete property');
      }
    } catch (error) {
      setError('Failed to delete property');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Owner Dashboard
        </Typography>
        <Button
          variant="contained"
          onClick={() => setOpenDialog(true)}
          sx={{ mb: 3 }}
        >
          Add New Property
        </Button>

        <Paper sx={{ mb: 4 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {properties.map((property) => (
                  <TableRow key={property._id}>
                    <TableCell>{property.title}</TableCell>
                    <TableCell>${property.price}</TableCell>
                    <TableCell>{property.location}</TableCell>
                    <TableCell>{property.type}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEditProperty(property)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteProperty(property._id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Scheduled Meetings
        </Typography>
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Property</TableCell>
                  <TableCell>Viewer Name</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Contact</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {meetings.map((meeting) => (
                  <TableRow key={meeting._id}>
                    <TableCell>{meeting.property.title}</TableCell>
                    <TableCell>{meeting.viewerName}</TableCell>
                    <TableCell>{new Date(meeting.date).toLocaleDateString()}</TableCell>
                    <TableCell>{meeting.time}</TableCell>
                    <TableCell>{meeting.contact}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          {selectedProperty ? 'Edit Property' : 'Add New Property'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Price"
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Type"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Beds"
                type="number"
                value={formData.beds}
                onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Baths"
                type="number"
                value={formData.baths}
                onChange={(e) => setFormData({ ...formData, baths: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Area (sqft)"
                type="number"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button
            onClick={selectedProperty ? handleUpdateProperty : handleAddProperty}
            variant="contained"
          >
            {selectedProperty ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Dashboard;