import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { projectName } from '../../utils/Constants';
import { Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface IUser {
  email: string;
  name: string;
  urlImage: string;
}

interface INavBar {
  user: IUser
}

export default function NavBar({ user }: INavBar) {

  console.log({user});
  return (
    <AppBar
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        // borderBottom: '5px solid',
        // borderBottomColor: 'primary.dark',
      }}
      position='static'
      elevation={3}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {projectName}
        </Typography>
        {user && <Typography >
          {user.name || user.email}
        </Typography>}
        {user && <Avatar sx={{marginLeft:2}} alt={user.name || user.email} src={user.urlImage} />}
      </Toolbar>
    </AppBar>
  );
}
