import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: 'dark', // Since your catalog looks dark-themed
    primary: {
      main: '#00d4ff',
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

export default theme;