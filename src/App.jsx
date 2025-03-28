import NavBar from './components/Navbar.tsx';
import Box from "@mui/material/Box";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Skills from "./sections/Skills.tsx";
import Portfolio from "./sections/Portfolio.tsx";
import Contact from "./sections/Contact.tsx";

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
    </Box>
  )
}

export default App;
