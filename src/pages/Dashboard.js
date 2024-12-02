import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Filters from "../components/Filters";
import { Container, Typography, Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Task Management Dashboard
      </Typography>
      <TaskForm />
      <Box sx={{ mt: 4 }}>
        <Filters />
        <TaskList />
      </Box>
    </Container>
  );
};

export default Dashboard;
