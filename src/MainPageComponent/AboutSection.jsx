import { Box, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

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
                  src="https://res.cloudinary.com/ddketghv2/image/upload/v1779703058/xj3mnz1pfgowmfvc9rno.jpg"
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
                    color: "#000",
                    bgcolor: "#fff",
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  8+ Years Experience
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
                  src="https://res.cloudinary.com/ddketghv2/image/upload/v1780565016/fxzvjxczpgoen6o4ddeg.jpg"
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
                    href="/about-us"
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
              <Typography  variant="h2" sx={{ color: "#d39612", mb: 1 }}>
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
                  color: "rgb(18, 18, 80)",
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
              We are a Gwalior-based architecture and design consultancy providing architectural design, interior design, landscape design, DPR preparation, project management, and turnkey execution services. With a commitment to innovation, sustainability, and quality, we deliver customized solutions for residential, commercial, institutional, and government projects across Madhya Pradesh and throughout India through both on-site and remote collaboration.
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