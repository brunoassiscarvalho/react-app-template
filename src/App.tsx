import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SnackbarCloseButton from './components/molecules/snackbarCloseButton';
import Router from './router/router';
import customTheme from './styles/customTheme';

export default function App(): JSX.Element {
  return (
    <React.StrictMode>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <SnackbarProvider
          maxSnack={3}
          action={(key) => <SnackbarCloseButton snacKey={key} />}
        >
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
