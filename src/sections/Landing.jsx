import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography"

const Description = () => (
  <Box sx={{width: "50%", margin: "auto"}}>
    <Typography
      variant="h3"
      component="h3"
      color='#edeee8'
      sx={{
        fontWeight: "bolder",
        fontFamily: 'monospace'
      }}>
        Yooo Whatsup All
      </Typography>
  </Box>
);

const CatchyAnimation = () => (
  <Box sx={{width: "50%"}}>
    siodufgniodubyualifv
  </Box>
);

const Landing = () => {
  return (
    <Container maxWidth="100vw" sx={{
      position: "fixed",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      gap: "1rem"
    }}>
      <Description/>
      <CatchyAnimation />
    </Container>
  )
};

export default Landing;
