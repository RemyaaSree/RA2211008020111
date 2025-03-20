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
} from '@mui/material';
import { useTopUsers } from '../hooks/useSocialMediaData';
import { getRandomImage } from '../services/api';

const TopUsers: React.FC = () => {
  const { topUsers, isLoading } = useTopUsers();

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Top Users
      </Typography>
      <Grid container spacing={3}>
        {topUsers.map((user, index) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar
                    src={getRandomImage(100, 100)}
                    sx={{ width: 60, height: 60, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6" component="h2">
                      {user.name}
                    </Typography>
                    <Typography color="textSecondary">
                      Rank: #{index + 1}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="h5" color="primary">
                  {user.postCount} Posts
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TopUsers; 
