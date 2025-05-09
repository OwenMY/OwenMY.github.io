import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import thumbsUpGuy from "../assets/thumbsUpGuy.webp";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { FormattedMessage, useIntl } from "react-intl";
import { ContactForm } from "../components/ContactForm";
import { memo } from "react";

const Heading = () => (
  <Box sx={{ width: "100%%", margin: "auto" }}>
    <Typography variant="h3" sx={{ fontWeight: "bold" }}>
      <FormattedMessage
        id="contact.heading.label"
        defaultMessage="Contact"
        description="heading for the contact section"
      />
    </Typography>
  </Box>
);

const Picture = memo(function Picture() {
  const intl = useIntl();

  return (
    <Box
      sx={{
        width: "50%",
        margin: "auto",
        padding: "1rem",
        "@media (max-width:850px)": { display: "none" },
      }}
    >
      <Box sx={{ width: "10rem", margin: "auto" }}>
        <img
          src={thumbsUpGuy}
          alt={intl.formatMessage({
            id: "contact.description.image",
            defaultMessage: "Man giving a thumbs up",
            description: "Image alt text of a man giving a thumbs up",
          })}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
});

const CallToAction = () => (
  <Card sx={{ borderRadius: "1rem" }}>
    <CardContent sx={{ margin: "auto" }}>
      <Typography variant="overline" sx={{ lineHeight: "0.5rem" }}>
        <FormattedMessage
          id="contact.calltoaction.description"
          defaultMessage="If you are interested in hiring me or want to collaberate on a business idea, send me a message using the form below. I am looking forward to hearing from you!"
          description="a call to action for make people want to contact you"
        />
      </Typography>
    </CardContent>
  </Card>
);

const Contact = () => {
  return (
    <Box id="Contact" sx={{ width: "100%", margin: "auto", padding: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "35rem",
          "@media (min-width:850px)": { maxWidth: "35rem" },
          gap: "1rem",
        }}
      >
        <Heading />
        <Picture />
        <CallToAction />
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Contact;
