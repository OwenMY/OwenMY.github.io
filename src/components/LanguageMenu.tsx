import { useState, MouseEvent } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TranslateIcon from "@mui/icons-material/Translate";

const LANGUAGE_OPTIONS = [
  "English",
  "日本語", // Japanese
  "中文", // Chinese
  "Espaniol",
];

const LANGUAGE_CODES = {
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (_: MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(null);
    setSelectedIndex(index);
    const selectedLanguage = LANGUAGE_OPTIONS[index];
    const selectLocale = LANGUAGE_CODES[selectedLanguage];
    handleLangChange(selectLocale);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-label="language button"
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
        {LANGUAGE_OPTIONS.map((option, index) => (
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
