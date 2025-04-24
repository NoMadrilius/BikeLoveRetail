import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",  // Custom primary color
      contrastText: "#fff",
    },
    secondary: {
      main: "#f50057",  // Custom secondary color
      contrastText: "#fff",
    },
    background: {
      default: "#f4f4f4",  // Light background
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    button: {
      textTransform: "none", // Disable uppercase text on buttons
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: 'red',
          }
        },
      },
    },
    MuiSelect:{
      styleOverrides:{
        root:{

        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundImage: "linear-gradient(45deg, #FA6989, #FA6989)", // light pink hover
          },
          '&.Mui-selected': {
            color:"white",
            backgroundImage: "linear-gradient(45deg, #F01B74, #FF6064)", // pink when selected
            '&:hover': {
              backgroundImage: "linear-gradient(45deg, #F01B74, #FF6064)", // deeper pink on hover when selected
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeMedium:{
          fontSize:"20px",
          padding: "8px 16px",
        },
        root: {
          fontSize:"16px",
          borderRadius: "8px",  // Rounded buttons
          padding: "4px 8px",
        },
        containedPrimary: {
          backgroundImage: "linear-gradient(45deg, #F01B74, #FF6064)", // Gradient
          color: "#fff",
          "&:hover": {
            backgroundImage: "linear-gradient(45deg, #FA6989, #FA6989)", // Darker gradient on hover
          },
        },
        containedSecondary:{
          backgroundColor:"#979797",
          color: "#ffffff",
        },
        containedInfo: {
          backgroundImage: "linear-gradient(45deg, #ff88a2, #fa7492)", // Gradient
          color: "#fff",
          "&:hover": {
            backgroundImage: "linear-gradient(45deg, #F01B74, #FF6064)", // Darker gradient on hover
          },
        },
        outlinedPrimary:{
          borderColor:"#ff1fba",
          color: "#ff1fba"

        },
      },
    },
  },
});