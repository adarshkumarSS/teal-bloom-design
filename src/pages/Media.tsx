import { motion } from 'framer-motion';
import { Box, Typography, Container, Dialog, DialogContent } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

          {/* Enhanced Masonry Grid with proper alignment */}
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { 
                xs: '1fr', 
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)'
              },
              gap: { xs: 2, sm: 3, md: 4 },
              justifyItems: 'center',
              alignItems: 'start',
            }}
          >
            {filteredItems.map((item, index) => {
              return (
                <motion.div
                  key={`${activeCategory}-${item.id}`}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  style={{ cursor: 'pointer' }}
                  onClick={() => openImageModal(item)}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                   <CardContainer hover={true} className="overflow-hidden group">
                    <motion.div
                      style={{ 
                        aspectRatio: '4/3',
                        overflow: 'hidden',
                        borderRadius: 'var(--radius)',
                        position: 'relative'
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: 'var(--radius)',
                          transition: 'filter 0.3s ease'
                        }}
                        className="group-hover:brightness-110 group-hover:contrast-110"
                      />
                      
                      {/* Overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                        style={{ borderRadius: 'var(--radius)' }}
                      >
                        <div className="text-white">
                          <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                          <p className="text-xs text-white/80 line-clamp-2">{item.description}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                    
                    {/* Content below image */}
                    <Box sx={{ p: 2 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          mb: 1,
                          color: 'hsl(var(--foreground))',
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 600,
                          fontSize: '1rem',
                          lineHeight: 1.2,
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
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {item.description}
                      </Typography>
                      
                      {/* Category badge */}
                      <Box 
                        sx={{ 
                          mt: 2,
                          display: 'inline-block',
                          px: 2,
                          py: 0.5,
                          backgroundColor: 'hsl(var(--primary))',
                          color: 'hsl(var(--primary-foreground))',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontFamily: 'Poppins, sans-serif',
                          textTransform: 'capitalize',
                          fontWeight: 500,
                        }}
                      >
                        {item.category}
                      </Box>
                    </Box>
                  </CardContainer>
                </motion.div>
              );
            })}
          </Box>
        </motion.div>
      </Container>

      {/* Enhanced Gallery Modal */}
      <Dialog 
        open={!!selectedImage} 
        onClose={closeImageModal}
        maxWidth="xl"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '24px',
            backgroundColor: 'hsl(var(--card))',
            overflow: 'hidden',
            maxHeight: '90vh',
          }
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            >
              <Box sx={{ position: 'relative', height: '70vh', overflow: 'hidden' }}>
                <motion.img
                  key={selectedImage.id}
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    backgroundColor: 'hsl(var(--muted))',
                  }}
                />
                
                {/* Close button */}
                <motion.button
                  onClick={closeImageModal}
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
                
                {/* Navigation Arrows with improved styling */}
                <motion.button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-md text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition-all shadow-lg"
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                
                <motion.button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-md text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition-all shadow-lg"
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
                
                {/* Image counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {filteredItems.length}
                </div>
              </Box>
              
              {/* Enhanced content section */}
              <motion.div 
                className="p-6 bg-gradient-to-r from-hsl(var(--card)) to-hsl(var(--muted))"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        mb: 2,
                        color: 'hsl(var(--foreground))',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600,
                        lineHeight: 1.2,
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
                        fontSize: '1.1rem',
                        mb: 3,
                      }}
                    >
                      {selectedImage.description}
                    </Typography>
                  </Box>
                  
                  <Box 
                    sx={{ 
                      ml: 3,
                      px: 3,
                      py: 1,
                      backgroundColor: 'hsl(var(--primary))',
                      color: 'hsl(var(--primary-foreground))',
                      borderRadius: '24px',
                      fontSize: '0.9rem',
                      fontFamily: 'Poppins, sans-serif',
                      textTransform: 'capitalize',
                      fontWeight: 600,
                      boxShadow: '0 4px 12px hsl(var(--primary) / 0.3)',
                    }}
                  >
                    {selectedImage.category}
                  </Box>
                </Box>
                
                {/* Thumbnail gallery */}
                <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2 }}>
                  {filteredItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="flex-shrink-0 cursor-pointer"
                      onClick={() => {
                        setSelectedImage(item);
                        setCurrentImageIndex(index);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        style={{
                          width: '80px',
                          height: '60px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          border: item.id === selectedImage.id ? '3px solid hsl(var(--primary))' : '2px solid transparent',
                          opacity: item.id === selectedImage.id ? 1 : 0.7,
                          transition: 'all 0.2s ease',
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export const Media: React.FC = () => {
  return (
    <Box sx={{ pt: 16, pb: 8, minHeight: '100vh', backgroundColor: 'hsl(var(--background))' }}>
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