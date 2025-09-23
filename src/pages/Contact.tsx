import { motion } from 'framer-motion';
import { Box, Typography, Container } from '@mui/material';
import { CardContainer } from '../components/ui/CardContainer';

export const Contact: React.FC = () => {
  return (
    <Box sx={{ pt: 12, pb: 8, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              mb: 6,
              color: 'hsl(var(--foreground))',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
            }}
          >
            Contact Us
          </Typography>
          
          <CardContainer>
            <Typography 
              variant="body1" 
              align="center"
              sx={{ 
                color: 'hsl(var(--muted-foreground))',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.1rem',
              }}
            >
              Contact page content coming soon...
            </Typography>
          </CardContainer>
        </motion.div>
      </Container>
    </Box>
  );
};