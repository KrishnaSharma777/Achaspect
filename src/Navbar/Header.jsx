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

import logo from "../assets/image/Artboard.svg"; // Adjust the path as necessary
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

  const currentPath = location.pathname;

  const getLinkStyle = (path) => ({
    color: currentPath === path ? "blue" : "#0b2747",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    fontWeight: "700",
    fontFamily: "Roboto, sans-serif",
    transition: "all 0.3s ease",
    transform: currentPath === path ? "scale(1.1)" : "scale(1)",
  });

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
              style={{ width: "90%", height: "90%" }}
            />
          </Link>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleMenu}
            sx={{
              display: { xs: "block", md: "none" },
              // color: "#0b2747",
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
                  ...getLinkStyle("/"), // spread the result of your function

                  // color: "#0b2747",
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
                  ...getLinkStyle("/about-us"), // spread the result of your function

                  // color: "#0b2747",
                  display: "flex",
                  alignItems: "center",
                  animation: `${blinkAnimation} 1s infinite`,
                }}
              >
                ABOUT
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/services"
                onClick={scrollToTop}
                style={{
                  ...getLinkStyle("/services"), // spread the result of your function
                  // color: "#0b2747",
                  display: "flex",
                  alignItems: "center",
                  animation: `${blinkAnimation} 1s infinite`,
                }}
              >
                SERVICES
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/portfolio"
                onClick={scrollToTop}
                style={{
                  // color: "#0b2747",
                  display: "flex",
                  alignItems: "center",
                  animation: `${blinkAnimation} 1s infinite`,
                }}
              >
                PORTFOLIO
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/contact-us"
                onClick={scrollToTop}
                style={{
                  ...getLinkStyle("/contact-us"), // spread the result of your function

                  // color: "#0b2747",
                  display: "flex",
                  alignItems: "center",
                  animation: `${blinkAnimation} 1s infinite`,
                }}
              >
                CONTACT US
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/career"
                onClick={scrollToTop}
                style={{
                  ...getLinkStyle("/career"), // spread the result of your function
                  // color: "#0b2747",
                  display: "flex",
                  alignItems: "center",
                  animation: `${blinkAnimation} 1s infinite`,
                }}
              >
                CAREER
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
                ...getLinkStyle("/"), // spread the result of your function
                // color: "#0b2747",
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
                ...getLinkStyle("/about-us"), // spread the result of your function
                // color: "#0b2747",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                padding: "8px",
                transition: "color 0.3s ease",
              }}
            >
              ABOUT
            </Link>
            <Link
              to="/services"
              onClick={scrollToTop}
              style={{
                ...getLinkStyle("/services"), // spread the result of your function
                // color: "#0b2747",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                padding: "8px",
                transition: "color 0.3s ease",
              }}
            >
              SERVICES
            </Link>
            <Link
              to="/portfolio"
              onClick={scrollToTop}
              style={{
                ...getLinkStyle("/portfolio"), // spread the result of your function
                // color: "#0b2747",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                padding: "8px",
                transition: "color 0.3s ease",
              }}
            >
              PORTFOLIO
            </Link>

            <Link
              to="/career"
              onClick={scrollToTop}
              style={{
                ...getLinkStyle("/career"), // spread the result of your function
                // color: "#0b2747",
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
                ...getLinkStyle("/contact-us"), // spread the result of your function
                // color: "#0b2747",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                padding: "8px",
                transition: "color 0.3s ease",
              }}
            >
              CONTACT
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
