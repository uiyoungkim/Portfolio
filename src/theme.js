import { createTheme } from "@mui/material/styles";

// Light mode theme configuration
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "hsl(192, 100%, 95%)",
      paper: "hsl(192, 50%, 90%)",
    },
    text: {
      primary: "hsl(192, 5%, 0%)",
      secondary: "hsl(192, 5%, 35%)",
    },
    primary: {
      main: "hsl(192, 76.2%, 75.3%)",
      contrastText: "hsl(0, 0%, 0%)",
    },
    secondary: {
      main: "hsl(192, 30%, 70%)",
      contrastText: "hsl(0, 0%, 0%)",
    },
    error: {
      main: "hsl(0, 100%, 30%)",
      contrastText: "hsl(192, 5%, 90%)",
    },
    divider: "hsl(192, 30%, 50%)",
  },
  shape: {
    borderRadius: "0.5rem",
  },
});

// Dark mode theme configuration
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "hsl(192, 50%, 5%)",
      paper: "hsl(192, 50%, 0%)",
    },
    text: {
      primary: "hsl(192, 5%, 90%)",
      secondary: "hsl(192, 5%, 60%)",
    },
    primary: {
      main: "hsl(192, 76.2%, 75.3%)",
      contrastText: "hsl(0, 0%, 0%)",
    },
    secondary: {
      main: "hsl(192, 30%, 10%)",
      contrastText: "hsl(0, 0%, 100%)",
    },
    error: {
      main: "hsl(0, 100%, 30%)",
      contrastText: "hsl(192, 5%, 90%)",
    },
    divider: "hsl(192, 30%, 18%)",
  },
  shape: {
    borderRadius: "0.5rem",
  },
});

export default { lightTheme, darkTheme };
