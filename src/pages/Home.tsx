import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Grid, Typography } from '@mui/material';
import { CardContainer } from '@/components/ui/CardContainer';
import { Loader } from '@/components/ui/Loader';
import { SuccessStoryCarousel } from '@/components/ui/SuccessStoryCarousel';
import { HashLoader3D } from '@/components/ui/3DHashLoader';
import { ScrollingLogos } from '@/components/ui/ScrollingLogos';
import { DarkButton } from '@/components/ui/DarkButton';

const HeroSection = () => (
  <Box
    sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, hsl(var(--background)), hsl(var(--muted)))',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <video
      autoPlay
      muted
      loop
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -2,
      }}
    >
      <source src="/asset/home_asset.mp4" type="video/mp4" />
    </video>
    
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'hsl(var(--background) / 0.8)',
        zIndex: -1,
      }}
    />

    <Container maxWidth="lg">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={8}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography 
              variant="h1" 
              sx={{ 
                mb: 3,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                color: 'hsl(var(--foreground))',
                fontSize: { xs: '2.5rem', md: '4rem' },
                lineHeight: 1.2,
              }}
            >
              Transforming Ideas Into 
              <span className="hero-text"> Innovation</span>
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 4,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                color: 'hsl(var(--muted-foreground))',
                maxWidth: '600px',
                lineHeight: 1.8,
              }}
            >
              At Thiagarajar Business Incubation Centre, we nurture promising startups with cutting-edge resources, 
              expert mentorship, and strategic partnerships to create tomorrow's industry leaders.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              <DarkButton>
                Start Your Journey
              </DarkButton>
              
              <motion.button
                className="glass-card"
                style={{
                  padding: '16px 32px',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  color: 'hsl(var(--foreground))',
                  cursor: 'pointer',
                  border: 'none',
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: 'var(--shadow-glow)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </Box>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <CardContainer>
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 3,
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    color: 'hsl(var(--foreground))',
                  }}
                >
                  Our Impact
                </Typography>
                
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
                  <Box>
                    <Loader targetNumber={150} suffix="+" />
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mt: 1,
                        color: 'hsl(var(--muted-foreground))',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      Startups Incubated
                    </Typography>
                  </Box>
                  
                  <Box>
                    <Loader targetNumber={85} suffix="%" />
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mt: 1,
                        color: 'hsl(var(--muted-foreground))',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      Success Rate
                    </Typography>
                  </Box>
                  
                  <Box>
                    <Loader targetNumber={50} suffix="Cr" />
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mt: 1,
                        color: 'hsl(var(--muted-foreground))',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      Funding Raised
                    </Typography>
                  </Box>
                  
                  <Box>
                    <Loader targetNumber={500} suffix="+" />
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mt: 1,
                        color: 'hsl(var(--muted-foreground))',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      Jobs Created
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContainer>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const KnowUsBetterSection = () => (
  <Box sx={{ py: 8, backgroundColor: 'hsl(var(--muted))' }}>
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography 
          variant="h3" 
          align="center"
          sx={{ 
            mb: 8,
            color: 'hsl(var(--foreground))',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
          }}
        >
          Know Us Better
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <CardContainer>
              <Box sx={{ p: 4, textAlign: 'center' }}>
                <Box 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    mx: 'auto', 
                    mb: 3,
                    backgroundColor: 'hsl(var(--primary))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                  }}
                >
                  🚀
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2,
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    color: 'hsl(var(--foreground))',
                  }}
                >
                  Innovation Hub
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'hsl(var(--muted-foreground))',
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: 1.6,
                  }}
                >
                  State-of-the-art facilities and cutting-edge technology to bring your innovative ideas to life.
                </Typography>
              </Box>
            </CardContainer>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <CardContainer>
              <Box sx={{ p: 4, textAlign: 'center' }}>
                <Box 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    mx: 'auto', 
                    mb: 3,
                    backgroundColor: 'hsl(var(--primary))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                  }}
                >
                  🎯
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2,
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    color: 'hsl(var(--foreground))',
                  }}
                >
                  Expert Mentorship
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'hsl(var(--muted-foreground))',
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: 1.6,
                  }}
                >
                  Learn from industry veterans and successful entrepreneurs who guide you through every step.
                </Typography>
              </Box>
            </CardContainer>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <CardContainer>
              <Box sx={{ p: 4, textAlign: 'center' }}>
                <Box 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    mx: 'auto', 
                    mb: 3,
                    backgroundColor: 'hsl(var(--primary))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                  }}
                >
                  💰
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2,
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    color: 'hsl(var(--foreground))',
                  }}
                >
                  Funding Support
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'hsl(var(--muted-foreground))',
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: 1.6,
                  }}
                >
                  Access to investors and funding opportunities to scale your startup to new heights.
                </Typography>
              </Box>
            </CardContainer>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  </Box>
);

const AchievementsSection = () => {
  const achievements = [
    { number: 150, suffix: '+', label: 'Startups Incubated' },
    { number: 85, suffix: '%', label: 'Success Rate' },
    { number: 50, suffix: 'Cr', label: 'Funding Raised' },
    { number: 500, suffix: '+', label: 'Jobs Created' },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'hsl(var(--background))' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="h3" 
            align="center"
            sx={{ 
              mb: 8,
              color: 'hsl(var(--foreground))',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
            }}
          >
            Our Achievements
          </Typography>
          
          <Grid container spacing={4}>
            {achievements.map((achievement, index) => (
              <Grid xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CardContainer>
                    <Box sx={{ p: 4, textAlign: 'center' }}>
                      <Loader 
                        targetNumber={achievement.number} 
                        suffix={achievement.suffix} 
                        duration={2000}
                      />
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          mt: 2,
                          color: 'hsl(var(--muted-foreground))',
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 500,
                        }}
                      >
                        {achievement.label}
                      </Typography>
                    </Box>
                  </CardContainer>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

const PartnersSection = () => {
  const nationalLogos = [
    { id: 1, name: 'Government of India', src: '/asset/govt_india.png' },
    { id: 2, name: 'Ministry MSME', src: '/asset/ministry_msme.png' },
    { id: 3, name: 'Startup India', src: '/asset/startup_india.png' },
    { id: 4, name: 'NSTEDB', src: '/asset/nstedb.webp' },
  ];

  const stateLogos = [
    { id: 5, name: 'TCE TBI', src: '/asset/TCE_TBI.png' },
    { id: 6, name: 'TIDCO', src: '/asset/tidco.png' },
    { id: 7, name: 'TNSCST', src: '/asset/tnscst.png' },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'hsl(var(--accent))' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h4" 
            align="center"
            sx={{ 
              mb: 4,
              color: 'hsl(var(--accent-foreground))',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
            }}
          >
            Government of India
          </Typography>
          <ScrollingLogos logos={nationalLogos} direction="right" />
        </Box>
        
        <Box>
          <Typography 
            variant="h4" 
            align="center"
            sx={{ 
              mb: 4,
              color: 'hsl(var(--accent-foreground))',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
            }}
          >
            Government of Tamil Nadu
          </Typography>
          <ScrollingLogos logos={stateLogos} direction="left" />
        </Box>
      </Container>
    </Box>
  );
};

const SuccessStoriesSection = () => {
  const successStories = [
    {
      id: 1,
      title: 'Revolutionary Water Purification',
      description: 'EcoTech Solutions developed an innovative water purification system that has provided clean water access to over 50,000 rural households across Tamil Nadu.',
      image: '/asset/SuccessStoryimages/water.jpg',
      sector: 'Environmental Technology',
      impact: '50,000+ households served'
    },
    {
      id: 2,
      title: 'Smart Agriculture Platform',
      description: 'AgriConnect created an IoT-based platform that has helped 10,000+ farmers increase their crop yields by 40% through data-driven farming techniques.',
      image: '/asset/SuccessStoryimages/agriculture.jpg',
      sector: 'AgriTech',
      impact: '40% yield increase for farmers'
    },
    {
      id: 3,
      title: 'Rural Healthcare Innovation',
      description: 'HealthTech Innovations launched AI-powered diagnostic tools that have improved healthcare access in 200+ rural health centers.',
      image: '/asset/SuccessStoryimages/healthcare.png',
      sector: 'HealthTech',
      impact: '200+ health centers equipped'
    },
    {
      id: 4,
      title: 'Digital Financial Inclusion',
      description: 'FinTech Solutions created a digital banking platform that has brought banking services to 25,000+ unbanked individuals in rural areas.',
      image: '/asset/SuccessStoryimages/fintech.jpg',
      sector: 'FinTech',
      impact: '25,000+ people financially included'
    },
    {
      id: 5,
      title: 'Educational Technology Revolution',
      description: 'EduTech Platform developed personalized learning solutions that have improved learning outcomes for 15,000+ students across Tamil Nadu.',
      image: '/asset/SuccessStoryimages/education.jpg',
      sector: 'EdTech',
      impact: '15,000+ students impacted'
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'hsl(var(--muted))' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="h3" 
            align="center"
            sx={{ 
              mb: 8,
              color: 'hsl(var(--foreground))',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
            }}
          >
            Success Stories
          </Typography>
          
          <SuccessStoryCarousel stories={successStories} />
        </motion.div>
      </Container>
    </Box>
  );
};

export const Home: React.FC = () => {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader && (
        <HashLoader3D onComplete={() => setShowLoader(false)} duration={4000} />
      )}
      <Box>
        <HeroSection />
        <KnowUsBetterSection />
        <AchievementsSection />
        <PartnersSection />
        <SuccessStoriesSection />
      </Box>
    </>
  );
};