import React from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { Box, Typography, Container, Chip, Grid, Paper, styled } from '@mui/material';

interface DevExperienceAboutProps {
  config: {
    name: string;
    position: string;
    yearsOfExperience: number;
    skills: string[];
    technologies: string[];
    description: string;
  }
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '2rem',
  backgroundColor: '#FFFFFF',
  color: '#333333',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  '&.dark': {
    backgroundColor: '#1A1A1A',
    color: '#FFFFFF'
  }
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: '#D9D9D9',
  color: '#333333',
  margin: '4px',
  '&.dark': {
    backgroundColor: '#4D4D4D',
    color: '#FFFFFF'
  }
}));

const DevExperienceAboutComponent: React.FC<DevExperienceAboutProps> = ({config}) => {
  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <StyledPaper className={isDark ? 'dark' : ''}>
        <Box sx={{ maxWidth: '4xl', margin: 'auto' }}>
          <Typography variant="h2" sx={{ 
            fontSize: '2.5rem', 
            fontWeight: 700,
            color: isDark ? '#FFFFFF' : '#1A1A1A',
            mb: 4
          }}>
            {config.name}
          </Typography>
          
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" sx={{ 
              fontSize: '1.8rem',
              fontWeight: 600,
              color: isDark ? '#D9D9D9' : '#333333',
              mb: 2
            }}>
              {config.position}
            </Typography>
            <Typography variant="h5" sx={{ 
              fontSize: '1.4rem',
              color: isDark ? '#A6A6A6' : '#4D4D4D',
              mb: 3
            }}>
              Full Stack Developer with {config.yearsOfExperience} years of experience
            </Typography>
            <Typography variant="body1" sx={{
              fontSize: '1.1rem',
              color: isDark ? '#808080' : '#666666',
              lineHeight: 1.8,
              mb: 4
            }}>
              {config.description}
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: isDark ? '#D9D9D9' : '#333333',
                mb: 3
              }}>
                Technical Skills
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {config.skills.map((skill, index) => (
                  <StyledChip
                    key={index}
                    label={skill}
                    className={isDark ? 'dark' : ''}
                  />
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: isDark ? '#D9D9D9' : '#333333',
                mb: 3
              }}>
                Technologies
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {config.technologies.map((tech, index) => (
                  <StyledChip
                    key={index}
                    label={tech}
                    className={isDark ? 'dark' : ''}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default DevExperienceAboutComponent;
/* END_EDIT */