import { useState } from 'react';
import {
  Box,
  Stack,
  Theme,
  Typography,
  Grid,
  CircularProgress,
  TextField,
  Button,
  Paper,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import LoginService from './LoginService';
import HttpException from '../../services/HttpException';
import { useSnackbar } from 'notistack';
import SmartForm from '../../components/organisms/form/SmartForm';
import { logoUrl } from '../../utils/Constants';
import InputText from '../../components/molecules/inputs/InputText';

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

  const loginHandler = (data: any) => {
    setIsSending(true);
    loginService
      .login(data)
      .then((res) => {
        const tokenName = process.env.REACT_APP_STORAGE || '';
        sessionStorage.setItem(tokenName, res);
        navigate('main');
      })
      .catch((e: HttpException) => {
        enqueueSnackbar(e.message, { variant: 'error' });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

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
              <InputText
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                validations={{ required: 'Obrigat??rio' }}
              />
              <InputText
                name="password"
                label="Senha"
                type="password"
                autoComplete="current-password"
                validations={{ required: 'Obrigat??rio' }}
              />
              <Button type="submit">Entrar</Button>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
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
