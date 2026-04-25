import react from "react";
import { Typography, Grid, Container, Box } from "@mui/material";
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

export default function HomeAbout() {
  return (
    <div>  <Box
        position="relative"
        width="100%" 
        textAlign="center"
        sx={{ mt: 0,  height: {
      xs: "45svh",   // 🔥 mobile safe height
      sm: "55vh",
      md: "70vh",
      lg: "85vh",
      xl: "1vh",
    },}}
      >
        <ImageSlider images={images} />
      </Box></div>

  )
}      