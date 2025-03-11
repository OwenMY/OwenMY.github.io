import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import owen from "../assets/myself.jpeg";

const Description = () => (
  <Box sx={{width: "50%", margin: "auto 0 auto 3rem", '@media (max-width:750px)': {width: "100%"}}}>
    <Typography
      variant="h5"
      color='#edeee8'
      sx={{
        fontStyle: "italic",
        fontFamily: 'monospace',
        '@media (max-width:750px)': {
          fontSize: "1.5rem"
        },
      }}>
        Full-Stack Developer
    </Typography>
    <Typography
      variant="h3"
      color='#edeee8'
      sx={{
        fontWeight: "bolder",
        fontFamily: 'monospace',
        '@media (max-width:750px)': {
          fontSize: "2rem"
        },
      }}>
        Owen Yoshishige
      </Typography>
      <Typography
        color='#edeee8'
        sx={{
          fontFamily: 'monospace',
        }}>
          With 2 years of experience, I specialize in React, TypeScript, Java and AWS Services.
      </Typography>
  </Box>
);

const Picture = () => (
  <Box sx={{width: "50%", margin: "auto 0", "@media (max-width:750px)": {display: "none"}}}>
      <Box sx={{width: "20rem", height: "20rem", margin: "auto"}}>
        <img src={owen} style={{ width: '100%', height: 'auto', borderRadius: "50%" }}/>
      </Box>
  </Box>
);

const Landing = () => {
  return (
    <Container maxWidth="100vw" sx={{
      position: "fixed",
      height: "80vh",
      display: "flex",
      flexDirection: "row",
      gap: "1rem"
    }}>
      <Description/>
      <Picture />
    </Container>
  )
};

export default Landing;
