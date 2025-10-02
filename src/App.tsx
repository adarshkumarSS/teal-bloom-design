import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
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
import { ApplyIncubation } from "./pages/ApplyIncubation";
import { AdminDashboard } from "./pages/AdminDashboard";
import { UpdateContent } from "./pages/admin/UpdateContent";
import { Applications } from "./pages/admin/Applications";
import { Settings } from "./pages/admin/Settings";
import { RejectedApplications } from "./pages/admin/RejectedApplications";
import { LinkedInPosts } from "./pages/admin/LinkedInPosts";
import { CurrentIncubators } from "./pages/admin/CurrentIncubators";
import { AdminProfile } from "./pages/admin/AdminProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    mode: 'light',
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/apply-incubation" element={<ApplyIncubation />} />
            <Route
              path="/*"
              element={
                <>
                  <Navigation />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/people" element={<People />} />
                    <Route path="/facilities" element={<Facilities />} />
                    <Route path="/program" element={<Program />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/update-content" element={<UpdateContent />} />
                    <Route path="/admin/applications" element={<Applications />} />
                    <Route path="/admin/settings" element={<Settings />} />
                    <Route path="/admin/rejected" element={<RejectedApplications />} />
                    <Route path="/admin/linkedin" element={<LinkedInPosts />} />
                    <Route path="/admin/incubators" element={<CurrentIncubators />} />
                    <Route path="/admin/profile" element={<AdminProfile />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
