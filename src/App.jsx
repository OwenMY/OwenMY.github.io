import NavBar from './components/Navbar.tsx';
import Container from "@mui/material/Container";
import Landing from "./sections/Landing"

function App() {

  return (
    <Container disableGutters maxWidth="100vw" sx={{
      position: "fixed",
      backgroundColor: "#262626",
      backgroundPosition: "top 3rem center",
      backgroundImage: "radial-gradient(50% 50% at top center, rgba(0, 0, 0, .66), #262626), linear-gradient(180deg, #fff, #262626)",
      height: "100vh"
    }}>
      <NavBar />
      <Landing />
    </Container>
  )
}

export default App
