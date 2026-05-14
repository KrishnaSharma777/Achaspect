import { Box, IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} isMobile={isMobile} />

      {/* Main Content */}
      <Box sx={{ flex: 1 }}>
        
        {/* Topbar */}
        <Topbar>
          {isMobile && (
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Topbar>

        <Box p={{ xs: 2, md: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;