// src/components/AnalyticsCard.js
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const AnalyticsCard = ({ title, value, icon, color }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#2a2d3e",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        padding: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" color={color || "primary"}>
          {value}
        </Typography>
      </CardContent>
      <div style={{ marginLeft: "auto", fontSize: "2rem", color }}>
        {icon}
      </div>
    </Card>
  );
};

export default AnalyticsCard;
