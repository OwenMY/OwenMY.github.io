import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import { JSX, memo } from "react";

const Picture = ({ src, alt }: { src: string; alt: string }) => (
  <Box sx={{ width: "100%", margin: "auto" }}>
    <img alt={alt} src={src} style={{ width: "100%" }} />
  </Box>
);

interface ProjectProps {
  title: JSX.Element;
  description: JSX.Element;
  picture: string;
  github_link: string;
  skills: string[];
  deployed_link?: string;
  alt_text: string;
}

export const Project = memo(function Project({
  title,
  description,
  picture,
  github_link,
  deployed_link,
  skills,
  alt_text,
}: ProjectProps) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "19rem",
        height: "30rem",
        borderRadius: "1rem",
        "@media (max-width:850px)": {
          margin: "auto",
          width: "100%",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          height: "35rem",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: "0",
        }}
      >
        <Box>
          <Picture alt={alt_text} src={picture} />
          <Typography variant="h6" component="h6">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            alignSelf: "flex-start",
          }}
        >
          {skills.map((skill) => (
            <Chip key={skill} label={skill} />
          ))}
        </Box>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link
          color="textPrimary"
          href={github_link}
          target="_blank"
          sx={{ padding: "0.5rem" }}
        >
          <GitHubIcon />
        </Link>
        {deployed_link && (
          <Link href={deployed_link} target="_blank" sx={{ padding: "0.5rem" }}>
            SEE LIVE
          </Link>
        )}
      </CardActions>
    </Card>
  );
});
