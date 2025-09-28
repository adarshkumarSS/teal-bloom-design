import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { CardContainer } from './CardContainer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface SuccessStory {
  id: number;
  title: string;
  description: string;
  image: string;
  sector: string;
  impact: string;
}

interface SuccessStoryCarouselProps {
  stories: SuccessStory[];
}

export const SuccessStoryCarousel: React.FC<SuccessStoryCarouselProps> = ({ stories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Box sx={{ position: 'relative', maxWidth: '100%', mx: 'auto' }}>
      {/* Main Carousel */}
      <Box sx={{ overflow: 'hidden', borderRadius: 'var(--radius)' }}>
        <motion.div
          style={{
            display: 'flex',
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          animate={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {stories.map((story, index) => (
            <Box
              key={story.id}
              sx={{
                minWidth: '100%',
                px: 2,
              }}
            >
              <CardContainer>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                  <Box sx={{ flex: 1 }}>
                    <motion.img
                      src={story.image}
                      alt={story.title}
                      style={{
                        width: '100%',
                        height: 300,
                        objectFit: 'cover',
                        borderRadius: 'var(--radius)',
                      }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </Box>
                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 2,
                        color: 'hsl(var(--foreground))',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      {story.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        color: 'hsl(var(--primary))',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      {story.sector}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        color: 'hsl(var(--muted-foreground))',
                        fontFamily: 'Poppins, sans-serif',
                        lineHeight: 1.6,
                      }}
                    >
                      {story.description}
                    </Typography>
                    <Box
                      sx={{
                        px: 3,
                        py: 2,
                        backgroundColor: 'hsl(var(--accent))',
                        color: 'hsl(var(--accent-foreground))',
                        borderRadius: 'var(--radius)',
                        display: 'inline-block',
                        alignSelf: 'flex-start',
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 600,
                        }}
                      >
                        Impact: {story.impact}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContainer>
            </Box>
          ))}
        </motion.div>
      </Box>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-foreground rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-black transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ zIndex: 10 }}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-foreground rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-black transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ zIndex: 10 }}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Dots Indicator */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
        {stories.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-primary'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </Box>
    </Box>
  );
};