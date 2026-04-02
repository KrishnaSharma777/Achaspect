import React from "react";
import { Container, Box, Typography } from "@mui/material";
import ImageSlider from "./ImageSlider";
// Banner image import
import Img2 from "../assets/image/MAIN GATE 2 .jpg";
import Img4 from "../assets/image/3.png";
import Img3 from "../assets/image/11.jpg";
import Img1 from "../assets/image/Gate 1 Render view 2 .jpg"

const images = [
  { src: Img2, alt: "Image 1" },
  { src: Img4, alt: "Image 2" },
  { src: Img3, alt: "Image 3" },
   { src: Img1, alt: "Image 4" },
];

const HomePage = () => {
  return (
    <main>
      <Box
        position="relative"
        width="100%" 
        textAlign="center"
        sx={{ mt: 0, height: "100vh" }}
      >
        <ImageSlider images={images} />
      </Box>
    </main>
  );
};

export default HomePage;
