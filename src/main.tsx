import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme} disableTransitionOnChange>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
