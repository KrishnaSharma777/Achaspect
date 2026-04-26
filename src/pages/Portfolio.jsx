import { useState } from "react";
import { useGetProjectsQuery } from "../redux/api/projectApi";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const { data = [] } = useGetProjectsQuery();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(6);

  const filtered = data.filter((p) => {
    return (
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || p.category === category)
    );
  });

  const categories = ["All", ...new Set(data.map((p) => p.category))];

  return (
    <Box p={4}>
      <Typography variant="h4" mb={2}>
        My Projects 🚀
      </Typography>

      <TextField
        fullWidth
        placeholder="Search project..."
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />

      {categories.map((cat) => (
        <Button key={cat} onClick={() => setCategory(cat)}>
          {cat}
        </Button>
      ))}

      <Grid container spacing={3} mt={2}>
        {filtered.slice(0, visible).map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <Box
              sx={{
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
              onClick={() => navigate(`/project/${p.id}`)}
            >
              <Box sx={{ position: "relative" }}>
                <img
                  src={p.images?.[0]}
                  style={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />

                {/* CATEGORY OVER IMAGE */}
                <Typography
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    background: "#000000aa",
                    color: "#fff",
                    px: 1,
                    borderRadius: "5px",
                    fontSize: 12,
                  }}
                >
                  {p.category}
                </Typography>
              </Box>

              {/* TITLE BELOW */}
              <Typography mt={1} fontWeight="bold">
                {p.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {visible < filtered.length && (
        <Button onClick={() => setVisible((prev) => prev + 3)}>
          Load More
        </Button>
      )}
    </Box>
  );
};

export default Portfolio;