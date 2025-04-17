import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const SupportBar = () => {
  return (
    <Box
      component="section"
      aria-label="Customer Support Info"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0px -2px 5px rgba(0,0,0,0.1)",
        zIndex: 1000,
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: "10px 16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <PhoneIcon sx={{ color: "#F26722" }} />
        <Typography
          sx={{ fontWeight: 600, fontSize: "15px", color: "#F26722" }}
        >
          91-9479887775
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <EmailIcon sx={{ color: "#F26722" }} />
        <Typography
          sx={{ fontWeight: 600, fontSize: "15px", color: "#F26722" }}
        >
          support@archaspect.com
        </Typography>
      </Box>
    </Box>
  );
};

export default SupportBar;
