import { useParams } from "react-router-dom";
import { useGetProjectsQuery } from "../redux/api/projectApi";
import { Box, Typography, Grid } from "@mui/material";

const ProjectDetail = () => {
  const { id } = useParams();
  const { data = [], isLoading } = useGetProjectsQuery();

  const project = data.find((p) => p.id === id);

  // Loading
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  // Project not found
  if (!project) {
    return <Typography>Project not found.</Typography>;
  }

  // Dynamic project information
  const projectTitle = project.title || "Architecture Project";
  const projectCategory = project.category || "Architecture";
  const projectLocation = project.location || "";

  // Dynamic SEO-friendly alt text
  const imageAlt = `${projectTitle} - ${projectCategory}${
    projectLocation ? ` project in ${projectLocation}` : " project"
  } by Archaspect`;

  return (
    <Box sx={{ p: { xs: 2, md: 6 } }}>

      {/* =========================
          MAIN IMAGE
      ========================== */}
      {project.images?.[0] && (
        <Box
          component="img"
          src={project.images[0]}
          alt={imageAlt}
          loading="eager"
          sx={{
            width: "100%",
            height: { xs: 250, md: 400 },
            objectFit: "cover",
            borderRadius: "20px",
            mb: 3,
            display: "block",
          }}
        />
      )}

      {/* =========================
          TITLE
      ========================== */}
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontSize: {
            xs: "28px",
            md: "42px",
          },
          fontWeight: 700,
          mb: 2,
        }}
      >
        {projectTitle}
      </Typography>

      {/* =========================
          CATEGORY
      ========================== */}
      {projectCategory && (
        <Typography color="gray" mb={1}>
          {projectCategory}
        </Typography>
      )}

      {/* =========================
          LOCATION
          DYNAMIC FROM FIREBASE
      ========================== */}
      {projectLocation && (
        <Typography color="gray" mb={2}>
          Location: {projectLocation}
        </Typography>
      )}

      {/* =========================
          DESCRIPTION
      ========================== */}
      {project.description && (
        <Typography
          component="p"
          sx={{
            mb: 4,
            lineHeight: 1.8,
            color: "#444",
          }}
        >
          {project.description}
        </Typography>
      )}

      {/* =========================
          GALLERY
      ========================== */}
      {project.images?.length > 0 && (
        <>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: {
                xs: "24px",
                md: "32px",
              },
              fontWeight: 600,
              mb: 2,
            }}
          >
            Project Gallery
          </Typography>

          <Grid container spacing={2}>
            {project.images.map((img, index) => {
              const galleryAlt = `${projectTitle} - ${projectCategory}${
                projectLocation
                  ? ` project in ${projectLocation}`
                  : " project"
              } by Archaspect, image ${index + 1}`;

              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    component="img"
                    src={img}
                    alt={galleryAlt}
                    loading="lazy"
                    sx={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                      borderRadius: "12px",
                      display: "block",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default ProjectDetail;