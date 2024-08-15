import { createTheme, Theme, localePtBR } from '@mern-monorepo/ui-react-template';

const customTheme: Theme = createTheme(
  {
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained',
        },
      },
    },
    palette: {
      mode: 'dark',
      primary: {
        main: '#466b49',
      },
      secondary: {
        main: '#ACC0A8',
      },
    },
    typography: {
      h5: {
        textAlign: 'center',
      },
    },
  },
  localePtBR
);

export default customTheme;
