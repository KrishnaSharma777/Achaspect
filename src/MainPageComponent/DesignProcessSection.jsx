import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Understanding client requirements, project goals, budget planning and site analysis.",
  },
  {
    number: "02",
    title: "Concept Design",
    description:
      "Creating innovative architectural concepts, layouts and sustainable design solutions.",
  },
  {
    number: "03",
    title: "Planning & DPR",
    description:
      "Preparing DPR, approvals, statutory documentation and project feasibility studies.",
  },
  {
    number: "04",
    title: "Detailed Drawings",
    description:
      "Developing technical drawings, working plans and construction documentation.",
  },
  {
    number: "05",
    title: "Execution",
    description:
      "Managing construction activities, quality assurance and project supervision.",
  },
  {
    number: "06",
    title: "Handover",
    description:
      "Final inspection, project delivery and post-completion support services.",
  },
];

export default function DesignProcess() {
  const radius = 280;
  const [activeStep, setActiveStep] = useState(processSteps[0]);

  return (
    <Box
      sx={{
        py: 12,
        background:
          "linear-gradient(180deg,#ffffff 0%,#f8fafc 100%)",
      }}
    >
      <Container maxWidth="xl">
        {/* Heading */}
        <Box textAlign="center" mb={8}>
          <Typography
            component="span"
            variant="h2"
            sx={{
              color: "#0d0d0e",
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            Our Workflow
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontWeight: 800,
              color: "#121250",
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
              mt: 2,
              mb: 2,
            }}
          >
            Architectural Design Process
          </Typography>

          <Typography
            sx={{
              maxWidth: 850,
              mx: "auto",
              color: "#64748B",
              lineHeight: 1.9,
            }}
          >
            Our architectural design process ensures smooth project
            planning, sustainable design development, construction
            management and successful project delivery for residential,
            commercial, institutional and government projects.
          </Typography>
        </Box>

        {/* Desktop / Laptop */}
        <Box
          sx={{
            position: "relative",
            width: 700,
            height: 700,
            mx: "auto",
            display: { xs: "none", md: "block" },
          }}
        >
          {/* Center Circle */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 250,
              height: 250,
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",

              background:
                "linear-gradient(135deg,#0B1220 0%,#121250 50%,#1E3A8A 100%)",

              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              p: 4,

              border: "2px solid rgba(212,175,55,.35)",

              boxShadow: `
                0 25px 60px rgba(18,18,80,.25),
                0 0 40px rgba(212,175,55,.20),
                inset 0 0 25px rgba(255,255,255,.08)
              `,

              animation: "floatCircle 6s ease-in-out infinite",

              "@keyframes floatCircle": {
                "0%": {
                  transform:
                    "translate(-50%,-50%) translateY(0px)",
                },
                "50%": {
                  transform:
                    "translate(-50%,-50%) translateY(-12px)",
                },
                "100%": {
                  transform:
                    "translate(-50%,-50%) translateY(0px)",
                },
              },

              "&::before": {
                content: '""',
                position: "absolute",
                inset: "-12px",
                borderRadius: "50%",
                background:
                  "conic-gradient(from 0deg, transparent, #D4AF37, transparent, #D4AF37, transparent)",
                animation: "rotateRing 16s linear infinite",
                zIndex: -1,
                filter: "blur(2px)",
                opacity: 0.8,
              },

              "@keyframes rotateRing": {
                from: {
                  transform: "rotate(0deg)",
                },
                to: {
                  transform: "rotate(360deg)",
                },
              },

              "&::after": {
                content: '""',
                position: "absolute",
                inset: "10px",
                borderRadius: "50%",
                border:
                  "1px solid rgba(212,175,55,.25)",
              },
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#D4AF37",
                  fontWeight: 700,
                  letterSpacing: 3,
                  mb: 1,
                  fontSize: ".8rem",
                  textTransform: "uppercase",
                }}
              >
                Step {activeStep.number}
              </Typography>

              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                {activeStep.title}
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,.85)",
                  fontSize: ".8rem",
                  lineHeight: 1.8,
                }}
              >
                {activeStep.description}
              </Typography>
            </Box>
          </Box>

          {/* Process Steps */}
          {processSteps.map((step, index) => {
            const angle =
              (index * 360) / processSteps.length - 90;

            const x =
              radius * Math.cos((angle * Math.PI) / 180);

            const y =
              radius * Math.sin((angle * Math.PI) / 180);

            return (
              <Box
                key={step.number}
                sx={{
                  position: "absolute",
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: "translate(-50%,-50%)",
                  width: 180,
                  textAlign: "center",
                }}
              >
                <Box
                  onMouseEnter={() =>
                    setActiveStep(step)
                  }
                  onClick={() =>
                    setActiveStep(step)
                  }
                  sx={{
                    width: 90,
                    height: 90,
                    mx: "auto",
                    mb: 2,
                    cursor: "pointer",

                    borderRadius: "50%",

                    background:
                      activeStep.number === step.number
                        ? "#1976D2"
                        : "#E3F2FD",

                    color:
                      activeStep.number === step.number
                        ? "#fff"
                        : "#000",

                    border: "3px solid #1976D2",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    transition: ".4s",

                    "&:hover": {
                      background: "#1976D2",
                      color: "#fff",
                      transform: "scale(1.08)",
                      boxShadow:
                        "0 15px 35px rgba(25,118,210,.35)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: "1.5rem",
                    }}
                  >
                    {step.number}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#121250",
                  }}
                >
                  {step.title}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* Mobile */}
        <Box
          sx={{
            display: { xs: "grid", md: "none" },
            gap: 3,
          }}
        >
          {processSteps.map((step) => (
            <Box
              key={step.number}
              onClick={() => setActiveStep(step)}
              sx={{
                p: 3,
                borderRadius: "20px",
                background: "#fff",
                cursor: "pointer",

                boxShadow:
                  activeStep.number === step.number
                    ? "0 15px 40px rgba(25,118,210,.18)"
                    : "0 10px 30px rgba(0,0,0,.08)",

                transition: ".3s",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background:
                      activeStep.number === step.number
                        ? "#1976D2"
                        : "#E3F2FD",

                    color:
                      activeStep.number === step.number
                        ? "#fff"
                        : "#1976D2",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                  }}
                >
                  {step.number}
                </Box>

                <Typography fontWeight={700}>
                  {step.title}
                </Typography>
              </Box>

              {activeStep.number === step.number && (
                <Typography
                  sx={{
                    mt: 2,
                    color: "#64748B",
                    lineHeight: 1.8,
                  }}
                >
                  {step.description}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}