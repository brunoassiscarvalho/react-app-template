import customTheme from './styles/CustomTheme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/profile/Profile';
import TrekGrid from './pages/trek/TrekGrid';
import TrekHome from './pages/trek/TrekHome';
import TrekDetail from './pages/trek/TrekDetail';

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
    children: [
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'trek',
        element: <TrekHome />,
        children: [
          {
            index: true,
            element: <TrekGrid />,
          },
          {
            path: 'detail/:idDetail',
            element: <TrekDetail />,
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
