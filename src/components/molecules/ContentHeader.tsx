import { ArrowBack } from '@mui/icons-material';
import { Grid, Typography, Link as MUILink, } from '@mui/material';
import { Theme } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';


interface IContentHeader {
  title: string, 
  previous?: () => void,
  withoutGoBack?: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 20
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  back: {
    display: 'flex',
    alignItems: 'center',
    height: 60,
    color: 'gray'
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  backLink: {
    display: 'flex',
  }
}));

export default function ContentHeader({ previous, title, withoutGoBack = false }: IContentHeader): JSX.Element {
  const classes = useStyles();
  const navigate = useNavigate();
  // if (!previous) previous = () => navigate.;

  return (

    <Grid container spacing={6}>
      <Grid item xs={2} md={2} sm={2}>

        {!withoutGoBack && <MUILink color="inherit" className={classes.backLink}  onClick={previous} component="button" variant="body2">
          <ArrowBack />
        </MUILink>}
      </Grid>
      <Grid item xs={8} md={8} sm={8}>

        <Typography variant="h5" color="textPrimary" style={{ textAlign: 'center' }} gutterBottom>{title}</Typography>

      </Grid>
      <Grid item xs={2} md={2} sm={2}>
      </Grid>

    </Grid>);
}




