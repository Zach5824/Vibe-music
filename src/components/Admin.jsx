import { useState } from 'react';
import { Paper, Typography, TextField, Grid, Button, Box, Alert } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Admin = ({ addTrack }) => {
  const [form, setForm] = useState({
    name: '',
    artist: '',
    genre: '',
    bpm: '',
    key: '',
    duration: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.artist) {
      addTrack(form);
      setForm({ name: '', artist: '', genre: '', bpm: '', key: '', duration: '' });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        py: 4,
      }}
    >
      <Paper
        sx={{
          p: 4,
          maxWidth: 600,
          width: '100%',
          borderRadius: 4,
          background: 'rgba(30,30,30,0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            background: 'linear-gradient(45deg, #00d4ff, #ff4081)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Add New Track
        </Typography>
        <Typography
          align="center"
          sx={{
            mb: 4,
            color: 'text.secondary',
            fontSize: '1.1rem',
          }}
        >
          Fill in the details below to add a track to your catalog
        </Typography>

        {submitted && (
          <Alert
            severity="success"
            sx={{
              mb: 3,
              borderRadius: 2,
              '& .MuiAlert-icon': {
                color: '#4caf50',
              },
            }}
          >
            Track added successfully!
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Track Name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Track Name"
                value={form.name}
                onChange={handleChange('name')}
                required
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
            </Grid>

            {/* Artist Name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Artist Name"
                value={form.artist}
                onChange={handleChange('artist')}
                required
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
            </Grid>

            {/* Genre */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Genre"
                value={form.genre}
                onChange={handleChange('genre')}
                placeholder="e.g., Rock, Pop"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
            </Grid>

            {/* BPM */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="BPM"
                value={form.bpm}
                onChange={handleChange('bpm')}
                placeholder="120"
                type="number"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
            </Grid>

            {/* Key */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Key"
                value={form.key}
                onChange={handleChange('key')}
                placeholder="e.g., Am, C"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
            </Grid>

            {/* Duration */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Duration"
                value={form.duration}
                onChange={handleChange('duration')}
                placeholder="3:45"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                startIcon={<AddIcon />}
                sx={{
                  borderRadius: 3,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #00d4ff, #ff4081)',
                  boxShadow: '0 4px 15px rgba(0,212,255,0.3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #00b8e6, #e91e63)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s',
                }}
              >
                Add Track
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Admin;