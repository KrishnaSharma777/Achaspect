import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  IconButton,
  Fade,
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
} from "@mui/material";
import { Email, Person, CloudUpload } from "@mui/icons-material";
import Swal from "sweetalert2";

const ApplyNowModal = ({ open, handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [resumeError, setResumeError] = useState(false);

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
    setResumeError(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = true;
    if (name.trim() === "") {
      setNameError(true);
      isValid = false;
    } else setNameError(false);

    if (email.trim() === "") {
      setEmailError(true);
      isValid = false;
    } else setEmailError(false);

    if (!resume) {
      setResumeError(true);
      isValid = false;
    } else setResumeError(false);

    if (!isValid) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete form",
        text: "Please fill in all the required fields.",
      });
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("resume", resume);

    try {
      const response = await fetch("http://localhost:5000/apply", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: result.message || "Application submitted successfully!",
        });
        handleClose(); // Close the modal after success
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: result.message || "Error submitting application.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error submitting application.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        Apply Now
      </DialogTitle>
      <DialogContent>
        <Fade in>
          <Card elevation={3}>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      error={nameError}
                      helperText={nameError ? "Full Name is required" : ""}
                      InputProps={{
                        startAdornment: (
                          <IconButton sx={{ mr: 1 }}>
                            <Person />
                          </IconButton>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      error={emailError}
                      helperText={emailError ? "Email is required" : ""}
                      InputProps={{
                        startAdornment: (
                          <IconButton sx={{ mr: 1 }}>
                            <Email />
                          </IconButton>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      accept=".pdf,.doc,.docx"
                      id="resume-upload"
                      type="file"
                      onChange={handleResumeChange}
                      style={{ display: "none" }}
                    />
                    <label htmlFor="resume-upload">
                      <Button
                        variant="outlined"
                        component="span"
                        startIcon={<CloudUpload />}
                        fullWidth
                        color={resumeError ? "error" : "primary"}
                      >
                        Upload Resume
                      </Button>
                    </label>
                    {resume && (
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        Selected: {resume.name}
                      </Typography>
                    )}
                    {resumeError && (
                      <Typography color="error" variant="body2">
                        Resume is required
                      </Typography>
                    )}
                  </Grid>
                </Grid>
                <Box sx={{ mt: 3, textAlign: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} /> : "Submit"}
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Fade>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyNowModal;
