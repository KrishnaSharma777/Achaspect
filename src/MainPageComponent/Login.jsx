

import { useState } from "react";
import { loginUser } from "../auth";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      navigate("/dashboard");
    } catch (err) {
      alert("Login Failed ❌");
    }
  };

  return (
    <Box sx={{ p: 5, maxWidth: 400, margin: "auto" }}>
      <Typography variant="h5">Admin Login</Typography>

      <TextField
        fullWidth
        label="Email"
        sx={{ my: 2 }}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        fullWidth
        type="password"
        label="Password"
        sx={{ my: 2 }}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button fullWidth variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;