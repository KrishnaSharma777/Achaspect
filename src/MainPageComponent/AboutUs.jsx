import React from "react";
import { Typography, Grid, Container, Box } from "@mui/material";

import aboutImage from "../assets/image/About.png";





const AboutUs = () => {
  return (
    <>
   <Box
  sx={{
    position: "relative",
    width: "100%",
    height: {
      xs: "40vh",   // exact mobile size (414x896)
      sm: "60vh",
      md: "60vh",
      lg: "170vh",
    },
    maxHeight: "100vh",
    overflow: "hidden",
  }}
>
  <Box
    component="img"
    src={aboutImage}
    alt="About Us"
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</Box>

      {/* About Section in Full Container */}
      <Box py={8} sx={{ backgroundColor: "#f9f9f9" }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "rgb(18, 18, 80)",
                    textShadow: "1px 1px 2px black",
                    mb: 3,
                  }}
                >
                  Welcome to Archaspect
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ fontSize: "1.2rem", lineHeight: 2 , color: "rgb(18, 18, 80)"}}
                >
                  Archaspect is a Gwalior-based architectural firm founded in
                  2024, with its office located at  Anand Nagar,
                  Bahodapur, Gwalior, Madhya Pradesh – 474012. Backed by over 10
                  years of experience in the field of architecture and design,
                  Archaspect brings a clear vision to life—creating sustainable,
                  functional, and aesthetically refined spaces.
                  <br />
                  <br />
                  From modern residential homes to commercial and institutional
                  buildings, we offer complete architectural solutions tailored
                  to each client’s needs. At Archaspect, we are committed to
                  "Shaping Sustainable Spaces with Vision and Integrity". Our
                  designs are driven by eco-conscious thinking, energy-efficient
                  planning, and a deep respect for environmental harmony.
                  <br />
                  <br />
                  Founded and led by Tanmay Sharma, a seasoned architect with a
                  passion for innovation and detail, Archaspect ensures every
                  project is executed with creativity, precision, and
                  transparency.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
