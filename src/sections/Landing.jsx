import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import owen from "../assets/myself.jpeg";
import styled from "@emotion/styled";

const Description = () => (
  <Box sx={{width: "50%", margin: "auto 0 auto 3rem"}}>
    <Typography
      variant="h5"
      color='#edeee8'
      sx={{
        fontStyle: "italic",
        fontFamily: 'monospace',
        '@media (max-width:600px)': {
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
        '@media (max-width:600px)': {
          fontSize: "2rem"
        },
      }}>
        Owen Yoshishige
      </Typography>
      <Typography
        color='#edeee8'
        sx={{
          fontFamily: 'monospace',
          '@media (max-width:600px)': {
            fontSize: "1rem"
          },
        }}>
          With 2 years of experience, I specialize in React, TypeScript, Java and AWS Services.
      </Typography>
  </Box>
);

const CatchyAnimation = () => (
  <Box sx={{width: "50%", margin: "auto 0"}}>
      <img src={owen}/>
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
