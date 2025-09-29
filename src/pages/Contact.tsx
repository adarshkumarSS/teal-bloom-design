import { motion } from 'framer-motion';
import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material';
import { CardContainer } from '@/components/ui/CardContainer';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { HashLoader } from '@/components/ui/HashLoader';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <CardContainer>
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 4,
            color: 'hsl(var(--foreground))',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
          }}
        >
          Send us a Message
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="Full Name"
              value={formData.name}
              onChange={handleChange('name')}
              required
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'hsl(var(--card))',
                  '& fieldset': {
                    borderColor: 'hsl(var(--border))',
                  },
                  '&:hover fieldset': {
                    borderColor: 'hsl(var(--primary))',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'hsl(var(--primary))',
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'hsl(var(--muted-foreground))',
                  fontFamily: 'Poppins, sans-serif',
                },
                '& .MuiOutlinedInput-input': {
                  color: 'hsl(var(--foreground))',
                  fontFamily: 'Poppins, sans-serif',
                }
              }}
            />
            
            <TextField
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              required
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'hsl(var(--card))',
                  '& fieldset': {
                    borderColor: 'hsl(var(--border))',
                  },
                  '&:hover fieldset': {
                    borderColor: 'hsl(var(--primary))',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'hsl(var(--primary))',
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'hsl(var(--muted-foreground))',
                  fontFamily: 'Poppins, sans-serif',
                },
                '& .MuiOutlinedInput-input': {
                  color: 'hsl(var(--foreground))',
                  fontFamily: 'Poppins, sans-serif',
                }
              }}
            />
            
            <TextField
              label="Phone Number"
              value={formData.phone}
              onChange={handleChange('phone')}
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'hsl(var(--card))',
                  '& fieldset': {
                    borderColor: 'hsl(var(--border))',
                  },
                  '&:hover fieldset': {
                    borderColor: 'hsl(var(--primary))',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'hsl(var(--primary))',
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'hsl(var(--muted-foreground))',
                  fontFamily: 'Poppins, sans-serif',
                },
                '& .MuiOutlinedInput-input': {
                  color: 'hsl(var(--foreground))',
                  fontFamily: 'Poppins, sans-serif',
                }
              }}
            />
            
            <TextField
              label="Company/Organization"
              value={formData.company}
              onChange={handleChange('company')}
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'hsl(var(--card))',
                  '& fieldset': {
                    borderColor: 'hsl(var(--border))',
                  },
                  '&:hover fieldset': {
                    borderColor: 'hsl(var(--primary))',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'hsl(var(--primary))',
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'hsl(var(--muted-foreground))',
                  fontFamily: 'Poppins, sans-serif',
                },
                '& .MuiOutlinedInput-input': {
                  color: 'hsl(var(--foreground))',
                  fontFamily: 'Poppins, sans-serif',
                }
              }}
            />
            
            <TextField
              label="Message"
              value={formData.message}
              onChange={handleChange('message')}
              required
              multiline
              rows={4}
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'hsl(var(--card))',
                  '& fieldset': {
                    borderColor: 'hsl(var(--border))',
                  },
                  '&:hover fieldset': {
                    borderColor: 'hsl(var(--primary))',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'hsl(var(--primary))',
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'hsl(var(--muted-foreground))',
                  fontFamily: 'Poppins, sans-serif',
                },
                '& .MuiOutlinedInput-input': {
                  color: 'hsl(var(--foreground))',
                  fontFamily: 'Poppins, sans-serif',
                }
              }}
            />
            
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'hsl(var(--primary))',
                color: 'hsl(var(--primary-foreground))',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                py: 1.5,
                borderRadius: 'var(--radius)',
                '&:hover': {
                  backgroundColor: 'hsl(var(--primary) / 0.9)',
                }
              }}
            >
              Send Message
            </Button>
          </Box>
        </form>
      </CardContainer>
    </motion.div>
  );
};

const ContactInfo = () => {
  const contactDetails = [
    {
      label: 'Address',
      value: 'Thiagarajar Business Incubation Centre\nThiagarajar College of Engineering\nMadurai - 625015, Tamil Nadu, India'
    },
    {
      label: 'Phone',
      value: '+91 452 2482240'
    },
    {
      label: 'Email',
      value: 'info@tbi.edu.in'
    },
    {
      label: 'Working Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 1:00 PM'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <CardContainer>
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 4,
            color: 'hsl(var(--foreground))',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
          }}
        >
          Contact Information
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 1,
                  color: 'hsl(var(--primary))',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                }}
              >
                {detail.label}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'hsl(var(--foreground))',
                  fontFamily: 'Poppins, sans-serif',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line',
                }}
              >
                {detail.value}
              </Typography>
            </motion.div>
          ))}
        </Box>
      </CardContainer>
    </motion.div>
  );
};

const CEOInfo = () => {
  const ceoInfo = {
    name: 'Dr. Priya Raman',
    position: 'Chief Executive Officer',
    image: '/api/placeholder/250/300',
    email: 'ceo@tbi.edu.in',
    phone: '+91 452 2482241',
    bio: 'Dr. Priya Raman brings over 15 years of experience in startup ecosystems and innovation management. She leads TBI strategic initiatives and has been pivotal in the success of our incubation programs.'
  };

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
            Leadership
          </Typography>
          
          <CardContainer>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={4}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Box
                    component="img"
                    src={ceoInfo.image}
                    alt={ceoInfo.name}
                    sx={{
                      width: '100%',
                      height: 300,
                      objectFit: 'cover',
                      borderRadius: 'var(--radius)',
                    }}
                  />
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={8}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 1,
                    color: 'hsl(var(--foreground))',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  {ceoInfo.name}
                </Typography>
                
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 3,
                    color: 'hsl(var(--primary))',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500,
                  }}
                >
                  {ceoInfo.position}
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 4,
                    color: 'hsl(var(--foreground))',
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: 1.6,
                  }}
                >
                  {ceoInfo.bio}
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'hsl(var(--primary))',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    📧 {ceoInfo.email}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'hsl(var(--primary))',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    📞 {ceoInfo.phone}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContainer>
        </motion.div>
      </Container>
    </Box>
  );
};

const MapSection = () => {
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
              mb: 2,
              color: 'hsl(var(--foreground))',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
            }}
          >
            Find Us Here
          </Typography>
          <Typography 
            variant="h6" 
            align="center"
            sx={{ 
              mb: 6,
              color: 'hsl(var(--primary))',
              fontFamily: 'Poppins, sans-serif',
              maxWidth: '600px',
              mx: 'auto',
              fontWeight: 500,
            }}
          >
            Visit our state-of-the-art facility and experience innovation firsthand
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <CardContainer>
                <Box
                  component="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0419847794284!2d78.1167!3d9.9252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5c1a7c7c7c7%3A0x1c7c7c7c7c7c7c7c!2sThiagarajar%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1234567890"
                  sx={{
                    width: '100%',
                    height: 400,
                    border: 0,
                    borderRadius: 'var(--radius)',
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </CardContainer>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 2,
                  color: 'hsl(var(--foreground))',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                }}
              >
                Our Location
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3,
                  color: 'hsl(var(--foreground))',
                  fontFamily: 'Poppins, sans-serif',
                  lineHeight: 1.6,
                  opacity: 0.8,
                }}
              >
                Located in the heart of Madurai, our incubation center is easily accessible and provides the perfect environment for innovation and collaboration.
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'hsl(var(--primary))',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  Quick Contact
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'hsl(var(--foreground))',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  📞 +91 452 2482240
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'hsl(var(--foreground))',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  📧 info@tbi.edu.in
                </Typography>
              </Box>
              
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: 'hsl(var(--primary))',
                  color: 'hsl(var(--primary-foreground))',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  py: 1.5,
                  borderRadius: 'var(--radius)',
                  '&:hover': {
                    backgroundColor: 'hsl(var(--primary) / 0.9)',
                  }
                }}
                onClick={() => window.open('https://maps.google.com', '_blank')}
              >
                Get Directions
              </Button>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export const Contact: React.FC = () => {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader && (
        <HashLoader onComplete={() => setShowLoader(false)} duration={2500} />
      )}
      <Box sx={{ py: { xs: 4, md: 8 } }}>
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
                mb: 2,
                color: 'hsl(var(--foreground))',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
              }}
            >
              Get in Touch
            </Typography>
            <Typography 
              variant="h6" 
              align="center"
              sx={{ 
                mb: 8,
                color: 'hsl(var(--primary))',
                fontFamily: 'Poppins, sans-serif',
                maxWidth: '600px',
                mx: 'auto',
                fontWeight: 500,
              }}
            >
              Ready to transform your innovative idea into a successful venture? Let's connect and explore the possibilities together.
            </Typography>
          </motion.div>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} md={6}>
              <ContactInfo />
            </Grid>
          </Grid>
        </Container>
        
        <CEOInfo />
        <MapSection />
      </Box>
    </>
  );
};