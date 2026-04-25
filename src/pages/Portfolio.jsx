import { useState } from "react";
import { useGetProjectsQuery } from "../redux/api/projectApi";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const Portfolio = () => {
  const { data = [], isLoading } = useGetProjectsQuery();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(6);

  // 🔥 FILTER
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

      {/* 🔍 SEARCH */}
      <TextField
        fullWidth
        placeholder="Search project..."
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* 🔘 FILTER */}
      {categories.map((cat) => (
        <Button key={cat} onClick={() => setCategory(cat)}>
          {cat}
        </Button>
      ))}

      {/* GRID */}
      <Grid container spacing={3} mt={2}>
        {filtered.slice(0, visible).map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <Box>
              <img
                src={p.images?.[0]}
                style={{ width: "100%", height: 200 }}
              />
              <Typography>{p.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* 🔥 LOAD MORE */}
      {visible < filtered.length && (
        <Button onClick={() => setVisible((prev) => prev + 3)}>
          Load More
        </Button>
      )}
    </Box>
  );
};

export default Portfolio;