import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Resume from "../assets/Resume.pdf"
import Typography from "@mui/material/Typography";
import hero from "../assets/hero.png";

const Resources = () => (
  <Box sx={{display: "flex", gap: "0.5rem", marginTop: "1rem"}}>
    <a href={Resume} target="_blank">
      <Button variant="outlined" sx={{color: "white"}}>
        Resume <DownloadIcon />
      </Button>
    </a>
    <a href="https://github.com/OwenMY" target="_blank">
      <Button variant="outlined" sx={{color: "white"}}>
        <GitHubIcon />
      </Button>
    </a>
    <a href="https://www.linkedin.com/in/owenyoshishige/" target="_blank">
      <Button variant="outlined" sx={{color: "white"}}>
        <LinkedInIcon />
      </Button>
    </a>
  </Box>
);

const Description = () => (
  <Box sx={{width: "50%", margin: "auto", '@media (max-width:850px)': {width: "100%"}}}>
    <Box sx={{width: "100%", paddingLeft: "7rem", '@media (max-width:850px)': {paddingLeft: "2rem"}}}>
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
      <Resources />
    </Box>
  </Box>
);

const Picture = () => (
  <Box sx={{width: "50%", margin: "auto", "@media (max-width:850px)": {display: "none"}}}>
      <Box sx={{width: "30rem", margin: "auto", paddingRight: "5rem"}}>
        <img src={hero} style={{ width: '100%', height: 'auto', borderRadius: "50%" }}/>
      </Box>
  </Box>
);

const Landing = () => (
  <Box sx={{
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    height: "100vh"
  }}>
    <Description/>
    <Picture />
  </Box>
);

export default Landing;
