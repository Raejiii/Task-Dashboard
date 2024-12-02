import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTask } from "../redux/tasksSlice";
import { isPast, parseISO } from "date-fns";
import { Typography, Button, Checkbox, List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => {
    const filter = state.tasks.filter;
    const allTasks = state.tasks.tasks;
    if (filter === "completed") return allTasks.filter((task) => task.completed);
    if (filter === "pending") return allTasks.filter((task) => !task.completed);
    if (filter === "overdue") return allTasks.filter((task) => isPast(parseISO(task.dueDate)) && !task.completed);
    return allTasks;
  });

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <Checkbox
            checked={task.completed}
            onChange={() => dispatch(toggleComplete(task.id))}
          />
          <ListItemText
            primary={task.title}
            secondary={`Due: ${task.dueDate}`}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          />
          <IconButton onClick={() => dispatch(deleteTask(task.id))}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
