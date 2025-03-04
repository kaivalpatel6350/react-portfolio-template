import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card, CardContent, TextField, Button, Grid, Typography, Container, Box, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

interface Demo {
  id: string;
  title: string;
  description: string;
  url: string;
  date: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  '&:hover': {
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  padding: '8px 24px',
  textTransform: 'none',
  fontWeight: 600,
}));

const DemosComponent = ({config}: {config?: any}) => {
  const [demos, setDemos] = useState<Demo[]>([]);
  const [formData, setFormData] = useState<Demo>({
    id: '',
    title: '',
    description: '',
    url: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if(formData.id) {
      setDemos(demos.map(demo => 
        demo.id === formData.id ? formData : demo
      ));
    } else {
      setDemos([...demos, {...formData, id: uuidv4()}]);
    }

    setFormData({
      id: '',
      title: '',
      description: '', 
      url: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const handleEdit = (demo: Demo) => {
    setFormData(demo);
  };

  const handleDelete = (id: string) => {
    setDemos(demos.filter(demo => demo.id !== id));
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <StyledCard sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ color: '#333333', fontWeight: 600, mb: 3 }}>
            {formData.id ? 'Edit Demo' : 'Add New Demo'}
          </Typography>
          
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth 
                  label="URL"
                  value={formData.url}
                  onChange={(e) => setFormData({...formData, url: e.target.value})}
                  required
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="date"
                  label="Date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  InputLabelProps={{ shrink: true }}
                  required
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledButton 
                  type="submit" 
                  variant="contained" 
                  sx={{ 
                    bgcolor: '#333333',
                    '&:hover': { bgcolor: '#1A1A1A' }
                  }}
                >
                  {formData.id ? 'Update Demo' : 'Add Demo'}
                </StyledButton>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </StyledCard>

      <Box sx={{ mt: 4 }}>
        {demos.map(demo => (
          <StyledCard key={demo.id} sx={{ mb: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Typography variant="h6" sx={{ color: '#333333', fontWeight: 600 }}>
                  {demo.title}
                </Typography>
                <Box>
                  <IconButton 
                    onClick={() => handleEdit(demo)}
                    sx={{ color: '#666666', mr: 1 }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    onClick={() => handleDelete(demo.id)}
                    sx={{ color: '#666666' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
              <Typography sx={{ color: '#4D4D4D', mb: 1 }}>{demo.description}</Typography>
              <Typography sx={{ color: '#666666', mb: 0.5 }}>URL: {demo.url}</Typography>
              <Typography sx={{ color: '#666666' }}>Date: {demo.date}</Typography>
            </CardContent>
          </StyledCard>
        ))}
      </Box>
    </Container>
  );
};

export default DemosComponent;
/* END_EDIT */