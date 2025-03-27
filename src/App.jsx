import NavBar from './components/Navbar.tsx';
import Box from "@mui/material/Box";
import Landing from "./sections/Landing";
import About from "./sections/About";

function App() {
  return (
    <Box maxWidth="100vw" sx={{
      height: "90vh",
      backgroundColor: "background.default"
    }}>
      <NavBar />
      <Landing />
      <About />
    </Box>
  )
}

export default App;
