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
import { Contact } from "./pages/Contact";
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
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/people" element={<People />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/program" element={<Program />} />
            <Route path="/media" element={<Media />} />
            <Route path="/blogs" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
