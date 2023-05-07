import { Paper } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function TrekHome() {
  const navigate = useNavigate();



  return (
    <Paper>
      <Outlet />
    </Paper>
  );
}
