import { type FC } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Proverbs Trading{' '}
        </Typography>
        <Typography variant="body1" paragraph>
          "Wealth gained hastily will dwindle, but whoever gathers little by little will increase
          it." - Proverbs 13:11
        </Typography>
        <Button component={Link} to="/signup" variant="contained" sx={{ mr: 2 }}>
          Sign Up
        </Button>
        <Button component={Link} to="/login" variant="outlined">
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
