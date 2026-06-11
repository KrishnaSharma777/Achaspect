import react from "react";
import {  Box,Container, Typography } from "@mui/material";
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
    minHeight: "100vh",
    background:
      "linear-gradient(135deg,#0B1220 0%,#121250 100%)",
    py: { xs: 8, md: 12 },
    display: "flex",
    alignItems: "center",
  }}
>
  <Container maxWidth="xl">

    {/* Main Content */}
    <Box textAlign="center" mb={8}>
      <Typography
        variant="h1"
        sx={{
          color: "#fff",
          fontWeight: 800,
          fontSize: {
            xs: "2.5rem",
            md: "5rem",
          },
          lineHeight: 1.1,
          mb: 3,
        }}
      >
        Designing Tomorrow's
        <br />
        Sustainable Spaces
      </Typography>

      <Typography
        sx={{
          maxWidth: 850,
          mx: "auto",
          color: "rgba(255,255,255,.75)",
          lineHeight: 1.9,
          fontSize: "1.05rem",
        }}
      >
        We create innovative architecture, urban planning,
        landscape design and sustainable infrastructure
        solutions that transform communities and improve
        quality of life.
      </Typography>
    </Box>

    {/* Feature Card */}
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        borderRadius: "30px",
        overflow: "hidden",
        background: "rgba(255,255,255,.08)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,.12)",
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2"
        alt=""
        sx={{
          width: "100%",
          height: {
            xs: 250,
            md: 450,
          },
          objectFit: "cover",
        }}
      />

      {/* Quote Carousel */}
      <Box
        sx={{
          p: 4,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#D4AF37",
            fontWeight: 700,
            mb: 1,
          }}
        >
          DESIGN INSIGHT
        </Typography>

        <Typography
          sx={{
            color: "#fff",
            fontSize: {
              xs: "1.2rem",
              md: "1.8rem",
            },
            fontWeight: 700,
            minHeight: 80,
          }}
        >
          "Architecture should speak of its time and place,
          but yearn for timelessness."
        </Typography>
      </Box>
    </Box>

  </Container>
</Box>
  )
}      