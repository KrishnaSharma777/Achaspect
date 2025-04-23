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

const ImageSlider = ({ images, duration = 5000 }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, duration);
    return () => clearInterval(interval);
  }, [images.length, duration]);

  const textOverlays = [
    {
      text1: "Transforming Spaces with Vision",
      text2:
        "Crafting innovative and functional designs tailored to your lifestyle and purpose",
    },
    {
      text1: "Designs that Inspire, Structures that Last",
      text2:
        "From concept to completion, we bring your architectural dreams to life",
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
        height: { xs: "25vh", md: "100vh" },
        position: "relative",
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: currentImage === index ? 1 : 0,
              transform: currentImage === index ? "scale(1)" : "scale(1.1)",
              transition: "opacity 0.5s ease-in-out, transform 2s ease-in-out",
              zIndex: currentImage === index ? 1 : 0,
            }}
          >
            <Box
              component="img"
              src={image.src}
              alt={image.alt}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {currentImage === index && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: "10%", md: "40%" },
                  left: "20px",
                  color: "#123e71",
                  textAlign: "left",
                  fontSize: { xs: "1.1rem", md: "2.2rem" },
                  padding: "10px",
                  lineHeight: 1.2,
                  fontWeight: "bold",
                  textShadow: "3px 3px 5px rgba(255, 255, 255, 0.7)",
                  zIndex: 10,
                  transform: { xs: "translateY(50%)", md: "none" },
                }}
              >
                <Typography
                  component="div"
                  sx={{
                    animation: `${slideFromLeft} 1s forwards`,
                    animationDelay: "0.5s",
                    opacity: 0,
                  }}
                >
                  {textOverlays[index]?.text1}
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    animation: `${slideFromRight} 1s forwards`,
                    animationDelay: "1s",
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
