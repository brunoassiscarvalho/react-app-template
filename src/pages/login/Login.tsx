import { useState, ChangeEvent, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';
import { Alert, AlertTitle, Box, Stack, Theme } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import LoginService from './LoginService';
import HttpException from '../../services/HttpException';
import { useSnackbar } from 'notistack';
import SmartForm from '../../components/organisms/form/SmartForm';
import { logoUrl } from '../../utils/Constants';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:
      'url(https://source.unsplash.com/random?trees&color=green)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  circular: {
    // marginTop: theme.spacing(10),
  },
  avatar: {
    // margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  submit: {
    // margin: theme.spacing(3, 0, 2),
  },
}));

interface ILogin {
  loginService?: LoginService;
}

export default function Login({
  loginService = new LoginService(),
}: ILogin): JSX.Element {
  const classes = useStyles();
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const [isSending, setIsSending] = useState(false);
  // const [form, setForm] = useState<any>();

  function loginHandler(data: any) {
    setIsSending(true);
    loginService
      .login(data)
      .then((res) => {
        console.log({ loginsadadfdasf: res });
        const tokenName = process.env.REACT_APP_STORAGE || '';
        sessionStorage.setItem(tokenName, JSON.stringify(res.user));
        navigate('main');
      })
      .catch((e: HttpException) => {
        enqueueSnackbar(e.message, { variant: 'error' });
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Stack padding={10} spacing={3}>
          <Box component="img" src={logoUrl} />
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          {!isSending ? (
            <SmartForm onSubmit={loginHandler}>
              <TextField
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <Button type="submit">Entrar</Button>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => navigate('/external/new-user')}
              >
                Novo
              </Button>
            </SmartForm>
          ) : (
            <Box display="flex" paddingTop={10} justifyContent="center">
              <CircularProgress className={classes.circular} />
            </Box>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
}
