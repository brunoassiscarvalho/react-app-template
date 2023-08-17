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
import TrekForm from './pages/trek/TrekForm';
import TrekNew from './pages/trek/TrekNew';

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
        path: 'profile',
        element: <Profile />,
        handle: { title: 'Perfil', tab: 'profile' },
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
            path: 'detail/:idDetail',
            element: <TrekDashboard />,
            handle: { title: 'Detalhes', tab: 'trek' },
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
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
