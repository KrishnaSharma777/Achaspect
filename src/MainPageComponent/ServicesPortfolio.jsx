import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Dialog,
  DialogContent,
  IconButton,
  Chip,
  Fade,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ConstructionIcon from "@mui/icons-material/Construction";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LandscapeIcon from "@mui/icons-material/Landscape";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const services = [
  {
icon: <ArchitectureIcon sx={{ fontSize: 38, color: "#1976D2" }} />,
    title: "Architectural Design",
    description:
      "Innovative architectural solutions for residential, commercial, institutional and mixed-use developments with a focus on functionality, sustainability and aesthetics.",
    features: [
      "Concept Design",
      "Working Drawings",
      "3D Visualization",
      "Building Approval",
    ],
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 38, color: "#D4AF37" }} />,
    title: "Interior Design",
    description:
      "Premium interior design solutions creating elegant, comfortable and highly functional spaces for residential and commercial projects.",
    features: [
      "Space Planning",
      "Furniture Design",
      "Lighting Design",
      "Material Selection",
    ],
  },
  {
    icon: <EngineeringIcon sx={{ fontSize: 38, color: "#D4AF37" }} />,
    title: "Planning & DPR",
    description:
      "Comprehensive planning services including DPR preparation, feasibility studies, BOQ and master planning.",
    features: [
      "Master Planning",
      "DPR Preparation",
      "BOQ",
      "Cost Estimation",
    ],
  },
  {
    icon: <ConstructionIcon sx={{ fontSize: 38, color: "#D4AF37" }} />,
    title: "Construction",
    description:
      "End-to-end construction services with quality assurance, project monitoring and timely delivery.",
    features: [
      "Civil Works",
      "Execution",
      "Quality Control",
      "Site Management",
    ],
  },
  {
    icon: <ApartmentIcon sx={{ fontSize: 38, color: "#D4AF37" }} />,
    title: "Project Execution",
    description:
      "Professional project execution ensuring seamless coordination, monitoring and successful project completion.",
    features: [
      "Project Management",
      "Monitoring",
      "Coordination",
      "Supervision",
    ],
  },
  {
    icon: <AccountBalanceIcon sx={{ fontSize: 38, color: "#D4AF37" }} />,
    title: "Government Projects",
    description:
      "Consultancy and execution services for public infrastructure, government buildings and urban development projects.",
    features: [
      "Government Buildings",
      "Infrastructure",
      "Urban Projects",
      "Consultancy",
    ],
  },
  {
    icon: <LandscapeIcon sx={{ fontSize: 38, color: "#D4AF37" }} />,
    title: "Landscape Design",
    description:
      "Creating sustainable outdoor environments, parks, gardens and recreational landscapes.",
    features: [
      "Parks",
      "Gardens",
      "Urban Landscape",
      "Green Spaces",
    ],
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 38, color: "#D4AF37" }} />,
    title: "Turnkey Solutions",
    description:
      "Complete design-to-delivery solutions covering planning, construction and final handover.",
    features: [
      "Design Build",
      "Procurement",
      "Execution",
      "Project Delivery",
    ],
  },
];

export default function ServicesSection() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService(null);
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        background:
          "linear-gradient(180deg,#f8fafc 0%,#ffffff 50%,#f8fafc 100%)",
      }}
    >
<Container
  maxWidth="xl"
  sx={{
    px: {
      xs: 2,
      md: 3,
    },
  }}
>        {/* Heading */}
        <Box textAlign="center" mb={7}>
          <Typography
            sx={{
              color: "#121250",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3.5rem" },
              mb: 2,
            }}
          >
            Our Services
          </Typography>

          <Typography
            sx={{
              maxWidth: 750,
              mx: "auto",
              color: "#64748B",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            Delivering comprehensive architecture, planning, interior,
            construction and project management solutions.
          </Typography>
        </Box>

        {/* Cards */}
        <Grid
  container
  spacing={3}
  sx={{
    width: "100%",
    m: 0,
  }}
>
  {services.map((service, index) => (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      key={index}
      sx={{
        width: { xs: "100%", md: "calc(33.333% - 16px)"   },
        display: "flex",
      }}
    >
      <Card
        onClick={() => handleOpen(service)}
        sx={{
          width: "100%",
          height: 200,
          borderRadius: "24px",
          cursor: "pointer",
          textAlign: "center",
          p: 3,
          background: "#fff",
          border: "1px solid rgba(15,23,42,.08)",
          boxShadow: "0 10px 30px rgba(15,23,42,.08)",
          transition: "all .35s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",

          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background:
              "linear-gradient(90deg,#D4AF37,#F4D03F,#D4AF37)",
          },

          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
          },

          "&:hover .service-icon-circle": {
            background: "#ffffff",
            boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
          },

          "&:hover .service-icon-circle svg": {
            color: "#000 !important",
          },
        }}
      >
        <Box
          className="service-icon-circle"
          sx={{
            width: 75,
            height: 75,
            borderRadius: "50%",
            background: "#E3F2FD",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
            transition: "all .3s ease",

            "& svg": {
              color: "#1976D2 !important",
              transition: "all .3s ease",
            },
          }}
        >
          {service.icon}
        </Box>

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1rem",
            color: "#0F172A",
            mb: 2,
            minHeight: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {service.title}
        </Typography>

        <Box
          sx={{
            px: 2,
            py: 0.7,
            borderRadius: "50px",
            background:
              "linear-gradient(135deg,#D4AF37,#F4D03F)",
            color: "#111",
            fontSize: "0.75rem",
            fontWeight: 700,
          }}
        >
          Explore →
        </Box>
      </Card>
    </Grid>
  ))}
</Grid>

        {/* Modal */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          TransitionComponent={Fade}
        >
          <DialogContent sx={{ p: { xs: 3, md: 5 }, position: "relative" }}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
              }}
            >
              <CloseIcon />
            </IconButton>

            {selectedService && (
              <>
                <Box textAlign="center" mb={4}>
                  <Box
                    sx={{
                      width: 90,
                      height: 90,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg,#0F172A,#1E293B)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    {React.cloneElement(selectedService.icon, {
                      sx: { fontSize: 48, color: "#D4AF37" },
                    })}
                  </Box>

                  <Typography
                    variant="h4"
                    fontWeight={800}
                    color="#0F172A"
                  >
                    {selectedService.title}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#64748B",
                    lineHeight: 1.9,
                    mb: 4,
                    textAlign: "center",
                  }}
                >
                  {selectedService.description}
                </Typography>

                <Typography
                  variant="h6"
                  fontWeight={700}
                  mb={2}
                >
                  Key Features
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    flexWrap: "wrap",
                  }}
                >
                  {selectedService.features.map((feature, index) => (
                    <Chip
                      key={index}
                      label={feature}
                      sx={{
                        borderRadius: "30px",
                        fontWeight: 600,
                        px: 1,
                      }}
                    />
                  ))}
                </Box>
              </>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}