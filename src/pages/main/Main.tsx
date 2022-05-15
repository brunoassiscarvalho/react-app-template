import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/organisms/Navbar';

export default function Main() {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
}
