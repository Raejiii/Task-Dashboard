// src/components/Sidebar.js
import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import EmailIcon from "@mui/icons-material/Email";


const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          width: 240,
          backgroundColor: "#1e1e2f",
          color: "#ffffff",
        },
      }}
    >
      <Typography variant="h5" align="center" sx={{ py: 2, color: "#5e5eff" }}>
        Vuexy
      </Typography>
      <List>
        {[
          { text: "Dashboards", icon: <DashboardIcon /> },
          { text: "Analytics", icon: <AnalyticsIcon /> },
          { text: "Email", icon: <EmailIcon /> },
        ].map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon sx={{ color: "#5e5eff" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
