import { useState } from "react";
import { Box, Typography, MenuItem, IconButton } from "@mui/material";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DarkButton } from "@/components/ui/DarkButton";

const pages = [
  "Home",
  "Portfolio",
  "People",
  "Facilities",
  "Program",
  "Media",
  "Blogs",
  "Contact",
];

export const UpdateContent = () => {
  const [selectedPage, setSelectedPage] = useState<string>("Home");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/auth");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "hsl(var(--background))",
        pt: 12,
        px: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "hsl(var(--foreground))",
            }}
          >
            Update Page Content
          </Typography>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <IconButton
              sx={{
                color: "hsl(var(--foreground))",
                "&:hover": { backgroundColor: "hsl(var(--muted))" },
              }}
            >
              <Bell size={24} />
            </IconButton>
            <DarkButton
              startIcon={<LogOut />}
              onClick={handleLogout}
              sx={{ color: "#fff" }}
            >
              Logout
            </DarkButton>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "hsl(var(--card))",
            borderRadius: "var(--radius)",
            p: 4,
            border: "1px solid hsl(var(--border))",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              color: "hsl(var(--foreground))",
              mb: 3,
            }}
          >
            Select Page to Edit
          </Typography>

          <Select value={selectedPage} onValueChange={setSelectedPage}>
            <SelectTrigger className="w-full max-w-xs">
              <SelectValue placeholder="Select a page" />
            </SelectTrigger>
            <SelectContent>
              {pages.map((page) => (
                <SelectItem key={page} value={page}>
                  {page}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Box sx={{ mt: 4 }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Poppins, sans-serif",
                color: "hsl(var(--muted-foreground))",
              }}
            >
              Currently editing: <strong>{selectedPage}</strong>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Poppins, sans-serif",
                color: "hsl(var(--muted-foreground))",
                mt: 2,
              }}
            >
              Content editor will be displayed here...
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
