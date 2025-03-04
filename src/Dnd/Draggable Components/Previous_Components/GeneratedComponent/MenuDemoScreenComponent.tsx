import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { Box, Container, Typography, Paper, TextField, Button, IconButton, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 as uuidv4 } from 'uuid';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string; 
  category: string;
}

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: '40px 0',
  '& .MuiTypography-h4': {
    fontWeight: 600,
    marginBottom: '32px',
    color: '#1A1A1A'
  }
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '24px',
  backgroundColor: '#FFFFFF',
  borderRadius: '12px',
  marginBottom: '24px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'translateY(-4px)'
  }
}));

const FormPaper = styled(StyledPaper)({
  backgroundColor: '#F5F5F5',
  marginBottom: '40px'
});

const StyledButton = styled(Button)({
  backgroundColor: '#333333',
  color: '#FFFFFF',
  padding: '12px 24px',
  '&:hover': {
    backgroundColor: '#1A1A1A'
  }
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#A6A6A6',
    },
    '&:hover fieldset': {
      borderColor: '#666666',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#333333',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#4D4D4D'
  }
});

const ActionButton = styled(IconButton)({
  color: '#666666',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.04)'
  }
});

const MenuDemoScreenComponent = ({config}: {config: any}) => {
  const { theme } = useTheme();
  const [items, setItems] = useState<MenuItem[]>([]);
  const [formData, setFormData] = useState<MenuItem>({
    id: '',
    name: '',
    description: '',
    price: '',
    category: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if(formData.id) {
      setItems(items.map(item => 
        item.id === formData.id ? formData : item
      ));
    } else {
      setItems([...items, {...formData, id: uuidv4()}]);
    }

    setFormData({
      id: '',
      name: '',
      description: '',
      price: '',
      category: ''
    });
  };

  const handleEdit = (item: MenuItem) => {
    setFormData(item);
  };

  const handleDelete = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h4">
        Menu Demo Screen
      </Typography>

      <FormPaper elevation={3}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Item Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Description"
                multiline
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <StyledTextField
                fullWidth
                label="Price"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <StyledTextField
                fullWidth
                label="Category"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <StyledButton type="submit" variant="contained">
                {formData.id ? 'Update Item' : 'Add Item'}
              </StyledButton>
            </Grid>
          </Grid>
        </form>
      </FormPaper>

      {items.map((item) => (
        <StyledPaper key={item.id}>
          <Box sx={{
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start'
          }}>
            <Box>
              <Typography 
                variant="h6" 
                sx={{
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: 1
                }}
              >
                {item.name}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{
                  color: '#666666',
                  marginBottom: 2
                }}
              >
                {item.description}
              </Typography>
              <Typography 
                variant="subtitle1"
                sx={{
                  color: '#333333',
                  fontWeight: 500
                }}
              >
                Price: ${item.price}
              </Typography>
              <Typography 
                variant="subtitle2"
                sx={{
                  color: '#808080'
                }}
              >
                Category: {item.category}
              </Typography>
            </Box>
            <Box>
              <ActionButton onClick={() => handleEdit(item)}>
                <EditIcon />
              </ActionButton>
              <ActionButton onClick={() => handleDelete(item.id)}>
                <DeleteIcon />
              </ActionButton>
            </Box>
          </Box>
        </StyledPaper>
      ))}
    </StyledContainer>
  );
};

export default MenuDemoScreenComponent;
/* END_EDIT */