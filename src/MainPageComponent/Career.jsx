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

import VideoBanner from "../assets/Videos/CareerBanner.mp4"; // Adjust the path to your video file
import ApplyNowModal from "./ApplyNowModal";

const Career = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      {/* Video Banner Section */}

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "20vh", sm: "30vh", md: "40vh", lg: "80vh" }, // Adjust height based on screen size
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
            objectFit: "cover", // This ensures the video covers the area
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
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Current Job Openings
        </Typography>
        <Grid container spacing={4}>
          {/* UI/UX Designer/Graphic Designer Job Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                marginTop: "30px",
                height: "100%",
                transition: "transform 0.3s ease-in-out", // Smooth transition
                "&:hover": {
                  transform: "scale(1.05)", // Zoom effect on hover
                },
              }}
            >
              <CardContent>
                <Typography variant="h5">
                  Architectural Designer / Junior Architect
                </Typography>
                <Typography variant="body2">
                  Location: On-site / Hybrid (Based in Mumbai)
                </Typography>
                <Typography variant="body2">Experience: 1-2 years</Typography>

                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Key Responsibilities:</strong>
                  <ul>
                    <li>
                      Assist in designing residential, commercial, and
                      institutional projects from concept through execution
                    </li>
                    <li>
                      Create detailed architectural drawings, 3D models, and
                      presentation materials
                    </li>
                    <li>
                      Coordinate with consultants, contractors, and vendors to
                      ensure timely delivery of projects
                    </li>
                    <li>
                      Conduct site visits to monitor progress and ensure design
                      intent is implemented accurately
                    </li>
                    <li>
                      Stay informed about building codes, sustainable practices,
                      and materials
                    </li>
                    <li>
                      Contribute innovative design ideas and collaborate with
                      senior architects and clients
                    </li>
                  </ul>
                </Typography>

                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Requirements:</strong>
                  <ul>
                    <li>Bachelor’s degree in Architecture or related field</li>
                    <li>
                      1-2 years of professional experience in architectural
                      design
                    </li>
                    <li>
                      Proficiency in AutoCAD, SketchUp, Revit, and Adobe
                      Creative Suite
                    </li>
                    <li>
                      Strong 3D visualization and rendering skills (Lumion,
                      V-Ray, etc.)
                    </li>
                    <li>
                      Excellent communication, design thinking, and
                      problem-solving abilities
                    </li>
                    <li>
                      Understanding of construction techniques and documentation
                    </li>
                    <li>
                      Passion for design innovation, attention to detail, and
                      spatial planning
                    </li>
                  </ul>
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOpenModal}
                  sx={{ mt: 2 }}
                >
                  Apply Now
                </Button>
                <ApplyNowModal open={openModal} handleClose={handleClose} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                marginTop: "30px",
                height: "100%",
                transition: "transform 0.3s ease-in-out", // Smooth transition
                "&:hover": {
                  transform: "scale(1.05)", // Zoom effect on hover
                },
              }}
            >
              {" "}
              <CardContent>
                <Typography variant="h5">
                  Draftsman / Interior Designer / Planner
                </Typography>
                <Typography variant="body2">
                  Location: On-site / Remote
                </Typography>
                <Typography variant="body2">Experience: 2-4 years</Typography>

                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Position Summary:</strong>
                  We are seeking creative and detail-oriented professionals to
                  join our architectural team. Ideal candidates should possess
                  strong design principles, software proficiency, and the
                  ability to translate client requirements into functional and
                  aesthetically pleasing spaces. Roles available include
                  Draftsman, Interior Designer, and Urban Planner.
                </Typography>

                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Duties and Responsibilities:</strong>
                  <ul>
                    <li>
                      Prepare detailed architectural drawings and layouts using
                      AutoCAD, Revit, or similar tools.
                    </li>
                    <li>
                      Assist in space planning, design documentation, and
                      project visualization.
                    </li>
                    <li>
                      Coordinate with architects and engineers to integrate
                      structural and MEP designs.
                    </li>
                    <li>
                      Create interior layouts, material selections, and 3D
                      renders for presentations.
                    </li>
                    <li>
                      Assist in urban and site planning for residential and
                      commercial projects.
                    </li>
                    <li>
                      Participate in client meetings, understand requirements,
                      and deliver design solutions.
                    </li>
                    <li>
                      Ensure compliance with local building codes, zoning
                      regulations, and standards.
                    </li>
                  </ul>
                </Typography>

                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Required Skill Set and Experience:</strong>
                  <ul>
                    <li>
                      Proficiency in AutoCAD, Revit, SketchUp, Lumion, or
                      similar design tools.
                    </li>
                    <li>
                      Strong knowledge of architectural design, technical
                      drawings, and detailing.
                    </li>
                    <li>
                      Good sense of spatial planning, ergonomics, and material
                      knowledge.
                    </li>
                    <li>
                      Experience in residential, commercial, or interior design
                      projects.
                    </li>
                    <li>Excellent communication and collaboration skills.</li>
                    <li>
                      Degree/Diploma in Architecture, Interior Design, or Urban
                      Planning.
                    </li>
                  </ul>
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOpenModal}
                  sx={{ mt: 2 }}
                >
                  Apply
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                marginTop: "30px",
                height: "100%",
                transition: "transform 0.3s ease-in-out", // Smooth transition
                "&:hover": {
                  transform: "scale(1.05)", // Zoom effect on hover
                },
              }}
            >
              {" "}
              <CardContent>
                <Typography variant="h5">
                  Urban/Architectural Planner
                </Typography>
                <Typography variant="body2">
                  Location: On-site / Remote
                </Typography>
                <Typography variant="body2">Experience: 3-5 years</Typography>

                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Position Summary:</strong>
                  We are looking for a forward-thinking and detail-driven
                  Urban/Architectural Planner to join our growing team. The
                  ideal candidate should be skilled in land use planning, zoning
                  regulations, and urban design principles to develop functional
                  and sustainable spaces. You will be responsible for
                  translating client visions into practical planning solutions
                  and working closely with architects, engineers, and local
                  authorities.
                </Typography>

                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Duties and Responsibilities:</strong>
                  <ul>
                    <li>
                      Develop site layouts and master plans based on zoning
                      regulations and land use policies.
                    </li>
                    <li>
                      Coordinate with architects and consultants to ensure
                      planning aligns with design objectives.
                    </li>
                    <li>
                      Conduct feasibility studies, site analyses, and
                      infrastructure planning.
                    </li>
                    <li>
                      Assist with project documentation for approvals and
                      permits.
                    </li>
                    <li>
                      Engage with stakeholders, civic authorities, and clients
                      to present proposals and revisions.
                    </li>
                    <li>
                      Incorporate sustainability and smart city principles into
                      planning strategies.
                    </li>
                    <li>
                      Stay informed on regional and international planning
                      codes, trends, and innovations.
                    </li>
                  </ul>
                </Typography>

                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Required Skill Set and Experience:</strong>
                  <ul>
                    <li>
                      Strong understanding of urban design, zoning codes, and
                      development regulations.
                    </li>
                    <li>
                      Proficiency in GIS tools, AutoCAD, Revit, and other urban
                      planning software.
                    </li>
                    <li>
                      Experience with master planning, infrastructure
                      coordination, and public space design.
                    </li>
                    <li>
                      Ability to present and defend planning concepts to clients
                      and government bodies.
                    </li>
                    <li>
                      Excellent communication, report writing, and presentation
                      skills.
                    </li>
                    <li>
                      Bachelor’s/Master’s degree in Urban Planning,
                      Architecture, or related field.
                    </li>
                  </ul>
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOpenModal}
                  sx={{ mt: 2 }}
                >
                  Apply
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                marginTop: "30px",
                height: "100%",
                transition: "transform 0.3s ease-in-out", // Smooth transition
                "&:hover": {
                  transform: "scale(1.05)", // Zoom effect on hover
                },
              }}
            >
              <CardContent>
                <Typography variant="h5">Marketing Executive</Typography>
                <Typography variant="body2">Location: Remote</Typography>
                <Typography variant="body2">Experience: 1-2 years</Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Job Description:</strong>
                  <ul>
                    <li>
                      Plan and execute all digital marketing activities,
                      including SEO/SEM, marketing database, email, social
                      media, and display advertising campaigns.
                    </li>
                    <li>Manage and maintain our social media presence.</li>
                    <li>
                      Manage day-to-day operations of Google AdWords, Meta Ads
                      Manager, and other leading Ads platforms.
                    </li>
                    <li>
                      Measure and analyze campaign performance to support
                      continuous optimization efforts to generate leads.
                    </li>
                    <li>
                      Tactical campaign development including keyword discovery,
                      bid strategy execution, and budget management.
                    </li>
                    <li>
                      Own cost-per-lead and cost-per-sale optimization focusing
                      on conversion metrics to drive increased campaign ROI.
                    </li>
                    <li>
                      Identify trends and insights, and optimize spend and
                      performance based on the insights.
                    </li>
                    <li>
                      Brainstorm new and creative growth strategies to maximize
                      leads.
                    </li>
                    <li>
                      Collaborate with internal teams to create landing pages
                      and optimize user experience.
                    </li>
                    <li>
                      Utilize strong analytical ability to evaluate end-to-end
                      customer experience across multiple channels and customer
                      touchpoints.
                    </li>
                  </ul>
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOpenModal}
                  sx={{ mt: 2 }}
                >
                  Apply
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                marginTop: "30px",
                height: "100%",
                transition: "transform 0.3s ease-in-out", // Smooth transition
                "&:hover": {
                  transform: "scale(1.05)", // Zoom effect on hover
                },
              }}
            >
              {" "}
              <CardContent>
                <Typography variant="h5">
                  DPR (Detailed Project Report) Creator
                </Typography>
                <Typography variant="body2">
                  Location: On-site / Remote
                </Typography>
                <Typography variant="body2">Experience: 2-4 years</Typography>

                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Position Summary:</strong>
                  We are seeking a meticulous and experienced DPR (Detailed
                  Project Report) Creator to join our team. The ideal candidate
                  will have a solid background in infrastructure or
                  architectural project documentation, including technical
                  detailing, costing, compliance, and stakeholder coordination.
                  The role requires precision in compiling data-driven reports
                  that align with regulatory and financial requirements.
                </Typography>

                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Duties and Responsibilities:</strong>
                  <ul>
                    <li>
                      Prepare comprehensive Detailed Project Reports for
                      architectural and infrastructure projects.
                    </li>
                    <li>
                      Coordinate with architects, engineers, planners, and
                      financial teams for data gathering.
                    </li>
                    <li>
                      Analyze project feasibility, cost estimates, and timeline
                      projections.
                    </li>
                    <li>
                      Draft technical write-ups, designs, and schematics in the
                      report.
                    </li>
                    <li>
                      Ensure reports meet government norms and sector-specific
                      guidelines.
                    </li>
                    <li>
                      Work with tendering and proposal teams for bid
                      submissions.
                    </li>
                    <li>
                      Present reports to clients and funding agencies with
                      clarity and precision.
                    </li>
                  </ul>
                </Typography>

                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Required Skill Set and Experience:</strong>
                  <ul>
                    <li>
                      Strong understanding of DPR structure, government formats,
                      and technical writing.
                    </li>
                    <li>
                      Experience in infrastructure/urban planning/architectural
                      reporting preferred.
                    </li>
                    <li>
                      Proficiency in MS Word, Excel, AutoCAD, and report
                      formatting tools.
                    </li>
                    <li>Knowledge of cost estimation and BOQ preparation.</li>
                    <li>
                      Excellent attention to detail, documentation, and
                      compliance handling.
                    </li>
                    <li>
                      Bachelor’s degree in Civil Engineering, Architecture, or
                      related discipline.
                    </li>
                  </ul>
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOpenModal}
                  sx={{ mt: 2 }}
                >
                  Apply
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* How to Apply Section */}
      <Box sx={{ mt: 4, mb: 4, bgcolor: "#f5f5f5", p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          How to Apply
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Applying for a position at Archaspect is simple! Fill out our online
          application form and upload your resume. We review applications
          regularly and will get back to you as soon as possible.
        </Typography>
      </Box>
    </>
  );
};

export default Career;
