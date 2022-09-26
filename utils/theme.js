import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const base = createTheme({
  palette: {
    primary: {
      main: "#e50914",
    },
    secondary: {
      main: "#fffff",
    },
    error: {
      main: red[400],
    },
  },
});

const theme = responsiveFontSizes(base);

export default theme;
