import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import ArchitectureIcon from "@mui/icons-material/Architecture";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LandscapeIcon from "@mui/icons-material/Landscape";
import ConstructionIcon from "@mui/icons-material/Construction";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const services = [
  {
    icon: <ArchitectureIcon sx={{ fontSize: 55, color: "#FF6B6B" }} />,
    title: "Architectural Design",
    desc: "Residential, commercial and institutional architecture with innovative design solutions.",
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 55, color: "#4ECDC4" }} />,
    title: "Interior Design",
    desc: "Luxury interior spaces focused on functionality, aesthetics and comfort.",
  },
  {
    icon: <EngineeringIcon sx={{ fontSize: 55, color: "#6C63FF" }} />,
    title: "Planning & DPR",
    desc: "Master planning, DPR preparation, BOQ, estimates and approvals.",
  },
  {
    icon: <ConstructionIcon sx={{ fontSize: 55, color: "#FF9F1C" }} />,
    title: "Construction",
    desc: "Complete construction services from foundation to finishing.",
  },
  {
    icon: <ApartmentIcon sx={{ fontSize: 55, color: "#00C853" }} />,
    title: "Project Execution",
    desc: "Turnkey execution, project management and site supervision.",
  },
  {
    icon: <AccountBalanceIcon sx={{ fontSize: 55, color: "#D81B60" }} />,
    title: "Government Projects",
    desc: "Government buildings, public infrastructure and consultancy services.",
  },
  {
    icon: <LandscapeIcon sx={{ fontSize: 55, color: "#2E7D32" }} />,
    title: "Landscape Design",
    desc: "Landscape planning, parks, gardens and sustainable outdoor spaces.",
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 55, color: "#7B1FA2" }} />,
    title: "Turnkey Solutions",
    desc: "End-to-end design, construction and project delivery under one roof.",
  },
];

export default function ServicesSection() {
  return (
    <Box
      sx={{
        py: 1,
        background:
          "linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)",
      }}
    >
      <Container maxWidth="xl">
       
           <h1
  style={{
    fontWeight: 500,
    textAlign: "center",
    fontSize: "3.5rem",
  }}
>
  Our Services
</h1>

        <Typography
          align="center"
          sx={{
            maxWidth: 850,
            mx: "auto",
            color: "#666",
            fontSize: "1.1rem",
            mb: 8,
          }}
        >
          End-to-End Architecture, Interior Design,
          Planning, DPR Preparation, Construction &
          Turnkey Project Execution Services.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <Card
                sx={{
                  height: 250,
                  borderRadius: "28px",
                  background: "#fff",
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow:
                    "0 12px 35px rgba(0,0,0,0.08)",
                  transition: "all .4s ease",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "5px",
                    background:
                      "linear-gradient(90deg,#ff6b6b,#6c63ff,#00c853,#ff9f1c)",
                  },

                  "&:hover": {
                    transform: "translateY(-12px)",
                    boxShadow:
                      "0 25px 55px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    height: "100%",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 95,
                      height: 95,
                      borderRadius: "24px",
                      background:
                        "linear-gradient(135deg,#f8f9ff,#ffffff)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      boxShadow:
                        "0 10px 25px rgba(0,0,0,0.08)",
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      minHeight: 60,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#666",
                      fontSize: "0.95rem",
                      lineHeight: 1.8,
                      minHeight: 90,

                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {service.desc}
                  </Typography>

                  <Box sx={{ flexGrow: 1 }} />

                  <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      mt: 3,
                      fontWeight: 700,
                      color: "#111",
                      textTransform: "none",

                      "&:hover": {
                        background: "transparent",
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    See More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}