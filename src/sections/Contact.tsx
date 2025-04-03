import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import thumbsUpGuy from "../assets/thumbsUpGuy.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {FormattedMessage} from "react-intl";

const Heading = () => (
  <Box sx={{width: "100%%", margin: "auto"}}>
    <Typography variant="h3" sx={{fontWeight: "bold"}}>
      <FormattedMessage
        id="contact.heading.label"
        defaultMessage="Contact"
        description="heading for the contact section"
      />
    </Typography>
  </Box>
);

const Picture = () => (
  <Box sx={{width: "50%", margin: "auto", padding: "1rem", "@media (max-width:850px)": {display: "none"}}}>
      <Box sx={{width: "10rem", margin: "auto"}}>
        <img src={thumbsUpGuy} style={{ width: '100%', height: 'auto' }}/>
      </Box>
  </Box>
);

const CallToAction = () => (
  <Card sx={{ width: "100%", borderRadius: "1rem" }}>
    <CardContent sx={{margin: "auto"}}>
      <Typography variant="overline" sx={{lineHeight: "0.5rem"}}>
      <FormattedMessage
        id="contact.calltoaction.description"
        defaultMessage="If you are interested in hiring me or want to collaberate on a business idea, send me a message using the form below. I am looking forward to hearing from you!"
        description="a call to action for make people want to contact you"
      />
      </Typography>
    </CardContent>
  </Card>
);

const ContactForm = () => (
  <Box component="form" sx={{display: "flex", flexWrap: "wrap", gap: "1rem"}}>
    <TextField
      required
      sx={{width: "17rem"}}
      label={
        <FormattedMessage
          id="contact.input.firstname.label"
          defaultMessage="FirstName"
          description="Label indicating that your first name should be written in the input"
        />
      }
      variant="outlined"
    />
    <TextField
      required
      sx={{width: "17rem"}}
      label={
        <FormattedMessage
          id="contact.input.lastname.label"
          defaultMessage="LastName"
          description="Label indicating that your last name should be written in the input"
        />
      }
      variant="outlined"
    />
    <TextField
      required
      sx={{width: "100%"}}
      label={
        <FormattedMessage
          id="contact.input.email.label"
          defaultMessage="Email"
          description="Label indicating that your last name should be written in the input"
        />
      }
      variant="outlined"
    />
    <TextField
      required
      sx={{width: "100%"}}
      label={
        <FormattedMessage
          id="contact.input.message.label"
          defaultMessage="Message"
          description="Label indicating that your message should be written in the input"
        />
      }
      multiline
      minRows={4}
      maxRows={4}
    />
    <Button variant="contained" sx={{width: "100%"}}>
      <FormattedMessage
        id="contact.submit.button.label"
        defaultMessage="Send"
        description="Label indicating that pressing the button will submit the form"
      />
    </Button>
  </Box>
);

const Contact = () => {
  return (
    <Box id="Contact"  sx={{ width: "100%", margin: "auto", padding: "1rem 0 3rem 0" }}>
      <Box sx={{ display: "flex", flexDirection: "column", margin: "auto", maxWidth: "35rem", gap: "1rem"}}>
        <Heading />
        <Picture />
        <CallToAction />
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Contact;
