"use client";

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "../theme";
import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Optionally, use system preferences to set the theme:
  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <CssBaseline /> {/* Normalize CSS */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
