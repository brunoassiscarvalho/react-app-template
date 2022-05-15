import { Box, Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Content from '../../components/organisms/Content';
import Navbar from '../../components/organisms/Navbar';

export default function Main():JSX.Element {
  return (
    <Box display='flex'>
      <Navbar />
      <Paper sx={{ margin: 5, marginTop: 12, width: '100%', padding: 3, minHeight: '70vh' }}>
        <Outlet />
      </Paper>
    </Box>
  );
}
