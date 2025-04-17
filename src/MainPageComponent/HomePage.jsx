import React from "react";
import { Container, Box, Typography } from "@mui/material";

// Banner image import
import bannerImage from "../assets/image/HomePageBanner.webp"; // Make sure this path matches your project structure

const HomePage = () => {
  return (
    <main>
      {/* Banner Section */}
      <Box
        component="section"
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "250px", md: "400px" },
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={bannerImage}
          alt="top 10 architect firms in india"
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />

        <Typography
          variant="h3"
          component="h1"
          sx={{
            color: "#fff",
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            textAlign: "center",
            px: 2,
          }}
        >
          Welcome to Archaspect
        </Typography>
      </Box>

      {/* Content Section */}
      {/* <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Your Trusted Loan Partner
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We provide fast, secure, and hassle-free personal loans. Whether it's
          for education, emergencies, or lifestyle upgrades, we're here to
          support your financial journey.
        </Typography>
      </Container> */}
    </main>
  );
};

export default HomePage;
