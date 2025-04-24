import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FormattedMessage, useIntl } from "react-intl";
import GYMX5000_PIX from "../assets/GymX5000.webp";
import QUESTIONS_AND_ANSWERS_PIC from "../assets/API.webp";
import ATELIER_PIC from "../assets/Atelier.webp";
import AZ_TRAFFIC_MAPS_PIC from "../assets/AZTM.webp";
import {
  AZ_TRAFFIC_MAPS_DESCRIPTION,
  AZ_TRAFFIC_MAPS_URL,
  GYMX_5000_DESCRIPTION,
  GYMX5000_URL,
  GYMX5000_SKILLS,
  ATELIER_DESCRITION,
  ATELIER_URL,
  ATELIER_SKILLS,
  QUESTIONS_AND_ANSWERS_DESCRIPTION,
  QUESTIONS_AND_ANSWERS_URL,
  QUESTIONS_AND_ANSWERS_SKILLS,
  AZ_TRAFFIC_MAPS_TITLE,
  AZ_TRAFFIC_MAPS_SKILLS,
  GYMX_5000_TITLE,
  ATELIER_TITLE,
  QUESTIONS_AND_ANSWERS_TITLE,
} from "../constants/projects";
import { Project } from "../components/Project";

const Heading = () => (
  <Box sx={{ margin: "auto", paddingBottom: "2rem" }}>
    <Typography variant="h3" sx={{ fontWeight: "bold" }}>
      <FormattedMessage
        id="portolio.heading.label"
        defaultMessage="Portfolio"
        description="Label for an about section"
      />
    </Typography>
  </Box>
);

const Portfolio = () => {
  const intl = useIntl();

  return (
    <Box
      id="Portfolio"
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        padding: "7rem",
        gap: "1rem",
        "@media (max-width:850px)": {
          padding: "3rem",
        },
      }}
    >
      <Heading />
      <Box
        sx={{ display: "flex", gap: "1rem", margin: "auto", flexWrap: "wrap" }}
      >
        <Project
          title={AZ_TRAFFIC_MAPS_TITLE}
          description={AZ_TRAFFIC_MAPS_DESCRIPTION}
          picture={AZ_TRAFFIC_MAPS_PIC}
          github_link={AZ_TRAFFIC_MAPS_URL}
          skills={AZ_TRAFFIC_MAPS_SKILLS}
          alt_text={intl.formatMessage({
            id: "project.aztm.alt.text",
            defaultMessage: "Arizona Traffic Maps",
            description: "Alt text describing the Arizona Traffic Maps image",
          })}
        />
        <Project
          title={GYMX_5000_TITLE}
          description={GYMX_5000_DESCRIPTION}
          picture={GYMX5000_PIX}
          github_link={GYMX5000_URL}
          skills={GYMX5000_SKILLS}
          alt_text={intl.formatMessage({
            id: "project.gymx5000.alt.text",
            defaultMessage: "Gym X 5000",
            description: "Alt text describing the Gym X 5000 image",
          })}
        />
        <Project
          title={ATELIER_TITLE}
          description={ATELIER_DESCRITION}
          picture={ATELIER_PIC}
          github_link={ATELIER_URL}
          skills={ATELIER_SKILLS}
          alt_text={intl.formatMessage({
            id: "project.atelier.alt.text",
            defaultMessage: "Atelier",
            description: "Alt text describing the Atelier image",
          })}
        />
        <Project
          title={QUESTIONS_AND_ANSWERS_TITLE}
          description={QUESTIONS_AND_ANSWERS_DESCRIPTION}
          picture={QUESTIONS_AND_ANSWERS_PIC}
          github_link={QUESTIONS_AND_ANSWERS_URL}
          skills={QUESTIONS_AND_ANSWERS_SKILLS}
          alt_text={intl.formatMessage({
            id: "project.questions_and_answers.alt.text",
            defaultMessage: "Questions and Answers",
            description: "Alt text describing the Questions and Answers image",
          })}
        />
      </Box>
    </Box>
  );
};

export default Portfolio;
