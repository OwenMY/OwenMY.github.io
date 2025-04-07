import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import dudeGivingMeetings from "../assets/dudeGivingMeetings.png";
import dudeMarine from "../assets/dudeMarine.png";
import dudeMachinist from "../assets/dudeMachinist.png";
import {FormattedMessage} from "react-intl";
import React from "react";

const Heading = () => (
  <Box>
    <Typography variant="h4" sx={{fontWeight: "bold"}}>
      <FormattedMessage
        id="about.heading.label"
        defaultMessage="About Me"
        description="Label for an about section"
      />
    </Typography>
  </Box>
);

const SOFTWARE_DESCRIPTION = (
  <FormattedMessage
    id="about.work.description"
    defaultMessage="I am a front-end engineer with two years of experience, where I contributed to multiple projects, working across the stack to build scalable applications. My expertise includes React, TypeScript, and AWS services like Lambda and CloudFormation. I enjoy solving complex technical challenges, especially when it comes to automation and optimizing workflows. Currently I am looking for a new role where I can bring those skills and interests and also continue to hone in my craft."
    description="Text describing my work experience"
  />
);

const MACHINIST_DESCRIPTION = (
  <FormattedMessage
    id="about.machinist.description"
    defaultMessage="Prior to becoming a software engineer, I was an EDM specialist. Not the music, but an Electrical Discharge Machinist who specialized in programing machines using G&M code to create intricate precision parts with accuracy of splitting a hair into 3 pieces (That is VERY small). I had the oppurtunity of a lifetime to create the molds for the Covid 19 test kit parts during the pandemic which had large scale impact throughout the U.S."
    description="Text describing my machining experience"
  />
);

const MILITARY_DESCRIPTION = (
  <FormattedMessage
    id="about.military.description"
    defaultMessage="I am also a Marine Corps veteran who served five years as cobra and huey mechanic. I had the luxury to be apart of a world class squadron who was named Best Squadron of the Marine Corps and whom has also broke the world record for the furthest a huey has every flown at the time. The skills and experiences I have gained through my service have given me the resilience and aptitude needed to succeeded in harsh environments. Fun fact, I was signing off aircraft at 19 years old."
    description="Text describing my military experience"
  />
);

const Description = ({description}: {description: React.JSX.Element}) => (
  <Box sx={{width: "50%", margin: "0 auto", "@media (max-width:850px)":{ width: "100%" }}}>
    <Typography>
      {description}
    </Typography>
  </Box>
);

const Picture = ({src}: {src: string}) => (
  <Box sx={{width: "50%", margin: "0 auto", "@media (max-width:850px)": { display: "none" }}}>
    <Box sx={{width: "20rem", margin: "auto"}}>
      <img src={src} style={{ width: '100%', height: 'auto' }}/>
    </Box>
  </Box>
);

const About = () => {
  return (
    <Box id="About" sx={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      margin: "auto",
      padding: "1rem 7rem 0 7rem",
      gap: "1rem",
      "@media (max-width:850px)": {
        padding: "3rem",
      },
      "@media (min-width:850px)": {
        maxWidth: "90rem"
      },
    }}>
      <Heading />
      <Box sx={{display: "flex"}}>
        <Description description={SOFTWARE_DESCRIPTION}/>
        <Picture src={dudeGivingMeetings}/>
      </Box>
      <Box sx={{display: "flex"}}>
        <Picture src={dudeMachinist}/>
        <Description description={MACHINIST_DESCRIPTION} />
      </Box>
      <Box sx={{display: "flex"}}>
        <Description description={MILITARY_DESCRIPTION}/>
        <Picture src={dudeMarine} />
      </Box>
    </Box>
  );
};

export default About;
