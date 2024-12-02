// src/components/TaskCard.js
import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTask } from "../redux/tasksSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={{ marginBottom: 2, backgroundColor: "#1e1e2f" }}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2" color="textSecondary">{task.description}</Typography>
        <Typography variant="caption" color="secondary">Due: {task.dueDate}</Typography>
      </CardContent>
      <div style={{ padding: "8px 16px", display: "flex", justifyContent: "space-between" }}>
        <Button
          startIcon={<CheckCircleIcon />}
          color={task.completed ? "secondary" : "primary"}
          onClick={() => dispatch(toggleComplete(task.id))}
        >
          {task.completed ? "Undo" : "Complete"}
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          color="error"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default TaskCard;
