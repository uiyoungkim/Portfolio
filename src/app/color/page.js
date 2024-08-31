"use client";

import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ColorPage() {
  const theme = useTheme();
  const colors = theme.palette;

  const renderColorBox = (color, name) => (
    <Box key={name} sx={{ mb: 2 }}>
      <Typography variant="h6">{name}</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {Object.keys(color).map((shade) => (
          <Box
            key={shade}
            sx={{
              backgroundColor: color[shade],
              width: 100,
              height: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: 1,
              color: color.contrastText || "inherit",
            }}
          >
            <Typography variant="body2">{shade}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Theme Colors
      </Typography>
      {Object.keys(colors).map((colorName) =>
        typeof colors[colorName] === "object" &&
        !Array.isArray(colors[colorName]) &&
        colors[colorName].main
          ? renderColorBox(colors[colorName], colorName)
          : null
      )}
    </Box>
  );
}
