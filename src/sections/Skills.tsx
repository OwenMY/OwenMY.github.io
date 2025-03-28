import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import dudeInfinite from "../assets/dudeInfinite.png";

const Heading = () => (
  <Box sx={{width: "50%", paddingLeft: "7rem"}}>
    <Typography variant="h4" sx={{fontWeight: "bold"}}>Skills</Typography>
  </Box>
);

const skills = [
  ["React"],
  ["Typescript"],
  ["Java"],
  ["Javascript"],
  ["CSS"],
  ["HTML"],
  ["Express"],
  ["Node.js"],
  ["Jest"],
  ["Cypress"],
  ["Testing Library"],
  ["Puppeteer"],
  ["Styled-Components"],
  ["AWS"],
  ["Cloud Formation"],
  ["Cloud Watch"],
  ["Lambda"],
  ["ECS"],
  ["Fargate"],
  ["S3"],
  ["DynamoDB"],
  ["Git"],
  ["CI/CD"],
  ["Postman"],
  ["VSCode"],
  ["Webpack"],
  ["Rollup"],
];

const ListOfSkills = () => (
    <Box sx={{ display: "flex", height: "5rem", padding: "2rem", flexWrap: "wrap", width: "50%", gap: "0.5rem"}}>
      {skills.map((skill) => {
        const [label] = skill;
        return <Chip key={label} label={label}/>
      })}
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
      width: "100vw",
      margin: "auto",
      marginBottom: "5rem"
    }}>
      <Heading />
      <Box sx={{display: "flex", marginLeft: "7rem"}}>
        <ListOfSkills />
        <SkillsPicture />
      </Box>
    </Box>
  );
};

export default Skills;
