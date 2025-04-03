import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {FormattedMessage} from "react-intl";
import GymX5000 from "../assets/GymX5000.jpeg";

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


interface ProjectProps {
  title: string,
  description: string,
  picture: string,
  link: Element
};

const Picture = () => (
  <Box sx={{width: "100%", margin: "auto"}}>
    <img src={GymX5000} style={{ width: '100%'}}/>
  </Box>
);


const Project = ({title, description, picture, link}: ProjectProps) => {
  return (
    <Card sx={{ width: "18rem", height: "18rem", borderRadius: "1rem" }}>
      <CardContent>
        <Picture />
        <Typography variant="h6" component="h6">
          GymX5000
        </Typography>
        <Typography variant="body2">
       A gym app MVP a team of engineers created for client Chad. We implemented a polymorphic database design to allow scalable category additions and prioritized core features to meet a tight deadline.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

const Projects = () => {
  const description = "walalalalalal"
  const walalala = [0, 1, 2, ,3, 4, 3]
  return (
    <Box sx={{display: "flex", gap: "1rem", margin: "auto", flexWrap: "wrap"}}>
      {walalala.map(() => <Project />)}
    </Box>
)};

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
      <Projects />
    </Box>
  );
};

export default Portfolio;
