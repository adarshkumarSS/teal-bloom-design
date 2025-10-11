import { useState } from "react";
import { Box, Typography, IconButton, TextField, Button } from "@mui/material";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, LogOut, ArrowLeft, Upload, X } from "lucide-react";
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

  // Home page content states
  const [vision, setVision] = useState("To create a thriving ecosystem that nurtures innovative startups and bridges the gap between academic research and practical business solutions, fostering sustainable growth and social impact.");
  const [mission, setMission] = useState("To provide comprehensive support, mentorship, and resources to budding entrepreneurs, enabling them to transform innovative ideas into successful ventures that contribute to economic growth and societal well-being.");
  
  const [achievements, setAchievements] = useState([
    { number: 150, suffix: "+", label: "Startups Incubated" },
    { number: 500, suffix: "+", label: "Jobs Created" },
    { number: 50, suffix: "+", label: "Success Stories" },
    { number: 25, suffix: "+", label: "Awards Won" },
  ]);

  const [govtIndiaLogos, setGovtIndiaLogos] = useState([
    { name: "Ministry of MSME", src: "/asset/ministry_msme.png" },
    { name: "Startup India", src: "/asset/startup_india.png" },
    { name: "NSTEDB", src: "/asset/nstedb.png" },
  ]);

  const [govtTNLogos, setGovtTNLogos] = useState([
    { name: "Tamil Nadu Govt", src: "/asset/govt_india.png" },
    { name: "TIDCO", src: "/asset/tidco.png" },
    { name: "TNSCST", src: "/asset/tnscst.png" },
  ]);

  const [successStories, setSuccessStories] = useState([
    {
      title: "Revolutionary Water Purification",
      description: "EcoTech Solutions developed an innovative water purification system that has provided clean water access to over 50,000 rural households across Tamil Nadu.",
      image: "/asset/SuccessStoryimages/water.jpg",
      sector: "Environmental Technology",
      impact: "50,000+ households served",
    },
    {
      title: "Smart Agriculture Platform",
      description: "AgriConnect created an IoT-based platform that has helped 10,000+ farmers increase their crop yields by 40% through data-driven farming techniques.",
      image: "/asset/SuccessStoryimages/agriculture.jpg",
      sector: "AgriTech",
      impact: "40% yield increase for farmers",
    },
    {
      title: "Rural Healthcare Innovation",
      description: "HealthTech Innovations launched AI-powered diagnostic tools that have improved healthcare access in 200+ rural health centers.",
      image: "/asset/SuccessStoryimages/healthcare.png",
      sector: "HealthTech",
      impact: "200+ health centers equipped",
    },
    {
      title: "Digital Financial Inclusion",
      description: "FinTech Solutions created a digital banking platform that has brought banking services to 25,000+ unbanked individuals in rural areas.",
      image: "/asset/SuccessStoryimages/fintech.jpg",
      sector: "FinTech",
      impact: "25,000+ people financially included",
    },
    {
      title: "Educational Technology Revolution",
      description: "EduTech Platform developed personalized learning solutions that have improved learning outcomes for 15,000+ students across Tamil Nadu.",
      image: "/asset/SuccessStoryimages/education.jpg",
      sector: "EdTech",
      impact: "15,000+ students impacted",
    },
  ]);

  const handleLogout = () => {
    navigate("/auth");
  };

  const handleBack = () => {
    navigate("/admin");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: string, index?: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        
        if (type === "govtIndia" && index !== undefined) {
          const newLogos = [...govtIndiaLogos];
          newLogos[index].src = imageUrl;
          setGovtIndiaLogos(newLogos);
        } else if (type === "govtTN" && index !== undefined) {
          const newLogos = [...govtTNLogos];
          newLogos[index].src = imageUrl;
          setGovtTNLogos(newLogos);
        } else if (type === "successStory" && index !== undefined) {
          const newStories = [...successStories];
          newStories[index].image = imageUrl;
          setSuccessStories(newStories);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAchievementChange = (index: number, field: string, value: any) => {
    const newAchievements = [...achievements];
    newAchievements[index] = { ...newAchievements[index], [field]: value };
    setAchievements(newAchievements);
  };

  const handleSuccessStoryChange = (index: number, field: string, value: any) => {
    const newStories = [...successStories];
    newStories[index] = { ...newStories[index], [field]: value };
    setSuccessStories(newStories);
  };

  const handleSave = () => {
    console.log("Saving content...", {
      vision,
      mission,
      achievements,
      govtIndiaLogos,
      govtTNLogos,
      successStories,
    });
    // TODO: Implement actual save functionality
    alert("Content saved successfully!");
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              onClick={handleBack}
              sx={{
                color: "hsl(var(--foreground))",
                "&:hover": { backgroundColor: "hsl(var(--muted))" },
              }}
            >
              <ArrowLeft size={24} />
            </IconButton>
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
          </Box>

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

          {selectedPage === "Home" && (
            <Box sx={{ mt: 4 }}>
              {/* Vision & Mission */}
              <Typography variant="h5" sx={{ fontFamily: "Poppins", fontWeight: 600, color: "hsl(var(--foreground))", mb: 3 }}>
                Vision & Mission
              </Typography>
              
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Vision"
                value={vision}
                onChange={(e) => setVision(e.target.value)}
                sx={{ mb: 3 }}
              />
              
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Mission"
                value={mission}
                onChange={(e) => setMission(e.target.value)}
                sx={{ mb: 4 }}
              />

              {/* Achievements */}
              <Typography variant="h5" sx={{ fontFamily: "Poppins", fontWeight: 600, color: "hsl(var(--foreground))", mb: 3 }}>
                Our Achievements
              </Typography>
              
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 4 }}>
                {achievements.map((achievement, index) => (
                  <Box key={index} sx={{ p: 2, border: "1px solid hsl(var(--border))", borderRadius: "var(--radius)" }}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Number"
                      value={achievement.number}
                      onChange={(e) => handleAchievementChange(index, "number", parseInt(e.target.value))}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Suffix"
                      value={achievement.suffix}
                      onChange={(e) => handleAchievementChange(index, "suffix", e.target.value)}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Label"
                      value={achievement.label}
                      onChange={(e) => handleAchievementChange(index, "label", e.target.value)}
                    />
                  </Box>
                ))}
              </Box>

              {/* Partners - Government of India */}
              <Typography variant="h5" sx={{ fontFamily: "Poppins", fontWeight: 600, color: "hsl(var(--foreground))", mb: 3 }}>
                Partners - Government of India
              </Typography>
              
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 3, mb: 4 }}>
                {govtIndiaLogos.map((logo, index) => (
                  <Box key={index} sx={{ p: 2, border: "1px solid hsl(var(--border))", borderRadius: "var(--radius)" }}>
                    <img src={logo.src} alt={logo.name} style={{ width: "100%", height: "120px", objectFit: "contain", marginBottom: "12px" }} />
                    <TextField
                      fullWidth
                      label="Name"
                      value={logo.name}
                      onChange={(e) => {
                        const newLogos = [...govtIndiaLogos];
                        newLogos[index].name = e.target.value;
                        setGovtIndiaLogos(newLogos);
                      }}
                      sx={{ mb: 2 }}
                    />
                    <input
                      accept="image/*"
                      style={{ display: "none" }}
                      id={`govt-india-upload-${index}`}
                      type="file"
                      onChange={(e) => handleImageUpload(e, "govtIndia", index)}
                    />
                    <label htmlFor={`govt-india-upload-${index}`}>
                      <Button
                        variant="outlined"
                        component="span"
                        fullWidth
                        startIcon={<Upload size={16} />}
                      >
                        Upload Image
                      </Button>
                    </label>
                  </Box>
                ))}
              </Box>

              {/* Partners - Government of Tamil Nadu */}
              <Typography variant="h5" sx={{ fontFamily: "Poppins", fontWeight: 600, color: "hsl(var(--foreground))", mb: 3 }}>
                Partners - Government of Tamil Nadu
              </Typography>
              
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 3, mb: 4 }}>
                {govtTNLogos.map((logo, index) => (
                  <Box key={index} sx={{ p: 2, border: "1px solid hsl(var(--border))", borderRadius: "var(--radius)" }}>
                    <img src={logo.src} alt={logo.name} style={{ width: "100%", height: "120px", objectFit: "contain", marginBottom: "12px" }} />
                    <TextField
                      fullWidth
                      label="Name"
                      value={logo.name}
                      onChange={(e) => {
                        const newLogos = [...govtTNLogos];
                        newLogos[index].name = e.target.value;
                        setGovtTNLogos(newLogos);
                      }}
                      sx={{ mb: 2 }}
                    />
                    <input
                      accept="image/*"
                      style={{ display: "none" }}
                      id={`govt-tn-upload-${index}`}
                      type="file"
                      onChange={(e) => handleImageUpload(e, "govtTN", index)}
                    />
                    <label htmlFor={`govt-tn-upload-${index}`}>
                      <Button
                        variant="outlined"
                        component="span"
                        fullWidth
                        startIcon={<Upload size={16} />}
                      >
                        Upload Image
                      </Button>
                    </label>
                  </Box>
                ))}
              </Box>

              {/* Success Stories */}
              <Typography variant="h5" sx={{ fontFamily: "Poppins", fontWeight: 600, color: "hsl(var(--foreground))", mb: 3 }}>
                Success Stories
              </Typography>
              
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 4 }}>
                {successStories.map((story, index) => (
                  <Box key={index} sx={{ p: 3, border: "1px solid hsl(var(--border))", borderRadius: "var(--radius)" }}>
                    <img src={story.image} alt={story.title} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px", marginBottom: "16px" }} />
                    
                    <TextField
                      fullWidth
                      label="Title"
                      value={story.title}
                      onChange={(e) => handleSuccessStoryChange(index, "title", e.target.value)}
                      sx={{ mb: 2 }}
                    />
                    
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      label="Description"
                      value={story.description}
                      onChange={(e) => handleSuccessStoryChange(index, "description", e.target.value)}
                      sx={{ mb: 2 }}
                    />
                    
                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 2 }}>
                      <TextField
                        fullWidth
                        label="Sector"
                        value={story.sector}
                        onChange={(e) => handleSuccessStoryChange(index, "sector", e.target.value)}
                      />
                      <TextField
                        fullWidth
                        label="Impact"
                        value={story.impact}
                        onChange={(e) => handleSuccessStoryChange(index, "impact", e.target.value)}
                      />
                    </Box>
                    
                    <input
                      accept="image/*"
                      style={{ display: "none" }}
                      id={`success-story-upload-${index}`}
                      type="file"
                      onChange={(e) => handleImageUpload(e, "successStory", index)}
                    />
                    <label htmlFor={`success-story-upload-${index}`}>
                      <Button
                        variant="outlined"
                        component="span"
                        fullWidth
                        startIcon={<Upload size={16} />}
                      >
                        Upload Image
                      </Button>
                    </label>
                  </Box>
                ))}
              </Box>

              {/* Save Button */}
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
                <DarkButton onClick={handleSave} sx={{ px: 4, py: 1.5 }}>
                  Save Changes
                </DarkButton>
              </Box>
            </Box>
          )}

          {selectedPage === "Portfolio" && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" sx={{ fontFamily: "Poppins", fontWeight: 600, color: "hsl(var(--foreground))", mb: 3 }}>
                Portfolio Content
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Portfolio Description"
                placeholder="Add portfolio description..."
                sx={{ mb: 3 }}
              />
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <DarkButton onClick={handleSave}>Save Changes</DarkButton>
              </Box>
            </Box>
          )}

          {selectedPage === "People" && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" sx={{ fontFamily: "Poppins", fontWeight: 600, color: "hsl(var(--foreground))", mb: 3 }}>
                People Content
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Team Description"
                placeholder="Add team description..."
                sx={{ mb: 3 }}
              />
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <DarkButton onClick={handleSave}>Save Changes</DarkButton>
              </Box>
            </Box>
          )}

          {selectedPage === "Facilities" && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" sx={{ fontFamily: "Poppins", fontWeight: 600, color: "hsl(var(--foreground))", mb: 3 }}>
                Facilities Content
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Facilities Description"
                placeholder="Add facilities description..."
                sx={{ mb: 3 }}
              />
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <DarkButton onClick={handleSave}>Save Changes</DarkButton>
              </Box>
            </Box>
          )}

          {selectedPage === "Program" && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" sx={{ fontFamily: "Poppins", fontWeight: 600, color: "hsl(var(--foreground))", mb: 3 }}>
                Program Content
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Program Description"
                placeholder="Add program description..."
                sx={{ mb: 3 }}
              />
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <DarkButton onClick={handleSave}>Save Changes</DarkButton>
              </Box>
            </Box>
          )}

          {selectedPage === "Media" && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" sx={{ fontFamily: "Poppins", fontWeight: 600, color: "hsl(var(--foreground))", mb: 3 }}>
                Media Content
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Media Description"
                placeholder="Add media description..."
                sx={{ mb: 3 }}
              />
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <DarkButton onClick={handleSave}>Save Changes</DarkButton>
              </Box>
            </Box>
          )}

          {selectedPage === "Blogs" && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" sx={{ fontFamily: "Poppins", fontWeight: 600, color: "hsl(var(--foreground))", mb: 3 }}>
                Blogs Content
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Blog Description"
                placeholder="Add blog description..."
                sx={{ mb: 3 }}
              />
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <DarkButton onClick={handleSave}>Save Changes</DarkButton>
              </Box>
            </Box>
          )}

          {selectedPage === "Contact" && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" sx={{ fontFamily: "Poppins", fontWeight: 600, color: "hsl(var(--foreground))", mb: 3 }}>
                Contact Content
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Contact Description"
                placeholder="Add contact description..."
                sx={{ mb: 3 }}
              />
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <DarkButton onClick={handleSave}>Save Changes</DarkButton>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
