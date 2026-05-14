import {
  Box,
  Typography,
  Button,
  Drawer,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Sidebar = ({ open, setOpen, isMobile }) => {
  const nav = useNavigate();

  const logout = async () => {
    await signOut(auth);
    nav("/login");
  };

  const menu = (
    <Box
      sx={{
        width: 150,
        height: "96%",
        bgcolor: "#666565",
        color: "#fff",
        p: 2,
      }}
    >
      <Typography variant="h5" mb={3}>
        Admin Panel
      </Typography>

      <Button
        fullWidth
        startIcon={<DashboardIcon />}
        sx={{ color: "#fff", justifyContent: "flex-start", mb: 1 }}
        onClick={() => nav("/dashboard")}
      >
        Dashboard
      </Button>

      <Button
        fullWidth
        startIcon={<WorkIcon />}
        sx={{ color: "#fff", justifyContent: "flex-start", mb: 1 }}
        onClick={() => nav("/dashboard/projects")}
      >
        Projects
      </Button>

      <Button
        fullWidth
        startIcon={<LogoutIcon />}
        sx={{ color: "#fff", justifyContent: "flex-start", mt: 1 }}
        onClick={logout}
      >
        Logout
      </Button>
    </Box>
  );

  return isMobile ? (
    <Drawer open={open} onClose={() => setOpen(false)}>
      {menu}
    </Drawer>
  ) : (
    <Box sx={{ width: 250 }}>{menu}</Box>
  );
};

export default Sidebar;