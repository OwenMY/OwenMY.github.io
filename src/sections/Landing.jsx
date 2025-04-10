import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Resume from "../assets/Resume.pdf";
import Typography from "@mui/material/Typography";
import hero from "../assets/hero.png";
import { FormattedMessage } from "react-intl";

const Resources = () => (
  <Box sx={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
    <a href={Resume} target="_blank">
      <Button variant="outlined" sx={{ color: "white" }}>
        <FormattedMessage
          id="landing.resume.button.description"
          defaultMessage="Resume"
          description="label for a button for a resume"
        />
        <DownloadIcon />
      </Button>
    </a>
    <a href="https://github.com/OwenMY" target="_blank">
      <Button variant="outlined" sx={{ color: "white" }}>
        <GitHubIcon />
      </Button>
    </a>
    <a href="https://www.linkedin.com/in/owenyoshishige/" target="_blank">
      <Button variant="outlined" sx={{ color: "white" }}>
        <LinkedInIcon />
      </Button>
    </a>
  </Box>
);

const Description = () => (
  <Box
    sx={{
      width: "50%",
      margin: "auto",
      "@media (max-width:850px)": { width: "100%" },
    }}
  >
    <Typography
      variant="h5"
      color="#edeee8"
      sx={{
        fontStyle: "italic",
        fontFamily: "monospace",
        "@media (max-width:750px)": {
          fontSize: "1.5rem",
        },
      }}
    >
      <FormattedMessage
        id="landing.occupation.heading"
        defaultMessage="Full-Stack Developer"
        description="A heading label detailing that person is a Full-Stack Developer"
      />
    </Typography>
    <Typography
      variant="h3"
      color="#edeee8"
      sx={{
        fontWeight: "bolder",
        fontFamily: "monospace",
        "@media (max-width:750px)": {
          fontSize: "2rem",
        },
      }}
    >
      <FormattedMessage
        id="landing.fullname.heading"
        defaultMessage="Owen Yoshishige"
        description="A heading label detailing my name"
      />
    </Typography>
    <Typography
      color="#edeee8"
      sx={{
        fontFamily: "monospace",
      }}
    >
      <FormattedMessage
        id="landing.short.description"
        defaultMessage="With 2 years of experience working for Amazon Web Services, I specialize in React, TypeScript, Java and AWS Services."
        description="a short description of my background"
      />
    </Typography>
    <Resources />
  </Box>
);

const HeroImage = () => (
  <Box
    sx={{
      width: "50%",
      margin: "auto",
      "@media (max-width:850px)": { display: "none" },
    }}
  >
    <Box sx={{ width: "25rem", margin: "auto" }}>
      <img
        src={hero}
        style={{ width: "100%", height: "auto", borderRadius: "50%" }}
      />
    </Box>
  </Box>
);

const Landing = () => (
  <Box
    id="Home"
    sx={{
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
      height: "100%",
      margin: "auto",
      padding: "7rem",
      "@media (max-width:850px)": {
        height: "90vh",
        padding: "3rem",
        width: "100%",
      },
      "@media (min-width:850px)": {
        maxWidth: "90rem",
      },
    }}
  >
    <Description />
    <HeroImage />
  </Box>
);

export default Landing;
