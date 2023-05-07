import { NavBar } from '@mern-monorepo/ui-react-template';
import { Box, Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function TrekHome() {
  return (
    <Box paddingTop={5}>
     
      <Outlet />
    </Box>
  );
}
