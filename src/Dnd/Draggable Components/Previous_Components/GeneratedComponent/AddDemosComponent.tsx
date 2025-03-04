import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { 
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  styled
} from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '2rem',
  backgroundColor: theme.palette.mode === 'dark' ? '#1A1A1A' : '#FFFFFF',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
}));

const StyledTextField = styled(TextField)({
  marginBottom: '1.5rem',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#808080',
    },
    '&:hover fieldset': {
      borderColor: '#4D4D4D',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#333333',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#666666'
  }
});

const AddDemosComponent = ({config}: {config: any}) => {
  const { theme } = useTheme();
  const router = useRouter();
  const [demoDetails, setDemoDetails] = useState({
    title: '',
    description: '',
    demoUrl: '',
    githubUrl: '',
    previewImage: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (process.env.NODE_ENV === "development") {
      try {
        const response = await fetch('/api/demos/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(demoDetails)
        });

        if (response.ok) {
          router.push('/demos');
        }
      } catch (err) {
        console.error('Error adding demo:', err);
      }
    } else {
      alert('This functionality works only in development mode');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom
        sx={{ 
          color: theme === 'dark' ? '#FFFFFF' : '#000000',
          fontWeight: 'bold',
          mb: 4
        }}
      >
        Add New Demo
      </Typography>

      <StyledPaper elevation={3}>
        <Box component="form" onSubmit={handleSubmit}>
          <StyledTextField
            fullWidth
            label="Title"
            value={demoDetails.title}
            onChange={(e) => setDemoDetails({...demoDetails, title: e.target.value})}
          />

          <StyledTextField
            fullWidth
            label="Description"
            multiline
            rows={4}
            value={demoDetails.description}
            onChange={(e) => setDemoDetails({...demoDetails, description: e.target.value})}
          />

          <StyledTextField
            fullWidth
            label="Demo URL"
            type="url"
            value={demoDetails.demoUrl}
            onChange={(e) => setDemoDetails({...demoDetails, demoUrl: e.target.value})}
          />

          <StyledTextField
            fullWidth
            label="Github URL"
            type="url"
            value={demoDetails.githubUrl}
            onChange={(e) => setDemoDetails({...demoDetails, githubUrl: e.target.value})}
          />

          <StyledTextField
            fullWidth
            label="Preview Image URL"
            type="url"
            value={demoDetails.previewImage}
            onChange={(e) => setDemoDetails({...demoDetails, previewImage: e.target.value})}
          />

          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
            <Button 
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#333333',
                '&:hover': {
                  backgroundColor: '#1A1A1A'
                }
              }}
            >
              Save Demo
            </Button>
            <Button 
              variant="outlined"
              onClick={() => router.push('/demos')}
              sx={{
                color: '#333333',
                borderColor: '#333333',
                '&:hover': {
                  borderColor: '#1A1A1A',
                  backgroundColor: 'rgba(26, 26, 26, 0.04)'
                }
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default AddDemosComponent;
/* END_EDIT */