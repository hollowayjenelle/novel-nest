import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#582C6F",
    },
    background: {
      default: "#F5EEF8",
    },
    secondary: {
      main: "#FFC300",
    },
  },
  typography: {
    fontFamily: ["Poppins", "Nunito"].join(","),
    h1: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 700,
      fontSize: "36px",
    },
    h2: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 700,
      fontSize: "32px",
    },
    h3: {
      fontFamily: "Nunito, sans-serif",
      fontWeight: 500,
      fontSize: "16px",
    },
    h4: {
      fontFamily: "Nunito, sans-serif",
      fontWeight: 500,
      fontSize: "14px",
    },
    h5: {
      fontFamily: "Nunito, sans-serif",
      fontWeight: 400,
      fontSize: "12px",
    },
    subtitle1: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
      fontSize: "28px",
    },
    subtitle2: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      fontSize: "24px",
    },
    body1: {
      fontFamily: "Nunito, sans-serif",
      fontSize: "18px",
    },
    body2: {
      fontFamily: "Nunito, sans-serif",
      fontSize: "16px",
    },
    button: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      fontSize: "22px",
    },
  },
});

export default theme;
