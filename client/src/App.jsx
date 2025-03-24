import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PropertyView from './pages/PropertyView';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Box component="main" sx={{ flex: 1 }}><Home /></Box>} />
          <Route path="/about" element={<Container component="main" sx={{ flex: 1, py: 4 }}><About /></Container>} />
          <Route path="/contact" element={<Container component="main" sx={{ flex: 1, py: 4 }}><Contact /></Container>} />
          <Route path="/login" element={<Container component="main" sx={{ flex: 1, py: 4 }}><Login /></Container>} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Container component="main" sx={{ flex: 1, py: 4 }}><Dashboard /></Container>
            </ProtectedRoute>
          } />
          <Route path="/property/:id" element={<Container component="main" sx={{ flex: 1, py: 4 }}><PropertyView /></Container>} />
        </Routes>
        <Footer />
      </Box>
    </AuthProvider>
  );
};

export default App;