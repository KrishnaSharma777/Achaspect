import { useGetProjectsQuery } from "./redux/api/projectApi";
import { Box, Typography } from "@mui/material";

const Dashboard = () => {
  const { data = [] } = useGetProjectsQuery();

  // 🔥 STATS
  const total = data.length;
  const categories = {};

  data.forEach((p) => {
    categories[p.category] = (categories[p.category] || 0) + 1;
  });

  return (
    <Box p={4}>
      <Typography variant="h4">Dashboard</Typography>

      <Typography mt={2}>Total Projects: {total}</Typography>

      <Typography mt={2}>Category Stats:</Typography>

      {Object.entries(categories).map(([cat, count]) => (
        <Typography key={cat}>
          {cat}: {count}
        </Typography>
      ))}
    </Box>
  );
};

export default Dashboard;