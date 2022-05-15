import { useState, ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';
import { Alert, AlertTitle, Box, Theme } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

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

export default function SignIn() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [isSending, setIsSending] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState({ isErro: false, message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    setForm((prevState: any) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = () => {
    navigate('/main');
  };

  return (
    <Grid container component="main" className={classes.root} spacing={3}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {!isSending ? (
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={login}
              >
                Entrar
              </Button>
            </form>
          </div>
        ) : (
          <Box display="flex" justifyContent="center">
            <CircularProgress className={classes.circular} />
          </Box>
        )}
        {error.isErro && (
          <Alert severity="error">
            <AlertTitle>Erro</AlertTitle>
            {error.message}
          </Alert>
        )}
      </Grid>
    </Grid>
  );
}
