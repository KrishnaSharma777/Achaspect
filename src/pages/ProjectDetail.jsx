import { useParams } from "react-router-dom";
import { useGetProjectsQuery } from "../redux/api/projectApi";
import { Box, Typography, Grid } from "@mui/material";

const ProjectDetail = () => {
  const { id } = useParams();
  const { data = [] } = useGetProjectsQuery();

  const project = data.find((p) => p.id === id);

  if (!project) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ p: { xs: 2, md: 6 } }}>

      {/* MAIN IMAGE */}
      <Box
        component="img"
        src={project.images?.[0]}
        sx={{
          width: "100%",
          height: { xs: 250, md: 400 },
          objectFit: "cover",
          borderRadius: "20px",
          mb: 3,
        }}
      />

      {/* TITLE */}
      <Typography variant="h4" mb={2}>
        {project.title}
      </Typography>

      {/* CATEGORY */}
      <Typography color="gray" mb={2}>
        {project.category}
      </Typography>

      {/* DESCRIPTION */}
      <Typography mb={4}>
        {project.description}
      </Typography>

      {/* GALLERY */}
      <Typography variant="h5" mb={2}>
        Gallery
      </Typography>

      <Grid container spacing={2}>
        {project.images?.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              component="img"
              src={img}
              sx={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                borderRadius: "12px",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectDetail;