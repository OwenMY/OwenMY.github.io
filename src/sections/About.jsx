import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Heading = () => (
  <Box sx={{width: "50%", paddingLeft: "7rem"}}>
    <Typography variant="h4" sx={{fontWeight: "bold"}}>About Me</Typography>
  </Box>
);

const Description = () => {
  const description = "I am a front-end engineer with two years of experience, where I contributed to multiple projects, working across the stack to build scalable applications. My expertise includes React, TypeScript, and AWS services like Lambda and CloudFormation. I enjoy solving complex technical challenges, especially when it comes to automation and optimizing workflows. Currently I am looking for a new role where I can bring those skills and interests and also continue to hone in my craft."

  return (
    <Box sx={{width: "50%", paddingRight: "7rem"}}>
      <Typography>{description}</Typography>
    </Box>
)};

const About = () => {
  return (
    <Box sx={{
      display: "flex",
      width: "100vw",
      margin: "auto",
      height: "30vh"
    }}>
      <Heading />
      <Description />
    </Box>
  );
};

export default About;
