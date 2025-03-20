import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Box,
  CircularProgress,
  Chip,
} from '@mui/material';
import { useTrendingPosts } from '../hooks/useSocialMediaData';
import { getRandomImage } from '../services/api';
import { useUsers } from '../hooks/useSocialMediaData';

const TrendingPosts: React.FC = () => {
  const { trendingPosts, isLoading } = useTrendingPosts();
  const { data: users } = useUsers();

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  const getUserName = (userId: number) => {
    return users?.find(user => user.id === userId.toString())?.name || 'Unknown User';
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Trending Posts
      </Typography>
      <Grid container spacing={3}>
        {trendingPosts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar
                    src={getRandomImage(100, 100)}
                    sx={{ width: 60, height: 60, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6" component="h2">
                      {getUserName(post.userid)}
                    </Typography>
                    <Typography color="textSecondary">
                      Post ID: {post.id}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" paragraph>
                  {post.content}
                </Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  <Chip
                    label={`${post.commentCount} Comments`}
                    color="primary"
                    variant="outlined"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TrendingPosts; 
