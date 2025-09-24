import { motion } from 'framer-motion';
import { Box, Typography, Container } from '@mui/material';
import { CardContainer } from '../components/ui/CardContainer';
import { Loader } from '../components/ui/Loader';
import { ImageSlider } from '../components/ui/ImageSlider';
import { DarkButton } from '../components/ui/DarkButton';

const HeroSection = () => (
  <Box
    sx={{
      height: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden', // Ensure video doesn't overflow
      // Remove background and ::before overlay
    }}
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
      }}
    >
      <source src="/asset/home_asset.mp4" type="video/mp4" />
      {/* Add more <source> tags for other formats if needed */}
      Your browser does not support the video tag.
    </video>
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ textAlign: 'center' }}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Box
            sx={{
              width: 200,
              height: 200,
              margin: '0 auto 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/asset/TCE_TBI.png"
              alt="TBI Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
                filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.35))', // Drop shadow effect
              }}
            />
          </Box>
        </motion.div>

        <Typography
          variant="h3"
          sx={{
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            mb: 3,
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            lineHeight: 1.2,
          }}
        >
          Building entrepreneurial ecosystem towards impactful social ventures
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: 'rgba(255,255,255,0.9)',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            mb: 4,
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          Bridging academics with startups and startup again @ TBI
        </Typography>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <DarkButton size="large" sx={{ fontSize: '1.1rem', px: 4, py: 2 }}>
            Explore Our Journey
          </DarkButton>
        </motion.div>
      </motion.div>
    </Container>
  </Box>
);

const KnowUsBetterSection = () => (
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
            mb: 6,
            color: 'hsl(var(--foreground))',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
          }}
        >
          Know Us Better
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <CardContainer>
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  color: 'hsl(var(--primary))',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                }}
              >
                Our Vision
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'hsl(var(--foreground))',
                  fontFamily: 'Poppins, sans-serif',
                  lineHeight: 1.6,
                }}
              >
                To create a thriving ecosystem that nurtures innovative startups and bridges the gap between academic research and practical business solutions, fostering sustainable growth and social impact.
              </Typography>
            </CardContainer>
          </Box>

          <Box sx={{ flex: 1 }}>
            <CardContainer>
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  color: 'hsl(var(--primary))',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                }}
              >
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'hsl(var(--foreground))',
                  fontFamily: 'Poppins, sans-serif',
                  lineHeight: 1.6,
                }}
              >
                To provide comprehensive support, mentorship, and resources to budding entrepreneurs, enabling them to transform innovative ideas into successful ventures that contribute to economic growth and societal well-being.
              </Typography>
            </CardContainer>
          </Box>
        </Box>
      </motion.div>
    </Container>
  </Box>
);

const AchievementsSection = () => {
  const achievements = [
    { number: 150, suffix: '+', label: 'Startups Incubated' },
    { number: 500, suffix: '+', label: 'Jobs Created' },
    { number: 50, suffix: '+', label: 'Success Stories' },
    { number: 25, suffix: '+', label: 'Awards Won' },
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
              mb: 6,
              color: 'hsl(var(--foreground))',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
            }}
          >
            Our Achievements
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4 }}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CardContainer className="text-center glow-hover">
                  <Loader
                    targetNumber={achievement.number}
                    suffix={achievement.suffix}
                    duration={2000 + index * 500}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      mt: 2,
                      color: 'hsl(var(--foreground))',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    {achievement.label}
                  </Typography>
                </CardContainer>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

interface Logo {
  id: number;
  name: string;
  src: string;
}

interface ScrollingLogosProps {
  logos: Logo[];
  direction?: 'left' | 'right';
}
// ...existing code...
const ScrollingLogos: React.FC<ScrollingLogosProps> = ({ logos, direction = 'left' }) => {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        width: { xs: '100%', md: '1200px' },
        mx: 'auto',
        py: 2,
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          animation: `${direction === 'left' ? 'scrollLeft' : 'scrollRight'} 40s linear infinite`,
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <Box
            key={`${logo.id}-${index}`}
            sx={{
              width: 180,
              height: 120,
              mx: 5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src={logo.src}
              alt={logo.name}
              className="scrolling-logo-img"
              sx={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 4px 24px rgba(255,255,255,0.32)) drop-shadow(0 0px 16px rgba(255,255,255,0.18))',
                display: 'block',
              }}
            />
          </Box>
        ))}
      </Box>

      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          body[data-theme="dark"] .scrolling-logo-img {
            filter: grayscale(1) brightness(0.9) drop-shadow(0 4px 24px rgba(255,255,255,0.32)) drop-shadow(0 0px 16px rgba(255,255,255,0.18));
            transition: filter 0.5s;
          }
          body[data-theme="dark"] .scrolling-logo-img:hover {
            filter: grayscale(0) brightness(1) drop-shadow(0 4px 24px rgba(255,255,255,0.32)) drop-shadow(0 0px 16px rgba(255,255,255,0.18));
            transition: filter 0.5s;
          }
        `}
      </style>
    </Box>
  );
};
// ...existing code...
const PartnersSection = () => {
  const govtLogos: Logo[] = [
    { id: 1, name: 'Ministry of MSME', src: '/asset/ministry_msme.png' },
    { id: 2, name: 'Startup India', src: '/asset/startup_india.png' },
    { id: 3, name: 'NSTEDB', src: '/asset/nstedb.png' },
  ];

  const stateLogos: Logo[] = [
    { id: 4, name: 'Tamil Nadu Govt', src: '/asset/govt_india.png' },
    { id: 5, name: 'TIDCO', src: '/asset/tidco.png' },
    { id: 6, name: 'TNSCST', src: '/asset/tnscst.png' },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'hsl(var(--background))' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 6,
            color: 'hsl(var(--foreground))',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
          }}
        >
          Our Partners
        </Typography>

        {/* Government of India */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 2,
              color: 'hsl(var(--primary))',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
            }}
          >
            Government of India
          </Typography>
          <ScrollingLogos logos={govtLogos} direction="right" />
        </Box>

        {/* Government of Tamil Nadu */}
        <Box>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 2,
              color: 'hsl(var(--primary))',
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

export default PartnersSection;

const SuccessStoriesSection = () => {
  const stories = [
    {
      id: 1,
      src: '/asset/SuccessStoryimages/water.jpg',
      title: 'EcoTech Solutions',
      description: 'Sustainable technology for water purification'
    },
    {
      id: 2,
      src: '/asset/SuccessStoryimages/agriculture.jpg',
      title: 'AgriConnect',
      description: 'Connecting farmers with technology'
    },
    {
      id: 3,
      src: '/asset/SuccessStoryimages/healthcare.png',
      title: 'HealthTech Innovations',
      description: 'Revolutionary healthcare solutions'
    },
    {
      id: 4,
      src: '/asset/SuccessStoryimages/education.jpg',
      title: 'EduTech Platform',
      description: 'Transforming education through technology'
    },
    {
      id: 5,
      src: '/asset/SuccessStoryimages/fintech.jpg',
      title: 'FinTech Solutions',
      description: 'Financial inclusion through innovation'
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'hsl(var(--muted))' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 6,
            color: 'hsl(var(--foreground))',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
          }}
        >
          Success Stories
        </Typography>

        <ImageSlider images={stories} />
      </Container>
    </Box>
  );
};

export const Home: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <KnowUsBetterSection />
      <AchievementsSection />
      <PartnersSection />
      <SuccessStoriesSection />
    </Box>
  );
};