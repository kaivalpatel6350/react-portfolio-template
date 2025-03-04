import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper, styled } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8)
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  backgroundColor: '#FFFFFF',
  borderRadius: 16,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
  border: '1px solid #D9D9D9'
}));

const StyledTextField = styled(TextField)({
  marginBottom: '24px',
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#FFFFFF',
    '& fieldset': {
      borderColor: '#A6A6A6',
      borderWidth: '2px'
    },
    '&:hover fieldset': {
      borderColor: '#666666'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#333333'
    }
  },
  '& .MuiInputLabel-root': {
    color: '#4D4D4D',
    fontWeight: 500
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#333333'
  }
});

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#333333',
  color: '#FFFFFF',
  padding: '12px 32px',
  fontSize: '1rem',
  fontWeight: 600,
  borderRadius: '8px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#1A1A1A'
  },
  '&:active': {
    backgroundColor: '#000000'
  }
}));

const AddProjectComponent = ({config}: {config: any}) => {
  const [projectDetails, setProjectDetails] = useState({
    id: uuidv4(),
    title: '',
    description: '',
    imageSrc: '',
    url: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (process.env.NODE_ENV === "development") {
      try {
        const response = await fetch('/api/portfolio', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...config,
            projects: [...config.projects, projectDetails]
          })
        });

        if (response.ok) {
          setProjectDetails({
            id: uuidv4(),
            title: '',
            description: '',
            imageSrc: '',
            url: ''
          });
        }
      } catch (err) {
        console.error('Error adding project:', err);
      }
    } else {
      alert('This functionality works only in development mode');
    }
  };

  return (
    <StyledContainer maxWidth="md">
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 700,
          color: '#1A1A1A',
          marginBottom: 4,
          textAlign: 'center'
        }}
      >
        Add New Project
      </Typography>

      <StyledPaper elevation={0}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <StyledTextField
            fullWidth
            label="Project Title"
            value={projectDetails.title}
            onChange={(e) => setProjectDetails({...projectDetails, title: e.target.value})}
            required
            variant="outlined"
          />

          <StyledTextField
            fullWidth
            label="Project Description"
            multiline
            rows={4}
            value={projectDetails.description}
            onChange={(e) => setProjectDetails({...projectDetails, description: e.target.value})}
            required
            variant="outlined"
          />

          <StyledTextField
            fullWidth
            label="Image URL"
            type="url"
            value={projectDetails.imageSrc}
            onChange={(e) => setProjectDetails({...projectDetails, imageSrc: e.target.value})}
            required
            variant="outlined"
          />

          <StyledTextField
            fullWidth
            label="Project URL"
            type="url"
            value={projectDetails.url}
            onChange={(e) => setProjectDetails({...projectDetails, url: e.target.value})}
            required
            variant="outlined"
          />

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <SubmitButton type="submit" variant="contained">
              Add Project
            </SubmitButton>
          </Box>
        </Box>
      </StyledPaper>
    </StyledContainer>
  );
};

export default AddProjectComponent;
/* END_EDIT */