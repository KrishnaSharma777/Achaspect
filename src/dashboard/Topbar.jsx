import { Box, Typography } from "@mui/material";

const Topbar = ({ children }) => {
  return (
    <Box
      sx={{
        
        height: 60,
        bgcolor: "#fff",
        display: "flex", 
        alignItems: "center",
        justifyContent: "space-between",
        px:2,
  boxShadow: "0px 2px 6px rgba(20, 20, 20, 0.1)"
          
      }}
    >
      {/* Mobile Menu Button */}
      {children}

      <Typography fontWeight="bold" sx={{textAlign:"center"}}>
        Welcome to the Admin Dashboard
      </Typography>
    </Box>
  );
};

export default Topbar;