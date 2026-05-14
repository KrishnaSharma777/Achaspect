import { Box, Grid, Paper, Typography } from "@mui/material";
import { useGetProjectsQuery } from "../redux/api/projectApi";

const DashboardHome = () => {
  const { data = [] } = useGetProjectsQuery();

  const totalProjects = data.length;
  const totalCategories = new Set(data.map(p => p.category)).size;

  return (
    <Box>
      <Typography
        variant="h4"
        mb={3}
        sx={{
          fontSize: { xs: "22px", md: "30px" },
          fontWeight: "bold",
        }}
      >
        Dashboard Overview 🚀
      </Typography>

      <Grid container spacing={3}>
        
        {/* Total Projects */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: "16px",
              textAlign: "center",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            <Typography color="gray">Total Projects</Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mt: 1 }}
            >
              {totalProjects}
            </Typography>
          </Paper>
        </Grid>

        {/* Categories */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: "16px",
              textAlign: "center",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            <Typography color="gray">Categories</Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mt: 1 }}
            >
              {totalCategories}
            </Typography>
          </Paper>
        </Grid>

        {/* Extra Card (future use) */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: "16px",
              textAlign: "center",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            <Typography color="gray">Coming Soon</Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mt: 1 }}
            >
              Analytics
            </Typography>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
};

export default DashboardHome;