import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { gsap, Power3 } from 'gsap';
import { 
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  styled
} from '@mui/material';

interface BlogGridConfig {
  posts: {
    slug: string;
    frontmatter: {
      title: string;
      date: string;
      tagline: string;
      preview: string;
      image: string;
    };
  }[];
  onPostClick: (slug: string) => void;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  backgroundColor: '#FFFFFF',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#F5F5F5'
  }
}));

const StyledCardMedia = styled(CardMedia)({
  height: 240,
  backgroundSize: 'cover',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)'
  }
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  padding: '24px',
  backgroundColor: 'transparent'
});

const BlogGridComponent = ({ config }: { config: BlogGridConfig }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    gsap.from('.blog-card', {
      opacity: 0,
      y: 60,
      stagger: 0.2,
      ease: Power3.easeOut
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, mt: 5 }}>
      <Grid container spacing={4}>
        {config.posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.slug} className="blog-card">
            <StyledCard 
              onClick={() => config.onPostClick(post.slug)}
              sx={{
                cursor: 'pointer',
                bgcolor: theme === 'dark' ? '#1A1A1A' : '#FFFFFF',
                color: theme === 'dark' ? '#FFFFFF' : '#000000'
              }}
            >
              <StyledCardMedia
                image={post.frontmatter.image}
                title={post.frontmatter.title}
              />
              <StyledCardContent>
                <Typography 
                  variant="h5" 
                  component="h2" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    color: theme === 'dark' ? '#FFFFFF' : '#333333'
                  }}
                >
                  {post.frontmatter.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="textSecondary"
                  sx={{ 
                    mb: 2,
                    color: theme === 'dark' ? '#A6A6A6' : '#666666'
                  }}
                >
                  {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{
                    color: theme === 'dark' ? '#D9D9D9' : '#4D4D4D'
                  }}
                >
                  {post.frontmatter.tagline}
                </Typography>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogGridComponent;
/* END_EDIT */