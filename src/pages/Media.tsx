import { motion } from 'framer-motion';
import { Box, Typography, Container, Dialog, DialogContent, Grid } from '@mui/material';
import { CardContainer } from '../components/ui/CardContainer';
import { useState } from 'react';
import { ImageSlider } from '../components/ui/ImageSlider';

interface MediaItem {
  id: number;
  src: string;
  alt: string;
  category: 'events' | 'facilities' | 'startups' | 'programs';
  title: string;
  description: string;
}

const MediaGallery = () => {
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      src: '/api/placeholder/400/300',
      alt: 'Startup Showcase Event',
      category: 'events',
      title: 'Annual Startup Showcase',
      description: 'Our annual showcase where startups present their innovations to investors and industry experts.'
    },
    {
      id: 2,
      src: '/api/placeholder/400/250',
      alt: 'Innovation Lab',
      category: 'facilities',
      title: 'Innovation Laboratory',
      description: 'State-of-the-art innovation lab equipped with latest technology for research and development.'
    },
    {
      id: 3,
      src: '/api/placeholder/400/350',
      alt: 'EcoTech Solutions Team',
      category: 'startups',
      title: 'EcoTech Solutions',
      description: 'Our successful startup developing sustainable water purification technology.'
    },
    {
      id: 4,
      src: '/api/placeholder/400/280',
      alt: 'Accelerator Program',
      category: 'programs',
      title: 'Accelerator Program Graduation',
      description: 'Celebrating the graduation of our latest accelerator program cohort.'
    },
    {
      id: 5,
      src: '/api/placeholder/400/320',
      alt: 'Mentorship Session',
      category: 'programs',
      title: 'Mentorship Sessions',
      description: 'One-on-one mentorship sessions with industry experts and successful entrepreneurs.'
    },
    {
      id: 6,
      src: '/api/placeholder/400/300',
      alt: 'Co-working Space',
      category: 'facilities',
      title: 'Co-working Space',
      description: 'Modern co-working spaces designed to foster collaboration and innovation.'
    },
    {
      id: 7,
      src: '/api/placeholder/400/260',
      alt: 'AgriConnect Team',
      category: 'startups',
      title: 'AgriConnect',
      description: 'IoT-based platform connecting farmers with modern agricultural techniques.'
    },
    {
      id: 8,
      src: '/api/placeholder/400/340',
      alt: 'Innovation Bootcamp',
      category: 'events',
      title: 'Innovation Bootcamp',
      description: 'Intensive bootcamp focusing on idea validation and business model design.'
    },
    {
      id: 9,
      src: '/api/placeholder/400/290',
      alt: 'Prototyping Lab',
      category: 'facilities',
      title: 'Prototyping Laboratory',
      description: 'Advanced prototyping facility with 3D printing and fabrication tools.'
    },
    {
      id: 10,
      src: '/api/placeholder/400/310',
      alt: 'HealthTech Demo',
      category: 'startups',
      title: 'HealthTech Innovations',
      description: 'AI-powered diagnostic tools being demonstrated for rural healthcare.'
    },
    {
      id: 11,
      src: '/api/placeholder/400/270',
      alt: 'Investor Pitch Day',
      category: 'events',
      title: 'Investor Pitch Day',
      description: 'Startups presenting their business plans to potential investors and partners.'
    },
    {
      id: 12,
      src: '/api/placeholder/400/330',
      alt: 'Women Entrepreneur Program',
      category: 'programs',
      title: 'Women in Entrepreneurship',
      description: 'Empowering women entrepreneurs with skills, networks, and funding opportunities.'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Media', count: mediaItems.length },
    { key: 'events', label: 'Events', count: mediaItems.filter(item => item.category === 'events').length },
    { key: 'facilities', label: 'Facilities', count: mediaItems.filter(item => item.category === 'facilities').length },
    { key: 'startups', label: 'Startups', count: mediaItems.filter(item => item.category === 'startups').length },
    { key: 'programs', label: 'Programs', count: mediaItems.filter(item => item.category === 'programs').length }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory);

  const openImageModal = (item: MediaItem) => {
    setSelectedImage(item);
    const index = filteredItems.findIndex(filteredItem => filteredItem.id === item.id);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : filteredItems.length - 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(filteredItems[newIndex]);
    } else {
      const newIndex = currentImageIndex < filteredItems.length - 1 ? currentImageIndex + 1 : 0;
      setCurrentImageIndex(newIndex);
      setSelectedImage(filteredItems[newIndex]);
    }
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Category Filter */}
          <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--radius)',
                  border: 'none',
                  backgroundColor: activeCategory === category.key 
                    ? 'hsl(var(--primary))' 
                    : 'hsl(var(--secondary))',
                  color: activeCategory === category.key 
                    ? 'hsl(var(--primary-foreground))' 
                    : 'hsl(var(--secondary-foreground))',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label} ({category.count})
              </motion.button>
            ))}
          </Box>

          {/* Masonry Grid */}
          <Box 
            sx={{ 
              columns: { xs: 1, sm: 2, md: 3, lg: 4 },
              columnGap: 3,
              '& > *': {
                breakInside: 'avoid',
                marginBottom: 3,
              }
            }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${activeCategory}-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ cursor: 'pointer' }}
                onClick={() => openImageModal(item)}
              >
                <CardContainer hover={true}>
                  <motion.img
                    src={item.src}
                    alt={item.alt}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      borderRadius: 'var(--radius)',
                      marginBottom: 12
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: 1,
                      color: 'hsl(var(--foreground))',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      fontSize: '1rem',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'hsl(var(--muted-foreground))',
                      fontFamily: 'Poppins, sans-serif',
                      lineHeight: 1.4,
                      fontSize: '0.875rem',
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContainer>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>

      {/* Image Modal */}
      <Dialog 
        open={!!selectedImage} 
        onClose={closeImageModal}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 'var(--radius)',
            backgroundColor: 'hsl(var(--card))',
          }
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Box sx={{ position: 'relative' }}>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                    borderRadius: 'var(--radius)',
                  }}
                />
                
                {/* Navigation Arrows */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.7)',
                    }
                  }}
                  onClick={() => navigateImage('prev')}
                >
                  &#8249;
                </Box>
                
                <Box
                  sx={{
                    position: 'absolute',
                    right: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.7)',
                    }
                  }}
                  onClick={() => navigateImage('next')}
                >
                  &#8250;
                </Box>
              </Box>
              
              <Box sx={{ p: 3 }}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 2,
                    color: 'hsl(var(--foreground))',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  {selectedImage.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'hsl(var(--muted-foreground))',
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: 1.6,
                  }}
                >
                  {selectedImage.description}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mt: 2,
                    color: 'hsl(var(--primary))',
                    fontFamily: 'Poppins, sans-serif',
                    textTransform: 'capitalize',
                  }}
                >
                  Category: {selectedImage.category}
                </Typography>
              </Box>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export const Media: React.FC = () => {
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
              mb: 8,
              color: 'hsl(var(--foreground))',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
            }}
          >
            Media Gallery
          </Typography>
        </motion.div>
      </Container>
      
      <MediaGallery />
    </Box>
  );
};