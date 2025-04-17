import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IconButton,
  AppBar,
  Toolbar,
  Box,
  Menu as MUI_Menu,
  MenuItem,
} from "@mui/material";

import logo from "../assets/image/image.svg"; // Adjust the path as necessary
import { Menu } from "@mui/icons-material";
import { keyframes } from "@mui/system";

const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation(); // Detects route changes

  // Function to scroll to top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          //   borderRadius: "50px",
          backdropFilter: "blur(5px)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "nowrap",
            minHeight: "64px",
          }}
        >
          <Link
            to="/"
            onClick={scrollToTop}
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ width: "100px", height: "100px" }}
            />
          </Link>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleMenu}
            sx={{
              display: { xs: "block", md: "none" },
              color: "#0b2747",
              padding: "8px",
            }}
          >
            <Menu />
          </IconButton>
          <MUI_Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiPaper-root": { zIndex: 900 },
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link
                to="/"
                onClick={scrollToTop}
                style={{
                  color: "#0b2747",
                  display: "flex",
                  alignItems: "center",
                  animation: `${blinkAnimation} 1s infinite`,
                }}
              >
                HOME
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/about-us"
                onClick={scrollToTop}
                style={{
                  color: "#0b2747",
                  display: "flex",
                  alignItems: "center",
                  animation: `${blinkAnimation} 1s infinite`,
                }}
              >
                ABOUT US
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/apply-now"
                onClick={scrollToTop}
                style={{
                  color: "#0b2747",
                  display: "flex",
                  alignItems: "center",
                  animation: `${blinkAnimation} 1s infinite`,
                }}
              >
                APPLY NOW
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/repay-now"
                onClick={scrollToTop}
                style={{
                  color: "#0b2747",
                  display: "flex",
                  alignItems: "center",
                  animation: `${blinkAnimation} 1s infinite`,
                }}
              >
                REPAY NOW
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/contact-us"
                onClick={scrollToTop}
                style={{
                  color: "#0b2747",
                  display: "flex",
                  alignItems: "center",
                  animation: `${blinkAnimation} 1s infinite`,
                }}
              >
                CONTACT US
              </Link>
            </MenuItem>
          </MUI_Menu>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              flexGrow: 1,
              ml: 2,
              gap: "1rem",
            }}
          >
            <Link
              to="/"
              onClick={scrollToTop}
              style={{
                color: "#0b2747",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                padding: "8px",
                transition: "color 0.3s ease",
              }}
            >
              HOME
            </Link>
            <Link
              to="/about-us"
              onClick={scrollToTop}
              style={{
                color: "#0b2747",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                padding: "8px",
                transition: "color 0.3s ease",
              }}
            >
              ABOUT US
            </Link>
            <Link
              to="/apply-now"
              onClick={scrollToTop}
              style={{
                color: "#0b2747",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                padding: "8px",
                transition: "color 0.3s ease",
              }}
            >
              APPLY NOW
            </Link>
            <Link
              to="/career"
              onClick={scrollToTop}
              style={{
                color: "#0b2747",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                padding: "8px",
                transition: "color 0.3s ease",
              }}
            >
              CAREER
            </Link>
            <Link
              to="/contact-us"
              onClick={scrollToTop}
              style={{
                color: "#0b2747",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                padding: "8px",
                transition: "color 0.3s ease",
              }}
            >
              CONTACT US
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
