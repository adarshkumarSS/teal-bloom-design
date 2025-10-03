import React, { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { People } from "./pages/People";
import { Facilities } from "./pages/Facilities";
import { Program } from "./pages/Program";
import { Media } from "./pages/Media";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";
import { Auth } from "./pages/Auth";
import { AdminDashboard } from "./pages/AdminDashboard";
import { UpdateContent } from "./pages/admin/UpdateContent";
import { Applications } from "./pages/admin/Applications";
import { Settings } from "./pages/admin/Settings";
import { RejectedApplications } from "./pages/admin/RejectedApplications";
import { LinkedInPosts } from "./pages/admin/LinkedInPosts";
import { CurrentIncubators } from "./pages/admin/CurrentIncubators";
import { AdminProfile } from "./pages/admin/AdminProfile";


import { ApplyIncubation } from "./pages/ApplyIncubation";
import NotFound from "./pages/NotFound";
import CubeCarousel from "./pages/Test";
import CommonLoader from "./components/CommonLoader"; // ✅ your loader component

const queryClient = new QueryClient();

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    mode: "light",
  },
});

// Wrapper so we can use useLocation
const AppContent = () => {
  const location = useLocation();
  const hideNav = ["/auth", "/apply-incubation"].includes(location.pathname);

  const [loading, setLoading] = useState(location.pathname === "/");

  useEffect(() => {
    if (location.pathname === "/") {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  if (loading) return <CommonLoader />;

  return (
    <>
      {!hideNav && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/people" element={<People />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/program" element={<Program />} />
        <Route path="/media" element={<Media />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/apply-incubation" element={<ApplyIncubation />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/update-content" element={<UpdateContent />} />
        <Route path="/admin/applications" element={<Applications />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/rejected" element={<RejectedApplications />} />
        <Route path="/admin/linkedin" element={<LinkedInPosts />} />
        <Route path="/admin/incubators" element={<CurrentIncubators />} />
        <Route path="/admin/profile" element={<AdminProfile />} />


        <Route path="*" element={<NotFound />} />
        <Route path="/test" element={<CubeCarousel />} />
      </Routes>
    </>
  );
};


const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
