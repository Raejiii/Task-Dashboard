// src/App.js
import './App.css';
import React from "react";
import Dashboard from "./pages/Dashboard";

import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme'; // Import the theme
import { Button, Typography } from '@mui/material';


const App = () => {
  return <Dashboard />;
};

export default App;
