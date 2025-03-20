import React, { useEffect, useState } from 'react';
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
import { useUsers, useUserPosts } from '../hooks/useSocialMediaData';
import { getRandomImage } from '../services/api';
import { Post } from '../types';

const Feed: React.FC = () => {
  const { data: users } = useUsers();
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllPosts = async () => {
      if (!users) return;

      try {
        const postsPromises = users.map(user => 
          fetch(`http://20.244.56.144/test/users/${user.id}/posts`)
            .then(res => res.json())
            .then(data => data.posts)
        );

        const postsArrays = await Promise.all(postsPromises);
        const posts = postsArrays.flat();
        
        // Sort posts by ID in descending order (assuming higher ID means newer post)
        const sortedPosts = posts.sort((a: Post, b: Post) => b.id - a.id);
        
        setAllPosts(sortedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllPosts();
    
    // Set up polling for new posts every 30 seconds
    const interval = setInterval(fetchAllPosts, 30000);
    
    return () => clearInterval(interval);
  }, [users]);

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
        Social Media Feed
      </Typography>
      <Grid container spacing={3}>
        {allPosts.map((post) => (
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
                    label="View Comments"
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

export default Feed; 
