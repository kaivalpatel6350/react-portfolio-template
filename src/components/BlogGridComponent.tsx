import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card, 
  CardContent,
  CardMedia,
  Typography,
  Box,
  styled,
  Paper
} from '@mui/material';

interface BlogPost {
  id: string;
  title: string; 
  description: string;
  date: string;
  imageUrl: string;
  author: string;
}

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  padding: '40px 0'
}));

const StyledPaper = styled(Paper)({
  backgroundColor: '#F5F5F5',
  padding: '40px 20px',
  borderRadius: '12px'
});

const PageTitle = styled(Typography)({
  color: '#1A1A1A',
  marginBottom: '40px',
  fontWeight: 700,
  textAlign: 'center',
  fontSize: '2.5rem',
  textTransform: 'uppercase',
  letterSpacing: '2px'
});

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  backgroundColor: '#FFFFFF',
  borderRadius: '8px',
  overflow: 'hidden',
  border: '1px solid #D9D9D9',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
    border: '1px solid #A6A6A6'
  }
});

const StyledCardMedia = styled(CardMedia)({
  paddingTop: '56.25%',
  backgroundSize: 'cover',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)'
  }
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  padding: '24px',
  backgroundColor: '#FFFFFF'
});

const PostTitle = styled(Typography)({
  color: '#333333',
  fontWeight: 600,
  fontSize: '1.25rem',
  marginBottom: '12px',
  lineHeight: 1.4
});

const PostDescription = styled(Typography)({
  color: '#4D4D4D',
  fontSize: '0.95rem',
  lineHeight: 1.6,
  marginBottom: '20px'
});

const MetaInfo = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#666666',
  fontSize: '0.85rem',
  borderTop: '1px solid #D9D9D9',
  paddingTop: '16px',
  marginTop: 'auto'
});

const BlogGridComponent = ({config}: {config: any}) => {
  const [blogPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'Getting Started with React',
      description: 'Learn the basics of React and start building your first application',
      date: '2023-05-01',
      imageUrl: 'https://source.unsplash.com/random/800x600?react',
      author: 'John Doe'
    },
    {
      id: '2',
      title: 'Advanced TypeScript Patterns',
      description: 'Explore advanced TypeScript patterns and best practices',
      date: '2023-05-02',
      imageUrl: 'https://source.unsplash.com/random/800x600?typescript',
      author: 'Jane Smith'
    },
    {
      id: '3',
      title: 'CSS Grid Layout Mastery',
      description: 'Master CSS Grid Layout with practical examples',
      date: '2023-05-03',
      imageUrl: 'https://source.unsplash.com/random/800x600?css',
      author: 'Mike Johnson'
    }
  ]);

  return (
    <StyledContainer maxWidth="lg">
      <StyledPaper elevation={0}>
        <PageTitle variant="h1">
          Blog Posts
        </PageTitle>

        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <StyledCard>
                <StyledCardMedia
                  image={post.imageUrl}
                  title={post.title}
                />
                <StyledCardContent>
                  <PostTitle>
                    {post.title}
                  </PostTitle>
                  <PostDescription>
                    {post.description}
                  </PostDescription>
                  <MetaInfo>
                    <Typography>
                      By {post.author}
                    </Typography>
                    <Typography>
                      {new Date(post.date).toLocaleDateString()}
                    </Typography>
                  </MetaInfo>
                </StyledCardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </StyledPaper>
    </StyledContainer>
  );
};

export default BlogGridComponent;
/* END_EDIT */