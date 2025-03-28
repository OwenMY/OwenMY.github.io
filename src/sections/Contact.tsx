import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import thumbsUpGuy from "../assets/thumbsUpGuy.png";

const Heading = () => (
  <Box sx={{width: "100%%", margin: "auto"}}>
    <Typography variant="h3" sx={{fontWeight: "bold"}}>Contact</Typography>
  </Box>
);


const Picture = () => (
  <Box sx={{width: "50%", margin: "auto", padding: "3rem", "@media (max-width:850px)": {display: "none"}}}>
      <Box sx={{width: "10rem", margin: "auto"}}>
        <img src={thumbsUpGuy} style={{ width: '100%', height: 'auto' }}/>
      </Box>
  </Box>
);


const Contact = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      margin: "auto",
      height: "30vh"
    }}>
      <Heading />
      <Picture />
    </Box>
  );
};

export default Contact;
