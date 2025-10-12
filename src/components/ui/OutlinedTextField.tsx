import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 'var(--radius)',
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: 'hsl(var(--card))',
    '& fieldset': {
      borderColor: 'hsl(var(--border))',
    },
    '&:hover fieldset': {
      borderColor: 'hsl(0 84.2% 60.2%)', // Red color
    },
    '&.Mui-focused fieldset': {
      borderColor: 'hsl(0 84.2% 60.2%)', // Red color
      borderWidth: '2px',
    },
  },
  '& .MuiInputLabel-root': {
    fontFamily: 'Poppins, sans-serif',
    color: 'hsl(var(--muted-foreground))',
    '&.Mui-focused': {
      color: 'hsl(0 84.2% 60.2%)', // Red color
    },
  },
  '& .MuiInputBase-input': {
    color: 'hsl(var(--foreground))',
    fontFamily: 'Poppins, sans-serif',
  },
}));

interface OutlinedTextFieldProps extends Omit<TextFieldProps, 'variant'> {
  // Add any additional props here
}

export const OutlinedTextField: React.FC<OutlinedTextFieldProps> = (props) => {
  return <StyledTextField variant="outlined" {...props} />;
};