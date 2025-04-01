import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const Heading = () => (
  <Box sx={{width: "100%%", margin: "auto"}}>
    <Typography variant="h3" sx={{fontWeight: "bold"}}>Portfolio</Typography>
  </Box>
);

const Project = () => {
  return (
    <Card sx={{ width: "15rem", height: "15rem", borderRadius: "1rem" }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Dun Dun DUN
        </Typography>
        <Typography variant="h5" component="div">
          The greatest project ever
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
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
    <Box sx={{display: "flex", gap: "1rem", flexWrap: "wrap", width: "100%", padding: "7rem"}}>
      {walalala.map(() => <Project />)}
    </Box>
)};

const Portfolio = () => {
  return (
    <Box id="Portfolio" sx={{
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      margin: "auto",
      paddingTop: "1rem",
    }}>
      <Heading />
      <Projects />
    </Box>
  );
};

export default Portfolio;
