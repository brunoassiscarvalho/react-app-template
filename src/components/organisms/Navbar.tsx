import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { logoUrl } from '../../utils/Constants';
import { Avatar, Box } from '@mui/material';

interface IUser {
  email: string;
  name: string;
  urlImage: string;
}

interface INavBar {
  user: IUser;
}

export default function NavBar({ user }: INavBar) {
  console.log({ user });
  return (
    <AppBar
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      position="static"
      elevation={3}
    >
      <Toolbar>
        <Box component="img" src={logoUrl} height={40} margin={2} />
        <Box sx={{ flexGrow: 1 }} />

        {user && <Typography>{user.name || user.email}</Typography>}
        {user && (
          <Avatar
            sx={{ marginLeft: 2 }}
            alt={user.name || user.email}
            src={user.urlImage}
          />
        )}
      </Toolbar>
    </AppBar>
  );
}
