import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import LanguageMenu from "../components/LanguageMenu";
import HideOnScroll from "./HideOnScroll";
import { FormattedMessage } from "react-intl";
import { LANG_TO_SECTION } from "../constants/languages";

const sections = [
  <FormattedMessage
    id="navbar.home.button.label"
    defaultMessage="Home"
    description="label for a home section button"
  />,
  <FormattedMessage
    id="navbar.about.button.label"
    defaultMessage="About"
    description="label for an about section button"
  />,
  <FormattedMessage
    id="navbar.portfolio.button.label"
    defaultMessage="Portfolio"
    description="label for a portfolio section button"
  />,
  <FormattedMessage
    id="navbar.contact.button.label"
    defaultMessage="Contact"
    description="label for a contact section button"
  />,
];

interface NavBarProps {
  handleLangChange: (locale: string) => void;
}

const Navbar = ({ handleLangChange }: NavBarProps) => {
  const theme = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.textContent || "";
    const section = LANG_TO_SECTION[text];

    const header: HTMLElement | null = document.getElementById(section);
    header?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <HideOnScroll>
      <AppBar
        sx={{
          backgroundColor: theme.palette.primary.dark,
          padding: "0 7rem",
          "@media (max-width:850px)": {
            padding: "0 3rem",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            "@media (min-width:1450px)": {
              margin: "auto",
              minWidth: "76rem",
            },
          }}
          disableGutters
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bolder",
              fontStyle: "italic",
              fontFamily: "monospace",
            }}
          >
            <FormattedMessage
              id="navbar.full-name.logo"
              defaultMessage="Owen Yoshishige"
              description="Full name that will be used as a label"
            />
          </Typography>
          <Box
            sx={{
              display: { md: "flex" },
              "@media (max-width:900px)": { display: "none" },
            }}
          >
            {sections.map((section, index) => (
              <Button
                key={index}
                onClick={handleClick}
                sx={{ my: 2, color: "white" }}
              >
                {section}
              </Button>
            ))}
          </Box>
          <LanguageMenu handleLangChange={handleLangChange} />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
