import react from "react";
import { Typography, Grid, Container, Box } from "@mui/material";
import homepage from "../assets/image/Black Blue Modern Construction Company LinkedIn Banner.png";
// import ImageSlider from "./ImageSlider";
// Banner image import
// import Img2 from "../assets/image/MAIN GATE 2 .jpg";
// import Img4 from "../assets/image/3.png";
// import Img3 from "../assets/image/11.jpg";
// import Img1 from "../assets/image/Gate 1 Render view 2 .jpg"
// const images = [
//   {
//     src: "https://res.cloudinary.com/ddketghv2/image/upload/f_auto,q_auto,w_1920/v1779622667/vi7bkciwfusxs0uwnro7.png",
//     alt: "Home interior",
//   },
//     { src:  "https://res.cloudinary.com/ddketghv2/image/upload/f_auto,q_auto,w_1920/v1779621332/kjsisifyiefwdftlimps.jpg", 
//       alt: "Pichore gate" },
//   { src: Img3, alt: "Image 3" },
//    { src: Img1, alt: "Image 4" },
// ];

export default function HomeAbout() {
  return (
         <Box
      sx={{
        width: "100%",
        height: {
          xs: "15vh", // Mobile
          sm: "50vh", // Tablet
          md: "50vh", // Small laptop
          lg: "55vh", // Desktop
          xl: "75vh", // Large screen
        },
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={homepage}
        alt="Archaspect Consultants"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </Box>
  
    // <div>  <Box
    //     position="relative"
    //     width="100%" 
    //     textAlign="center"
    //     sx={{ mt: 0,  height: {
    //   xs: "45svh",   // 🔥 mobile safe height
    //   sm: "55vh",
    //   md: "70vh",
    //   lg: "85vh",
    //   xl: "1vh",
    // },}}
    //   >
    //     <ImageSlider images={images} />
    //   </Box></div>

  )
}      