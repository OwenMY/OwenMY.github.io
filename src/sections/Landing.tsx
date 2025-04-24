import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Resume from "../assets/Resume.pdf";
import Typography from "@mui/material/Typography";
import hero from "../assets/hero.webp";
import { FormattedMessage } from "react-intl";
import { memo } from "react";

const Resources = () => (
  <Box sx={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
    <Button variant="outlined">
      <Link
        href={Resume}
        target="_blank"
        underline="none"
        color="textPrimary"
        display="flex"
      >
        <FormattedMessage
          id="landing.resume.button.description"
          defaultMessage="Resume"
          description="label for a button for a resume"
        />
        <DownloadIcon />
      </Link>
    </Button>
    <Button variant="outlined">
      <Link
        href="https://github.com/OwenMY"
        target="_blank"
        underline="none"
        color="textPrimary"
        display="flex"
      >
        <GitHubIcon />
      </Link>
    </Button>
    <Button variant="outlined">
      <Link
        href="https://www.linkedin.com/in/owenyoshishige/"
        target="_blank"
        underline="none"
        color="textPrimary"
        display="flex"
      >
        <LinkedInIcon />
      </Link>
    </Button>
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
    <Typography sx={{ fontFamily: "monospace" }}>
      <FormattedMessage
        id="landing.short.description"
        defaultMessage="With 2 years of experience working for Amazon Web Services, I specialize in React, TypeScript, Java and AWS Services."
        description="a short description of my background"
      />
    </Typography>
    <Resources />
  </Box>
);

const HeroImage = memo(function HeroImage() {
  return (
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
});

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
