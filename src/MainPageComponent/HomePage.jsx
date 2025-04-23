import React from "react";
import { Container, Box, Typography } from "@mui/material";
import ImageSlider from "./ImageSlider";
// Banner image import
import Img2 from "../assets/image/banner1.png";
import Img4 from "../assets/image/banner2.png";
import Img3 from "../assets/image/banner3.png";

const images = [
  { src: Img2, alt: "Image 1" },
  { src: Img4, alt: "Image 2" },
  { src: Img3, alt: "Image 3" },
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
