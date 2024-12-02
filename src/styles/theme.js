// src/styles/theme.js
import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#5e5eff" },
    secondary: { main: "#6f42c1" },
    background: { default: "#121212", paper: "#1e1e2f" },
    text: { primary: "#ffffff", secondary: "#c4c4c4" },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
