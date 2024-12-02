import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/tasksSlice";
import { ButtonGroup, Button } from "@mui/material";

const Filters = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.tasks.filter);

  return (
    <ButtonGroup variant="outlined">
      {["all", "completed", "pending", "overdue"].map((filter) => (
        <Button
          key={filter}
          onClick={() => dispatch(setFilter(filter))}
          variant={currentFilter === filter ? "contained" : "outlined"}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Filters;
