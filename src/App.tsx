import NavBar from "./components/Navbar.tsx";
import Box from "@mui/material/Box";
import Landing from "./sections/Landing.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.tsx";
import Portfolio from "./sections/Portfolio.tsx";
import Contact from "./sections/Contact.tsx";
import ScrollToTopButton from "./components/ScrollToTopButton.tsx";
import { IntlProvider } from "react-intl";
import React, { useState } from "react";
import { messages } from "./constants/messages.ts";
import { LOCALES } from "./constants/languages.ts";

function App() {
  const locale = LOCALES.ENGLISH;
  const [currentLocale, setCurrentLocale] = useState<string>(locale);

  const handleLangChange = (locale: string) => setCurrentLocale(locale);

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale="en"
    >
      <Box
        maxWidth="100vw"
        sx={{
          height: "100vh",
          backgroundColor: "background.default",
        }}
      >
        <NavBar handleLangChange={handleLangChange} />
        <Landing />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <ScrollToTopButton />
      </Box>
    </IntlProvider>
  );
}

export default App;
