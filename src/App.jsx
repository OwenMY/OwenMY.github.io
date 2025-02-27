import NavBar from './components/Navbar.tsx';
import Container from "@mui/material/Container";
import Landing from "./sections/Landing"

function App() {
  return (
    <Container disableGutters maxWidth="100vw" sx={{
      position: "fixed",
      height: "100vh",
      backgroundColor: "background.default"
    }}>
      <NavBar />
      <Landing />
    </Container>
  )
}

export default App;
