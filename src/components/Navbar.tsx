import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from '@mui/material/styles';
import LanguageMenu from "../components/LanguageMenu";
import HideOnScroll from "./HideOnScroll";

const sections = ["Home", "About", "Portfolio", "Contact"];

const Navbar = () => {
  const theme = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const section = e.currentTarget.textContent || "";

    const header: HTMLElement | null = document.getElementById(section);
    header?.scrollIntoView({behavior: "smooth", block: "start"});
  };

  return (
    <HideOnScroll>
      <AppBar sx={{
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
              <Button onClick={handleClick} key={section} sx={{ my: 2, color: "white" }}>{
                section
              }</Button>
            )}
          </Box>
          <LanguageMenu />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
