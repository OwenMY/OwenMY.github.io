import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Switch from "@mui/material/Switch";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useColorScheme } from '@mui/material/styles';


const sections = ["About", "Work", "Contact"];

const Navbar = () => {
  const { mode, setMode } = useColorScheme();

  const modeIcon = mode !== "light" ? <DarkModeIcon /> : <LightModeIcon />;

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMode(e.target.checked ? "dark" : "light");
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#111"}}>
      <Toolbar>
        <Typography variant="h6" sx={{fontWeight: "bolder", fontStyle: "italic", fontFamily: 'monospace'}}>
          Owen Yoshishige
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "right" } }}>
          {sections.map(section =>
            <Button key={section} sx={{ my: 2, color: '#edeee8', display: 'block' }}>{
              section
            }</Button>
          )}
        </Box>
        <Switch
          checked={mode !== "light"}
          onChange={handleToggle}
          inputProps={{ 'aria-label': 'display mode' }}
        />
        {modeIcon}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
