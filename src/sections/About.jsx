import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Heading = () => (
  <Box sx={{width: "50%", paddingLeft: "7rem"}}>
    <Typography variant="h3" sx={{fontWeight: "bolder"}}>About Me</Typography>
  </Box>
);

const Description = () => {
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet eros a justo aliquet rutrum. Pellentesque congue ultrices ullamcorper. Pellentesque placerat eleifend dignissim. Aliquam erat volutpat. Sed vel lorem a enim maximus consectetur. Cras laoreet, purus ac pharetra aliquet, dui nibh lobortis leo, sed ultrices massa justo non ipsum. Maecenas interdum pellentesque mauris, sed euismod mi suscipit at."

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
      height: "80vh",
      margin: "auto"
    }}>
      <Heading />
      <Description />
    </Box>
  );
};

export default About;
