import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppBar, Toolbar, Typography, Box, IconButton, Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import { LightMode, DarkMode, Login } from '@mui/icons-material';
import { DarkButton } from './ui/DarkButton';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Poppins, sans-serif',
}));

const NavLink = styled(Link)(({ theme }) => ({
  color: 'hsl(var(--foreground))',
  textDecoration: 'none',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 500,
  padding: '8px 16px',
  borderRadius: 'var(--radius)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'hsl(var(--primary) / 0.1)',
    color: 'hsl(var(--primary))',
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
}));

const LogoCircle = styled(Box)(({ theme }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, hsl(var(--mughal-green)), hsl(var(--verdigris)))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '18px',
}));

export const Navigation: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check for system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const navItems = [
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'People', path: '/people' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Program', path: '/program' },
    { label: 'Media', path: '/media' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <StyledAppBar 
        position="fixed" 
        elevation={0}
        sx={{
          background: scrolled 
            ? 'rgba(255, 255, 255, 0.15)' 
            : 'rgba(255, 255, 255, 0.05)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <LogoContainer>
              <LogoCircle>
                TBI
              </LogoCircle>
              <Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'hsl(var(--mughal-green))',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    lineHeight: 1,
                    fontSize: '18px'
                  }}
                >
                  Thiagarajar
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'hsl(var(--foreground))',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    lineHeight: 1,
                    fontSize: '14px'
                  }}
                >
                  Business Incubation
                </Typography>
              </Box>
            </LogoContainer>
          </Link>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navItems.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path}
                style={{
                  backgroundColor: location.pathname === item.path 
                    ? 'hsl(var(--primary) / 0.1)' 
                    : 'transparent',
                  color: location.pathname === item.path 
                    ? 'hsl(var(--primary))' 
                    : 'hsl(var(--foreground))',
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton 
              onClick={() => setIsDarkMode(!isDarkMode)}
              sx={{ color: 'hsl(var(--foreground))' }}
            >
              {isDarkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
            <DarkButton startIcon={<Login />}>
              Login
            </DarkButton>
          </Box>
        </Toolbar>
      </StyledAppBar>
    </motion.div>
  );
};