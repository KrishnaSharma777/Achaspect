import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import VideoBanner from "../assets/Videos/CareerBanner.mp4";
import ApplyNowModal from "./ApplyNowModal";

const Career = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const jobOpenings = [
    {
      title: "Architectural Designer / Junior Architect",
      location: "On-site / Hybrid (Based in Mumbai)",
      experience: "1-2 years",
      responsibilities: [
        "Assist in designing residential, commercial, and institutional projects from concept through execution",
        "Create detailed architectural drawings, 3D models, and presentation materials",
        "Coordinate with consultants, contractors, and vendors to ensure timely delivery of projects",
        "Conduct site visits to monitor progress and ensure design intent is implemented accurately",
        "Stay informed about building codes, sustainable practices, and materials",
        "Contribute innovative design ideas and collaborate with senior architects and clients",
      ],
      requirements: [
        "Bachelor’s degree in Architecture or related field",
        "1-2 years of professional experience in architectural design",
        "Proficiency in AutoCAD, SketchUp, Revit, and Adobe Creative Suite",
        "Strong 3D visualization and rendering skills (Lumion, V-Ray, etc.)",
        "Excellent communication, design thinking, and problem-solving abilities",
        "Understanding of construction techniques and documentation",
        "Passion for design innovation, attention to detail, and spatial planning",
      ],
    },
    {
      title: "Draftsman / Interior Designer / Planner",
      location: "On-site / Remote",
      experience: "2-4 years",
      responsibilities: [
        "Prepare detailed architectural drawings and layouts using AutoCAD, Revit, or similar tools.",
        "Assist in space planning, design documentation, and project visualization.",
        "Coordinate with architects and engineers to integrate structural and MEP designs.",
        "Create interior layouts, material selections, and 3D renders for presentations.",
        "Assist in urban and site planning for residential and commercial projects.",
        "Participate in client meetings, understand requirements, and deliver design solutions.",
        "Ensure compliance with local building codes, zoning regulations, and standards.",
      ],
      requirements: [
        "Proficiency in AutoCAD, Revit, SketchUp, Lumion, or similar design tools.",
        "Strong knowledge of architectural design, technical drawings, and detailing.",
        "Good sense of spatial planning, ergonomics, and material knowledge.",
        "Experience in residential, commercial, or interior design projects.",
        "Excellent communication and collaboration skills.",
        "Degree/Diploma in Architecture, Interior Design, or Urban Planning.",
      ],
    },
    {
      title: "Architectural Designer / Junior Architect",
      location: "On-site / Hybrid (Based in Mumbai)",
      experience: "1-2 years",
      responsibilities: [
        "Assist in designing residential, commercial, and institutional projects from concept through execution",
        "Create detailed architectural drawings, 3D models, and presentation materials",
        "Coordinate with consultants, contractors, and vendors to ensure timely delivery of projects",
        "Conduct site visits to monitor progress and ensure design intent is implemented accurately",
        "Stay informed about building codes, sustainable practices, and materials",
        "Contribute innovative design ideas and collaborate with senior architects and clients",
      ],
      requirements: [
        "Bachelor’s degree in Architecture or related field",
        "1-2 years of professional experience in architectural design",
        "Proficiency in AutoCAD, SketchUp, Revit, and Adobe Creative Suite",
        "Strong 3D visualization and rendering skills (Lumion, V-Ray, etc.)",
        "Excellent communication, design thinking, and problem-solving abilities",
        "Understanding of construction techniques and documentation",
        "Passion for design innovation, attention to detail, and spatial planning",
      ],
    },
    {
      title: "Urban/Architectural Planner",
      location: "On-site / Remote",
      experience: "3-5 years",
      responsibilities: [
        "Develop site layouts and master plans based on zoning regulations and land use policies.",
        "Coordinate with architects and consultants to ensure planning aligns with design objectives.",
        "Conduct feasibility studies, site analyses, and infrastructure planning.",
        "Assist with project documentation for approvals and permits.",
        "Engage with stakeholders, civic authorities, and clients to present proposals and revisions.",
        "Incorporate sustainability and smart city principles into planning strategies.",
        "Stay informed on regional and international planning codes, trends, and innovations.",
      ],
      requirements: [
        "Bachelor’s or Master’s degree in Urban Planning, Architecture, or related field.",
        "3-5 years of experience in urban/architectural planning or design.",
        "Strong knowledge of zoning regulations, land use policies, and urban design principles.",
        "Proficiency in AutoCAD, GIS, SketchUp, and presentation tools (Adobe Suite, PowerPoint).",
        "Excellent communication, stakeholder management, and report writing skills.",
        "Understanding of sustainability practices and smart city concepts.",
        "Ability to work independently and collaboratively across interdisciplinary teams.",
      ],
    },
  ];

  return (
    <>
      {/* Video Banner Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "20vh", sm: "30vh", md: "40vh", lg: "80vh" },
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0b2747",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            zIndex: 1,
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
          }}
        >
          <source src={VideoBanner} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            bgcolor: "rgba(0, 0, 0, 0.5)",
            p: 2,
            zIndex: 2,
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Join Our Team
          </Typography>
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            Apply Now
          </Button>
        </Box>
      </Box>

      {/* Job Openings Section */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
        <Typography variant="h4" gutterBottom align="center">
          Current Job Openings
        </Typography>
        <Grid sx={{ mt: 2 }}>
          {jobOpenings.map((job, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                sx={{
                  padding: 15,
                  textAlign: "left",
                  mb: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s ease-in-out",
                  boxShadow: 4,
                  borderRadius: 3,
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h3" gutterBottom color="primary">
                    {job.title}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    📍 {job.location}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    🕒 {job.experience} experience
                  </Typography>

                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    Key Responsibilities:
                  </Typography>
                  <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
                    {job.responsibilities.map((item, i) => (
                      <li key={i}>
                        <Typography variant="h6">{item}</Typography>
                      </li>
                    ))}
                  </ul>

                  <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                    Requirements:
                  </Typography>
                  <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
                    {job.requirements.map((item, i) => (
                      <li key={i}>
                        <Typography variant="h6">{item}</Typography>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpenModal}
                    sx={{ mt: 3, borderRadius: "30px", fontWeight: "bold" }}
                    fullWidth
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Apply Now Modal */}
      <ApplyNowModal open={openModal} handleClose={handleClose} />
    </>
  );
};

export default Career;
