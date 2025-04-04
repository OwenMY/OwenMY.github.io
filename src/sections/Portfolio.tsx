import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import {FormattedMessage} from "react-intl";
import GYMX5000_PIX from "../assets/GymX5000.jpeg";
import QUESTIONS_AND_ANSWERS_PIC from "../assets/API.jpeg";
import ATELIER_PIC from "../assets/Atelier.webp";
import AZ_TRAFFIC_MAPS_PIC from "../assets/AZTM.jpeg";
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "@mui/material/Link";
import {
  AZ_TRAFFIC_MAPS_DESCRIPTION,
  AZ_TRAFFIC_MAPS_URL,
  GYMX_5000_DESCRIPTION,
  GYMX5000_URL,
  ATELIER_DESCRITION,
  ATELIER_URL,
  QUESTIONS_AND_ANSWERS_DESCRIPTION,
  QUESTIONS_AND_ANSWERS_URL,
  AZ_TRAFFIC_MAPS_TITLE,
  GYMX_5000_TITLE,
  ATELIER_TITLE,
  QUESTIONS_AND_ANSWERS_TITLE
} from "../constants/projects";

const Heading = () => (
  <Box sx={{margin: "auto", paddingBottom: "2rem"}}>
    <Typography variant="h3" sx={{fontWeight: "bold"}}>
      <FormattedMessage
        id="portolio.heading.label"
        defaultMessage="Portfolio"
        description="Label for an about section"
      />
    </Typography>
  </Box>
);

const Picture = ({src}: {src: string}) => (
  <Box sx={{width: "100%", margin: "auto"}}>
    <img src={src} style={{ width: '100%'}}/>
  </Box>
);

interface ProjectProps {
  title: React.JSX.Element,
  description: React.JSX.Element,
  picture: string,
  github_link: string,
  deployed_link?: string
};

const Project = ({title, description, picture, github_link, deployed_link}: ProjectProps) => (
  <Card sx={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "18rem",
    height: "25rem",
    borderRadius: "1rem",
    "@media (max-width:850px)": {
        margin: "auto"
    }
  }}>
    <CardContent>
      <Picture src={picture}/>
      <Typography variant="h6" component="h6">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
    <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
      <Link href={github_link} target="_blank" sx={{padding: "0.5rem"}}>
        <GitHubIcon sx={{color: "white"}} />
      </Link>
      {deployed_link && (
        <Link href={deployed_link} target="_blank" sx={{color: "white", padding: "0.5rem"}}>
            SEE LIVE
        </Link>
      )}
    </CardActions>
  </Card>
);

const Portfolio = () => {
  return (
    <Box id="Portfolio" sx={{
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      padding: "7rem",
      gap: "1rem",
      "@media (max-width:850px)": {
        padding: "3rem"
      }
    }}>
      <Heading />
      <Box sx={{display: "flex", gap: "1rem", margin: "auto", flexWrap: "wrap"}}>
        <Project
          title={AZ_TRAFFIC_MAPS_TITLE}
          description={AZ_TRAFFIC_MAPS_DESCRIPTION}
          picture={AZ_TRAFFIC_MAPS_PIC}
          github_link={AZ_TRAFFIC_MAPS_URL}
        />
        <Project
          title={GYMX_5000_TITLE}
          description={GYMX_5000_DESCRIPTION}
          picture={GYMX5000_PIX}
          github_link={GYMX5000_URL}
        />
        <Project
          title={ATELIER_TITLE}
          description={ATELIER_DESCRITION}
          picture={ATELIER_PIC}
          github_link={ATELIER_URL}
        />
        <Project
          title={QUESTIONS_AND_ANSWERS_TITLE}
          description={QUESTIONS_AND_ANSWERS_DESCRIPTION}
          picture={QUESTIONS_AND_ANSWERS_PIC}
          github_link={QUESTIONS_AND_ANSWERS_URL}
        />
      </Box>
    </Box>
  );
};

export default Portfolio;
