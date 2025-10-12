import React, { useEffect, useState } from "react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { DarkButton } from "./ui/DarkButton";
import { motion } from "framer-motion";
import { Moon, Sun, Bell, LogOut, LogIn } from "lucide-react";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "hsl(var(--background) / 0.8)",
  backdropFilter: "blur(20px)",
  borderBottom: "1px solid hsl(var(--border))",
  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
}));

const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const AdminNavigation: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <StyledAppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Toolbar sx={{ minHeight: "80px" }}>
          <LogoContainer sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none" }}>
              <img
                src="/asset/TCE_TBI.png"
                alt="TBI Logo"
                style={{
                  height: "50px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
              <Box
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "hsl(var(--foreground))",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Thiagarajar College of Engineering
              </Box>
            </Link>
          </LogoContainer>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              onClick={toggleDarkMode}
              sx={{
                color: "hsl(var(--foreground))",
                "&:hover": {
                  backgroundColor: "hsl(var(--muted))",
                },
              }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </IconButton>

            <IconButton
              sx={{
                color: "hsl(var(--foreground))",
                "&:hover": {
                  backgroundColor: "hsl(var(--muted))",
                },
              }}
            >
              <Bell size={20} />
            </IconButton>

            <Link to="/auth" style={{ textDecoration: "none" }}>
              <IconButton
                sx={{
                  color: "hsl(var(--foreground))",
                  "&:hover": {
                    backgroundColor: "hsl(var(--muted))",
                  },
                }}
              >
                <LogIn size={20} />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </StyledAppBar>
    </motion.div>
  );
};
