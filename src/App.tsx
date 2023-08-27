import customTheme from './styles/CustomTheme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/profile/Profile';
import TrekGrid from './pages/trek/TrekGrid';
import TrekHome from './pages/trek/TrekHome';
import TrekDashboard from './pages/trek/TrekDashboard';
import TrekNew from './pages/trek/TrekNew';
import { SnackbarProvider } from '@mern-monorepo/ui-react-template';
import Transaction from './pages/profile/Transaction';
import Sucesso from './pages/profile/Sucesso';
import ScreenDashboard from './pages/trek/screen/ScreenDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
    handle: { title: 'Home' },
    children: [
      {
        index: true,
        path: 'profile',
        element: <Profile />,
        handle: { title: 'Perfil', tab: 'profile' },
      },
      {
        path: 'transaction',
        element: <Transaction />,
        handle: { title: 'Trasações', tab: 'transaction' },
      },
      {
        path: 'transaction/sucesso',
        element: <Sucesso />,
        handle: { title: 'Sucesso', tab: 'transaction' },
      },
      {
        path: 'trek',
        element: <TrekHome />,
        children: [
          {
            index: true,
            element: <TrekGrid />,
            handle: { title: 'Jornadas', tab: 'trek' },
          },
          {
            path: ':idDetail',
            element: <TrekDashboard />,
            handle: { title: 'Detalhes', tab: 'trek' },
          },
          {
            path: ':idDetail/screen/:idScreen',
            element: <ScreenDashboard />,
            handle: { title: 'Tela', tab: 'trek' },
          },
          {
            path: 'new',
            element: <TrekNew />,
            handle: { title: 'Nova', tab: 'trek' },
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </ThemeProvider>
  );
}
