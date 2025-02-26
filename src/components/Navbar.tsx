import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

const sections = ["About", "Work", "Contact"];

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#111"
      }}
    >
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
