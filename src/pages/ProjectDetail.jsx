import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Typography, Grid } from "@mui/material";

const ProjectDetail = () => {
  const { id } = useParams();
  const projects = useSelector((state) => state.projects.projectList);

  const project = projects.find((p) => p.id === id);

  if (!project) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ p: { xs: 2, md: 6 } }}>
      
      {/* Main Image */}
      <Box
        component="img"
        src={project.image}
        sx={{
          width: "100%",
          height: { xs: 250, md: 400 },
          objectFit: "cover",
          borderRadius: "20px",
          mb: 3,
        }}
      />

      {/* Title */}
      <Typography variant="h4" mb={2}>
        {project.title}
      </Typography>

      {/* Category */}
      <Typography color="gray" mb={2}>
        {project.category}
      </Typography>

      {/* Description */}
      <Typography mb={4}>
        {project.description}
      </Typography>

      {/* 🔥 Gallery Images */}
      <Grid container spacing={2}>
        {project.gallery?.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              component="img"
              src={img}
              sx={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                borderRadius: "12px",
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