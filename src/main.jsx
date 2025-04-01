import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "./theme.ts";
import {IntlProvider} from 'react-intl'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <IntlProvider messages={{}} locale="en" defaultLocale="en">
        <CssBaseline />
        <App />
      </IntlProvider>
    </ThemeProvider>
  </StrictMode>
);
