import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TopUsers from './pages/TopUsers';
import TrendingPosts from './pages/TrendingPosts';
import Feed from './pages/Feed';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 30000, // 30 seconds
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Social Media Analytics
                </Typography>
                <Button color="inherit" component={Link} to="/">
                  Top Users
                </Button>
                <Button color="inherit" component={Link} to="/trending">
                  Trending Posts
                </Button>
                <Button color="inherit" component={Link} to="/feed">
                  Feed
                </Button>
              </Toolbar>
            </AppBar>
            <Container>
              <Routes>
                <Route path="/" element={<TopUsers />} />
                <Route path="/trending" element={<TrendingPosts />} />
                <Route path="/feed" element={<Feed />} />
              </Routes>
            </Container>
          </Box>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App; 
