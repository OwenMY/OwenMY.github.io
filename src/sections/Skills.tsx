import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import dudeInfinite from "../assets/dudeInfinite.png";

const Heading = () => (
  <Box>
    <Typography variant="h4" sx={{fontWeight: "bold"}}>Skills</Typography>
  </Box>
);

// Since these are brand names, they are not translated
const skills = [
  "React",
  "Typescript",
  "Java",
  "Javascript",
  "CSS",
  "HTML",
  "Express",
  "Node.js",
  "Jest",
  "Cypress",
  "Testing Library",
  "Puppeteer",
  "Styled-Components",
  "AWS",
  "Cloud Formation",
  "Cloud Watch",
  "Lambda",
  "ECS",
  "Fargate",
  "S3",
  "DynamoDB",
  "Git",
  "CI/CD",
  "Postman",
  "VSCode",
  "Webpack",
  "Rollup",
];

const ListOfSkills = () => (
    <Box sx={{
      display: "flex",
      flexWrap: "wrap",
      alignContent: "flex-start",
      width: "50%",
      gap: "0.5rem",
      "@media (max-width:850px)": {
        width: "100%"
      }
    }}>
      {skills.map((skill) => <Chip key={skill} label={skill}/> )}
    </Box>
);

const SkillsPicture = () => (
  <Box sx={{width: "50%", "@media (max-width:850px)": {display: "none"}}}>
      <Box sx={{width: "20rem", margin: "auto"}}>
        <img src={dudeInfinite} style={{ width: '100%', height: 'auto' }}/>
      </Box>
  </Box>
);

const Skills = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      margin: "auto",
      padding: "0 7rem",
      gap: "1rem",
      "@media (max-width:850px)": {
        padding: "3rem"
      }
    }}>
      <Heading />
      <Box sx={{display: "flex", width: "100%"}}>
        <ListOfSkills />
        <SkillsPicture />
      </Box>
    </Box>
  );
};

export default Skills;
