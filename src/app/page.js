"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { keyframes } from "@mui/system";

// Define the twinkling animation
const twinkle = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Navigation */}
      <Box
        component="nav"
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          display: "flex",
          gap: 2,
          zIndex: 1,
        }}
      >
        <Link href="/projects" color="inherit">
          Projects
        </Link>
        <Link href="/contact" color="inherit">
          Contact
        </Link>
        <Link href="/platforms" color="inherit">
          Platforms
        </Link>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 900, // This makes the text bolder
            fontSize: "5rem", // Adjust size if needed
            letterSpacing: "-0.01562em", //  adjust letter spacing for better readability
          }}
        >
          Uiyoung Kim
        </Typography>
        <Typography variant="body1">
          I'm building [Your Project] to solve [Problem] for [Target Audience].
        </Typography>
      </Box>

      {/* Background Stars Effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {[...Array(100)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: "2px",
              height: "2px",
              backgroundColor: "text.primary",
              borderRadius: "50%",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `${twinkle} ${Math.random() * 3 + 2}s infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
