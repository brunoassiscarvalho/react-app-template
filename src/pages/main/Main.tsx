import { Box, Grid, Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Menu from '../../components/organisms/Menu';
import Navbar from '../../components/organisms/Navbar';

const items = [
  { key: 'consulta', title: 'Consulta' },
  { key: 'fale', title: 'Fale conosco' }
];


export default function Main(): JSX.Element {
  return (

    <Grid container>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <Menu items={items} />
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ padding: 5 }}>
          <Paper sx={{ width: '100%', padding: 3, minHeight: '70vh' }}>
            <Outlet />
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}
