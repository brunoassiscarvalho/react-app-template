import customTheme from './styles/CustomTheme';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SnackbarProvider, ThemeProvider, CssBaseline } from '@mern-monorepo/ui-react-template';
import Login from './pages/Login';
import Home from './pages/Home';
import ExempleGrid from './pages/exemple/ExempleGrid';

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
        element: <ExempleGrid />,
        handle: { title: 'Exemplo' },
      },
     
    ],
  },
]);

export default function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <SnackbarProvider>
          <RouterProvider router={router} />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}
