import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import dudeGivingMeetings from "../assets/dudeGivingMeetings.png";
import dudeMarine from "../assets/dudeMarine.png";
import dudeMachinist from "../assets/dudeMachinist.png";

const Heading = () => (
  <Box sx={{width: "100%", paddingLeft: "7rem"}}>
    <Typography variant="h4" sx={{fontWeight: "bold"}}>About Me</Typography>
  </Box>
);

const Description = () => {
  const description = "I am a front-end engineer with two years of experience, where I contributed to multiple projects, working across the stack to build scalable applications. My expertise includes React, TypeScript, and AWS services like Lambda and CloudFormation. I enjoy solving complex technical challenges, especially when it comes to automation and optimizing workflows. Currently I am looking for a new role where I can bring those skills and interests and also continue to hone in my craft."

  return (
    <Box sx={{width: "50%", margin: "0 auto", padding: "2rem"}}>
      <Typography>{description}</Typography>
    </Box>
)};

const MilitaryDescription = () => {
  const description = "I am also a Marine Corps veteran who served five years as cobra and huey mechanic. I had the luxury to be apart of a world class squadron who was named Best Squadron of the Marine Corps and whom has also broke the world record for the furthest a huey has every flown at the time. The skills and experiences I have gained through my service have given me the resilience and aptitude needed to succeeded in harsh environments. Fun fact, I was signing off aircraft at 19 years old."

  return (
    <Box sx={{width: "50%", margin: "0 auto", padding: "2rem"}}>
      <Typography>{description}</Typography>
    </Box>
)};

const MachinistDescription = () => {
  const description = "Prior to becoming a software engineer, I was an EDM specialist. Not the music, but an Electrical Discharge Machinist who specialized in programing machines using G&M code to create intricate precision parts with accuracy of splitting a hair into 3 pieces (That is VERY small). I had the oppurtunity of a lifetime to create the molds for the Covid 19 test kit parts during the pandemic which had large scale impact throughout the U.S."

  return (
    <Box sx={{width: "50%", margin: "0 auto", padding: "2rem"}}>
      <Typography>{description}</Typography>
    </Box>
)};

const Picture = () => (
  <Box sx={{width: "50%", margin: "0 auto", "@media (max-width:850px)": {display: "none", width: "100%"}}}>
      <Box sx={{width: "20rem", margin: "auto"}}>
        <img src={dudeGivingMeetings} style={{ width: '100%', height: 'auto' }}/>
      </Box>
  </Box>
);

const MilitaryPicture = () => (
  <Box sx={{width: "50%", margin: "0 auto", "@media (max-width:850px)": {display: "none"}}}>
      <Box sx={{width: "20rem", margin: "auto"}}>
        <img src={dudeMarine} style={{ width: '100%', height: 'auto' }}/>
      </Box>
  </Box>
);

const MachinistPicture = () => (
  <Box sx={{width: "50%", margin: "0 auto", "@media (max-width:850px)": {display: "none"}}}>
      <Box sx={{width: "20rem", margin: "auto"}}>
        <img src={dudeMachinist} style={{ width: '100%', height: 'auto' }}/>
      </Box>
  </Box>
);


const About = () => {
  return (
    <Box id="About" sx={{
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      margin: "auto"
    }}>
      <Heading />
      <Box sx={{display: "flex", width: "100%", paddingLeft: "5rem", marginBottom: "1rem"}}>
        <Description />
        <Picture />
      </Box>
      <Box sx={{display: "flex", width: "100%", paddingRight: "5rem", marginBottom: "1rem"}}>
      <MachinistPicture />
        <MachinistDescription />
      </Box>
      <Box sx={{display: "flex", width: "100%", paddingLeft: "5rem", marginBottom: "1rem"}}>
        <MilitaryDescription />
        <MilitaryPicture />
      </Box>
    </Box>
  );
};

export default About;
