import { useState } from 'react';
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, AppBar, Toolbar, Typography, Button, Container, Box, Tab, Tabs } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import theme from './components/theme';
import LandingPage from './components/LandingPage';
import Catalog from './components/Catalog';
import Admin from './components/Admin';

function App() {
  const [tracks, setTracks] = useState([
    { id: 1, name: "Midnight Echoes", artist: "The Echoes", genre: "Electronic", bpm: 128, key: "Am", duration: "3:42" },
    { id: 2, name: "Sunset Dreams", artist: "Luna Ray", genre: "Pop", bpm: 92, key: "C", duration: "4:15" },
    { id: 3, name: "Electric Soul", artist: "Neon Pulse", genre: "Electronic", bpm: 140, key: "F", duration: "3:28" },
    { id: 4, name: "Rock Anthem", artist: "Stone Heart", genre: "Rock", bpm: 110, key: "G", duration: "4:52" },
    { id: 5, name: "Hip Hop Flow", artist: "Urban Beat", genre: "Hip Hop", bpm: 95, key: "Dm", duration: "3:15" },
  ]);

  const navigate = useNavigate();
  const location = useLocation();

  const addTrack = (newTrack) => setTracks([...tracks, { ...newTrack, id: Date.now() }]);

  const getTabValue = () => {
    switch (location.pathname) {
      case '/catalog':
        return 1;
      case '/admin':
        return 2;
      default:
        return 0;
    }
  };

  const handleTabChange = (event, newValue) => {
    const paths = ['/', '/catalog', '/admin'];
    navigate(paths[newValue]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: 'rgba(18,18,18,0.9)', backdropFilter: 'blur(10px)' }}>
        <Toolbar>
          <MusicNoteIcon sx={{ mr: 2, color: 'primary.main' }} />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #00d4ff, #ff4081)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Studio Manager
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'rgba(18,18,18,0.9)' }}>
        <Tabs
          value={getTabValue()}
          onChange={handleTabChange}
          centered
          sx={{
            '& .MuiTab-root': {
              color: 'text.secondary',
              '&.Mui-selected': {
                color: 'primary.main',
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'primary.main',
            },
          }}
        >
          <Tab label="Home" />
          <Tab label="Catalog" />
          <Tab label="Admin" />
        </Tabs>
      </Box>

      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/catalog" element={<Catalog tracks={tracks} />} />
          <Route path="/admin" element={<Admin addTrack={addTrack} />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;