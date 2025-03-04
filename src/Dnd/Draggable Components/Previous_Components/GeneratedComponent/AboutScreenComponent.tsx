import React from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Card, CardContent, Button, styled, Paper } from '@mui/material';

interface AboutScreenProps {
  config: {
    title: string;
    subtitle: string; 
    description: string;
    skills: Array<{
      name: string;
      level: number;
    }>;
    experiences: Array<{
      company: string;
      role: string;
      duration: string;
      description: string;
    }>;
    education: Array<{
      degree: string;
      school: string;
      year: string;
    }>;
    contact: {
      email: string;
      phone: string;
      location: string;
    };
  }
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: '#FFFFFF',
  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
  borderRadius: '16px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 32px rgba(0,0,0,0.15)'
  }
}));

const ProgressBar = styled(Box)({
  height: 8,
  borderRadius: 4,
  background: '#D9D9D9',
  position: 'relative',
  overflow: 'hidden',
  '& .fill': {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    background: '#333333',
    transition: 'width 1s ease-in-out'
  }
});

const AboutScreenComponent: React.FC<AboutScreenProps> = ({ config }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography 
            variant="h2" 
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              color: '#1A1A1A',
              mb: 3
            }}
          >
            {config.title}
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#666666',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            {config.subtitle}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 3, color: '#1A1A1A', fontWeight: 700 }}>
                  About Me
                </Typography>
                <Typography variant="body1" sx={{ color: '#4D4D4D', lineHeight: 1.8 }}>
                  {config.description}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 4, color: '#1A1A1A', fontWeight: 700 }}>
                  Skills
                </Typography>
                {config.skills.map((skill, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ mb: 1, color: '#333333' }}>
                      {skill.name}
                    </Typography>
                    <ProgressBar>
                      <Box className="fill" sx={{ width: `${skill.level}%` }} />
                    </ProgressBar>
                  </Box>
                ))}
              </CardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={12}>
            <StyledCard>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 4, color: '#1A1A1A', fontWeight: 700 }}>
                  Experience
                </Typography>
                <Grid container spacing={4}>
                  {config.experiences.map((exp, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Paper elevation={0} sx={{ p: 3, bgcolor: '#F8F9FA', borderRadius: 2 }}>
                        <Typography variant="h5" sx={{ color: '#1A1A1A', fontWeight: 600, mb: 1 }}>
                          {exp.company}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#666666', mb: 2 }}>
                          {exp.role} • {exp.duration}
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#4D4D4D' }}>
                          {exp.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={12}>
            <StyledCard>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 4, color: '#1A1A1A', fontWeight: 700 }}>
                  Education
                </Typography>
                <Grid container spacing={4}>
                  {config.education.map((edu, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ color: '#1A1A1A', fontWeight: 600, mb: 1 }}>
                          {edu.degree}
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#666666', mb: 1 }}>
                          {edu.school}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#808080' }}>
                          {edu.year}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 4, color: '#1A1A1A', fontWeight: 700 }}>
            Get in Touch
          </Typography>
          <Typography variant="h6" sx={{ color: '#4D4D4D', mb: 1 }}>{config.contact.email}</Typography>
          <Typography variant="h6" sx={{ color: '#4D4D4D', mb: 1 }}>{config.contact.phone}</Typography>
          <Typography variant="h6" sx={{ color: '#4D4D4D', mb: 3 }}>{config.contact.location}</Typography>
          <Button 
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#1A1A1A',
              color: '#FFFFFF',
              px: 4,
              py: 1.5,
              borderRadius: 2,
              '&:hover': {
                bgcolor: '#333333'
              }
            }}
            href={`mailto:${config.contact.email}`}
          >
            Contact Me
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default AboutScreenComponent;
/* END_EDIT */