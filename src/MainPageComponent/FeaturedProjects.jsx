import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Replace these paths with your actual project images
import project1 from "../assets/image/jawashowroom3.jpeg";
import project2 from "../assets/image/2.png";
import project3 from "../assets/image/1.jpg";
import project4 from "../assets/image/biogas4.png";

const projects = [
  {
    title: "Jawa Showroom Interior",
    category: "Commercial Interior",
    location: "Gwalior, Madhya Pradesh",
    image:"https://res.cloudinary.com/ddketghv2/image/upload/v1780483451/doxq2i06kn4nkj6t5kr5.jpg",
  },
  {
    title: "Chambal park Landscape Design",
    category: "Park & Landscape",
    location: "Morena, Madhya Pradesh",
    image:"https://res.cloudinary.com/ddketghv2/image/upload/v1779703490/xj8ei8oysbsmvets9hkg.png",
  },
  {
    title: "Nagar Parisad Design",
    category: "Government Building",
    location: "Jaura, Madhya Pradesh",
    image: "https://res.cloudinary.com/ddketghv2/image/upload/v1779703058/xj3mnz1pfgowmfvc9rno.jpg",
  },
  {
    title: "Bio Gas Plant",
    category: "Infrastructure Project",
    location: "Madhya Pradesh",
    image: "https://res.cloudinary.com/ddketghv2/image/upload/v1779870731/wvcu9nzkw1jslbt5tvvl.png",
  },
];

export default function FeaturedProjects() {
  return (
    <Box
      sx={{
        py: { xs: 2, md: 1 },
        background:
          "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
      }}
    >
      <Container maxWidth="xl">
        {/* Heading */}
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: 800,
            mb: 2,
            fontSize: {
              xs: "2.3rem",
              md: "4rem",
            },
            letterSpacing: "-2px",
            color: "#111",
          }}
        >
          Featured Projects
        </Typography>

        <Typography
          align="center"
          sx={{
            maxWidth: "850px",
            mx: "auto",
            mb: 8,
            color: "#666",
            fontSize: {
              xs: "1rem",
              md: "1.1rem",
            },
            lineHeight: 1.8,
          }}
        >
          Explore our portfolio of architecture, interior design,
          planning, infrastructure and construction projects
          delivered with creativity, innovation and excellence.
        </Typography>

        {/* Projects */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
<Grid item xs={12} sm={6} lg={4} key={index}>              <Card
                sx={{
                  position: "relative",
                  height: {
                    xs: 300,
                    md: 350,
                  },
                  borderRadius: "32px",
                  overflow: "hidden",
                  border: "none",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                  transition: "all 0.5s ease",
                  cursor: "pointer",

                  "&:hover": {
                    transform: "translateY(-12px)",
                    boxShadow: "0 35px 80px rgba(0,0,0,0.20)",
                  },

                  "&:hover img": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                {/* Background Image */}
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "all 0.7s ease",
                  }}
                />

                {/* Dark Gradient Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.35), transparent)",
                  }}
                />

                {/* Content */}
                <CardContent
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 2,
                    color: "#fff",
                    p: 2,
                  }}
                >
                  {/* Category */}
                  <Chip
                    label={project.category}
                    sx={{
                      mb: 2,
                      color: "#fff",
                      bgcolor: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      fontWeight: 600,
                    }}
                  />

                  {/* Title */}
                 <Typography
  sx={{
    fontWeight: 700,
    mb: 1,
    fontSize: {
      xs: "1.2rem",
      md: "1.5rem",
    },
  }}
>
                    {project.title}
                  </Typography>

                  {/* Location */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      opacity: 0.9,
                    }}
                  >
                    <LocationOnIcon
                      sx={{
                        fontSize: 18,
                        mr: 1,
                      }}
                    />

                    <Typography variant="body2">
                      {project.location}
                    </Typography>
                  </Box>

                  {/* Description */}
                 {/* <Typography
  sx={{
    mb: 2,
    color: "rgba(255,255,255,0.85)",
    fontSize: "0.9rem",
    lineHeight: 1.6,

    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  }}
>
  A thoughtfully designed project focused on
  functionality, aesthetics, sustainability and
  quality execution to create a lasting impact.
</Typography> */}

                  {/* Button */}
                  <Button
                  href="/portfolio"
                    variant="contained"
  size="small"
  endIcon={<ArrowForwardIcon />}
  sx={{
    borderRadius: "50px",
    px: 2.5,
    py: 0.8,
    fontSize: "0.85rem",
                    
                      fontWeight: 600,
                      textTransform: "none",
                      bgcolor: "#fff",
                      color: "#111",

                      "&:hover": {
                        bgcolor: "#f5f5f5",
                      },
                    }}
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View All Projects */}
        <Box
          sx={{
            textAlign: "center",
            mt: 8,
          }}
        >
          <Button
            variant="contained"
            href="/portfolio"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: "50px",
              px: 5,
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
              bgcolor: "#111",

              "&:hover": {
                bgcolor: "#222",
              },
            }}
          >
            View All Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
}