import React, { useState, useEffect } from "react";
import { Box, Typography, Button, keyframes } from "@mui/material";
import { Link } from "react-router-dom";

const slideFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ImageSlider = ({ images, duration = 4000 }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, duration);
    return () => clearInterval(interval);
  }, [images.length, duration]);

  const textOverlays = [
    {
      text1: "Kanhabar Mandir",
      text2:
        "Crafting innovative and functional designs tailored to your lifestyle and purpose",
    },
    {
      text1: "Gandhi Park Joura",
      text2:
        "From concept to completion, we bring your architectural dreams to life",
    },
    {
      text1: "Mixed use building",
      text2:
        "With sustainable solutions, modern aesthetics, and thoughtful planning",
    },
     {
      text1: "Shaping the Future of Architecture",
      text2:
        "With sustainable solutions, modern aesthetics, and thoughtful planning",
    },
    
  ];

  return (
    <Box
  sx={{
    overflow: "hidden",
    display: "flex",
    position: "relative",
    width: "100%",
    height: {
      xs: "45svh",   // 🔥 mobile safe height
      sm: "55vh",
      md: "70vh",
      lg: "85vh",
      xl: "1vh",
    },
  }}
>
  <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
    {images.map((image, index) => (
      <Box
        key={index}
        sx={{
          position: "absolute",
          inset: 0,
          opacity: currentImage === index ? 1 : 0,
          transform: currentImage === index ? "scale(1)" : "scale(1.05)",
          transition: "opacity 0.6s ease-in-out, transform 1.5s ease-in-out",
          zIndex: currentImage === index ? 1 : 0,
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src={image.src}
          alt={image.alt}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* Overlay (for readability 🔥) */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.3)",
          }}
        />

        {/* Text Content */}
        {currentImage === index && (
          <Box
            sx={{
              position: "absolute",
              bottom: {
                xs: "10%",
                sm: "12%",
                md: "15%",
              },
              left: {
                xs: "50%",
                md: "40px",
              },
              transform: {
                xs: "translateX(-50%)",
                md: "none",
              },
              textAlign: {
                xs: "center",
                md: "left",
              },
              color: "#fff",
              px: { xs: 2, md: 4 },
              maxWidth: { md: "600px" },
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                lineHeight: 1.2,
                fontSize: {
                  xs: "18px",
                  sm: "22px",
                  md: "32px",
                  lg: "40px",
                },
                animation: `${slideFromLeft} 1s forwards`,
                animationDelay: "0.3s",
                opacity: 0,
              }}
            >
              {textOverlays[index]?.text1}
            </Typography>

            <Typography
              sx={{
                mt: 1,
                fontWeight: 400,
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                  md: "20px",
                },
                animation: `${slideFromRight} 1s forwards`,
                animationDelay: "0.6s",
                opacity: 0,
              }}
            >
              {textOverlays[index]?.text2}
            </Typography>
          </Box>
        )}
      </Box>
    ))}
  </Box>
</Box>
  );
};

export default ImageSlider;
