import { Typography, Box, Grid, Paper, Chip, Avatar } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AlbumIcon from '@mui/icons-material/Album';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const StatCard = ({ icon, label, value, color }) => (
  <Paper
    sx={{
      p: 3,
      textAlign: 'center',
      borderRadius: 3,
      height: '100%',
      background: `linear-gradient(135deg, ${color}20, ${color}10)`,
      border: `1px solid ${color}30`,
      transition: 'transform 0.2s, box-shadow 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: `0 8px 25px ${color}30`,
      },
    }}
  >
    <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: color, width: 56, height: 56 }}>
      {icon}
    </Avatar>
    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, color: 'white' }}>
      {value}
    </Typography>
    <Typography color="textSecondary" sx={{ fontSize: '0.9rem' }}>
      {label}
    </Typography>
  </Paper>
);
const LandingPage = () => (
  <Box
    sx={{
      textAlign: 'center',
      py: 8,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Chip
      label="All Systems Operational"
      color="success"
      variant="filled"
      sx={{
        mb: 3,
        bgcolor: '#4caf50',
        color: 'white',
        fontWeight: 600,
        px: 2,
        alignSelf: 'center',
      }}
    />
    <Typography
      variant="h2"
      sx={{
        fontWeight: 'bold',
        color: 'white',
        mb: 2,
        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
      }}
    >
      Studio Manager
    </Typography>
    <Typography
      variant="h6"
      sx={{
        color: 'rgba(255,255,255,0.9)',
        mb: 6,
        maxWidth: 600,
        mx: 'auto',
        lineHeight: 1.6,
      }}
    >
      Your complete music catalog solution. Organize, manage, and discover your entire collection with modern tools.
    </Typography>
     <Grid container spacing={4} sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          icon={<MusicNoteIcon />}
          value="1,247"
          label="Total Tracks"
          color="#00d4ff"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          icon={<AlbumIcon />}
          value="156"
          label="Albums"
          color="#ff4081"
        />
      </Grid>