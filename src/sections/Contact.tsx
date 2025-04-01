import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import thumbsUpGuy from "../assets/thumbsUpGuy.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Heading = () => (
  <Box sx={{width: "100%%", margin: "auto"}}>
    <Typography variant="h3" sx={{fontWeight: "bold"}}>Contact</Typography>
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
        If you are interested in hiring me or want to collaberate on a business idea, send me a message using the form below. I am looking forward to hearing from you!
      </Typography>
    </CardContent>
  </Card>
);

const ContactForm = () => (
  <Box component="form" sx={{display: "flex", flexWrap: "wrap", gap: "1rem"}}>
    <TextField required sx={{width: "17rem"}} label="FirstName" variant="outlined" />
    <TextField required sx={{width: "17rem"}} label="LastName" variant="outlined" />
    <TextField required sx={{width: "100%"}} label="Email" variant="outlined" />
    <TextField required sx={{width: "100%"}} label="Message" multiline minRows={4} maxRows={4} />
    <Button variant="contained" sx={{width: "100%"}}>Send</Button>
  </Box>
);

const Contact = () => {
  return (
    <Box id="Contact"  sx={{ width: "100vw", margin: "auto", padding: "1rem 0 3rem 0" }}>
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
