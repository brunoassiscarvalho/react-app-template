import customTheme from './styles/CustomTheme';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SnackbarProvider, ThemeProvider, CssBaseline } from '@mern-monorepo/ui-react-template';
import Login from './pages/Login';
import Home from './pages/Home';
import ContactGrid from './pages/contact/ContactGrid';
import ContactForm from './pages/contact/ContactForm';
import ContactDetail from './pages/contact/ContactDetail';

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
        element: <ContactGrid />,
        handle: { title: 'Exemplo' },
      },
      {
        path: 'new',
        element: <ContactForm />,
        handle: { title: 'Cadastrar Exemplo' },
      },  
      {
        path: 'detail',
        element: <ContactDetail />,
        handle: { title: 'Detalhe do Exemplo' },
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
