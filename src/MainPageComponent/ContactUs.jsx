import {  Grid, Typography, Box } from "@mui/material";
import ContactUsImage from "../assets/image/reachout.png";

const ContactUs = () => {
  
  return (
    < >
     
      <Box
  sx={{
    position: "relative",
    width: "100%",
    height: {
      xs: "25svh",  // mobile (safe viewport height ✅)
      sm: "60vh",
      md: "70vh",
      lg: "80vh",   // desktop (clean, not too big)
    },
    overflow: "hidden",
  }}
>
  <Box
    component="img"
    src={ContactUsImage}
    alt="Contact Us"
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</Box>

      {/* Content Section */}
      <Box sx={{ marginTop: { xs: 2, md: 10 }, padding: "40px" }}>
        <Grid container spacing={4}>
          {/* Left Section */}
          <Grid item xs={12} md={6} sx={{ padding: "20px" }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#444", mb: 2 }}
            >
              We are always ready to help you and <br /> answer your questions
            </Typography>
            <Typography sx={{ color: "#555", fontSize: "18px", mb: 3 }}>
              Your satisfaction is our priority, and we strive to offer prompt
              and reliable <br /> support at all times.
            </Typography>

            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "#FF5722",
                mb: 1,
              }}
            >
              Call
            </Typography>
            <Typography sx={{ mb: 1 }}>+917987967802</Typography>

            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "#FF5722",
                mb: 1,
              }}
            >
              Email
            </Typography>
            <Typography sx={{ mb: 3 }}>info@archaspect.com</Typography>

            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "#FF5722",
                mb: 1,
              }}
            >
              Location
            </Typography>
            <Typography>
              Anand Nagar, Bahodapur, Gwalior, Madhya Pradesh – 474012.
            </Typography>
          </Grid>

       </Grid>
      </Box>

     
      <Box
        sx={{
          paddingX: 1,
          display: "flex",
          mb: { xs: -5, md: 0 }, // Add margin-bottom for small screens only
          mt: { xs: 5, md: 5 },
        }}
      >
        <Box
          component="iframe"
          src="https://www.google.com/maps?q=A/180,+Anand+Nagar,+Bahodapur,+Gwalior,+Madhya+Pradesh+474012&output=embed"
          allowFullScreen
          loading="lazy"
          sx={{
            width: "100%",
            height: { xs: "200px", md: "300px" },
            border: 0,
            borderRadius: "30px",
          }}
        />
      </Box>
    </>
  );
};

export default ContactUs;
