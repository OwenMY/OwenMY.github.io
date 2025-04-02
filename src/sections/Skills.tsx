import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import dudeInfinite from "../assets/dudeInfinite.png";
import {FormattedMessage} from "react-intl";

const Heading = () => (
  <Box sx={{width: "50%", paddingLeft: "7rem"}}>
    <Typography variant="h4" sx={{fontWeight: "bold"}}>Skills</Typography>
  </Box>
);

const skills = [
  { id: "skills.React.label", defaultMessage: "React" },
  { id: "skills.Typescript.label", defaultMessage: "Typescript" },
  { id: "skills.Java.label", defaultMessage: "Java" },
  { id: "skills.Javascript.label", defaultMessage: "Javascript" },
  { id: "skills.CSS.label", defaultMessage: "CSS" },
  { id: "skills.HTML.label", defaultMessage: "HTML" },
  { id: "skills.Express.label", defaultMessage: "Express" },
  { id: "skills.Node.js.label", defaultMessage: "Node.js" },
  { id: "skills.Jest.label", defaultMessage: "Jest" },
  { id: "skills.Cypress.label", defaultMessage: "Cypress" },
  { id: "skills.Testing Library.label", defaultMessage: "Testing Library" },
  { id: "skills.Puppeteer.label", defaultMessage: "Puppeteer" },
  { id: "skills.Styled-Components.label", defaultMessage: "Styled-Components" },
  { id: "skills.AWS.label", defaultMessage: "AWS" },
  { id: "skills.Cloud Formation.label", defaultMessage: "Cloud Formation" },
  { id: "skills.Cloud Watch.label", defaultMessage: "Cloud Watch" },
  { id: "skills.Lambda.label", defaultMessage: "Lambda" },
  { id: "skills.ECS.label", defaultMessage: "ECS" },
  { id: "skills.Fargate.label", defaultMessage: "Fargate" },
  { id: "skills.S3.label", defaultMessage: "S3" },
  { id: "skills.DynamoDB.label", defaultMessage: "DynamoDB" },
  { id: "skills.Git.label", defaultMessage: "Git" },
  { id: "skills.CI/CD.label", defaultMessage: "CI/CD" },
  { id: "skills.Postman.label", defaultMessage: "Postman" },
  { id: "skills.VSCode.label", defaultMessage: "VSCode" },
  { id: "skills.Webpack.label", defaultMessage: "Webpack" },
  { id: "skills.Rollup.label", defaultMessage: "Rollup" }
];

const ListOfSkills = () => (
    <Box sx={{ display: "flex", height: "5rem", padding: "2rem", flexWrap: "wrap", width: "50%", gap: "0.5rem"}}>
      {skills.map((skill) => <Chip key={skill.defaultMessage} label={<FormattedMessage {...skill} />} /> )}
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
      <Box sx={{display: "flex", marginLeft: "5rem"}}>
        <ListOfSkills />
        <SkillsPicture />
      </Box>
    </Box>
  );
};

export default Skills;
