import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

const Heading = () => (
  <Box sx={{width: "50%", paddingLeft: "7rem"}}>
    <Typography variant="h3" sx={{fontWeight: "bolder"}}>Skills</Typography>
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
    <Box sx={{ display: "flex", flexWrap: "wrap", width: "50%", paddingRight: "7rem", gap: "0.5rem"}}>
      {skills.map((skill) => {
        const [label] = skill;
        return <Chip label={label}/>
      })}
    </Box>
);

const Skills = () => {
  return (
    <Box sx={{
      display: "flex",
      width: "100vw",
      margin: "auto",
      marginBottom: "5rem"
    }}>
      <Heading />
      <ListOfSkills />
    </Box>
  );
};

export default Skills;
