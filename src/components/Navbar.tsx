import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import TranslateIcon from '@mui/icons-material/Translate';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

const sections = ["Home", "About", "Work", "Contact"];

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar position="sticky" sx={{
      backgroundColor: theme.palette.primary.dark,
      padding: "0 7rem",
      "@media (max-width:850px)": {
        padding: "0 2rem"
      }
    }}>
      <Toolbar sx={{display: "flex", justifyContent: "space-between"}} disableGutters>
        <Typography variant="h6" sx={{fontWeight: "bolder", fontStyle: "italic", fontFamily: 'monospace'}}>
          Owen Yoshishige
        </Typography>
        <Box sx={{ display: { md: 'flex' }, "@media (max-width:900px)": {display: "none"} }}>
          {sections.map(section =>
            <Button key={section} sx={{ my: 2, color: "white" }}>{
              section
            }</Button>
          )}
        </Box>
        <IconButton>
          <TranslateIcon sx={{color: "white"}}/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
