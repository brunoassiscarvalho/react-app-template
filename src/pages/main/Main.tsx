import { Box, Grid, Paper } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import Menu from '../../components/organisms/Menu';
import Navbar from '../../components/organisms/Navbar';
import jwtDecode from 'jwt-decode';
import IUser from '../../interfaces/user';

const items = [
  { key: 'consulta', title: 'Consulta' },
  { key: 'fale', title: 'Fale conosco' },
];

export default function Main(): JSX.Element {
  const navigate = useNavigate();

  const tokenName = process.env.REACT_APP_STORAGE || '';
  console.log({ tokenName });
  // const getUser: IUser = () => {
  //   const token = sessionStorage.getItem(tokenName);
  //   console.log({ token });
  //   if (token) return jwtDecode(token) as any;
  // };

  const user = JSON.parse(sessionStorage.getItem(tokenName) as any);
  if (!user) navigate('/login');
  
  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar user={user} />
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
