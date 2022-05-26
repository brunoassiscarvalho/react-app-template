import { Box, Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function External() {
  return (
    <Box sx={{ padding: 5 }}>
      <Paper sx={{ width: '100%', padding: 3, minHeight: '70vh' }}>
        <Outlet />
      </Paper>
    </Box>
  );
}
