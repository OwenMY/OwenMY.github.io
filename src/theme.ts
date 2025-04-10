import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#5100e8",
      light: "#5100e8",
      dark: "#3d2d75",
    },
  },
  cssVariables: { colorSchemeSelector: "class" },
  colorSchemes: { dark: true },
});
