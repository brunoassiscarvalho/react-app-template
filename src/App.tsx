import { LandscapeBoard } from '@mern-monorepo/ui-react-template';
import customTheme from './styles/CustomTheme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/login',
    element: <Login />,
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
