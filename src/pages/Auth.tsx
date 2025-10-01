import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Container, Typography, TextField, Button, IconButton, InputAdornment, Divider } from '@mui/material';
import { Visibility, VisibilityOff, Google, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'hsl(var(--background))',
  paddingTop: '80px',
}));

const AuthCard = styled(motion.div)({
  background: 'hsl(var(--card))',
  borderRadius: 'var(--radius)',
  padding: '48px',
  maxWidth: '480px',
  width: '100%',
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
  padding: '12px 24px',
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

const SocialButton = styled(Button)({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 500,
  padding: '12px 24px',
  borderRadius: 'var(--radius)',
  textTransform: 'none',
  border: '1px solid hsl(var(--border))',
  color: 'hsl(var(--foreground))',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'hsl(var(--muted))',
    borderColor: 'hsl(var(--primary))',
  },
  transition: 'all 0.3s ease',
});

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
  });
  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: '',
  });

  const validatePassword = (password: string) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return 'Password must be at least 8 characters long';
    }
    if (!hasUpperCase || !hasLowerCase) {
      return 'Password must contain both uppercase and lowercase letters';
    }
    if (!hasNumbers) {
      return 'Password must contain at least one number';
    }
    if (!hasSpecialChar) {
      return 'Password must contain at least one special character';
    }
    return '';
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setFormData({ ...formData, password });
    if (!isLogin) {
      setErrors({ ...errors, password: validatePassword(password) });
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value;
    setFormData({ ...formData, confirmPassword });
    if (confirmPassword !== formData.password) {
      setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
    } else {
      setErrors({ ...errors, confirmPassword: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted', formData);
  };

  return (
    <StyledBox>
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                color: 'hsl(var(--primary))',
                mb: 2,
              }}
            >
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                color: 'hsl(var(--muted-foreground))',
              }}
            >
              {isLogin
                ? 'Enter your credentials to access your account'
                : 'Fill in your details to get started'}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <Link to="/apply-incubation" style={{ textDecoration: 'none', width: '100%' }}>
              <PrimaryButton fullWidth>
                Apply for Incubation
              </PrimaryButton>
            </Link>
          </Box>

          <AuthCard
            key={isLogin ? 'login' : 'register'}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <AnimatePresence mode="wait">
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <StyledTextField
                        fullWidth
                        label="Full Name"
                        variant="outlined"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        required
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <StyledTextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />

                <StyledTextField
                  fullWidth
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  value={formData.password}
                  onChange={handlePasswordChange}
                  error={!isLogin && !!errors.password}
                  helperText={!isLogin ? errors.password : ''}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <AnimatePresence mode="wait">
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <StyledTextField
                        fullWidth
                        label="Confirm Password"
                        type={showConfirmPassword ? 'text' : 'password'}
                        variant="outlined"
                        value={formData.confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                        required
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() =>
                                  setShowConfirmPassword(!showConfirmPassword)
                                }
                                edge="end"
                              >
                                {showConfirmPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {isLogin && (
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography
                      component={Link}
                      to="/forgot-password"
                      sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '14px',
                        color: 'hsl(var(--primary))',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Forgot Password?
                    </Typography>
                  </Box>
                )}

                <PrimaryButton type="submit" fullWidth>
                  {isLogin ? 'Login' : 'Register'}
                </PrimaryButton>

                <Divider sx={{ my: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                      color: 'hsl(var(--muted-foreground))',
                      fontSize: '14px',
                    }}
                  >
                    OR
                  </Typography>
                </Divider>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <SocialButton fullWidth startIcon={<Google />}>
                    Continue with Google
                  </SocialButton>
                  <SocialButton fullWidth startIcon={<LinkedIn />}>
                    Continue with LinkedIn
                  </SocialButton>
                </Box>

                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                      color: 'hsl(var(--muted-foreground))',
                      fontSize: '14px',
                    }}
                  >
                    {isLogin ? "Don't have an account? " : 'Already have an account? '}
                    <Typography
                      component="span"
                      onClick={() => setIsLogin(!isLogin)}
                      sx={{
                        color: 'hsl(var(--primary))',
                        cursor: 'pointer',
                        fontWeight: 600,
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {isLogin ? 'Register' : 'Login'}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </form>
          </AuthCard>
        </motion.div>
      </Container>
    </StyledBox>
  );
};
