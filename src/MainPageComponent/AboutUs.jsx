import React from "react";
import { Typography, Grid, Container, Box } from "@mui/material";

import Img2 from "../assets/image/banner1.png";
import Img4 from "../assets/image/banner2.png";
import Img3 from "../assets/image/banner3.png";

import ImageSlider from "./ImageSlider";

const images = [
  { src: Img2, alt: "Image 1" },
  { src: Img4, alt: "Image 2" },
  { src: Img3, alt: "Image 3" },
];

const AboutUs = () => {
  return (
    <>
      <Box
        position="relative"
        width="100%"
        textAlign="center"
        sx={{ mt: 0, height: "100vh" }}
      >
        <ImageSlider images={images} />
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
                  sx={{ fontSize: "1.2rem", lineHeight: 2 }}
                >
                  Archaspect is a Gwalior-based architectural firm founded in
                  2024, with its office located at A/180, Anand Nagar,
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
