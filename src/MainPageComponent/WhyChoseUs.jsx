import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
} from "@mui/material";

const whyChooseUs = [
  {
    number: "50+",
    title: "Projects Completed",
    desc: "Successfully completed residential, commercial and government projects.",
  },
  {
    number: "8+",
    title: "Years Experience",
    desc: "Work expertise in sustainable architecture, planning and project execution.",
  },
  {
    number: "20+",
    title: "Public Sector Projects",
    desc: "Trusted consultancy for public infrastructure developments, landscape planning.",
  },
  {
    number: "100%",
    title: "Satisfied Clients",
    desc: "Committed to quality and timely project delivery that satisfies our clients.",
  },
];

export default function WhyChooseUs() {
  return (
    <Box
      sx={{
        py: 12,
        background:
          "linear-gradient(135deg,#0B1220 0%,#121250 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Box textAlign="center" mb={8}>
          <Typography
           variant="h2"
            sx={{
              color: "#D4AF37",
              fontWeight: 700,
              letterSpacing: 2,
              mb: 1,
            }}
          >
            Why Choose Us
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: {
                xs: "2rem",
                md: "3.2rem",
              },
              mb: 2,
            }}
          >
            Building Excellence Through
            <br />
            Design & Innovation
          </Typography>

          <Typography
            sx={{
              maxWidth: 800,
              mx: "auto",
              color: "rgba(255,255,255,.75)",
              lineHeight: 1.9,
            }}
          >
            We combine architectural creativity, technical expertise and
            sustainable design practices to deliver exceptional projects that
            create long-term value for our clients.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {whyChooseUs.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: 260,
                  borderRadius: "28px",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                  p: 4,
                  transition: ".4s",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",

                  "&:hover": {
                    transform: "translateY(-12px)",
                    background: "rgba(255,255,255,0.12)",
                    boxShadow:
                      "0 25px 50px rgba(0,0,0,0.25)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "#D4AF37",
                    mb: 2,
                  }}
                >
                  {item.number}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,.75)",
                    lineHeight: 1.8,
                  }}
                >
                  {item.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}