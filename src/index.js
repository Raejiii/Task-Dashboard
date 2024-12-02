import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./redux/tasksSlice";
import App from "./App";
import "./index.css";
import './App.css'; // Make sure this is at the top of the file

export const store = configureStore({
  reducer: {
    tasks: tasksSlice, // Use the correct slice name
  },
});




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
