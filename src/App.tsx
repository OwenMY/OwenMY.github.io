import NavBar from "./components/Navbar";
import Box from "@mui/material/Box";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { IntlProvider } from "react-intl";
import { useState } from "react";
import { messages } from "./constants/messages";
import { LOCALES } from "./constants/languages";

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
        <ScrollToTopButton />
      </Box>
    </IntlProvider>
  );
}

export default App;
