import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TranslateIcon from "@mui/icons-material/Translate";

const languageOptions = [
  "English",
  "日本語", // Japanese
  "中文", // Chinese
  "Espaniol",
];

const languageCodes = {
  English: "en",
  日本語: "ja", // Japanese
  中文: "zh", // Chinese
  Espaniol: "es",
};

interface LanguageButtonProps {
  handleLangChange: (locale: string) => void;
}

const LanguageButton = ({ handleLangChange }: LanguageButtonProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (
    _: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setAnchorEl(null);
    setSelectedIndex(index);
    const selectedLanguage = languageOptions[index];
    const selectLocale = languageCodes[selectedLanguage];
    handleLangChange(selectLocale);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <TranslateIcon sx={{ color: "white" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {languageOptions.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LanguageButton;
