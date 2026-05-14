import { useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Box,
  Chip,
  InputAdornment,
  Divider,
} from '@mui/material';
// In src/components/Catalog.jsx
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const Catalog = ({ tracks }) => {
  const [search, setSearch] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genres = ['Rock', 'Pop', 'Hip Hop', 'Electronic'];

  const handleGenreChange = (genre) => {
    setSelectedGenres(prev =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const filteredTracks = tracks.filter(track => {
    const matchesSearch = track.name.toLowerCase().includes(search.toLowerCase()) ||
                         track.artist.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = selectedGenres.length === 0 || selectedGenres.includes(track.genre);
    return matchesSearch && matchesGenre;
  });

  return (
    <Box sx={{ py: 4 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          mb: 4,
          textAlign: 'center',
          background: 'linear-gradient(45deg, #00d4ff, #ff4081)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Music Catalog
      </Typography>

      <Grid container spacing={4}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              background: 'rgba(30,30,30,0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <SearchIcon /> Search
            </Typography>
            <TextField
              fullWidth
              label="Search tracks or artists..."
              variant="outlined"
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
              }}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.1)' }} />

            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <FilterListIcon /> Filter by Genre
            </Typography>
            {genres.map(genre => (
              <FormControlLabel
                key={genre}
                control={
                  <Checkbox
                    checked={selectedGenres.includes(genre)}
                    onChange={() => handleGenreChange(genre)}
                    sx={{
                      color: 'primary.main',
                      '&.Mui-checked': {
                        color: 'primary.main',
                      },
                    }}
                  />
                }
                label={genre}
                sx={{
                  display: 'block',
                  mb: 1,
                  '& .MuiFormControlLabel-label': {
                    color: 'text.primary',
                  },
                }}
              />
            ))}
          </Paper>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={9}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: '600' }}>
            {filteredTracks.length} track{filteredTracks.length !== 1 ? 's' : ''} found
          </Typography>

          <Grid container spacing={3}>
            {filteredTracks.map(track => (
              <Grid item xs={12} sm={6} lg={4} key={track.id}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    background: 'rgba(30,30,30,0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0,212,255,0.2)',
                      border: '1px solid rgba(0,212,255,0.3)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      mb: 1,
                      color: 'primary.main',
                    }}
                  >
                    {track.name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}
                  >
                    <Box sx={{ fontSize: 18 }}>🎤</Box> {track.artist}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    <Chip
                      label={track.genre}
                      size="small"
                      sx={{
                        bgcolor: 'secondary.main',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                    <Chip
                      label={`${track.bpm} BPM`}
                      size="small"
                      variant="outlined"
                      sx={{ borderColor: 'primary.main', color: 'primary.main' }}
                    />
                    <Chip
                      label={track.key}
                      size="small"
                      variant="outlined"
                      sx={{ borderColor: 'text.secondary', color: 'text.secondary' }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Box sx={{ fontSize: 16 }}>⏱️</Box> {track.duration}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Catalog;