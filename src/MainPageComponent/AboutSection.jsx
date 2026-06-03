import { Box, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import Img1 from "../assets/image/15.jpg";
import Img2 from "../assets/image/16.png";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const [text, setText] = useState("");
  const fullText = "Designing Spaces That Inspire Living";

  // 🔥 Typewriter Effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 8 }, bgcolor: "#fff" }}>
      
      <Grid container spacing={6} alignItems="center" maxWidth="1200px" mx="auto">

        {/* 🖼️ IMAGE SECTION */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >

            {/* 🔹 FIRST IMAGE (PARALLAX) */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ width: "100%" }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: 4,
                }}
              >
                <motion.img
                  src={Img1}
                  alt="Experience"
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                  }}
                  animate={{ y: [0, -20, 0] }} // 🔥 Parallax feel
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                  }}
                />

                {/* Tag */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 12,
                    left: 12,
                    bgcolor: "#fff",
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  10+ Years Experience
                </Box>
              </Box>
            </motion.div>

            {/* 🔹 SECOND IMAGE */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ width: "100%" }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: 4,
                }}
              >
                <motion.img
                  src={Img2}
                  alt="Learn More"
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                  }}
                  animate={{ y: [0, 20, 0] }} // 🔥 reverse parallax
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                  }}
                />

                {/* Button */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 12,
                    left: 12,
                  }}
                >
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#fff",
                        color: "#000",
                        borderRadius: "20px",
                        px: 3,
                        fontWeight: "bold",
                        "&:hover": {
                          bgcolor: "#000",
                          color: "#fff",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </Box>
              </Box>
            </motion.div>

          </Box>
        </Grid>

        {/* 📄 CONTENT SECTION */}
        <Grid item xs={12} md={6}>

          {/* Stagger Animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Typography sx={{ color: "#888", mb: 1 }}>
                About Us
              </Typography>
            </motion.div>

            {/* 🔥 TYPEWRITER TEXT */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "36px" },
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                {text}
              </Typography>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Typography sx={{ color: "#555", mb: 3 }}>
                Archaspect is a Gwalior-based architectural firm dedicated to
                creating sustainable, functional, and visually stunning spaces.
              </Typography>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="contained"
                    href="/portfolio"

                sx={{
                  bgcolor: "#000",
                  borderRadius: "30px",
                  px: 4,
                }}
              >
                View Projects
              </Button>
            </motion.div>

          </motion.div>
        </Grid>

      </Grid>
    </Box>
  );
};

export default AboutSection;