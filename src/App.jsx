import NavBar from './components/Navbar.tsx';
import Box from "@mui/material/Box";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Skills from "./sections/Skills.tsx";
import Portfolio from "./sections/Portfolio.tsx";
import Contact from "./sections/Contact.tsx";
import ScrollToTopButton from "./components/ScrollToTopButton.tsx";

function App() {
  return (
    <Box maxWidth="100vw" sx={{
      height: "90vh",
      backgroundColor: "background.default"
    }}>
      <NavBar />
      <Landing />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <ScrollToTopButton />
    </Box>
  )
}

export default App;
