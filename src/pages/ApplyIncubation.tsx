import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Avatar,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { CloudUpload, ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const StyledBox = styled(Box)({
  minHeight: '100vh',
  background: 'hsl(var(--background))',
  paddingTop: '100px',
  paddingBottom: '60px',
});

const StyledPaper = styled(Paper)({
  background: 'hsl(var(--card))',
  borderRadius: 'var(--radius)',
  padding: '48px',
  boxShadow: '0 20px 60px rgba(220, 20, 60, 0.15)',
  border: '1px solid hsl(var(--border))',
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    fontFamily: 'Poppins, sans-serif',
    '& fieldset': {
      borderColor: 'hsl(var(--border))',
    },
    '&:hover fieldset': {
      borderColor: 'hsl(var(--primary))',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'hsl(var(--primary))',
    },
  },
  '& .MuiInputLabel-root': {
    fontFamily: 'Poppins, sans-serif',
    color: 'hsl(var(--muted-foreground))',
    '&.Mui-focused': {
      color: 'hsl(var(--primary))',
    },
  },
  '& .MuiInputBase-input': {
    fontFamily: 'Poppins, sans-serif',
    color: 'hsl(var(--foreground))',
  },
});

const PrimaryButton = styled(Button)({
  backgroundColor: 'hsl(var(--primary))',
  color: '#fff',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 600,
  padding: '14px 32px',
  borderRadius: 'var(--radius)',
  textTransform: 'none',
  fontSize: '16px',
  boxShadow: '0 4px 20px rgba(220, 20, 60, 0.3)',
  '&:hover': {
    backgroundColor: 'hsl(var(--destructive))',
    boxShadow: '0 6px 30px rgba(220, 20, 60, 0.4)',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
});

const UploadBox = styled(Box)({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 500,
  padding: '12px 24px',
  borderRadius: 'var(--radius)',
  textTransform: 'none',
  border: '1px solid hsl(var(--border))',
  color: 'hsl(var(--foreground))',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  '&:hover': {
    backgroundColor: 'hsl(var(--muted))',
    borderColor: 'hsl(var(--primary))',
  },
  transition: 'all 0.3s ease',
});

const SectionTitle = styled(Typography)({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 700,
  fontSize: '24px',
  color: 'hsl(var(--primary))',
  marginBottom: '24px',
  marginTop: '32px',
});

export const ApplyIncubation = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    businessName: '',
    salutation: 'Mr',
    fullName: '',
    fatherName: '',
    age: '',
    email: '',
    resMobile: '',
    offMobile: '',
    address: '',
    city: '',
    state: '',
    post: '',
    country: 'India',
    businessType: 'Services',
    businessDescription: '',
    legalEntity: 'Proprietorship',
    numChairs: '',
    fullTimeEmployees: '',
    partTimeEmployees: '',
    consultants: '',
    reference1Name: '',
    reference1Mobile: '',
    reference1Email: '',
    reference1Address: '',
    reference2Name: '',
    reference2Mobile: '',
    reference2Email: '',
    reference2Address: '',
    services: {
      chair: false,
      table: false,
      monitor: false,
      telephone: false,
      fax: false,
      webAccess: false,
      conferenceRooms: false,
    },
    declaration: false,
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <StyledBox>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: 4 }}>
            <IconButton component={Link} to="/auth" sx={{ mb: 2 }}>
              <ArrowBack />
            </IconButton>
            <Typography
              variant="h3"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                color: 'hsl(var(--primary))',
                mb: 2,
              }}
            >
              Application for Incubation Services
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins, sans-serif',
                color: 'hsl(var(--muted-foreground))',
                fontSize: '16px',
                mb: 3,
              }}
            >
              TECHNOLOGY BUSINESS INCUBATOR (TCE-TBI)
              <br />
              THIAGARAJAR COLLEGE OF ENGINEERING
              <br />
              MADURAI – 625 015
            </Typography>
          </Box>

          <StyledPaper>
            <form onSubmit={handleSubmit}>
              {/* Profile Picture */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar
                    src={profileImage || ''}
                    sx={{
                      width: 120,
                      height: 120,
                      mb: 2,
                      border: '3px solid hsl(var(--primary))',
                    }}
                  />
                  <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="profile-upload"
                    type="file"
                    onChange={handleImageUpload}
                  />
                  <label htmlFor="profile-upload">
                    <UploadBox>
                      <CloudUpload />
                      Upload Photo
                    </UploadBox>
                  </label>
                </Box>
              </Box>

              {/* Business Information */}
              <SectionTitle>Business Information</SectionTitle>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <StyledTextField
                  fullWidth
                  label="Name of Business *"
                  value={formData.businessName}
                  onChange={(e) =>
                    setFormData({ ...formData, businessName: e.target.value })
                  }
                  required
                />
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      color: "hsl(var(--foreground))",
                      mb: 1,
                      fontWeight: 600,
                    }}
                  >
                    Lead Entrepreneur Resume
                  </Typography>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      color: "hsl(var(--foreground))",
                    }}
                  />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 3 }}>
                  <StyledTextField
                    fullWidth
                    label="Full-time Employees"
                    type="number"
                    value={formData.fullTimeEmployees}
                    onChange={(e) =>
                      setFormData({ ...formData, fullTimeEmployees: e.target.value })
                    }
                  />
                  <StyledTextField
                    fullWidth
                    label="Part-time Employees"
                    type="number"
                    value={formData.partTimeEmployees}
                    onChange={(e) =>
                      setFormData({ ...formData, partTimeEmployees: e.target.value })
                    }
                  />
                  <StyledTextField
                    fullWidth
                    label="Consultants"
                    type="number"
                    value={formData.consultants}
                    onChange={(e) =>
                      setFormData({ ...formData, consultants: e.target.value })
                    }
                  />
                </Box>
              </Box>

              {/* References */}
              <SectionTitle>References</SectionTitle>
              <Typography
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  color: 'hsl(var(--muted-foreground))',
                  mb: 3,
                }}
              >
                Give two references here, verification will be done after completion
                of the selection process
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      color: 'hsl(var(--foreground))',
                      mb: 2,
                    }}
                  >
                    Reference 01
                  </Typography>
                </Grid>
                <Grid xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label="Name"
                    value={formData.reference1Name}
                    onChange={(e) =>
                      setFormData({ ...formData, reference1Name: e.target.value })
                    }
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label="Mobile"
                    value={formData.reference1Mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, reference1Mobile: e.target.value })
                    }
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={formData.reference1Email}
                    onChange={(e) =>
                      setFormData({ ...formData, reference1Email: e.target.value })
                    }
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label="Address"
                    value={formData.reference1Address}
                    onChange={(e) =>
                      setFormData({ ...formData, reference1Address: e.target.value })
                    }
                    required
                  />
                </Grid>

                <Grid xs={12} sx={{ mt: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      color: 'hsl(var(--foreground))',
                      mb: 2,
                    }}
                  >
                    Reference 02
                  </Typography>
                </Grid>
                <Grid xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label="Name"
                    value={formData.reference2Name}
                    onChange={(e) =>
                      setFormData({ ...formData, reference2Name: e.target.value })
                    }
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label="Mobile"
                    value={formData.reference2Mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, reference2Mobile: e.target.value })
                    }
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={formData.reference2Email}
                    onChange={(e) =>
                      setFormData({ ...formData, reference2Email: e.target.value })
                    }
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label="Address"
                    value={formData.reference2Address}
                    onChange={(e) =>
                      setFormData({ ...formData, reference2Address: e.target.value })
                    }
                    required
                  />
                </Grid>
              </Grid>

              {/* Declaration */}
              <SectionTitle>Declaration</SectionTitle>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.declaration}
                    onChange={(e) =>
                      setFormData({ ...formData, declaration: e.target.checked })
                    }
                    required
                  />
                }
                label={
                  <Typography sx={{ fontFamily: 'Poppins, sans-serif' }}>
                    The information that I/we have provided is correct. I further
                    declare that the information that I have provided here with are not
                    proprietary in nature and that I would not make any claim on same. I
                    have also read and understood and accepted the terms and conditions
                    set forth in the disclaimer in the beginning of this application.
                  </Typography>
                }
              />

              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <PrimaryButton type="submit" size="large">
                  Submit Application
                </PrimaryButton>
              </Box>

              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  background: 'hsl(var(--muted))',
                  borderRadius: 'var(--radius)',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    color: 'hsl(var(--muted-foreground))',
                    fontSize: '14px',
                    textAlign: 'center',
                  }}
                >
                  The completed application with all enclosure may be emailed to{' '}
                  <strong>ceotbi@tce.edu</strong> or <strong>tbi@tce.edu</strong>
                  <br />
                  or printed and filled copy may be sent by courier or post to
                  <br />
                  <strong>
                    Chief Executive Officer (CEO)
                    <br />
                    Technology Business Incubator (TBI)
                    <br />
                    Thiagarajar College of Engineering, Madurai-625015 Tamilnadu / India
                  </strong>
                </Typography>
              </Box>
            </form>
          </StyledPaper>
        </motion.div>
      </Container>
    </StyledBox>
  );
};
