import { Box } from '@mui/material';
import { Route, Routes as RouterRoutes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Recipes from './components/Recipes';

const Routes = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <RouterRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
        </RouterRoutes>
      </Box>
      <Footer />
    </Box>
  );
};

export default Routes;
